import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavigateCross from '../components/NavigateCross';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../context.js/store-context';
import RegisterOptions from '../components/RegisterOptions';
import VeyaContainer from '../components/VeyaContainer';
import AlertLine from '../components/AlertLine';
import SignButton from '../components/SignButton';
import HelpPassword from '../components/HelpPassword';
import InputSign from '../components/InputSign';

export default function SignIn() {
    const { nextEffect , setNextEffect } = useContext(StoreContext)
    const navigation = useNavigation()
    const goSign = async () => {
        await navigation.navigate('SignUp')
        await setNextEffect(true)
    }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <NavigateCross />
        </View>
        <View styles={styles.containerTitle}>
            <Text style={styles.textTitle}>Giriş Yap</Text>
        </View>
        <InputSign placeholder='E-posta adresi' methodName='mail'/>
        <InputSign placeholder='Şifre' secureTextEntry={true} methodName='password' />
        <HelpPassword helpText='Şifremi Unuttum' />
        <SignButton title='E-posta ile giriş yap' method='login' />
        <AlertLine method={()=>goSign()} buttonTitle='Hesap aç' alert='Henüz hesabın yok mu ?' />
        <VeyaContainer />
        <View style={styles.optionsContainer}>
            <RegisterOptions iconColor='#468de7' iconName='logo-google' title='Google ile giriş yap' />
            <RegisterOptions iconColor='#000000' iconName='logo-apple' title='Apple ile giriş yap' />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    header : {
        height : 40
    },
    textTitle : {
        marginTop : 20,
        marginLeft : 20,
        fontSize : 25,
        fontWeight : 'bold',
        color : '#060606'
    },
    inputMail : {
        marginTop : 20,
        paddingHorizontal : 20
    },
    textMail : {
        backgroundColor : '#ffffff',
        padding : 15,
        borderWidth : 0.5,
        borderColor : '#d3d3d3',
        borderRadius : 3,
        fontSize : 20
    },
    signButton : {
        backgroundColor : '#1064be',
        padding : 15,
        borderWidth : 0.5,
        borderColor : '#d3d3d3',
        borderRadius : 3,
        justifyContent : 'center',
        alignItems : 'center'
    },
    signText : {
        color : '#fcfcff',
        fontSize : 18,
        fontWeight : '600'
    },
    optionsContainer : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 20,
    },
    
})