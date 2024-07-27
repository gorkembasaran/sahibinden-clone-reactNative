import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StoreContext } from '../context.js/store-context';
import ValueBox from '../components/ValueBox';

export default function IlanDetails({ route }) {
  const ilanData = route.params;
  const screenWidth = Dimensions.get('window').width; // Cihaz genişliğini alın
  const { touched, setTouched } = useContext(StoreContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{ilanData.title}</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.imageScrollView}
      >
        {ilanData.img.map((item, index) => (
          <Image key={index} style={[styles.image, { width: screenWidth }, !item && { display: 'none' }]} source={{ uri: item }} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.createrContainer}>
        <Text style={styles.createrText}>{ilanData.creater}</Text>
      </TouchableOpacity>
      <View style={styles.containerCate}>
        {ilanData.categories.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Ionicons style={{ marginTop: 6 }} size={10} name="chevron-forward-outline" color='#3f6aa1' />
            <Text style={styles.textCate}>{item}</Text>
          </View>
        ))}
      </View>
      <View style={styles.konumContainer}>
        <Text style={styles.konumText}>{ilanData.konum}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={[styles.containerOptions, { width: screenWidth }]}>
          <TouchableOpacity style={[styles.containerOption, touched === 'İlan Bilgileri' && { backgroundColor: '#ffc61d', borderColor: '#ffc61d' }]} onPress={() => setTouched('İlan Bilgileri')}>
            <Text style={styles.optionText}>İlan Bilgileri</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.containerOption, touched === 'Açıklama' && { backgroundColor: '#ffc61d', borderColor: '#ffc61d' }]} onPress={() => setTouched('Açıklama')}>
            <Text style={styles.optionText}>Açıklama</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.containerOption, touched === 'Konumu' && { backgroundColor: '#ffc61d', borderColor: '#ffc61d' }]} onPress={() => setTouched('Konumu')}>
            <Text style={styles.optionText}>Konumu</Text>
          </TouchableOpacity>
        </View>
        <View style={[touched !== 'İlan Bilgileri' && { display: 'none' }]}>
          <View style={styles.containerInfos}>
            {ilanData.ozellikler.map((item, index) => (
              <ValueBox key={index} title={item.title} value={item.value} ilanNo={item.ilanNo} price={item.price} />
            ))}
          </View>
          <View style={[{ marginVertical: 10, marginLeft: 20 }, !ilanData.degisen && { display: 'none' }]}>
            <Text style={{ fontSize: 16, color: '#757575' }}>BOYA, DEĞİŞEN VE EKSPERTİZ BİLGİSİ</Text>
          </View>
          <View style={[styles.degisenContainer, !ilanData.degisen && { display: 'none' }]}>
            <Image source={require('../assets/degisenImg.png')} style={styles.degisenImg} />
            <View>
              {ilanData.degisen && ilanData.degisen.map((item, index) => (
                <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginTop: 10 }}>
                  <Icon size={10} name='square' color='#d7d7d7' />
                  <Text style={{ fontSize: 14, fontWeight: '600', marginLeft: 3, color: '#2d2d2d' }}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={{ marginVertical: 10, marginLeft: 20 }}>
            <Text style={{ fontSize: 16, color: '#757575' }}>ÖZELLİKLER</Text>
          </View>
          <View style={styles.propertiesItems}>
            {ilanData.properties && ilanData.properties.map((item, index) => (
              <View key={index} style={[styles.propertiesItem, item.title === 'Multimedya' && { borderBottomWidth: 0 }]}>
                <Text style={styles.propertiesTitle}>{item.title}</Text>
                <Text style={styles.propertiesValue}>{item.value}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.containerComp}>
              <Icon size={20} name='swap-horiz' color='#6c6c6c' />
              <Text style={styles.compText}>İlanı Karşılaştır</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerComp}>
              <Icon size={20} name='flag' color='#c6505e' />
              <Text style={styles.compText}>İlan ile ilgili şikayetim var</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.containerDesc, touched !== 'Açıklama' && { display: 'none' }]}>
          <View style={styles.description}>
            <Text>{ilanData.description}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#f7f7f7'
  },
  titleContainer: {
    justifyContent : 'center',
    alignItems : 'center',
    paddingVertical : 2,
  },
  titleText: {
    fontSize: 13,
    color : '#322f2a'
  },
  imageScrollView: {
    height: 300,
  },
  image: {
    height: 300,
    resizeMode: 'cover',
  },
  contentContainer: {

  },
  contentText: {
    fontSize: 16,
  },
  createrContainer : {
    justifyContent : 'center',
    alignItems : 'center',
    padding : 10,
    borderBottomWidth : 1,
    borderColor : '#e8e8e8'
  },
  createrText : {
    fontSize : 16,
    color : '#4173c8'
  },
  containerCate : {
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
  },
  textCate : {
    marginHorizontal : 2,
    marginTop : 4,
    fontSize : 13,
    color : '#3f6aa1'
  },
  konumContainer : {
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 5,
  },
  konumText : {
    color : '#979797',
    fontSize : 13,
  },
  containerOptions : {
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    borderBottomColor : '#ffc61d',
    borderBottomWidth : 3,
  },
  containerOption : {
    padding : 10,
    paddingHorizontal: 30,
    backgroundColor : '#f7f7f7',
    margin : 5,
    marginBottom : 0,
    borderRadius : 2,
    borderBottomWidth : 0,
    borderWidth : 1,
    borderColor : '#999999'
  },
  optionText : {
    color : '#252525'
  },
  containerInfos: {
    paddingHorizontal : 20,
    backgroundColor : '#ffffff'
  },
  degisenImg : {
    width : 120,
    height : 150
  },
  degisenContainer : {
    padding : 20,
    backgroundColor : '#ffffff',
    borderBottomWidth : 1,
    borderTopWidth : 1,
    borderColor : '#efefef'
  },
  propertiesItems : {
    backgroundColor : '#ffff',
    borderBottomWidth : 1,
    borderTopWidth : 1,
    borderColor : '#efefef'
  },
  propertiesItem : {
    marginHorizontal : 20,
    paddingVertical : 15,
    borderBottomWidth : 0.5,
    borderColor : '#e1e1e1'
  },
  propertiesTitle : {
    fontSize : 16,
    color : '#2b2b2b',
    fontWeight : '600'
  },
  propertiesValue : {
    fontSize : 14,
    color : '#727272'
  },
  containerComp : {
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    padding : 20,
    borderTopWidth : 1,
    borderColor : '#eaeaea'
  },
  compText : {
    marginLeft : 5,
    color : '#797979'
  },
  containerDesc : {
    padding : 10,
  }

});