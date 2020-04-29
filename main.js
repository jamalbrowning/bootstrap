/*
  1. Create a collection of 8 ducks
    a. split b/w male/female (not all the same)
    b same with size
    c at least 3 rubber ducks
  2. Print Ducls to Dom
*/

const ducks = [
  {
    color:'white',
    name:'Jerryilia',
    breed:'Aylesbury',
    size:'mediume', // one of : small, medium, large
    temeperament:'wild',
    imageUrl:'https://media.tractorsupply.com/is/image/TractorSupplyCompany/2018-tsc-out-here-aylesbury-duck?$500$',
    gender:'female',
    age: 10,
    isRubber: false,
  },
  {
    color:'Yellow Ish',
    name:'Macey',
    breed:'Saxony',
    size:'small', // one of : small, medium, large
    temeperament:'calm',
    imageUrl:'https://backyardpoultry.iamcountryside.com/wp-content/uploads/sites/3/2019/03/13101535_10206129333771622_1058014788_n.jpg',
    gender:'male',
    age: 15,
    isRubber: false,
  },
  {
    color:'Yellow ',
    name:'Pedro',
    breed:'Suited',
    size:'small', // one of : small, medium, large
    temeperament:'wet',
    imageUrl:'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/261/10460/Wedding-Set-Rubber-Duck-Ad-Line-3__62602.1569352978.jpg?c=2&imbypass=on',
    gender:'male',
    age: 3,
    isRubber: true,
  },
  {
    color:'Yellow ',
    name:'Bernette',
    breed:'Rubber',
    size:'small', // one of : small, medium, large
    temeperament:'dashing',
    imageUrl:'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/261/10460/Wedding-Set-Rubber-Duck-Ad-Line-3__62602.1569352978.jpg?c=2&imbypass=on',
    gender:'female',
    age: 34,
    isRubber: true,
  },
  {
    color:'Black',
    name:'Mark',
    breed:'Pomeranian',
    size:'Large', // one of : small, medium, large
    temeperament:'calm',
    imageUrl:'https://www.mypetchicken.com/images/product_images/Popup/BlackSwedishDucks.jpg',
    gender:'male',
    age: 15,
    isRubber: false,
  },
  {
    color:'Brown',
    name:'Nestera',
    breed:'Alabio',
    size:'medium', // one of : small, medium, large
    temeperament:'calm',
    imageUrl:'https://www.learnnaturalfarming.com/wp-content/uploads/2020/03/Alabio-duck.jpg',
    gender:'female',
    age: 3,
    isRubber: false,
  },
  {
    color:'White',
    name:'larry',
    breed:'Bali',
    size:'small', // one of : small, medium, large
    temeperament:'mean',
    imageUrl:'https://poultrykeeper.com/duck-breeds/bali-ducks/attachment/head-of-bali-r-sadler/',
    gender:'male',
    age: 25,
    isRubber: false,
  },
  {
    color:'White',
    name:'lar',
    breed:'Mallard',
    size:'large', // one of : small, medium, large
    temeperament:'mean',
    imageUrl:'https://www.allaboutbirds.org/guide/assets/photo/60021841-480px.jpg',
    gender:'male',
    age: 28,
    isRubber: false,
  },
];

const printToDom = (selector, textToPrint) => {
  console.log('in printToDom', selector , textToPrint)
  document.querySelector(selector).innerHTML = textToPrint;
}

//shorten this
  const duckCardsBuilder = (array) => {
    let domString = '<div class="row">'
    for (let i = 0; i < array.length; i++){
      domString += `<div class="card border-secondary mb-3 col-4 mt-2 " >
                      <img src="${array[i].imageUrl}" class="card-img-top" alt="${array[i].name}">
                        <div class="card-body">
                          <h5 class="card-title">${array[i].name}</h5>                    
                        </div>
                        <div class="card" style="width: 18rem;">
                          <ul class="list-group list-group-flush">
                             <li class="list-group-item">${array[i].breed}</li>
                            <li class="list-group-item">${array[i].temeperament}</li>
                            <li class="list-group-item">${array[i].age}</li>
                            </ul>
                        </div>
                     </div>`
    
    }
    
    printToDom('#duckCards', domString)
  }
const filterEvent = (event) => {
  const buttonId = event.target.id
  const tempDuckCollection = [];

  if (buttonId === 'all') {
    duckCardsBuilder(ducks);
    return;
  }
    
  for (let i = 0; i < ducks.length; i++){
    if(ducks[i].size === buttonId) {
      tempDuckCollection.push(ducks[i])
    } 
  }
  for (let i = 0; i < ducks.length; i++){
    if(ducks[i].gender === buttonId) {
      tempDuckCollection.push(ducks[i])
    } 
  }
  for (let i = 0; i < ducks.length; i++){
    if(ducks[i].isRubber ) {
      tempDuckCollection.push(ducks[i])
    } 
    if (!ducks[i].isRubber && event.target.id === 'real' ){
      tempDuckCollection.push(ducks[i])
    }
  }
  
  duckCardsBuilder(tempDuckCollection);
}

const clickEvents = () => {
  document.querySelector('#small').addEventListener('click', filterEvent)
  document.querySelector('#medium').addEventListener('click', filterEvent)
  document.querySelector('#large').addEventListener('click', filterEvent)
  document.querySelector('#all').addEventListener('click', filterEvent)
  document.querySelector('#male').addEventListener('click', filterEvent)
  document.querySelector('#female').addEventListener('click', filterEvent)
  document.querySelector('#rubber').addEventListener('click', filterEvent)
  document.querySelector('#real').addEventListener('click', filterEvent)
}

  const init = () => {
    duckCardsBuilder(ducks);
    clickEvents();
  }
init()
