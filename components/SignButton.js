import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context.js/auth-context'

export default function SignButton({title , method, action}) {
    const {handleSignUp, handleSignIn} = useContext(AuthContext)
    const definingMethod = () => {
        if(method === 'kayıt'){
            return handleSignUp()
        }else if(method === 'login'){
            return handleSignIn()
        }
    }
    
  return (
    <View style={styles.inputMail}>
        <TouchableOpacity style={styles.signButton} onPress={action ? action : ()=>definingMethod()}>
            <Text style={styles.signText}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    inputMail : {
        marginTop : 20,
        paddingHorizontal : 20
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
})