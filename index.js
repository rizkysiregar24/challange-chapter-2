
// No. 1
function changeWord(selectedText, changedText, text) {

  return text.replace(selectedText,changedText); 

}
const kalimat1 = "andini sangat mencintai kamu selamanya";
const kalimat2 = "gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";
console.log(changeWord('mencintai','membenci',kalimat2));
   console.log(changeWord('bromo', 'semeru'))


// No.2
function checkTypeNumber(givenNumber){

if  (typeof givenNumber !== 'number') { 
  return 'error'
} 
else if (givenNumber % 2 === 1){
  return "Ganjil";
}
else if (givenNumber % 2 === 0){
  return "Genap";;

}
}
console.log(checkTypeNumber(1))


// No. 3
function checkEmail(email ){

  var emailValidasi = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (typeof email !== 'string' ) {
  return "ERROR"; 
} else if (email.indexOf("@") == -1 && typeof email == "string") {
  return "ERROR tidak ada simbol @";
} else if (emailValidasi.test(email)) {
  return "VALID";
} else if (emailValidasi.test(email) == false) {
  return "INVALID";
}

  
}
console.log(checkEmail())


// No. 4
 function isValidPassword(password) {
   
   var regularExpression = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  
   if (!regularExpression.test(password)) {
     console.log("password should contain atleast one number and one special character");
     return false;
   } else return true
 }

 console.log(isValidPassword())


// No. 5
function getSplitName(personName) {
 
  
  if (typeof personName !== "string"){
    return 'ERROR : invalid data'
  } 
  var brid = personName.split(' ')
  if (brid.length > 3){
    return 'ERROR : karakter lebih dari 3'
  }else if (brid.length === 3) {
    return {
      firstName:brid[0], middleName:brid[1], lastName:brid[2]
    } 
  } else if (brid.length === 2) {
   return {
     firstName: brid[0],
     middleName: null,
     lastName: brid[1],
   }; 
  } else if (brid.length === 1) {
   return {
     firstName: brid[0],
     middleName: null,
     lastName: null,
   }
  }

}
console.log(getSplitName("Aurora"))
console.log(getSplitName("Dwi Kuncoro"))
console.log(getSplitName("Aldi Daniela Pranata"))
console.log(getSplitName(22));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));


// No 6
function getAngkaTerbesarKedua(num) {
  if (typeof num === "undefined"){
    return 'ERROR : Harus di isi angka Lebih dari 2'
  }
   else if (num <= 1) {
    return "ERORR : angka harus lebih dari 2"
  }
  const urut = num.sort((a,b) => b-a) 
  for (let i = 0; i < urut.length; i++) {
    if (urut[i] !== urut[i + 1]) {
      return urut[i + 1];
    } else {
      return "Error: Harus Angka besar kedua yg berbeda"
    }
  }
}; 

 const dataAngka =[9,4,7,7,4,3,2,2,8]

 console.log(getAngkaTerbesarKedua(dataAngka))
 console.log(getAngkaTerbesarKedua(0))
 console.log(getAngkaTerbesarKedua())

// No 7
function getDataPenjualanPakAldi(data) {
  var total = 0 
  data.forEach(jual => total = total + jual.totalTerjual)
  return total

}
 const dataPenjualanPakAldi = [
   {
     namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
     hargaSatuan: 760000,
     kategori: "Sepatu Sport",
     totalTerjual: 90,
   },
   {
     namaProduct: "Sepatu Warrior Tristan Black Brown High",
     hargaSatuan: 960000,
     kategori: "Sepatu Sneaker",
     totalTerjual: 37,
   },
   {
     namaProduct: "Sepatu Warrior Tristan Maroon High ",
     kategori: "Sepatu Sneaker",
     hargaSatuan: 360000,
     totalTerjual: 90,
   },
   {
     namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
     hargaSatuan: 120000,
     kategori: "Sepatu Sneaker",
     totalTerjual: 90,
   },
 ];
    console.log(getDataPenjualanPakAldi(dataPenjualanPakAldi))