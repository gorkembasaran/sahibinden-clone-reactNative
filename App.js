import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Search from './screens/Search';
import Profil from './screens/Profil';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Vitrin from './screens/Vitrin';
import Services from './screens/Services';
import IlanEkle from './screens/IlanEkle';
import { StoreContext, StoreContextProvider } from './context.js/store-context';
import { useContext, useEffect, useState } from 'react';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignUpTwo from './screens/SignUpTwo';
import { auth } from './firebase/firebaseConfig';
import AuthContextProvider, { AuthContext } from './context.js/auth-context';
import IlanPageTwo from './screens/IlanPageTwo';
import IlanDetails from './screens/IlanDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddIlan from './screens/AddIlan';
import ListIlan from './screens/ListIlan';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 30, height: 30, left: 10 }}
      source={{ uri: 'https://s0.shbdn.com/assets/images/sahibinden_icon_v13012023:2c3733810101ef3b43905c80a0f37ab8.png' }}
    />
  );
}

function ExitLogo() {
  const { setIsModalVisible } = useContext(StoreContext)
  return (
    <TouchableOpacity onPress={() => setIsModalVisible(true)}>
      <Ionicons name="close-outline" size={30} color='white'></Ionicons>
    </TouchableOpacity>
  )
}

function IlanLogos() {
  const { setIsModalVisible } = useContext(StoreContext)
  return (
    <View style={{flexDirection : 'row', justifyContent : 'center', alignItems : 'center'}}>
      <TouchableOpacity style={{marginRight : 10}} onPress={() => setIsModalVisible(true)}>
        <Icon name="ios-share" size={25} color='white'></Icon>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <Icon name="star-border" size={30} color='white'></Icon>
      </TouchableOpacity>
    </View>
    
  )
}

function ExitLogoTwo() {
  const { setIsModalVisibleTwo } = useContext(StoreContext)
  return (
    <TouchableOpacity onPress={() => setIsModalVisibleTwo(true)}>
      <Ionicons name="close-outline" size={30} color='white'></Ionicons>
    </TouchableOpacity>
  )
}
function ExitLogoThree() {
  const { setIsModalVisibleThree } = useContext(StoreContext)
  return (
    <TouchableOpacity onPress={() => setIsModalVisibleThree(true)}>
      <Ionicons name="close-outline" size={30} color='white'></Ionicons>
    </TouchableOpacity>
  )
}
function ExitLogoFour() {
  const { setIsModalVisibleFour } = useContext(StoreContext)
  return (
    <TouchableOpacity onPress={() => setIsModalVisibleFour(true)}>
      <Ionicons name="close-outline" size={30} color='white'></Ionicons>
    </TouchableOpacity>
  )
}
function BackLogo() {
  const navigation = useNavigation()
  const {addCate, setAddCate} = useContext(StoreContext)
  const control = () => {
    setAddCate([])
    navigation.navigate('IlanModal')
  }
  return (
    <TouchableOpacity onPress={() => control()}>
      <Ionicons name="chevron-back" size={30} color='white'></Ionicons>
    </TouchableOpacity>
  )
}

