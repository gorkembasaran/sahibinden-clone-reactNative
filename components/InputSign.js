import { StyleSheet, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context.js/auth-context'

export default function InputSign({placeholder, secureTextEntry, widthSize, methodName}) {
    const { mail , setMail, name, setName, password, setPassword, surname, setSurname } = useContext(AuthContext)
    const definingMethod = (text)=>{
        if(methodName=== 'mail'){
            return setMail(text)
        }
        else if(methodName === 'password'){
            return setPassword(text)
        }
        else if(methodName === 'name'){
            return setName(text)
        }
        else if(methodName === 'surname'){
            return setSurname(text)
        }
    }
    const definingValue = ()=>{
        if(methodName=== 'mail'){
            return mail
        }
        else if(methodName === 'password'){
            return password
        }
        else if(methodName === 'name'){
            return name
        }
        else if(methodName === 'surname'){
            return surname
        }
    }
    
    return (
    <View style={[styles.inputMail, widthSize && {width : widthSize}]}>
        <TextInput style={styles.textMail} secureTextEntry={secureTextEntry} placeholder={placeholder} autoCapitalize='none'
            value={definingValue}
            onChangeText={(text)=>{definingMethod(text)}}
        ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
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
})