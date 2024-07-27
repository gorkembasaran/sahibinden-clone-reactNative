import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from '../components/Categories'

const ServicesData = [
  {
    name : 'Oto360',
    icon : 'car-repair',
    bg : '#ffe20d',
    description : 'deneme'
  },
  {
    name : 'Emlak360',
    icon : 'add-home',
    bg : '#ffe20d',
    description : 'Güneş bizimle doğar, yağmur bizimle yağar, bizimle coşar deniz, biz Atatürk Gençleriyiz.'
  }
]

export default function Services() {
  return (
    <View>
      <View style={styles.servicesContainer}>
        <Categories categories={ServicesData} searchMenu={true} servicesMenu={true} iconSize={30}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  servicesContainer : {
    marginTop : 20,
  }
})