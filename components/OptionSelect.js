import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React, { useContext } from 'react'
import { StoreContext } from '../context.js/store-context'

export default function OptionSelect({optionElement, title, value}) {
    const {optionsVisible, setOptionsVisible, ilanArray , setIlanArray, secimTitle, setSecimTitle} = useContext(StoreContext)
    const updateArray = (item, title) => {
        if(title !== 'Kimden'){
            setIlanArray(item)
            setOptionsVisible(true)
            setSecimTitle(title)
        }
    }
  return (
    <TouchableOpacity onPress={()=>{updateArray(optionElement,title)}} style={[styles.inputsFixContainer]}>
        <View style={styles.inputTitle}>
            <Text style={styles.inputTitleText}>{title}</Text>
        </View>
        <View style={[styles.inputValue, {width : '70%'}]}>
                <Text style={{color : '#969696'}}>{value}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    inputsFixContainer : {
        flexDirection : 'row',
        marginLeft : 15,
        padding : 10,
        paddingLeft : 0,
        justifyContent: 'center',
        alignItems : 'center',
        borderBottomWidth : 0.4,
        borderColor : '#c6c6c6'
    },
    inputTitle : {
        width : '30%',
        justifyContent : 'center',
    },
    inputTitleText : {
        fontSize : 15,
        color : '#414141'
    },
    inputValue : {
        width : '70%',
        flexDirection : 'row',
        justifyContent : 'flex-end'
    },
    inputIcon : {
        width : '5%'
    },
})