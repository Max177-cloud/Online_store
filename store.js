const products = [
  { name: "iPhone 14 Pro", price: 120000, category: "Смартфоны", description: "Флагманский смартфон Apple с мощной камерой и производительным чипом A16 Bionic." },
  { name: "Samsung Galaxy S23 Ultra", price: 110000, category: "Смартфоны", description: "Флагман от Samsung с 200 МП камерой и стилусом S Pen." },
  { name: "MacBook Air M2", price: 130000, category: "Ноутбуки", description: "Тонкий и легкий ноутбук Apple с новым процессором M2." },
  { name: "ASUS ROG Strix G15", price: 95000, category: "Ноутбуки", description: "Игровой ноутбук с мощной видеокартой RTX 3070 и экраном 165 Гц." },
  { name: "Sony PlayStation 5", price: 75000, category: "Игровые консоли", description: "Игровая консоль нового поколения с эксклюзивными играми и SSD-диском." },
  { name: "Xbox Series X", price: 70000, category: "Игровые консоли", description: "Флагманская консоль Microsoft с поддержкой 4K-гейминга." },
  { name: "Samsung 55' Neo QLED", price: 95000, category: "Телевизоры", description: "Премиальный телевизор с QLED-матрицей и частотой 120 Гц." },
  { name: "LG OLED C2 65'", price: 140000, category: "Телевизоры", description: "OLED-телевизор с невероятной контрастностью и глубоким черным цветом." },
  { name: "Apple Watch Series 9", price: 45000, category: "Умные часы", description: "Новое поколение умных часов Apple с обновленным процессором." },
  { name: "Xiaomi Mi Band 8", price: 5000, category: "Умные часы", description: "Бюджетный фитнес-браслет с OLED-дисплеем и мониторингом сна." },
  { name: "Dyson V15 Detect", price: 75000, category: "Бытовая техника", description: "Премиальный беспроводной пылесос с лазерной технологией обнаружения пыли." },
  { name: "Tefal TurboPro", price: 12000, category: "Бытовая техника", description: "Мощный утюг с парогенератором для быстрого разглаживания одежды." }
];
const home_products=document.querySelector(`.home_products`);
const select=document.querySelector(`.category`);
function renderCategories(arr){
  const categories=arr.map(el=>el.category)
  const categories1=[...new Set(categories)]
  categories1.forEach(el=>{
    const option=document.createElement(`option`)
    option.textContent=el
    option.value=el
    select.appendChild(option)
  })
}
function renderProducts(arr){
  home_products.innerHTML=``
  home_products.innerHTML=arr.map(el=>{
    return`<div class="cards">
    <h2>${el.name}</h2>
<p>${el.category}</p>
<p>${el.price}</p>
<button class="btn_model" onclick="open_model">Купить</button>
</div>`
  })
  .join(``)
}
renderProducts(products)
renderCategories(products)
 function categoryFilter(arr){
  const selectCategory=select.value
  const filtersArray=arr.filter(el=>el.category===selectCategory ||selectCategory===`all`)
  renderProducts(filtersArray)
 }
select.addEventListener(`change`,()=>categoryFilter(products))
const search=document.querySelector(`.search`);
function searchProducts(arr){
  const value=search.value
  const foundProducts=arr.filter(el=>el.name.toLowerCase().includes(value.toLowerCase()))
  renderProducts(foundProducts)
}
search.addEventListener(`input`,()=>searchProducts(products))



const burger_btn=document.querySelector(`.burger_btn`);
const burger_list=document.querySelector(`.burger_list`);
function openBurger(){
  burger_list.classList.add(`active_burger`)
}
burger_btn.addEventListener(`click`,()=>openBurger())
document.addEventListener(`click`,(event)=>{
  if(!burger_list.contains(event.target) &&event.target!==burger_btn){
    burger_list.classList.remove(`active_burger`)
  }
})
const btn_model=document.querySelectorAll(`.btn_model`);
const model=document.querySelector(`.model`);
btn_model.forEach(el=>{
  el.addEventListener(`click`,()=>model.classList.add(`active_model`))
})
const model_close=document.querySelector(`.model_close`);
function close_model(){
model.classList.remove(`active_model`)
}
model_close.addEventListener(`click`,close_model)
const model_window=document.querySelector(`.model`);
function open_model(){
  model_window.classList.add(`active_model`)
}