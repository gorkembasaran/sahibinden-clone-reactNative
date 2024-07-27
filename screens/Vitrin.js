import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const VitrinData = [
  {
    img : ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaM8clNSnmulvM_kWZfekX6X_d6n23IHpOEQ&s'],
    title : 'KELEPİR EV GEL AL KAÇIRMA ZORT',
    to : 'IlanDetails',
    ozellikler : [
      {
        title : 'Fiyat',
        value : 5250000,
        price : true
      },
      {
        title : 'İlan Tarihi',
        value : '01.07.2024',
      },
      {
        title : 'İlan No',
        value : 12312312321,
        ilanNo : true
      },
    ],
    description : 'deneme bir iki üç',
    creater : 'İlhan Özen',
    categories : ['Emlak','Konut','Satılık','Yazlık'],
    konum : 'Kocaeli, Kandıra, Kurtyeri Mh.',
    createrName : 'İlhan Özen',
    properties : [
      {
        title : 'Cephe',
        value : 'Güney, Kuzey.'
      }
    ]
  },
  {
    img : ['https://www.stoneplusturkiye.com/wp-content/uploads/2021/07/site-web.jpg'],
    title : 'İKİ KATLI VİLLA KOŞ YETİŞ AL',
    to : 'IlanDetails'
  },
  {
    img : ['https://cdn.motor1.com/images/mgl/nAy9Bj/s1/porsche-suv-elettrico-7-posti-il-render-di-motor1.com.webp',
    'https://i.ytimg.com/vi/hSseX11pVXY/maxresdefault.jpg',
    'https://blog.carettaoto.com.tr/app/uploads/2022/03/2020-porsche-taycan-3.webp',
    ],
    title : 'DÖRT TAKLALI TEMİZ PORSCHE',
    to : 'IlanDetails',
    ozellikler : [
      {
        title : 'Fiyat',
        value : 1500000,
        price : true
      },
      {
        title : 'İlan Tarihi',
        value : '12.09.2023'
      },
      {
        title : 'İlan No',
        value : 1234124214,
        ilanNo : true
      },
      {
        title : 'Marka',
        value : 'Porsche'
      },
      {
        title : 'Seri',
        value : '718'
      },
      {
        title : 'Model',
        value : '718'
      },
      {
        title : 'Yıl',
        value : '2017'
      },
      {
        title : 'Yakıt',
        value : 'Benzin'
      },
      {
        title : 'Vites',
        value : 'Otomatik'
      },
      {
        title : 'Araç Durumu',
        value : 'İkinci El'
      },
      {
        title : 'KM',
        value : 27000
      },
      {
        title : 'Kasa Tipi',
        value : 'Cabrio'
      },
      {
        title : 'Motor Gücü',
        value : '301 - 325 HP'
      },
      {
        title : 'Motor Hacmi',
        value : '3001 - 3500 cm3'
      },
      {
        title : 'Çekiş',
        value : 'Arkadan İtiş'
      },
      {
        title : 'Renk',
        value : 'Füme'
      },
      {
        title : 'Garanti',
        value : 'Evet'
      },
      {
        title : 'Ağır Hasar Kayıtlı',
        value : 'Hayır'
      },
      {
        title : 'Plaka / Uyruk',
        value : 'Türkiye(TR) Plaka'
      },
      {
        title : 'Kimden',
        value : 'Galeriden'
      },
      {
        title : 'Takas',
        value : 'Evet'
      }
    ],
    description : 'Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe  Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe',
    creater : 'BARAN MOTORS ETİLER',
    konum : 'İstanbul, Beşiktaş, Nisbetiye Mh.',
    categories : ['Vasıta','Otomobil','Porsche','718','718'],
    createrName : 'Bora B.',
    belgeNo : 12312312,
    degisen : ['Orjinal'],
    properties : [
      {
        title : 'Güvenlik',
        value : 'Belirtilmemiş'
      },
      {
        title : 'İç Donanım',
        value : 'Belirtilmemiş'
      },
      {
        title : 'Dış Donanım',
        value : 'Belirtilmemiş'
      },
      {
        title : 'Multimedya',
        value : 'Belirtilmemiş'
      },
    ]
  },
  {
    img : ['https://i0.shbdn.com/photos/98/47/15/x5_1183984715xvv.jpg'],
    title : 'EGZOZ PATLAMALIK MOBİLET',
    to : 'IlanDetails'
  },
  {
    img : ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaM8clNSnmulvM_kWZfekX6X_d6n23IHpOEQ&s'],
    title : 'KELEPİR EV GEL AL KAÇIRMA ZORT',
    to : 'IlanDetails',
  },
  {
    img : ['https://www.stoneplusturkiye.com/wp-content/uploads/2021/07/site-web.jpg'],
    title : 'İKİ KATLI VİLLA KOŞ YETİŞ AL',
    to : 'IlanDetails'
  },
  {
    img : ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphrC3jIJE7bJQQWnzmRLJTdwd8jSfbEoDBw&s',
    'https://i.ytimg.com/vi/hSseX11pVXY/maxresdefault.jpg',
    'https://blog.carettaoto.com.tr/app/uploads/2022/03/2020-porsche-taycan-3.webp',
    ],
    title : 'DÖRT TAKLALI TEMİZ PORSCHE',
    to : 'IlanDetails',
    ozellikler : [
      {
        title : 'Fiyat',
        value : 1500000,
        price : true
      },
      {
        title : 'İlan Tarihi',
        value : '12.09.2023'
      },
      {
        title : 'İlan No',
        value : 1234124214,
        ilanNo : true
      },
      {
        title : 'Marka',
        value : 'Porsche'
      },
      {
        title : 'Seri',
        value : '718'
      },
      {
        title : 'Model',
        value : '718'
      },
      {
        title : 'Yıl',
        value : '2017'
      },
      {
        title : 'Yakıt',
        value : 'Benzin'
      },
      {
        title : 'Vites',
        value : 'Otomatik'
      },
      {
        title : 'Araç Durumu',
        value : 'İkinci El'
      },
      {
        title : 'KM',
        value : 27000
      },
      {
        title : 'Kasa Tipi',
        value : 'Cabrio'
      },
      {
        title : 'Motor Gücü',
        value : '301 - 325 HP'
      },
      {
        title : 'Motor Hacmi',
        value : '3001 - 3500 cm3'
      },
      {
        title : 'Çekiş',
        value : 'Arkadan İtiş'
      },
      {
        title : 'Renk',
        value : 'Füme'
      },
      {
        title : 'Garanti',
        value : 'Evet'
      },
      {
        title : 'Ağır Hasar Kayıtlı',
        value : 'Hayır'
      },
      {
        title : 'Plaka / Uyruk',
        value : 'Türkiye(TR) Plaka'
      },
      {
        title : 'Kimden',
        value : 'Galeriden'
      },
      {
        title : 'Takas',
        value : 'Evet'
      }
    ],
    description : 'Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe  Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe',
    creater : 'BARAN MOTORS ETİLER',
    konum : 'İstanbul, Beşiktaş, Nisbetiye Mh.',
    categories : ['Vasıta','Otomobil','Porsche','718','718'],
    createrName : 'Bora B.',
    belgeNo : 12312312,
    degisen : ['Orjinal'],
    properties : [
      {
        title : 'Güvenlik',
        value : 'Belirtilmemiş'
      },
      {
        title : 'İç Donanım',
        value : 'Belirtilmemiş'
      },
      {
        title : 'Dış Donanım',
        value : 'Belirtilmemiş'
      },
      {
        title : 'Multimedya',
        value : 'Belirtilmemiş'
      },
    ]
  },
  {
    img : ['https://i0.shbdn.com/photos/98/47/15/x5_1183984715xvv.jpg'],
    title : 'EGZOZ PATLAMALIK MOBİLET',
    to : 'IlanDetails'
  },
  {
    img : ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaM8clNSnmulvM_kWZfekX6X_d6n23IHpOEQ&s'],
    title : 'KELEPİR EV GEL AL KAÇIRMA ZORT',
    to : 'IlanDetails',
  },
  {
    img : ['https://www.stoneplusturkiye.com/wp-content/uploads/2021/07/site-web.jpg'],
    title : 'İKİ KATLI VİLLA KOŞ YETİŞ AL',
    to : 'IlanDetails'
  },
  {
    img : ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphrC3jIJE7bJQQWnzmRLJTdwd8jSfbEoDBw&s',
    'https://i.ytimg.com/vi/hSseX11pVXY/maxresdefault.jpg',
    'https://blog.carettaoto.com.tr/app/uploads/2022/03/2020-porsche-taycan-3.webp',
    ],
    title : 'DÖRT TAKLALI TEMİZ PORSCHE',
    to : 'IlanDetails',
    ozellikler : [
      {
        title : 'Fiyat',
        value : 1500000,
        price : true
      },
      {
        title : 'İlan Tarihi',
        value : '12.09.2023'
      },
      {
        title : 'İlan No',
        value : 1234124214,
        ilanNo : true
      },
      {
        title : 'Marka',
        value : 'Porsche'
      },
      {
        title : 'Seri',
        value : '718'
      },
      {
        title : 'Model',
        value : '718'
      },
      {
        title : 'Yıl',
        value : '2017'
      },
      {
        title : 'Yakıt',
        value : 'Benzin'
      },
      {
        title : 'Vites',
        value : 'Otomatik'
      },
      {
        title : 'Araç Durumu',
        value : 'İkinci El'
      },
      {
        title : 'KM',
        value : 27000
      },
      {
        title : 'Kasa Tipi',
        value : 'Cabrio'
      },
      {
        title : 'Motor Gücü',
        value : '301 - 325 HP'
      },
      {
        title : 'Motor Hacmi',
        value : '3001 - 3500 cm3'
      },
      {
        title : 'Çekiş',
        value : 'Arkadan İtiş'
      },
      {
        title : 'Renk',
        value : 'Füme'
      },
      {
        title : 'Garanti',
        value : 'Evet'
      },
      {
        title : 'Ağır Hasar Kayıtlı',
        value : 'Hayır'
      },
      {
        title : 'Plaka / Uyruk',
        value : 'Türkiye(TR) Plaka'
      },
      {
        title : 'Kimden',
        value : 'Galeriden'
      },
      {
        title : 'Takas',
        value : 'Evet'
      }
    ],
    description : 'Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe  Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe',
    creater : 'BARAN MOTORS ETİLER',
    konum : 'İstanbul, Beşiktaş, Nisbetiye Mh.',
    categories : ['Vasıta','Otomobil','Porsche','718','718'],
    createrName : 'Bora B.',
    belgeNo : 12312312,
    degisen : ['Orjinal'],
    properties : [
      {
        title : 'Güvenlik',
        value : 'Belirtilmemiş'
      },
      {
        title : 'İç Donanım',
        value : 'Belirtilmemiş'
      },
      {
        title : 'Dış Donanım',
        value : 'Belirtilmemiş'
      },
      {
        title : 'Multimedya',
        value : 'Belirtilmemiş'
      },
    ]
  },
  {
    img : ['https://i0.shbdn.com/photos/98/47/15/x5_1183984715xvv.jpg'],
    title : 'EGZOZ PATLAMALIK MOBİLET',
    to : 'IlanDetails'
  },
  {
    img : ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaM8clNSnmulvM_kWZfekX6X_d6n23IHpOEQ&s'],
    title : 'KELEPİR EV GEL AL KAÇIRMA ZORT',
    to : 'IlanDetails',
  },
  {
    img : ['https://www.stoneplusturkiye.com/wp-content/uploads/2021/07/site-web.jpg'],
    title : 'İKİ KATLI VİLLA KOŞ YETİŞ AL',
    to : 'IlanDetails'
  },
  {
    img : ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphrC3jIJE7bJQQWnzmRLJTdwd8jSfbEoDBw&s',
    'https://i.ytimg.com/vi/hSseX11pVXY/maxresdefault.jpg',
    'https://blog.carettaoto.com.tr/app/uploads/2022/03/2020-porsche-taycan-3.webp',
    ],
    title : 'DÖRT TAKLALI TEMİZ PORSCHE',
    to : 'IlanDetails',
    ozellikler : [
      {
        title : 'Fiyat',
        value : 1500000,
        price : true
      },
      {
        title : 'İlan Tarihi',
        value : '12.09.2023'
      },
      {
        title : 'İlan No',
        value : 1234124214,
        ilanNo : true
      },
      {
        title : 'Marka',
        value : 'Porsche'
      },
      {
        title : 'Seri',
        value : '718'
      },
      {
        title : 'Model',
        value : '718'
      },
      {
        title : 'Yıl',
        value : '2017'
      },
      {
        title : 'Yakıt',
        value : 'Benzin'
      },
      {
        title : 'Vites',
        value : 'Otomatik'
      },
      {
        title : 'Araç Durumu',
        value : 'İkinci El'
      },
      {
        title : 'KM',
        value : 27000
      },
      {
        title : 'Kasa Tipi',
        value : 'Cabrio'
      },
      {
        title : 'Motor Gücü',
        value : '301 - 325 HP'
      },
      {
        title : 'Motor Hacmi',
        value : '3001 - 3500 cm3'
      },
      {
        title : 'Çekiş',
        value : 'Arkadan İtiş'
      },
      {
        title : 'Renk',
        value : 'Füme'
      },
      {
        title : 'Garanti',
        value : 'Evet'
      },
      {
        title : 'Ağır Hasar Kayıtlı',
        value : 'Hayır'
      },
      {
        title : 'Plaka / Uyruk',
        value : 'Türkiye(TR) Plaka'
      },
      {
        title : 'Kimden',
        value : 'Galeriden'
      },
      {
        title : 'Takas',
        value : 'Evet'
      }
    ],
    description : 'Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe  Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe',
    creater : 'BARAN MOTORS ETİLER',
    konum : 'İstanbul, Beşiktaş, Nisbetiye Mh.',
    categories : ['Vasıta','Otomobil','Porsche','718','718'],
    createrName : 'Bora B.',
    belgeNo : 12312312,
    degisen : ['Orjinal'],
    properties : [
      {
        title : 'Güvenlik',
        value : 'Belirtilmemiş'
      },
      {
        title : 'İç Donanım',
        value : 'Belirtilmemiş'
      },
      {
        title : 'Dış Donanım',
        value : 'Belirtilmemiş'
      },
      {
        title : 'Multimedya',
        value : 'Belirtilmemiş'
      },
    ]
  },
  {
    img : ['https://i0.shbdn.com/photos/98/47/15/x5_1183984715xvv.jpg'],
    title : 'EGZOZ PATLAMALIK MOBİLET',
    to : 'IlanDetails'
  },
  {
    img : ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaM8clNSnmulvM_kWZfekX6X_d6n23IHpOEQ&s'],
    title : 'KELEPİR EV GEL AL KAÇIRMA ZORT',
    to : 'IlanDetails',
  },
  {
    img : ['https://www.stoneplusturkiye.com/wp-content/uploads/2021/07/site-web.jpg'],
    title : 'İKİ KATLI VİLLA KOŞ YETİŞ AL',
    to : 'IlanDetails'
  },
  {
    img : ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphrC3jIJE7bJQQWnzmRLJTdwd8jSfbEoDBw&s',
    'https://i.ytimg.com/vi/hSseX11pVXY/maxresdefault.jpg',
    'https://blog.carettaoto.com.tr/app/uploads/2022/03/2020-porsche-taycan-3.webp',
    ],
    title : 'DÖRT TAKLALI TEMİZ PORSCHE',
    to : 'IlanDetails',
    ozellikler : [
      {
        title : 'Fiyat',
        value : 1500000,
        price : true
      },
      {
        title : 'İlan Tarihi',
        value : '12.09.2023'
      },
      {
        title : 'İlan No',
        value : 1234124214,
        ilanNo : true
      },
      {
        title : 'Marka',
        value : 'Porsche'
      },
      {
        title : 'Seri',
        value : '718'
      },
      {
        title : 'Model',
        value : '718'
      },
      {
        title : 'Yıl',
        value : '2017'
      },
      {
        title : 'Yakıt',
        value : 'Benzin'
      },
      {
        title : 'Vites',
        value : 'Otomatik'
      },
      {
        title : 'Araç Durumu',
        value : 'İkinci El'
      },
      {
        title : 'KM',
        value : 27000
      },
      {
        title : 'Kasa Tipi',
        value : 'Cabrio'
      },
      {
        title : 'Motor Gücü',
        value : '301 - 325 HP'
      },
      {
        title : 'Motor Hacmi',
        value : '3001 - 3500 cm3'
      },
      {
        title : 'Çekiş',
        value : 'Arkadan İtiş'
      },
      {
        title : 'Renk',
        value : 'Füme'
      },
      {
        title : 'Garanti',
        value : 'Evet'
      },
      {
        title : 'Ağır Hasar Kayıtlı',
        value : 'Hayır'
      },
      {
        title : 'Plaka / Uyruk',
        value : 'Türkiye(TR) Plaka'
      },
      {
        title : 'Kimden',
        value : 'Galeriden'
      },
      {
        title : 'Takas',
        value : 'Evet'
      }
    ],
    description : 'Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe  Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe Deneme bir iki üç dört deneme qwewqeqwe',
    creater : 'BARAN MOTORS ETİLER',
    konum : 'İstanbul, Beşiktaş, Nisbetiye Mh.',
    categories : ['Vasıta','Otomobil','Porsche','718','718'],
    createrName : 'Bora B.',
    belgeNo : 12312312,
    degisen : ['Orjinal'],
    properties : [
      {
        title : 'Güvenlik',
        value : 'Belirtilmemiş'
      },
      {
        title : 'İç Donanım',
        value : 'Belirtilmemiş'
      },
      {
        title : 'Dış Donanım',
        value : 'Belirtilmemiş'
      },
      {
        title : 'Multimedya',
        value : 'Belirtilmemiş'
      },
    ]
  },
  {
    img : ['https://i0.shbdn.com/photos/98/47/15/x5_1183984715xvv.jpg'],
    title : 'EGZOZ PATLAMALIK MOBİLET',
    to : 'IlanDetails'
  },
]

