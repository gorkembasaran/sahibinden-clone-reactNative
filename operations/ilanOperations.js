import axios from 'axios';

export const saveIlan = async (userId, ilanData, addCate) => {
  try {
    const ilan = ilanData;
    const kategoriYolu = `${addCate.join('/')}`;

    // İlanı 'ilanlar' yoluna ekleyin ve oluşturulan benzersiz ID'yi alın
    const ilanResponse = await axios.post(`https://sahibinden-8741c-default-rtdb.firebaseio.com/ilanlar/${kategoriYolu}.json`, ilan);
    const ilanId = ilanResponse.data.name; // Firebase tarafından oluşturulan benzersiz ID

    // Aynı ID'yi 'user-ilanlar' yolunda kullanarak ilanı ekleyin
    await axios.put(`https://sahibinden-8741c-default-rtdb.firebaseio.com/user-ilanlar/${userId}/${ilanId}.json`, ilan);

    console.log('İlan başarıyla eklendi!');
  } catch (error) {
    console.error('İlan eklenirken bir hata oluştu:', error);
  }
};