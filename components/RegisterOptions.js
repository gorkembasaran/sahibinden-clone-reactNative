import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'

export default function RegisterOptions({iconName, iconColor, title}) {
  return (
    <TouchableOpacity style={styles.optionContainer}>
        <View style={styles.optionIcon}>
            <Ionicons name={iconName} size={25} color={iconColor} />
        </View>
        <View style={styles.optionTextCont}>
            <Text style={styles.optionText}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    optionsContainer : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 20,
    },
    optionContainer : {
        backgroundColor : 'red',
        marginHorizontal : 5,
        paddingHorizontal : 30,
        flexDirection : 'row',
        width : '43%',
        backgroundColor : '#ffffff',
        padding : 10,
        justifyContent: 'center',
        alignItems : 'center',
        borderWidth : 0.5,
        borderColor : '#d4d4d4',
        borderRadius : 2

    },
    optionIcon : {
        width : '20%'
    },
    optionTextCont : {
        width : '60%',
        marginLeft : 10
    },
    optionText : {
        fontWeight : '500'
    },
})