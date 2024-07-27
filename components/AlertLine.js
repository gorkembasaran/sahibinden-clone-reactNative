import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function AlertLine({alert, buttonTitle, method, fontSize}) {
  return (
    <View style={styles.alertContainer}>
        <Text style={[styles.alertText, fontSize && {fontSize : fontSize}]}>{alert}</Text>
        <TouchableOpacity onPress={method} style={styles.alertLink}>
            <Text style={[styles.linkText, fontSize && {fontSize : fontSize}]}>{buttonTitle}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    alertContainer : {
        flexDirection : 'row',
        margin : 50,
        justifyContent : 'center',
        alignItems : 'center',
    },
    alertText : {
        fontSize : 16,
        color : '#3c3c3c'
    },
    alertLink : {
        marginLeft : 5,
    },
    linkText : {
        fontSize : 16,
        color : '#1e609a',
        fontWeight : '500'
    },
})