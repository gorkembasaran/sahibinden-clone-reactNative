import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HelpPassword({helpText}) {
  return (
    <View style={styles.helpContainer}>
        <TouchableOpacity style={styles.helpLink}>
            <Text style={styles.helpText}>
                {helpText}
            </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    helpContainer : {
        marginVertical : 10,
    },
    helpLink : {
        padding : 3,
        position : 'absolute',
        right : 20
    },
    helpText : {
        color : '#1064be',
        fontWeight : '400'
    }
})