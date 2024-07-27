import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext } from 'react'
import { StoreContext } from '../context.js/store-context'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar({ bgColor, ilanAdd, title }) {
    const { setPressed , pressed } = useContext(StoreContext)
  return (
    <View style={[styles.inputContainer, bgColor && {backgroundColor : bgColor} , !ilanAdd && {borderBottomWidth : 1, borderBottomColor : '#cdcdcd'} ]}>
        <TouchableOpacity onPress={()=>{setPressed(true)}} style={[styles.inputGen]}>
            <View style={[styles.inputObj, !ilanAdd && {marginTop : 10, backgroundColor : '#f2f2f2'}, pressed && {justifyContent : 'flex-start'}]}>
                <Ionicons name='search' size={20} color={ilanAdd ? '#d3dbe3' : '#b3b8bd'} style={[{ padding : 8.3}, ilanAdd && {backgroundColor : 'white'}]} />
                <TextInput onPress={()=>{setPressed(true)}} style={[styles.textInput, pressed && {width : '72%'},  ilanAdd && {backgroundColor : 'white'}]} placeholder={title}></TextInput>
                <Ionicons name='mic-outline' size={20} color='#959ba1' style={[ilanAdd && {backgroundColor : 'white'}]} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cancelButton, !pressed && {display : 'none'}, !ilanAdd && {marginTop : 10}]} onPress={()=>{setPressed(false)}}>
            <Text style={[styles.cancelText, !ilanAdd && {color : '#959ba1'}]}>Vazgeç</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer : {
        padding : 10,
        paddingTop : 0,
        flexDirection : 'row',
        backgroundColor : '#ffffff',
    },
    textInput : {
        padding : 10,
        width : '82%',
    },
    inputGen : {
        
    },
    inputObj : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'white',
        borderRadius : 5,
        paddingLeft : 3,
        width : '100%',
        marginLeft : 2
    },
    cancelButton : {
        right : 20,
        marginLeft : 20,
    },
    cancelText : {
        padding : 10,
        color: 'white'
    },
})