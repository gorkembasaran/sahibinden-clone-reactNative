import { StyleSheet, View, Text } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigateCross from '../components/NavigateCross';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../context.js/store-context';
import AlertLine from '../components/AlertLine';
import SignButton from '../components/SignButton';
import InputSign from '../components/InputSign';

export default function SignUp() {
    const { nextEffect , setNextEffect } = useContext(StoreContext)
    const navigation = useNavigation()
    const goSign = async () => {
        await navigation.navigate('SignIn')
        await setNextEffect(true)
    }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <NavigateCross display={true} />
        </View>
        <View styles={styles.containerTitle}>
            <Text style={styles.textTitle}>Hesap aç</Text>
        </View>
        <InputSign placeholder={'E-posta adresi'} methodName='mail' />
        <View style={styles.nameInput}>
            <InputSign placeholder='Ad' widthSize='50%' methodName='name' />
            <InputSign placeholder='Soyad' widthSize='50%' methodName='surname' />
        </View>
        <InputSign placeholder='Şifre' methodName='password' secureTextEntry={true} />
        <SignButton title='Hesap aç' method='kayıt' />
        <AlertLine fontSize={12} method={()=>goSign()} buttonTitle='Giriş Yap' alert='Zaten bir hesabın var mı ?' />
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
    },
    nameInput : {
        flexDirection : 'row',
    }
})