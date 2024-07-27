import { ref, set, get, update, child, push } from 'firebase/database';
import { db } from '../firebase/firebaseConfig'; 

// Kullanıcı verilerini kaydetme veya güncelleme
export const saveOrUpdateUserData = async (userId, userData) => {
  try {
    await set(ref(db, `users/${userId}`), userData);
    console.log('Kullanıcı verileri Realtime Database\'e kaydedildi veya güncellendi');
  } catch (e) {
    console.error('Kullanıcı verileri Realtime Database\'e kaydedilemedi veya güncellenemedi:', e);
  }
}

export const getUserData = async (userId) => {
  try {
    const snapshot = await get(child(ref(db), `users/${userId}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("Kullanıcı verisi bulunamadı");
      return null;
    }
  } catch (e) {
    console.error('Kullanıcı verileri Realtime Database\'den çekilemedi:', e);
    return null;
  }
};

export const addFavorite = async (userId, adId) => {
  try {
    const favoritesRef = ref(db, `users/${userId}/favorites`);
    const newFavoriteRef = push(favoritesRef);
    await set(newFavoriteRef, adId);
    console.log('Favori ilan eklendi');
  } catch (e) {
    console.error('Favori ilan eklenemedi:', e);
  }
}

export const addAd = async (userId, adData) => {
  try {
    const adsRef = ref(db, `users/${userId}/ads`);
    const newAdRef = push(adsRef);
    await set(newAdRef, adData);
    console.log('Yeni ilan eklendi');
  } catch (e) {
    console.error('Yeni ilan eklenemedi:', e);
  }
}

export const updateUserData = async (userId, updates) => {
  try {
    const userRef = ref(db, `users/${userId}`);
    await update(userRef, updates);
    console.log('Kullanıcı verileri güncellendi');
  } catch (e) {
    console.error('Kullanıcı verileri güncellenemedi:', e);
  }
}