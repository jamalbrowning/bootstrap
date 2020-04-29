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
    size:'small', // one of : small, medium, large
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
    let domString = ''
    for (let i = 0; i < array.length; i++){
      domString += `<div class= "${array[i].breed}" id = "duck">
                      <img src="${array[i].imageUrl}" alt="${array[i].name} ">
                      <h3>${array[i].name}</h3>
                      <h3>${array[i].breed}</h3>
                      <h3>${array[i].size}</h3>
                      <h3>${array[i].temeperament}</h3>
                      <h3>${array[i].gender}</h3>
                      <h3>${array[i].age}</h3>
                      <h3>${array[i].isRubber}</h3>
                    </div>`;
    }
    printToDom('#duckCards', domString)
  }

  const init = () => {
    duckCardsBuilder(ducks)
  }
init()