function Tabs() {
  const { userData } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedName = await AsyncStorage.getItem('name');
        const storedSurname = await AsyncStorage.getItem('surname');
        if (storedName) setName(JSON.parse(storedName));
        if (storedSurname) setSurname(JSON.parse(storedSurname));
      } catch (error) {
        console.log('Error reading AsyncStorage', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Tab.Navigator
      initialRouteName='Search'
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#185e91',
        },
        headerTintColor: 'white',
        headerLeft: (props) => <LogoTitle {...props} />, // Logo başlık olarak ayarlandı
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let iconContainerStyle = styles.iconContainer; // Varsayılan stil
          let iconStyle = styles.iconStyle;

          if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Profil') {
            iconName = 'person';
          } else if (route.name === 'Services') {
            return (
              <View style={iconContainerStyle}>
                <Icon name="sync" size={size} color={color} style={iconStyle} />
              </View>
            )
          } else if (route.name === 'Vitrin') {
            return (
              <View style={iconContainerStyle}>
                <Icon name="auto-awesome" size={size} color={color} style={iconStyle} />
              </View>
            )
          } else if (route.name === 'Ilan') {
            iconName = 'add-circle';
            iconStyle = { color: '#185e91' };
            size = 50;
            iconContainerStyle = { ...iconContainerStyle, backgroundColor: 'white', marginBottom: 20 }; // İkon için ek stil
          }

          return (
            <View style={iconContainerStyle}>
              <Ionicons name={iconName} size={size} color={color} style={iconStyle} />
            </View>
          );
        },
        tabBarActiveTintColor: '#494949',
        tabBarInactiveTintColor: '#959595',
      })}
    >
      <Tab.Screen name="Vitrin" component={Vitrin} options={{ title: 'Vitrin' }} />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Arama',
          headerRight: () => (
            <TouchableOpacity onPress={() => alert('Kamera açılacak!')}>
              <Icon name="car-crash" size={25} color='white' style={{ marginRight: 15 }} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Ilan" component={IlanEkle} options={{ title: 'İlan Ver' }} />
      <Tab.Screen name="Services" component={Services} options={{ title: 'Servisler' }} />
      <Tab.Screen
        name="Profil" component={Profil} options={{
          header: () => (
            <View style={{ alignItems: 'center', justifyContent: 'flex-end', backgroundColor: '#185e91', height: 98 }}>
              <Image
                style={{ width: 30, height: 30, left: 10, bottom: 7, position: 'absolute' }}
                source={{ uri: 'https://s0.shbdn.com/assets/images/sahibinden_icon_v13012023:2c3733810101ef3b43905c80a0f37ab8.png' }}
              />
              <Text style={styles.name}>{name} {surname}</Text>
              <Text style={styles.headerTitle}>Bana Özel</Text>
            </View>
          ),
          title: 'Bana Özel'
        }} />
    </Tab.Navigator>
  );
}

function AuthWrapper() {
  const {initializing, setInitializing, user, setUser} = useContext(AuthContext)
  
  useEffect(()=>{
    const uns = auth.onAuthStateChanged((user)=>{
      setUser(user);
      if (initializing) setInitializing(false)
    });
    return ()=> uns()
  }, [])

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="Main" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen
            name="IlanModal"
            component={IlanEkle}
            options={{
              presentation: 'fullScreenModal',
              headerRight: () => (
                <ExitLogo />
              ),
              headerStyle: {
                backgroundColor: '#185e91',
              },
              headerTintColor: 'white',
              title: 'İlan Ver',
            }}
          />
          <Stack.Screen name='IlanPageTwo' component={IlanPageTwo} options={{
              presentation: 'fullScreenModal',
              headerRight: () => (
                <ExitLogoTwo />
              ),
              headerLeft : () => (
                <BackLogo />
              ),
              headerStyle: {
                backgroundColor: '#185e91',
              },
              headerTintColor: 'white',
              title: 'Kategori Seç',
            }} />
             <Stack.Screen name='AddIlan' component={AddIlan} options={{
              presentation: 'fullScreenModal',
              headerRight: () => (
                <ExitLogoThree />
              ),
              headerLeft : () => (
                <BackLogo />
              ),
              headerStyle: {
                backgroundColor: '#185e91',
              },
              headerTintColor: 'white',
              title: 'İlan Ver',
            }} />
            <Stack.Screen name='ListIlan' component={ListIlan} options={{
              presentation: 'fullScreenModal',
              headerRight: () => (
                <ExitLogoFour />
              ),
              headerLeft : () => (
                <BackLogo />
              ),
              headerStyle: {
                backgroundColor: '#185e91',
              },
              headerTintColor: 'white',
              title: 'Arama Sonucu',
            }} />
          <Stack.Screen name='IlanDetails' component={IlanDetails} options={{
            presentation : 'fullScreenModal',
            headerRight: () => (
              <IlanLogos />
            ),
            headerLeft : () => (
              <BackLogo />
            ),
            headerStyle: {
              backgroundColor: '#185e91',
            },
            headerTintColor: 'white',
            title : 'İlan Detayı',
          }} />
          
        </>
      ) : (
        <>
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false, presentation: 'fullScreenModal' }} />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false,
              presentation: 'fullScreenModal'
            }}
          />
          <Stack.Screen name="SignUpTwo" component={SignUpTwo} options={{
            headerShown: false,
            presentation: 'fullScreenModal'
          }} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StoreContextProvider>
          <AuthContextProvider>
            <AuthWrapper />
          </AuthContextProvider>
        </StoreContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dce0e3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {},
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  headerTitle: {
    color: '#b8bbbf'
  }
});