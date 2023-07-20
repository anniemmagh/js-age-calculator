// // 1. ყოველ ხუთ წამში ჰტმლ დოკუმენტშ დაამატებს დივ ტეგს ჰელოუ ვორდის ტექსტით
// function addElement() {
//     setInterval(() => {
//       const div = document.createElement('div');
//       div.textContent = 'hello world';
//       document.body.appendChild(div);
//     }, 2000);
//   }
  
//   addElement();

// function addHelloWorldText() {
//     const container = document.getElementById("helloWorldContainer");
//     const helloWorldText = document.createTextNode("Hello World");
//     container.appendChild(helloWorldText);
// }

// setInterval(addHelloWorldText, 2000);
  


// // 2. დაწერეთ ფუნქცია რომელიც  ღილაკის კლიკზე ცალკე ტებში გახსნის არგუმენტად მიღებულ ურლს

// const button = document.getElementById('button');
// function linkfoo(url){
//     button.addEventListener('click', ()=>{
//         window.open('url', '_blank');
//     })
// }
// linkfoo('https://www.youtube.com/')

// function openURLInTab(url) {
//     window.open(url, "_blank");
// }

// / დავწეროთ ფუქნცია რომელიც არ გამოიტანს გამეორებულ ციფრებს

// let a = ["1", "1", "2", "3", "3", "1"];
// let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
// console.log(unique);

// function uniquenumbers(num){
//     return[...new Set(num)];
// }
// console.log(uniquenumbers([1,2,3,1,1,1,2,2,3,4]))

// function removeextranumbers(inputArray) {
//     const countMap = {};
//     const resultArray = [];
  
//     for (const num of inputArray) {
//       countMap[num] = (countMap[num] || 0) + 1;
//     }
  
//     for (const num of inputArray) {
//       if (countMap[num] === 1) {
//         resultArray.push(num);
//       }
//     }
  
//     return resultArray;
//   }
  
//   const input = ["1", "1", "2", "3", "3", "1"];
//   const result = removeextranumbers(input);
//   console.log(result); // Output: ["2"]
  

// //დაწერეთ ფუნქცია რომელიც  ereis gadaaqcevs objectat



// function convertListToObject(infoList) {
//     const resultObject = {};
  
//     for (const item of infoList) {
//       if (item.name !== "lika") {
//         resultObject[item.name] = item.phone;
//       }
//     }
  
//     return resultObject;
//   }
  
//   const info = [
//     { name: "george", phone: "+995555555" },
//     { name: "alex", phone: "5990202020" },
//     { name: "lika", phone: "599020202" }
//   ];
  
//   const result = convertListToObject(info);
//   console.log(result);
  
// function dataObject(data_obj){
//     let obj = {};
//     data_obj.forEach((item) => {
//         obj[item.name] = item.phone
//     });
//     return obj
// }
// let info = [
//     { name: "george", phone: "+995555555" },
//     { name: "alex", phone: "5990202020" },
//     { name: "lika", phone: "599020202" }
// ]
// console.log(dataObject(info))

// /დაწერეთ ფუნქცია რომელიც არგუმენტად მიღებულ (პროდუქტის სახელი, ფასი, შექმნის თარიღ)
// / დინამიურად დააგენერირებს ჰტმლ ტეგებს და დახატავს დომში




// function generateProductHTML(name, price, createdDate) {

//     const productDiv = document.createElement('div');
//     const nameHeader = document.createElement('h2');
//     nameHeader.textContent = name;
//     const pricePara = document.createElement('p');
//     pricePara.textContent = `Price: $${price}`;
//     const datePara = document.createElement('p');
//     datePara.textContent = `Created Date: ${createdDate}`;
//     productDiv.appendChild(nameHeader);
//     productDiv.appendChild(pricePara);
//     productDiv.appendChild(datePara);
//     return productDiv;
//   }
  
//   const products = [
//     { name: "Product 1", price: 200, created_at: "01-02-2022" }
//   ];
//   products.forEach(product => {
//     const productHTML = generateProductHTML(product.name, product.price, product.created_at);
//     document.body.appendChild(productHTML);
//   });
  


