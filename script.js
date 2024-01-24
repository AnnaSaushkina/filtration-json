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

// Выбор кнопки
let filter = null;
const wrap = document.querySelector('.wrap');
const tShirts = document.querySelector('.tShirts');
const tops = document.querySelector('.tops');
const socks = document.querySelector('.socks');
const jeans = document.querySelector('.jeans');
const trousers = document.querySelector('.trousers');

// Слушатели нажатия кнопки
tShirts.addEventListener('click', () => {
  filter = 'tShirts';
  return filtering(products, filter);
});
tops.addEventListener('click', () => {
  filter = 'tops';
  return filtering(products, filter);
});
socks.addEventListener('click', () => {
  filter = 'socks';
  return filtering(products, filter);
});
jeans.addEventListener('click', () => {
  filter = 'jeans';
  return filtering(products, filter);
});
trousers.addEventListener('click', () => {
  filter = 'trousers';
  return filtering(products, filter);
});


// Создание товара
function display(logo, prodName, color) {
  const newItem = document.createElement('div');
  newItem.classList.add('items');
  newItem.innerHTML = `
  <div class="item ${color}"></div>
    <p>${prodName}</p>`;
  wrap.appendChild(newItem);
}

// Создание названия
function addTextToButton(ID, newText) {
  const btn = document.getElementById(ID);
  btn.innerHTML = newText;  
}
categories.forEach((category) => {
  addTextToButton(category.categoryId.toString(), category.categoryName);
});


// Фильтрация:
function filtering(products, filter) {
  while (wrap.childElementCount > 0) {
    wrap.removeChild(wrap.lastChild);
  }
  products.forEach((switching) => {
    // Фильтрация: Футболки
    if (filter === 'tShirts') {
      
      if (switching.categoryId === 1) {
        const { logo } = switching;
        const prodName = switching.productName;
        const categID = switching.categoryId;
        let color = 'tShirts-color';
        display(logo, prodName, color, categID);
      } else return ;
    }

    // Фильтрация: Майки
    if (filter === 'tops') {
      if (switching.categoryId === 2) {
        const { logo } = switching;
        const prodName = switching.productName;
        const categID = switching.categoryId;
        let color = 'tops-color';
        display(logo, prodName, color, categID);
      } else return;
   
    }

    // Фильтрация:  Носки
    if (filter === 'socks') {
      if (switching.categoryId === 3) {
        const { logo } = switching;
        const prodName = switching.productName;
        const categID = switching.categoryId;
        let color = 'socks-color';
        display(logo, prodName, color, categID);
      } else return;
    }

    // Фильтрация: Джинсы
    if (filter === 'jeans') {
      if (switching.categoryId === 4) {
        const { logo } = switching;
        const prodName = switching.productName;
        const categID = switching.categoryId;
        let color = 'jeans-color';
        display(logo, prodName, color, categID);
      } else return;
    }

    // Фильтрация: Штаны
    if (filter === 'trousers') {
      if (switching.categoryId === 5) {
        const { logo } = switching;
        const prodName = switching.productName;
        const categID = switching.categoryId;
        let color = 'trousers-color';
        display(logo, prodName, color, categID);
      } else return;
    }
  });
}
filtering(products, filter);

