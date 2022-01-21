import DonutMaker from './DonutMaker';

const paraDonutCount = document.querySelector('#donutCount');
const paraAutoClicker = document.querySelector('#autoClickerCount');
const paraDonutMultiClicker = document.querySelector('#donutMultiCount');
const createdRestBtn = document.querySelector('#resetDonutMaker');
const displayAutoPrice = document.querySelector("#displayAutoPrice");
const displayMultiPrice = document.querySelector("#displayDonutMultiPrice");


const createdDonut = new DonutMaker();

renderPage();

function renderPage() {
  addADonut();
  updateDonutCount();
  autoPrice()
  updateAutoCount();
  multiPrice()
  updatedDonutMultiCount();
}

function updateDonutCount() {
  paraDonutCount.innerText = createdDonut.getDonutCount();
}

function updateAutoCount() {
  paraAutoClicker.innerText = createdDonut.getAutoClickerCount();
}

function updatedDonutMultiCount() {
  paraDonutMultiClicker.innerText = createdDonut.getDonutMultiCount();
}

function autoPrice(){
  displayAutoPrice.innerText = createdDonut.getAutoClickerPrice();
}

function multiPrice(){
  displayMultiPrice.innerText = createdDonut.getDonutMultiPrice();
}

function addADonut() {
  autoPrice();
  multiPrice();

  const createdDonutBtn = document.querySelector('#donutCounter');


  createdDonutBtn.addEventListener('click', () => {
    createdDonut.addDonut();
    updateDonutCount();
   
  });

 
  const createdAutoClickerBtn = document.querySelector('#autoClicker');

  createdAutoClickerBtn.addEventListener('click', () => {
    updateDonutCount();
    createdDonut.buyAutoClicker();
    updateAutoCount();
    autoPrice();
  });

  const createdDonutMultiClickerBtn =document.querySelector('#donutMultiClicker');

  createdDonutMultiClickerBtn.addEventListener('click', () => {
    
    updatedDonutMultiCount();
    createdDonut.buyDonutMultiClicker();
    updateDonutCount();
    multiPrice();
  });

  createdRestBtn.addEventListener('click', () => {
    createdDonut.resetGame();
  });
}
