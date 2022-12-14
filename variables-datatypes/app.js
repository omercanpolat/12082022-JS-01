console.log("****data types");
//================================== CONST ======================================//
const fs = "cohort 13";
console.log(fs);

const sayi = 20;
console.log(sayi);
console.log(typeof sayi);

const sayi1 = "33";
console.log(sayi1);
console.log(typeof sayi1);

// sayi1 = 55; //!Assignment to constant variable.

const s1 = "hello ";
const s2 = "FS13";
console.log(s1 + s2); //?String Concationation
// JS default olarak + operatöründe eğer değşkenlerden en az birisi string ise yazı olarak bunları birbiri yanına yazar.

//================================== LET ====================================//

let dil = "javascript";
console.log(dil);

dil = "java";
console.log(dil);

dil = true;
console.log(dil, typeof dil);

dil = 3.14;
console.log(dil, typeof dil);

let cohort;
console.log(cohort); //*undefined (tanımsız)

let num1 = 5;
let num2 = 3;
let result = num1 + num2;
console.log(result); //?8

//let num1 = 5;
//let num2 = 3;
//let result = num1 + num2;
//console.log(++result); //?9

//=================================== VAR =========================================//

count = 55;
console.log(count); //! eğer unutup bir şey yazmazsak VAR olarak tanımlar.
// JS ilk kez görmüş olduğu count'u VAR değişkeni olarak tanımladı.

var x = 11;
console.log(x);

//==================================== GLOBAL VE LOKAL ALANLAR ====================//

{
  //! burası lokal bir alandır
  let a = 2;
  const b = 5;
  console.log(a, b); // 2 5
}

//! A VE B BU ALANDATANIMLI DEĞİLDİR.
console.log(a, b); // error

//============================

{
  //! burası lokal bir alandır
  var c = 99;
  console.log(c); // 99
}

//! c ALANDA TANIMLI olur. VAR yüzünden. VAR ile tanımlanan bir değişken sürekli GLOBAL olur, her yerden erişilebilir.
console.log(c); // 99


//*
