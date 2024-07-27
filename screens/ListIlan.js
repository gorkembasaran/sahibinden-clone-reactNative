import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context.js/store-context';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function ListIlan() {
    const { addCate } = useContext(StoreContext);
    const [ilanlarGuncel, setIlanlarGuncel] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const kategoriYolu = `${addCate.join('/')}`;
                const response = await axios.get(`https://sahibinden-8741c-default-rtdb.firebaseio.com/ilanlar/${kategoriYolu}.json`);
                const ilanlar = response.data;

                // Verileri diziye dönüştür ve her bir öğenin ID'sini ekle
                if (ilanlar) {
                    const ilanlarList = Object.keys(ilanlar).map(key => ({
                        id: key,
                        ...ilanlar[key]
                    }));
                    setIlanlarGuncel(ilanlarList);
                } else {
                    setIlanlarGuncel([]);
                }
            } catch (error) {
                console.error("İlanlar çekilirken bir hata oluştu:", error);
                setIlanlarGuncel([]);
            }
        };

        fetchData();
    }, [addCate]);

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={[styles.headerTouch, { borderLeftWidth: 0 }]}><Text style={[styles.headerText]}>Filtrele</Text></TouchableOpacity>
                <TouchableOpacity style={styles.headerTouch}><Text style={styles.headerText}>Sırala</Text></TouchableOpacity>
                <TouchableOpacity style={styles.headerTouch}><Text style={styles.headerText}>Görünüm</Text></TouchableOpacity>
                <TouchableOpacity style={styles.headerTouch}><Text style={[styles.headerText]}>Aramayı Kaydet</Text></TouchableOpacity>
            </View>
            <ScrollView style={styles.listsContainer}>
                {ilanlarGuncel.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.listContainer} onPress={() => navigation.navigate('IlanDetails', item)}>
                        <Image style={[styles.image, { backgroundColor: 'gray' }]} source={{ uri: item.img[0] }} />
                        <View style={styles.textContainer}>
                            <View style={styles.titleCont}>
                                <Text style={styles.titleContText}>{item.title}</Text>
                            </View>
                            <View style={styles.bottomInfos}>
                                <View style={styles.cityCont}><Text style={styles.cityText}>{item.konum}</Text></View>
                                <View style={styles.priceCont}>
                                    <Text style={styles.priceText}>
                                        {item.ozellikler.find(o => o.title === 'Fiyat')?.value}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container : {},
    headerContainer : {
        flexDirection : 'row',
        paddingVertical : 10,
        borderBottomWidth : 0.5,
        borderColor : '#cbcfca',
        backgroundColor : '#f0f0f0'
    },
    headerTouch : {
        width : '24%',
        justifyContent : 'center',
        alignItems : 'center',
        borderLeftWidth : 1,
        borderColor: '#c7c7c7',
        paddingVertical : 10
    },
    headerText : {
        fontSize : 12,
        color : '#313131',
        fontWeight : '500'
    },
    listsContainer : {

    },
    listContainer : {
        flexDirection : 'row',
        padding : 5,
        marginBottom : 5,
    },
    image : {
        width : 120,
        height : 100
    },
    textContainer : {},
    titleCont: {
        padding : 10,
        width : 300,
        height: 70
    },
    titleContText : {
        fontSize : 18,
        fontWeight : '400',
        color : '#343434'
    },
    bottomInfos : {
        flexDirection : 'row',
        position : 'absolute',
        bottom : 10,
        paddingHorizontal : 10,
        width : 300,
        justifyContent : 'space-between',
    },
    cityCont : {},
    cityText : {
        fontSize : 12,
        color : '#7a7a7a'
    },
    priceCont: {},
    priceText : {
        fontSize : 14,
        fontWeight : 'bold',
        color : '#1a508c'
    }
})