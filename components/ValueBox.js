import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ValueBox({price, title, value, ilanNo}) {
  function formatNumber(number) {
    let reversedNumber = number.toString().split('').reverse().join('');
    
    let formattedNumber = '';
    for (let i = 0; i < reversedNumber.length; i++) {
      if (i > 0 && i % 3 === 0) {
        formattedNumber += '.';
      }
      formattedNumber += reversedNumber[i];
    }
    
    return formattedNumber.split('').reverse().join('');
  }
  return (
    <View style={styles.containerInfo}>
        <Text style={[styles.titleInfo]}>{title}</Text>
        <Text style={[styles.titleValueDefault, price && styles.titleValuePrice, ilanNo && styles.titleValueIlanNo]}>{price ? `${formatNumber(value)} TL` :value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    containerInfo : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingVertical : 10,
        paddingHorizontal : 3,
        borderBottomWidth : 1,
        borderColor : '#e2e2e2'
      },
      titleInfo:{
        color : '#6d6d6d'
      },
      titleValuePrice : {
        fontWeight : 'bold',
        color : '#1353aa'
      },
      titleValueDefault : {
        color : '#6d6d6d'
      },
      titleValueIlanNo : {
        color : '#6e1b2b'
      }
})