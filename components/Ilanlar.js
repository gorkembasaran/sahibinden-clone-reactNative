import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useContext } from 'react'
import { StoreContext } from '../context.js/store-context';

export default function Ilanlar({ilanlar, navigate}) {
    const {pressed} = useContext(StoreContext)
  return (
    <View style={[pressed && {display : 'none'}]}>
    {
        ilanlar.map((item,index)=>(
        <TouchableOpacity key={index} style={[styles.ilanlarContainer]}>
            <View style={styles.imageContainer}>
            <Image 
            style={{height : 100, width : 100}}
            source={{uri : item.img}} />
            </View>
            <View style={styles.ilanTextContainer}>
            <Text style={styles.ilanTitle}>{item.title}</Text>
            <Text style={styles.ilanPrice}>{item.price / 1000}.000 TL</Text>
            </View>
        </TouchableOpacity>
        ))
    }
    <TouchableOpacity onPress={navigate} style={styles.ilanlarLinkContainer}> 
        {/* buraya gidilecek sayfa kategorisini yönlendircez */}
        <Text style={styles.linkText}>Tümünü Göster</Text>
        <Ionicons size={20} name="chevron-forward-outline" color='#1b69cd'></Ionicons>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    ilanlarContainer : {
        flexDirection : 'row',
        backgroundColor : '#ffffff',
        borderBottomWidth : 0.2,
        borderTopWidth : 0.2,
        borderColor : '#c4c4c4',
        padding : 3
      },
      imageContainer : {
        borderWidth : 0.2,
        borderColor : '#c4c4c4',
      },
      ilanTextContainer : {
        marginLeft : 10,
        flex : 1
      },
      ilanTitle : {
        marginTop : 10,
        fontSize : 15,
        color : '#323232'
      },
      ilanPrice : {
        position : 'absolute',
        bottom : 10,
        right : 10,
        fontSize : 15,
        fontWeight : 'bold',
        color : '#003db1'
      },
      ilanlarLinkContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : 15,
        backgroundColor: '#ffffff',
        marginTop : 1,
        borderBottomWidth : 0.2,
        borderColor : '#c4c4c4'
      },
      linkText : {
        fontWeight : 'bold',
        color : '#1b69cd'
      },
})