export default function Vitrin() {
  const navigation = useNavigation()
  return (
    <ScrollView >
      <View style={styles.containerVitrin}>
      {
        VitrinData.map((item,index)=>(
          <TouchableOpacity key={index} style={styles.containerItem} onPress={()=>{navigation.navigate(item.to, item)}}>
            <View style={styles.image}>
              <Image style={{height : 160, width : 190}} source={{uri : item.img[0]}} />
            </View>
            <View style={styles.text}>
              <Text numberOfLines={1} style={styles.itemTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))
      }
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Tümünü Göster</Text>
        <View style={styles.buttonIcon}>
          <Ionicons size={20} name="chevron-forward-outline" color='#1b69cd'></Ionicons>
        </View>
      </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerVitrin : {
    flexDirection : 'row',
    flexWrap : 'wrap',
  },
  containerItem :{
    width : '47%', 
    borderWidth: 0.2,
    margin : 6,
    marginHorizontal : 6,
    justifyContent : 'center',
    alignItems : 'center',
    height : 200,
    backgroundColor : '#ffffff',
    borderRadius : 2,
    borderColor : '#d8d8d8'
  },
  image: {
    margin : 10,
    borderBottomWidth : 0.2,
    borderColor : '#d8d8d8',
  },
  text : {
    paddingHorizontal : 10,
    marginBottom : 10,
  },
  itemTitle : {
    color : '#252525',
    fontSize : 12
  },
  buttonContainer: {
    flexDirection : 'row',
    marginVertical : 10,
    backgroundColor : 'white',
    width : '100%',
    padding : 10,
    alignItems : 'center',
    justifyContent : 'center',
    borderBottomWidth : 0.2,
    borderTopWidth : 0.2,
    borderColor :'#dadada'
  },
  buttonText : {
    color : '#246eaf',
    fontWeight : '500'
  },
  buttonIcon : {
    position : 'absolute',
    right : 10
  }
})