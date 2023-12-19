const products = [
  { productId: 1, productName: 'Товар 1', categoryId: 1 },
  { productId: 2, productName: 'Товар 2', categoryId: 2 },
  { productId: 3, productName: 'Товар 3', categoryId: 3 },
  { productId: 4, productName: 'Товар 4', categoryId: 4 },
  { productId: 5, productName: 'Товар 5', categoryId: 5 },
  { productId: 6, productName: 'Товар 6', categoryId: 1 },
  { productId: 7, productName: 'Товар 7', categoryId: 2 },
  { productId: 8, productName: 'Товар 8', categoryId: 3 },
  { productId: 9, productName: 'Товар 9', categoryId: 4 },
  { productId: 10, productName: 'Товар 10', categoryId: 5 },
  { productId: 11, productName: 'Товар 11', categoryId: 1 },
  { productId: 12, productName: 'Товар 12', categoryId: 2 },
  { productId: 13, productName: 'Товар 13', categoryId: 3 },
  { productId: 14, productName: 'Товар 14', categoryId: 4 },
  { productId: 15, productName: 'Товар 15', categoryId: 5 },
  { productId: 16, productName: 'Товар 16', categoryId: 1 },
  { productId: 17, productName: 'Товар 17', categoryId: 2 },
  { productId: 18, productName: 'Товар 18', categoryId: 3 },
  { productId: 19, productName: 'Товар 19', categoryId: 4 },
  { productId: 20, productName: 'Товар 20', categoryId: 5 },
  { productId: 21, productName: 'Товар 21', categoryId: 1 },
  { productId: 22, productName: 'Товар 22', categoryId: 2 },
  { productId: 23, productName: 'Товар 23', categoryId: 3 },
  { productId: 24, productName: 'Товар 24', categoryId: 4 },
  { productId: 25, productName: 'Товар 25', categoryId: 5 },
];

const categories = [
  { categoryId: 1, categoryName: 'Футболки' },
  { categoryId: 2, categoryName: 'Майки' },
  { categoryId: 3, categoryName: 'Носки' },
  { categoryId: 4, categoryName: 'Джинсы' },
  { categoryId: 5, categoryName: 'Брюки' },
];


//Выбираем элементы
let filter = null;
const btnPanel = document.querySelector('.btn-panel');
const wrapper = document.querySelector('.wrapper');


//Создаем содержимое панели с кнопками
function createBtn(){
  for (let i = 0; i < categories.length; i++){
    const categName = categories[i].categoryName; 
    const newBtn = document.createElement('button');
    newBtn.classList.add('btn-panel__btn');
    newBtn.innerHTML = categName;
    newBtn.id = [i + 1];
    btnPanel.appendChild(newBtn);
  }
}
createBtn()

//создаем кнопку которую будем слушать
const btnOne = document.getElementById(1);
const btnTwo = document.getElementById(2);
const btnThree = document.getElementById(3);
const btnFour = document.getElementById(4);
const btnFive = document.getElementById(5);

//Слушаем кнопки
btnOne.addEventListener('click', ()  => {
  filter = 'btnOne';
  return filt(products, filter);
});
btnTwo.addEventListener('click', ()  => {
  filter = 'btnTwo';
  return filt(products, filter);
});
btnThree.addEventListener('click', ()  => {
  filter = 'btnThree';
  return filt(products, filter);
});
btnFour.addEventListener('click', ()  => {
  filter = 'btnFour';
  return filt(products, filter);
});
btnFive.addEventListener('click', ()  => {
  filter = 'btnFive';
  return filt(products, filter);
});






//Создаем товар, который будем фильтровать.

function createItem(itemText) {
    let item = document.createElement('div');
    item.classList.add('wrapper__item');
    item.innerHTML = `<p>${itemText}</p>`;

    wrapper.appendChild(item);
  }


