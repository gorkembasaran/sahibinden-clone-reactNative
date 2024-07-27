import { StyleSheet, TextInput, ScrollView, View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Modal from 'react-native-modal';
import Categories from '../components/Categories'
import { StoreContext } from '../context.js/store-context';
import { useNavigation } from '@react-navigation/native';


export default function IlanPageTwo({route}) {
    const title = route.params.name
    const navigation = useNavigation()
    const categories = route.params.altCate
    const { isModalVisibleTwo , setIsModalVisibleTwo, pressed , setPressed, addCate, setAddCate } = useContext(StoreContext)
    const exitPage = ()=>{
        setIsModalVisibleTwo(false)
        navigation.navigate('Search')
        setAddCate([])
    }
    return (
      <ScrollView style={styles.container}>
        <View style={[styles.cateContainer]}>
            <Text style={[styles.titleCate, {marginBottom : 10}]}>{title.toUpperCase()}</Text>
            <Categories categories={categories} iconSize={16} />
        </View>
        <Modal isVisible={isModalVisibleTwo} >
                <View style={styles.modalContent}>
                    <View style={styles.modalTexts}>
                        <View style={styles.modalTextTop}>
                            <Text style={styles.modalTextsub}>İlan verme adımından çıkmak</Text>
                            <Text style={styles.modalTextsub}>üzeresiniz</Text>
                        </View>
                        <View style={styles.modalTextBottom}>
                            <Text style={styles.modalTextBottomSub}>İlan verme adımından çıkmak istediğinize emin misiniz?</Text>
                        </View>
                    </View>
                    <View style={styles.modalButtons}>
                        <TouchableOpacity onPress={()=>{exitPage()}} style={styles.modalButtonOk}>
                            <Text style={styles.buttonTextOk}>Tamam</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setIsModalVisibleTwo(false)} style={styles.modalButtonNo}>
                            <Text style={styles.buttonTextNo}>Vazgeç</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </Modal>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        borderTopColor : '#105294'
    },
    modalContent :{
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop : 50
    },
    modalTextTop : {
        padding : 30,
        alignItems : 'center',
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
        borderBottomWidth : 0.2,
        borderColor : '#959ba1'
    },
    modalTextsub: {
        fontSize : 20,
        fontWeight : 'bold',
    },
    modalTextBottom : {
        borderBottomWidth : 0.2,
        borderColor : '#959ba1'
    },
    modalTextBottomSub : {
        fontSize : 18,
        padding : 30,
    },
    modalButtons : {
        flexDirection : 'row',
    },
    modalButtonOk : {
        alignItems : 'center',
        padding : 16,
        borderRadius : 2,
        backgroundColor : 'white',
        borderWidth : 1,
        borderColor : '#185e91',
        width : '46%',
        marginRight : 5,
        marginLeft : 10,
        marginTop : 10,
        marginBottom : 10
    },
    modalButtonNo : {
        alignItems : 'center',
        padding : 16,
        borderRadius : 2,
        backgroundColor : '#185e91',
        width : '46%',
        marginRight : 10,
        marginLeft : 5,
        marginTop : 10,
        marginBottom : 10
    },
    buttonTextNo : {
        fontSize : 16,
        fontWeight : 'bold',
        color : 'white',
    },
    buttonTextOk : {
        fontSize : 16,
        fontWeight : 'bold',
        color : '#185e91',
    },
    titleCate : {
        marginTop : 13,
        marginLeft : 13,
        fontSize : 12,
        color : '#b7b7b7'
    }
})