// class user {
//     constructor(name,age,address){
// this.name = name ;
// this.age = age;
// this.address = address;
//     }
// }
// const userName = new user('Ani',21,'tbilisi');
// console.log(userName);

// დაწერეთ ფუნქცია რომელიც მიღებული  prodct_price,product_percentage შემდეგ უკან დააბრუნებს ფასდაკლებულ ფასს

// function applySale(prodct_price,product_percentage){
//     return prodct_price - (prodct_price * product_percentage) /prodct_price
// }
// applySale();
// function applySale(prodct_price, product_percentage) {
//     // Ensure both inputs are valid positive numbers
//     if (typeof prodct_price !== 'number' || typeof product_percentage !== 'number' ||
//         prodct_price <= 0 || product_percentage < 0) {
//       throw new Error('Invalid input. Both prodct_price and product_percentage should be positive numbers.');
//     }
  
//     // Calculate the discount amount
//     const discountAmount = (prodct_price * product_percentage) / 100;
  
//     // Calculate the discounted price
//     const discountedPrice = prodct_price - discountAmount;
  
//     return discountedPrice;
//   }
  
//   const originalPrice = 100;
//   const discountPercentage = 20;
  
//   const discountedPrice = applySale(originalPrice, discountPercentage);
//   console.log("Discounted Price:", discountedPrice); // Output: 80
  

// დავწეროთ ფუნქცია რომელიც
// 1.მიღებული არგუმენტებიდან სიას გაფილტრავს(ატოვებს მხოლოდ პროდუქტებს რომელთა ფასი მეტია 100-ზე
// 2.დასორტავს ფასის მიხედვიტ(პატარადან დიდისკენ)
// 3.ყოველ ელემენტს დაამატებს ახალ ატრიბუტს is_manual:true -ს.
// ინფუთი :[{product_id:1, price:200},{product_id:2, price:50},{product_id:3, price:500}]
// სასურველი შედეგი::[{product_id:1, price:200},{product_id:3, price:500}].
// სასურველია რომ გამოვიყენოთ filter, map, sort მეთოდები გადაბმით(method chainning)

// function filterSortAndAddAttribute(products) {
//     return products
//       .filter(product => product.price > 100)
//       .sort((a, b) => a.price - b.price);
//   }
  
//   const input = [
//     { product_id: 1, price: 200 },
//     { product_id: 2, price: 50 },
//     { product_id: 3, price: 500 }
//   ];
  
//   const desiredResult = filterSortAndAddAttribute(input);
//   console.log(desiredResult);
  

// // დაწერე ფუნქცია რომელიც დააბრუნებს არგუმენტად მიღებული ხარისხების ჯამს.
// // ინფუთი: [{product_id:1,amount:200},{product_id:2,amount:300},{product_id:3,amount:500}]
// // სასურველია გამოვიყენოთ reduce მეთოდი

// function sumAmounts(products) {
//     return products.reduce((acc, product) => acc + product.amount, 0);
//   }
  
//   const input = [
//     { product_id: 1, amount: 200 },
//     { product_id: 2, amount: 300 },
//     { product_id: 3, amount: 500 }
//   ];
  
//   const totalAmount = sumAmounts(input);
//   console.log(totalAmount); // Output: 1000
  

// ///////bolo davaleba valtuaze
// function convertToGEL(products) {
//     const conversionRate = 3.5;
//     const convertedPricesContainer = document.getElementById('converted-prices');

//     products.forEach((product) => {
//       const convertedPrice = product.price_in_usd * conversionRate;
//       const convertedPriceElement = document.createElement('p');
//       convertedPriceElement.textContent = `Product ID: ${product.product_id}, Price in GEL: ${convertedPrice} GEL`;
//       convertedPricesContainer.appendChild(convertedPriceElement);
//     });
//   }

//   // Sample input data
//   const products = [
//     { product_id: 1, price_in_usd: 1200 },
//     { product_id: 2, price_in_usd: 1600 },
//   ];

//   // Call the function to perform the conversion and create dynamic HTML markup
//   convertToGEL(products);