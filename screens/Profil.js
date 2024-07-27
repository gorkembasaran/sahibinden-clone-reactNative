import { StyleSheet, ScrollView,TouchableOpacity, Text } from 'react-native'
import React, { useContext } from 'react'
import ProfilCategories from '../components/ProfilCategories'
import { AuthContext } from '../context.js/auth-context'

const profilFeature = [
  {
    name : 'İLAN YÖNETİMİ',
    categories : [
      {
        name : 'Yayında Olanlar',
      },
      {
        name : 'Yayında Olmayanlar',
      },
      {
        name : 'İlana QR Kod ile Fotoğraf Ekleme'
      }
    ]
  },
  {
    name : 'MESAJLAR VE BİLGİLENDİRMELER',
    categories : [
      {
        name : 'Mesajlar'
      },
      {
        name : 'Bilgilendirmeler',
      },
      {
        name : 'Ürün Tekliflerim'
      }
    ]
  },
  {
    name : 'FAVORİLER',
    categories : [
      {
        name : 'Favori İlanlar',
      },
      {
        name : 'Favori Aramalar',
      },
      {
        name : 'Favori Satıcılar'
      }
    ]
  },
  {
    name : '',
    categories : [
      {
        name : 'Size Özel İlanlar'
      }
    ]
  },
  {
    name : '',
    categories : [
      {
        name : 'Karşılaştırma Listesi'
      }
    ]
  },
  {
    name : 'ALIŞVERİŞ İŞLEMLERİM',
    categories : [
      {
        name : 'S - Param Güvende',
      },
      {
        name : 'Güvenli E-Ticaret'
      }
    ]
  },
  {
    name : 'HESABIM',
    categories : [
      {
        name : 'Hesap Bilgilerim'
      },
      {
        name : 'Cebinden Onaylı Numaram'
      },
      {
        name : 'İzinlerim'
      }
    ]
  },
  {
    name : 'DİĞER',
    categories : [
      {
        name : 'Ayarlar'
      },
      {
        name : 'Yardım ve İşlem Rehberi'
      },
      {
        name : 'Sorun / Öneri Bildirimi'
      },
      {
        name : 'Hakkında'
      },
      {
        name : 'Kişisel Verilerin Korunması'
      },
      {
        name : 'Çerez'
      }
    ]
  }
]

export default function Profil() {
  const {logout} = useContext(AuthContext)
  return (
    <ScrollView style={styles.container}>
      <ProfilCategories array={profilFeature} ilanName='İLAN YÖNETİMİ' />
      <ProfilCategories array={profilFeature} ilanName='MESAJLAR VE BİLGİLENDİRMELER' />
      <ProfilCategories array={profilFeature} ilanName='FAVORİLER' />
      <ProfilCategories array={profilFeature} ilanName='' />
      <ProfilCategories array={profilFeature} ilanName='ALIŞVERİŞ İŞLEMLERİM' />
      <ProfilCategories array={profilFeature} ilanName='HESABIM' />
      <ProfilCategories array={profilFeature} ilanName='DİĞER' />
      <TouchableOpacity style={styles.exitButton} onPress={logout} >
        <Text style={styles.exitText}>
          Çıkış Yap
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#f2f2f2'
  },
  exitButton : {
    backgroundColor : '#ffff',
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 20,
    marginBottom : 20,
    paddingVertical : 15,
    borderBottomWidth : 0.2,
    borderTopWidth : 0.2,
    borderColor : '#dbdbdb'
    },
  exitText : {
    color : '#d63b1c',
    fontWeight : '500'
  }
})