// Создаем фильтрацию
function filt(products, filter) {
  while (wrapper.childElementCount > 0) {
    wrapper.removeChild(wrapper.lastChild);
  }
  for (i = 0; i < products.length; i++) {
    switch(products[i].categoryId) {
      case 1:
        if (filter === 'btnOne' && products[i].categoryId === 1) {
          let itemText = products[i].productName;
          createItem(itemText);
        } break;
      case 2:
        if (filter === 'btnTwo' && products[i].categoryId === 2) {
          let itemText = products[i].productName;
          createItem(itemText);
        } break;  
      case 3:
        if (filter === 'btnThree' && products[i].categoryId === 3) {
          let itemText = products[i].productName;
          createItem(itemText);
        } break;
      case 4:
        if (filter === 'btnFour' && products[i].categoryId === 4) {
          let itemText = products[i].productName;
          createItem(itemText);
        } break; 
      case 5:
        if (filter === 'btnFive' && products[i].categoryId === 5) {
          let itemText = products[i].productName;
          createItem(itemText);
        } break;
  }  
}
}
filt(products, filter)






// // выбираем кнопку
// let filter = null;
// const wrapper = document.querySelector('.wrapper');
// const btnPanel = document.querySelector('.btn-panel');


// // создаем btn
// function createBtn() {
//   for (let i = 0; i < categories.length; i++) {
//     const categName = categories[i].categoryName;
//     const newBtn = document.createElement('button');
//     newBtn.classList.add('btn-panel__btn');
//     newBtn.id = [i + 1];
//     newBtn.innerHTML = categName;
//     btnPanel.appendChild(newBtn);
//   }
// }
// createBtn();


// // выбираем кнопку btn
// const checkBtnOne = document.getElementById(1);
// const checkBtnTwo = document.getElementById(2);
// const checkBtnThree = document.getElementById(3);
// const checkBtnFour = document.getElementById(4);
// const checkBtnFive = document.getElementById(5);


// // слушаем/ Нажимаем на кнопку
// checkBtnOne.addEventListener('click', () => {
//   filter = 'checkBtnOne';
//   return filtProdId(products, filter);
// });
// checkBtnTwo.addEventListener('click', () => {
//   filter = 'checkBtnTwo';
//   return filtProdId(products, filter);
// });
// checkBtnThree.addEventListener('click', () => {
//   filter = 'checkBtnThree';
//   return filtProdId(products, filter);
// });
// checkBtnFour.addEventListener('click', () => {
//   filter = 'checkBtnFour';
//   return filtProdId(products, filter);
// });
// checkBtnFive.addEventListener('click', () => {
//   filter = 'checkBtnFive';
//   return filtProdId(products, filter);
// });


// // создаем товар
// function createItem(text) {
//   const newItem = document.createElement('div');
//   newItem.classList.add('wrapper__item');
//   newItem.innerHTML =  `
//   <div class="item"><p>${text}</p></div>`;
//   wrapper.appendChild(newItem);
// }


// // фильтруем товар
// function filtProdId(products, filter) {
//   while (wrapper.childElementCount > 0) {
//     wrapper.removeChild(wrapper.lastChild)
//   }
//   for (let i = 0; i < products.length; i++) {
//     switch (products[i].categoryId) {
//       case 1:
//         if (filter === 'checkBtnOne' && products[i].categoryId === 1){
//           const text = products[i].productName;
//           createItem(text);
//         } break;
//       case 2: 
//           if (filter === 'checkBtnTwo' && products[i].categoryId === 2) {
//           const text = products[i].productName;
//           createItem(text);
//         } break;
//       case 3: 
//         if (filter === 'checkBtnThree' && products[i].categoryId === 3) {
//         const text = products[i].productName;
//         createItem(text);
//       } break;
//       case 4: 
//           if (filter === 'checkBtnFour' && products[i].categoryId === 4) {
//           const text = products[i].productName;
//           createItem(text);
//         } break;
//       case 5: 
//           if (filter === 'checkBtnFive' && products[i].categoryId === 5) {
//           const text = products[i].productName;
//           createItem(text);
//         } break;

//     }
//   }
// }
// filtProdId(products, filter);









