import CryptoJS from 'crypto-js';


export const getToken =(user='ur')=>{
    if (typeof window !== 'undefined') {
      const encryptedData = localStorage.getItem(user);
      if (encryptedData) {
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, "missionImposibleHacking");
        const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
       const decryptedObject = JSON.parse(decryptedData);
       return decryptedObject.token
      }else{
        throw new Error("Please Login Again")
      }
    }
    console.log("Token getting failed")
    return null;
  }



  export const getUserId =()=>{
    if (typeof window !== 'undefined') {
      const encryptedData = localStorage.getItem("ur");
      if (encryptedData) {
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, "missionImposibleHacking");
        const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
       const decryptedObject = JSON.parse(decryptedData);

       return decryptedObject.user.id
      }
    }
    console.log("failed to get user id ")
    return null;
  }


