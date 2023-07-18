//// 1. ყოველ ხუთ წამში ჰტმლ დოკუმენტშ დაამატებს დივ ტეგს ჰელოუ ვორდის ტექსტით
// function addElement() {
//     setInterval(() => {
//       const div = document.createElement('div');
//       div.textContent = 'hello world';
//       document.body.appendChild(div);
//     }, 2000);
//   }
  
//   addElement();
  


//// 2. დაწერეთ ფუნქცია რომელიც  ღილაკის კლიკზე ცალკე ტებში გახსნის არგუმენტად მიღებულ ურლს

// const button = document.getElementById('button');
// function linkfoo(url){
//     button.addEventListener('click', ()=>{
//         window.open('url', '_blank');
//     })
// }
// linkfoo('https://www.youtube.com/')

/// დავწეროთ ფუქნცია რომელიც არ გამოიტანს გამეორებულ ციფრებს

// let a = ["1", "1", "2", "3", "3", "1"];
// let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
// console.log(unique);

// function uniquenumbers(num){
//     return[...new Set(num)];
// }
// console.log(uniquenumbers([1,2,3,1,1,1,2,2,3,4]))

////დაწერეთ ფუნქცია რომელიც  ereis gadaaqcevs objectat

// let arr= [
//     { name: "george", phone: "+995555555" },
//     { name: "alex", phone: "5990202020" },
//     { name: "lika", phone: "599020202" }
//   ]
//   function arrr(){
//     const obj1 = Object.assign({}, arr);
//     console.log(obj1[0]); 
// }
// function dataObject(data_obj){
//     let obj = {};
//     data_obj.forEach((item) => {
//         obj[item.name] = item.name;
//     });
//     return obj;
// }

// let info = [
//     { name: "george", phone: "+995555555" },
//     { name: "alex", phone: "5990202020" },
//     { name: "lika", phone: "599020202" }
//   ];
  
//   console.log(dataObject(info))

//   function convertArrayToObject() {
//     const obj = arr.reduce((result, item, index) => {
//       if (index === 0 || index === 1) {
//         result[`item${index + 1}`] = item;
//       }
//       return result;
//     }, {});
  
//     console.log(obj);
//   }
  
//   convertArrayToObject();
  

///დაწერეთ ფუნქცია რომელიც არგუმენტად მიღებულ (პროდუქტის სახელი, ფასი, შექმნის თარიღ)
/// დინამიურად დააგენერირებს ჰტმლ ტეგებს და დახატავს დომში

// function dataChild(array){
//     for(const data of array){
        
//     }
// }

// dataChild( [{ name: "Product 1", price: 200, created_at: "01-02-2022" }])

function generateProductHTML(name, price, createdDate) {

    const productDiv = document.createElement('div');
    const nameHeader = document.createElement('h2');
    nameHeader.textContent = name;
    const pricePara = document.createElement('p');
    pricePara.textContent = `Price: $${price}`;
    const datePara = document.createElement('p');
    datePara.textContent = `Created Date: ${createdDate}`;
    productDiv.appendChild(nameHeader);
    productDiv.appendChild(pricePara);
    productDiv.appendChild(datePara);
    return productDiv;
  }
  
  const products = [
    { name: "Product 1", price: 200, created_at: "01-02-2022" }
  ];
  products.forEach(product => {
    const productHTML = generateProductHTML(product.name, product.price, product.created_at);
    document.body.appendChild(productHTML);
  });
  