import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function VeyaContainer() {
  return (
    <View style={styles.veyaContainer}>
        <View style={styles.line}></View>
        <Text style={styles.textLine}>VEYA</Text>
        <View style={styles.line}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    veyaContainer : {
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row'
    },
    line : {
        borderBottomWidth : 1,
        borderColor : '#dbdbdb',
        width : '36%',
        margin : 20,
    },
    textLine : {
        color : '#212121',
        fontSize : 12,
        fontWeight : '500'
    },
})