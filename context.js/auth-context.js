import { createContext, useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { saveOrUpdateUserData, getUserData } from '../operations/firestoreOperations';

export const AuthContext = createContext({
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
  userData: null,
  setUserData: () => {}
});

function AuthContextProvider({ children }) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const auth = getAuth();
  const navigation = useNavigation();
  const [uid, setUid] = useState('')

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        const userId = JSON.parse(storedUser).uid;
        const data = await getUserData(userId);
        setUserData(data);
      }
      setInitializing(false);
    };
    loadUser();
  }, []);

  const authenticate = async (token) => {
    setUser(token);
    await AsyncStorage.setItem('user', JSON.stringify(token));
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setUserData({});
    await AsyncStorage.removeItem('user');
  };

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, mail, password);
      await updateProfile(res.user, { displayName: `${name} ${surname}` });
      const userData = {
        name: name,
        surname: surname,
        email: mail,
        createdAt: Date.now(),
      };
      await saveOrUpdateUserData(res.user.uid, userData);
      await authenticate(res.user);
      setUserData(userData);
      AsyncStorage.setItem('name',JSON.stringify(userData.name))
      AsyncStorage.setItem('surname',JSON.stringify(userData.surname))
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, mail, password);
      await authenticate(res.user);
      const data = await getUserData(res.user.uid);
      setUserData(data);
      AsyncStorage.setItem('name',JSON.stringify(data.name))
      AsyncStorage.setItem('surname',JSON.stringify(data.surname))
      navigation.navigate('Main');
    } catch (error) {
      console.log(error);
    }
  };

  const getUserId = () => {
    return user ? user.uid : null;
  };

  const value = {
    isAuthenticated: !!user,
    authenticate,
    logout,
    mail,
    setMail,
    password,
    setPassword,
    name,
    setName,
    surname,
    setSurname,
    handleSignUp,
    handleSignIn,
    initializing,
    setInitializing,
    user,
    setUser,
    userData,
    setUserData,
    getUserId 
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;