//---創造零食列表的data---
const CreateSnacks = (() => {
  //snack data
  const snacks = [];
//snack class
  class Snack {
    constructor (img,model,price,type,ta,des) {
      this.img = img;
      this.model = model;
      this.price = price;
      this.type = type;
      this.ta = ta;
      this.des = des;
    }
  }

   //snack creation function
  function makeSnack(img = 'https://pse.is/LUJNS', model = '經典',price = 25,
                      type ='蒜味',ta = '全民', des= '1'){
    
    const snack = new Snack(img,
                            model,price,type,ta,des);
    snacks.push(snack);
  }

  //將品名推到array
  function produceSnacks(){
    makeSnack('https://pse.is/LUJNS','經典',25,'原味','全民零食','選用天然豌豆搭配經典不敗蒜味');
    makeSnack('https://pse.is/L8EJD','新品',25,'初戀莓果口味','女生系','酸甜莓果風味，散發滿滿果香');
    makeSnack('https://pse.is/LDA2A','新品',25,'檸檬玫瑰鹽口味','女生系','清新香檸檬結合玫瑰鹽，<br>酸甜鹹香');
    makeSnack('https://pse.is/K4MGV','新品',35,'JUMBO炭燒和牛口味','櫻花系','以炭烤和牛調味，<br>每一口都是極致和牛饗宴');
    makeSnack('https://pse.is/KXWQ6','新品',25,'川霸麻辣口味','豪邁系','正宗川味配方，<br>激起花椒與酥脆的舞蹈');
    makeSnack('https://pse.is/LFJC2','經典',25,'酷辣口味','全民','酥脆札實的爽快口感，辣勁夠味');
    makeSnack('https://pse.is/LJ5YN','經典',25,'山葵口味','櫻花系','山葵哇沙米獨有的嗆香，<br>越吃越上癮');
    makeSnack('https://pse.is/L5N46','經典',25,'鹽味','全民','以天然海鹽提味，<br>更吃的到豌豆的天然滋味');
    makeSnack('https://pse.is/KJXS7','新品',99,'韓式炸雞口味','姨母系','韓式炸雞獨特甜鹹醬料，<br>涮嘴爽讚');
    makeSnack('https://pse.is/KZ2CA','新品',25,'烤香腸口味','夜市系','搭配碳烤香腸，<br>蒜香過癮、酥脆爽口');
  }

  produceSnacks();

  //設定經典和新品吧
  const specialSnacks = snacks.filter((pack) => pack.special === true);


  return {
    snacks,
    specialSnacks
  }
})();


////CHECK
  // console.log(CreateSnacks.snacks,CreateSnacks.specialSnacks);

//---顯示所有商品零食---
const DisplaySnacks = ((CreateSnacks) => {
  //先取得所有的零食[]
  const snacks = CreateSnacks.snacks;
  const inventory = document.querySelector('.inventory-container');
  
  //content loaded
  document.addEventListener('DOMContentLoaded', () => {
  //清空原本網頁上的設定
    inventory.innerHTML = 
      ''
  //將商品零食forEach上去
    let output = '';
    snacks.forEach(pack => {
      output += `
<div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-snack ${pack.model}">
        <div class="card food-card">
          
<div class="card-img-top" style="background-image: url(${pack.img}); background-size: cover;"></div>
          <!--卡身體 -->
          <div class="card-body">
            <div class="food-info d-flex justify-content-between">
              <div class="food-text">
                <h6 class="font-weight-bold">${pack.type}</h6>
                <h6>${pack.des}</h6>
              </div>
              <h5 class="food-value align-self-center py-2 px-3">
                <span class="food-price">${pack.price}</span>元
              </h5>
            </div>
          </div>
          <!--結束卡身體 -->
          <div class="card-footer d-flex justify-content-between">
            <span class="badge badge-warning">${pack.model}</span>
            <span class="badge badge-info">${pack.ta}</span>
          </div>
          
        </div>
      </div>
`
    })
    inventory.innerHTML = output;
  })
})(CreateSnacks);


//---篩選零食種類---
const FilterSnack = ((CreateSnacks) => {
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach((btn) => {
 btn.addEventListener('click', (e) => {
   const value = e.target.dataset.filter;
   const singleSnacks = document.querySelectorAll('.single-snack');
   singleSnacks.forEach(pack => {
     if(value === '全部商品'){
       pack.style.display = 'block';
     } else {
       (!pack.classList.contains(value)) ? pack.style.display = 'none'
       : pack.style.display = 'block';
     }
   })
 })
})
})(CreateSnacks);



//Scroll Reveal STARTS
window.sr = ScrollReveal();
sr.reveal('.navbar', {
duration: 1000,
origin:'bottom'
});
sr.reveal('.question-text-left', {
duration: 3000,
origin:'left',
distance:'600px',
viewFactor: 0.1
});
sr.reveal('.question-text-right', {
duration: 3000,
origin:'right',
distance:'600px',
viewFactor: 0.1
});
sr.reveal('.features', {
duration: 2000,
opacity:0,
origin:'bottom',
viewFactor: 0.5
});
sr.reveal('.contact', {
duration: 2000,
opacity:0,
origin:'bottom',
viewFactor: 0.2
});

document.addEventListener('DOMContentLoaded', () => {
sr.reveal('.single-snack', {
duration: 1500,
opacity:0,
distance:'600px',
origin:'bottom',
viewFactor: 0.2
});
})
//Scroll Reveal ENDS

