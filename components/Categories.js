import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../context.js/store-context';

export default function Categories({categories, searchMenu, servicesMenu, iconSize, login}) {
  const navigation = useNavigation()
  const {addCate, setAddCate} = useContext(StoreContext)
  const navigations = (item)=>{
    const updated = [...addCate,item.name]
    setAddCate(updated)
    navigation.navigate(item.to, item)
  }
  return (
    <View style={styles.cateItems}>
      {categories.map((item, index) => (
        <TouchableOpacity onPress={()=>{item.to && navigations(item)}} key={index} style={[searchMenu ? styles.cateItemSearch : styles.cateItem, servicesMenu && {borderBottomWidth : 0.2, borderColor : '#c6c6c6'}]}>
          <View style={[!searchMenu && {display: 'none'}, styles.icon, {backgroundColor: item.bg}]}>
            <Icon size={25} name={item.icon} color={servicesMenu ? '#414350' : '#fffcfd'}></Icon>
          </View>
          <View style={[searchMenu && styles.textContainer]}>
            <Text style={[styles.cateTitle, servicesMenu && {color : '#353535', fontWeight : '500', marginBottom : 5}, login && {color : '#1064be'}]}>{item.name}</Text>
            <Text style={[!searchMenu && {display: 'none'}, styles.description]}>{item.description}</Text>
          </View>
          <Ionicons size={iconSize} name="chevron-forward-outline" color={login ? '#1064be' :'#959ba1'} style={[searchMenu && {position: 'absolute', right: 20}]}></Ionicons>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  titleCate: {
    fontSize: 12,
    color: '#959ba1',
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 5,
  },
  cateItems: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderBottomWidth: 0.2,
    borderColor: '#959ba1',
  },
  cateItemSearch: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingRight: 14,
    marginLeft: 14,
    alignItems: 'center',
  },
  icon: {
    marginRight: 20,
    padding: 5,
    borderRadius: 20,
  },
  description: {
    color: '#b7b7b7',
  },
  cateItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingRight: 14,
    marginLeft: 14,
    borderBottomWidth: 0.2,
    borderColor: '#959ba1',
  },
  cateTitle: {
    fontSize: 16,
    color: '#343434'
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width : '70%'
  }
});