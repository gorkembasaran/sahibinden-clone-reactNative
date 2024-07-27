import { StyleSheet, View, Text } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigateCross from '../components/NavigateCross';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../context.js/store-context';
import RegisterOptions from '../components/RegisterOptions';
import VeyaContainer from '../components/VeyaContainer';
import AlertLine from '../components/AlertLine';
import SignButton from '../components/SignButton';
import InputSign from '../components/InputSign';

export default function SignUp() {
    const { nextEffect , setNextEffect, setMail, mail } = useContext(StoreContext)
    const navigation = useNavigation()
    const goSign = async () => {
        await navigation.navigate('SignIn')
        await setNextEffect(true)
    }
    const goTwoPage = () => {
        navigation.navigate('SignUpTwo')
        setNextEffect(true)
    }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <NavigateCross />
        </View>
        <View styles={styles.containerTitle}>
            <Text style={styles.textTitle}>Hesap aç</Text>
        </View>
        <InputSign placeholder='E-posta adresi' methodName='mail'/>
        <SignButton title='E-posta ile hesap aç' action={()=>goTwoPage()} />
        <AlertLine method={()=>goSign()} buttonTitle='Giriş Yap' alert='Zaten bir hesabın var mı ?' />
        <VeyaContainer />
        <View style={styles.optionsContainer}>
            <RegisterOptions iconColor='#468de7' iconName='logo-google' title='Google ile hesap aç' />
            <RegisterOptions iconColor='#000000' iconName='logo-apple' title='Apple ile hesap aç' />
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
    optionsContainer : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 20,
    }
})