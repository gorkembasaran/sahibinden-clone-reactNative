import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Categories from './Categories'


export default function ProfilCategories({ilanName, array}) {
  return (
    <View>
      {
        array.map((item,index)=>(item.name === ilanName && (
          <View key={index} style={[styles.itemContainer, item.name === '' && {marginTop : 5}]}>
            <Text style={styles.itemText}>{item.name}</Text>
            <View style={styles.itemList}>
              <Categories login={item.loginColor} categories={item.categories} iconSize={20}/>
            </View>
          </View>
        )))
      }
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer : {
        marginTop : 20
      },
      itemText : {
        marginLeft : 14,
        fontWeight : '700',
        color : '#878789',
        marginBottom : 5,
      }
})