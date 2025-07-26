"use client"
import CryptoJS from 'crypto-js';
// Encryption function
export const encryptAndStore = (data, key) => {
console.log(data)
  if (typeof window !== 'undefined') {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), "missionImposibleHacking");
    
    localStorage.setItem(key, encryptedData);
    return encryptedData.toString();
  }
  return null;
}

// Decryption function
export const decryptAndRetrieve = (key) => {

  if (typeof window !== 'undefined') {
    const encryptedData = localStorage.getItem(key);
    if (encryptedData) {
      const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, "missionImposibleHacking");
      const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedData);
    }else{
      console.log("could not find the user key in local storage")
      return null;
    }
  }
  console.log("decryption failed")
  return null;
}

