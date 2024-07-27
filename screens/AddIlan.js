import React, { useContext, useState, useEffect } from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../context.js/store-context';
import SearchBar from '../components/SearchBar';
import { AuthContext } from '../context.js/auth-context';
import { saveIlan } from '../operations/ilanOperations';
import OptionSelect from '../components/OptionSelect';

const options = {
    odaSayısı: ['Stüdyo (1+0)', '1+1', '1.5+1', '2+0', '2+1', '2.5+1', '2+2', '3+0', '3+1', '3.5+1', '3+2', '3+3', '4+0', '4+1', '4+2', '4+3', '4+4', '5+1', '5.5+1', '5+2', '5+3', '5+4', '6+1'],
    binaYasi: ['0', '1', '2', '3', '4', '5-10 arası', '11-15 arası', '16-20 arası', '21-25 arası', '26 ve üzeri'],
    bulunduguKat: ['Giriş Altı Kot 4', 'Giriş Altı Kot 3', 'Giriş Altı Kot 2', 'Giriş Altı Kot 1', 'Bodrum Kat', 'Zemin Kat', 'Bahçe Katı', 'Giriş Katı', 'Yüksek Giriş', 'Müstakil', 'Villa Tipi', 'Çatı Katı', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21 ve üzeri'],
    katSayisi: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21 ve üzeri'],
    isitma: ['Yok', 'Soba', 'Doğalgaz Sobası', 'Kat Kaloriferi', 'Merkezi', 'Merkezi (Pay Ölçer)', 'Kombi (Doğalgaz)', 'Kombi (Elektrik)', 'Yerden Isıtma', 'Klima', 'Fancoil Ünitesi', 'Güneş Enerjisi', 'Elektrikli Radyatör', 'Jeotermal', 'Şömine', 'VRV', 'Isı Pompası'],
    banyoSayısı: ['Yok', '1', '2', '3', '4', '5', '6', '7 ve üzeri'],
    balkon: ['Var', 'Yok'],
    asansor: ['Var', 'Yok'],
    otopark: ['Açık Otopark', 'Kapalı Otopark', 'Açık & Kapalı Otopark', 'Yok'],
    esyali: ['Evet', 'Hayır'],
    kullanimDurumu: ['Boş', 'Kiracılı', 'Mülk Sahibi'],
    krediyeUygun: ['Evet', 'Hayır'],
    tapuDurumu: ['Kat Mülkiyetli', 'Kat İrtifaklı', 'Hisseli Tapulu', 'Müstakil Tapulu', 'Arsa Tapulu', 'Bilinmiyor'],
    takasli: ['Evet', 'Hayır'],
    kimden: 'Sahibinden',
    sehir: ['Antalya', 'Sakarya', 'İstanbul', 'Ankara', 'Kocaeli']
};

export default function AddIlan({ route }) {
    const { name, surname, getUserId } = useContext(AuthContext);
    const {
        isModalVisibleThree, setIsModalVisibleThree, optionsVisible, setOptionsVisible, ilanArray, setIlanArray,
        addCate, setAddCate,
        adTitle, setAdTitle,
        adDescription, setAdDescription,
        odaSayısı, setOdaSayısı,
        secimTitle, setSecimTitle,
        binaYasi, setBinaYasi,
        bulunduguKat, setBulunduguKat,
        katSayisi, setKatSayisi,
        isitma, setIsitma,
        banyoSayısı, setBanyoSayısı,
        balkon, setBalkon,
        asansor, setAsansor,
        otopark, setOtopark,
        esyali, setEsyali,
        kullanimDurumu, setKullanimDurumu,
        krediyeUygun, setKrediyeUygun,
        tapuDurumu, setTapuDurumu,
        takasli, setTakasli,
        kimden, setKimden,
        sehir, setSehir,
        price, setPrice,
        brut, setBrut,
        net, setNet,
        aidat, setAidat
    } = useContext(StoreContext);

    const title = route.params.name;
    const navigation = useNavigation();

    const exitPage = () => {
        setIsModalVisibleThree(false);
        navigation.navigate('Search');
        setAddCate([]);
    };

    const ilan = {
        img: ['https://i.ytimg.com/vi/pTLZ-LA8_3g/maxresdefault.jpg'],
        title: adTitle,
        to: 'IlanDetails',
        ozellikler: [
            { title: 'Fiyat', value: price, price: true },
            { title: 'İlan Tarihi', value: new Date() },
            { title: 'İlan No', value: Math.floor(Math.random() * 1000) },
            { title: 'm2 (Brüt)', value: brut },
            { title: 'm2 (Net)', value: net },
            { title: 'Oda Sayısı', value: odaSayısı },
            { title: 'Bina Yaşı', value: binaYasi },
            { title: 'Bulunduğu Kat', value: bulunduguKat },
            { title: 'Kat Sayısı', value: katSayisi },
            { title: 'Isıtma', value: isitma },
            { title: 'Banyo Sayısı', value: banyoSayısı },
            { title: 'Balkon', value: balkon },
            { title: 'Asansör', value: asansor },
            { title: 'Otopark', value: otopark },
            { title: 'Eşyalı', value: esyali },
            { title: 'Kullanım Durumu', value: kullanimDurumu },
            { title: 'Aidat', value: aidat },
            { title: 'Krediye Uygun', value: krediyeUygun },
            { title: 'Tapu Durumu', value: tapuDurumu },
            { title: 'Kimden', value: kimden },
            { title: 'Takas', value: takasli },
        ],
        description: adDescription,
        creater: `${name} ${surname}`,
        konum: sehir,
        categories: addCate,
    };

    const changeValueData = (item, method) => {
        if (method === 'Oda Sayısı') {
            setOdaSayısı(item);
        } else if (method === 'Bina Yaşı') {
            setBinaYasi(item);
        } else if (method === 'Şehir') {
            setSehir(item);
        } else if (method === 'Bulunduğu Kat') {
            setBulunduguKat(item);
        } else if (method === 'Kat Sayısı') {
            setKatSayisi(item);
        } else if (method === 'Isıtma') {
            setIsitma(item);
        } else if (method === 'Banyo Sayısı') {
            setBanyoSayısı(item);
        } else if (method === 'Balkon') {
            setBalkon(item);
        } else if (method === 'Asansör') {
            setAsansor(item);
        } else if (method === 'Otopark') {
            setOtopark(item);
        } else if (method === 'Eşyalı') {
            setEsyali(item);
        } else if (method === 'Kullanım Durumu') {
            setKullanimDurumu(item);
        } else if (method === 'Krediye Uygun') {
            setKrediyeUygun(item);
        } else if (method === 'Tapu Durumu') {
            setTapuDurumu(item);
        } else if (method === 'Takaslı') {
            setTakasli(item);
        }
        setOptionsVisible(false);
    };

    const [userId, setUserId] = useState('');

    useEffect(() => {
        // Kullanıcı ID'sini al ve state'e set et
        const id = getUserId();
        setUserId(id);
    }, [getUserId]);

    const handleSaveIlan = async () => {
        if (userId) {
            try {
                await saveIlan(userId, ilan, addCate);
                // İlan başarılı bir şekilde kaydedildiğinde yapılacak işlemler
                console.log("İlan başarıyla kaydedildi.");
            } catch (error) {
                console.error("İlan eklenirken bir hata oluştu: ", error);
            }
        } else {
            console.error("Kullanıcı ID'si bulunamadı.");
        }
    };

    return (
        <View style={{ flexDirection: 'column', flex: 1 }}>
            <View style={styles.categoriesContainer}>
                {
                    addCate.map((item, index) => (
                        <View key={index} style={{ flexDirection: 'row' }}>
                            <Ionicons style={[{ marginTop: 4 }, index === 0 && { display: 'none' }]} size={10} name="chevron-forward-outline" color='#000000'></Ionicons>
                            <Text style={styles.cateText}>{item}</Text>
                        </View>
                    ))
                }
            </View>
            <ScrollView>
                <View style={{ flexDirection: 'row', margin: 15 }}>
                    <Text style={{ color: '#a0a0a0' }}>Kişisel verilerin işlenmesine dair</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#1e4d9f' }}> aydınlatma</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputsContainer}>
                    <View>
                        <View style={styles.inputsFixContainer}>
                            <View style={styles.inputTitle}>
                                <Text style={styles.inputTitleText}>İlan Başlığı</Text>
                            </View>
                            <View style={styles.inputValue}>
                                <TextInput fontSize={15} placeholder='Başlık Girin' onChangeText={(text) => setAdTitle(text)}></TextInput>
                            </View>
                            <View style={styles.inputIcon}>
                                <Icon name="mic-none" size={25} color='#777777'></Icon>
                            </View>
                        </View>
                        <View style={styles.inputsFixContainer}>
                            <View style={styles.inputTitle}>
                                <Text style={styles.inputTitleText}>Açıklama</Text>
                            </View>
                            <View style={styles.inputValue}>
                                <TextInput fontSize={15} placeholder='Açıklama Girin' onChangeText={(text) => setAdDescription(text)}></TextInput>
                            </View>
                            <View style={styles.inputIcon}>
                                <Icon name="mic-none" size={25} color='#777777'></Icon>
                            </View>
                        </View>
                        <View style={[styles.inputsFixContainer, { paddingBottom: 30 }]}>
                            <View style={styles.inputTitle}>
                                <Text style={styles.inputTitleText}>Fiyat</Text>
                            </View>
                            <View style={styles.inputValue}>
                                <TextInput fontSize={15} placeholder='Fiyat Girin' onChangeText={(text) => setPrice(text)}></TextInput>
                            </View>
                            <View style={styles.inputIcon}>
                                <Text style={{ color: '#777777' }}>TL</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={[styles.inputsFixContainer]}>
                            <View style={styles.inputTitle}>
                                <Text style={styles.inputTitleText}>m2 (Brüt)</Text>
                            </View>
                            <View style={[styles.inputValue, { width: '75%' }]}>
                                <TextInput fontSize={15} onChangeText={(text) => setBrut(text)}></TextInput>
                            </View>
                        </View>
                        <View style={[styles.inputsFixContainer]}>
                            <View style={styles.inputTitle}>
                                <Text style={styles.inputTitleText}>m2 (Net)</Text>
                            </View>
                            <View style={[styles.inputValue, { width: '75%' }]}>
                                <TextInput fontSize={15} onChangeText={(text) => setNet(text)}></TextInput>
                            </View>
                        </View>
                        <OptionSelect optionElement={options.odaSayısı} value={odaSayısı} title='Oda Sayısı' />
                        <OptionSelect optionElement={options.binaYasi} value={binaYasi} title='Bina Yaşı' />
                        <OptionSelect optionElement={options.bulunduguKat} value={bulunduguKat} title='Bulunduğu Kat' />
                        <OptionSelect optionElement={options.katSayisi} value={katSayisi} title='Kat Sayısı' />
                        <OptionSelect optionElement={options.isitma} value={isitma} title='Isıtma' />
                        <OptionSelect optionElement={options.banyoSayısı} value={banyoSayısı} title='Banyo Sayısı' />
                        <OptionSelect optionElement={options.balkon} value={balkon} title='Balkon' />
                        <OptionSelect optionElement={options.asansor} value={asansor} title='Asansör' />
                        <OptionSelect optionElement={options.otopark} value={otopark} title='Otopark' />
                        <OptionSelect optionElement={options.esyali} value={esyali} title='Eşyalı' />
                        <OptionSelect optionElement={options.kullanimDurumu} value={kullanimDurumu} title='Kullanım Durumu' />
                        <View style={[styles.inputsFixContainer]}>
                            <View style={styles.inputTitle}>
                                <Text style={styles.inputTitleText}>Aidat (TL)</Text>
                            </View>
                            <View style={[styles.inputValue, { width: '75%' }]}>
                                <TextInput fontSize={15} onChangeText={(text) => setAidat(text)}></TextInput>
                            </View>
                        </View>
                        <OptionSelect optionElement={options.krediyeUygun} value={krediyeUygun} title='Krediye Uygun' />
                        <OptionSelect optionElement={options.tapuDurumu} value={tapuDurumu} title='Tapu Durumu' />
                        <OptionSelect optionElement={options.kimden} value={kimden} title='Kimden' />
                        <OptionSelect optionElement={options.takasli} value={takasli} title='Takaslı' />
                        <OptionSelect optionElement={options.sehir} value={sehir} title='Şehir' />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.devamEt}>
                <TouchableOpacity style={styles.devamEtButton} onPress={handleSaveIlan}>
                    <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '600' }}>İlan Ekle</Text>
                </TouchableOpacity>
            </View>
            <Modal
                swipeDirection={['down']}
                onSwipeComplete={() => setOptionsVisible(false)}
                style={styles.modalStyle}
                isVisible={optionsVisible}>
                <View style={styles.modalOptions}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ borderBottomWidth: 6, width: 110, borderColor: '#ececec', marginTop: 10, borderRadius: 20 }}></View>
                    </View>
                    <View style={styles.optTitle}>
                        <Text style={styles.optTitleText}>{secimTitle}</Text>
                    </View>
                    <View style={styles.searchOpt}>
                        <SearchBar title={`${secimTitle} Ara`} />
                    </View>
                    <View style={{ height: 400, marginBottom: 10 }}>
                        <FlatList keyExtractor={item => item} data={ilanArray} renderItem={({ item }) => (
                            <TouchableOpacity style={styles.option} onPress={() => { changeValueData(item, secimTitle) }}>
                                <Text style={styles.optionText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                        />
                    </View>
                </View>
                <View style={styles.cancelContainer}>
                    <TouchableOpacity style={styles.cancelStyle} onPress={() => { setOptionsVisible(false) }}>
                        <Text style={styles.cancelText}>Vazgeç</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal isVisible={isModalVisibleThree}>
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
                        <TouchableOpacity onPress={() => { exitPage() }} style={styles.modalButtonOk}>
                            <Text style={styles.buttonTextOk}>Tamam</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsModalVisibleThree(false)} style={styles.modalButtonNo}>
                            <Text style={styles.buttonTextNo}>Vazgeç</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
                           

const styles = StyleSheet.create({
    categoriesContainer : {
        flexDirection : 'row',
        backgroundColor : '#ffffff',
        padding : 10,
        marginLeft : 5,
        borderBottomWidth : 1,
        borderColor : '#d7d7d7'
    },
    cateText : {
        color : '#000000',
        fontSize : 15
    },
    inputsContainer : {
        backgroundColor : '#ffffff',
        borderBottomWidth : 0.4,
        borderTopWidth : 0.4,
        borderColor : '#c7c7c7',
        marginBottom : 100,
    },
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
        width : '25%',
        justifyContent : 'center',
    },
    inputTitleText : {
        fontSize : 15,
        color : '#414141'
    },
    inputValue : {
        width : '70%',
    },
    inputIcon : {
        width : '5%'
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
    },
    modalOptions : {
        backgroundColor : 'white',
        borderTopLeftRadius : 15,
        borderTopRightRadius : 15,
    },
    modalStyle : {
        width : '100%', 
        marginLeft : 0,
        marginTop : 300,
        borderTopLeftRadius : 15,
        borderTopRightRadius : 15,
    },
    optTitle : {
        padding : 10,
        justifyContent : 'center',
        alignItems : 'center',
        borderBottomWidth : 0.3,
        borderColor : '#c6c6c6',
        borderTopLeftRadius : 15,
        borderTopRightRadius : 15,
        marginTop : 0
    },
    optTitleText : {
        fontSize: 20,
        fontWeight : '700',
        color : '#2f2f2f'
    },
    option : {
        marginHorizontal : 20,
        borderBottomWidth : 0.4,
        borderColor: '#c6c6c6',
        paddingVertical : 10
    },
    optionText : {
        fontSize : 16
    },
    cancelContainer : {
        paddingBottom : 60,
        paddingTop : 20,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'white',
        borderTopWidth : 0.3,
        borderColor : '#c6c6c6'
    },
    cancelStyle : {
        backgroundColor : '#1064bc',
        width : '93%',
        padding : 15,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 5
    },
    cancelText : {
        color : 'white',
        fontSize : 16,
        fontWeight : '600',
    },
    devamEt: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderColor: '#fffffa',
        paddingVertical: 10,
        alignItems: 'center',
    },
    devamEtButton: {
        backgroundColor: '#1064bc',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },


})