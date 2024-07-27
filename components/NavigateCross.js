import { StyleSheet, TouchableOpacity , View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useContext } from 'react'
import { StoreContext } from '../context.js/store-context';

export default function NavigateCross({display}) {
    const { nextEffect , setNextEffect } = useContext(StoreContext)
    const navigation = useNavigation()
    const goBack = () => {
        setNextEffect(false)
        navigation.goBack()
    }
    const goExit = () => {
        if(nextEffect === true){
            setNextEffect(false)
        }
        navigation.navigate('Profil')
    }
  return (
    <View style={styles.containerCross}>
        <TouchableOpacity style={[styles.downIcon, !nextEffect && !display && {display : 'none'}]} onPress={()=>{goBack()}} >
            <Icon size={40} name='expand-more' color='#363636'></Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconCross} onPress={()=>{goExit()}}>
            <Icon size={30} name='close' color='#363636'></Icon>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#f2f2f2'
    },
    containerCross : {
    },
    iconCross : {
        position : 'absolute',
        right : 20,
        padding : 5
    },
    downIcon : {
        marginLeft : 20,
        width : 40,
    }
})