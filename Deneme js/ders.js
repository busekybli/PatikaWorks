
let price= 100
let tax= 0.18
let priceTax = price * tax
let total = price + priceTax
console.log (
    "Fiyat:",price,
    "KDV Orani:", tax,
    "KDV Tutari:", priceTax ,
    "Fiyat: ", total
)

let stringNumber ="11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
console.log("Number Constructor icine bilgi gönderildi:", Number("111"))

//arttırma azaltma işlemleri:
let counter = 320
counter = counter + 1 // uzun yontem
counter += 1;
counter++;
console.log (counter)

// boolean 

let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11") // true
Boolean("0") // true
Boolean("") // false 

userName = "user"
console.log("User Name:", Boolean(userName))

//veri türünü öğrenmek typeof:
let price = 111
let stringPrice ="111"
let hasaPassword = true 

console.log(
    "price ",
    typeof(price)
)

console.log(
    "stringPrice: ",
    typeof(stringPrice)
)
console.log(
    "hasPassword ",
    typeof(hasPassword)
)
// string bilgileri int'e donusturmek
let number1 = "11"
number1= parseInt(number1)
console.log("number1:", number1,typeof(number1))
//number veri tipinden string'e donusturmek:
let number2 = 55
number2 = number2.toString()
console.log(number2,typeof(number2))
//dizi (Array) kullanımı 
let domain ="kodluyoruz"
let isActive = false
let items = [15, 25, 35, isActive, domain]
console.log(items)

let emptyArray = [] // bos list

// Array içindeki eleman/öge sayısını öğrenmek
console.log(
    items.length
)
// Array icindeki ilk elamının cagrılması 
console.log(items[0] )
// Array icindeki son elamanın cagrılması
console.log(items[items.length -1] ) 
// Array icindeki ortadaki elemanin cagirilmasi
console.log(
    "ortadaki :",
    items[ Math.floor(items.length /2) ]
)


