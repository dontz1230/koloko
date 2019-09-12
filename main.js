//---�гy�s���C����data---
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
      function makeSnack(img = 'https://pse.is/LUJNS', model = '�g��',price = 25,
                          type ='�[��',ta = '����', des= '1'){
        
        const snack = new Snack(img,
                                model,price,type,ta,des);
        snacks.push(snack);
      }

      //�N�~�W����array
      function produceSnacks(){
        makeSnack('https://pse.is/LUJNS','�g��',25,'���','�����s��','��ΤѵM�ܨ��f�t�g�夣�ѻ[��');
        makeSnack('https://pse.is/L8EJD','�s�~',25,'���ʲ��G�f��','�k�ͨt','�Ĳ����G�����A���o�����G��');
        makeSnack('https://pse.is/LDA2A','�s�~',25,'�f�c�����Q�f��','�k�ͨt','�M�s���f�c���X�����Q�A<br>�Ĳ��Э�');
        makeSnack('https://pse.is/K4MGV','�s�~',35,'JUMBO���N�M���f��','���t','�H���N�M���ը��A<br>�C�@�f���O���P�M���W�b');
        makeSnack('https://pse.is/KXWQ6','�s�~',25,'�t�Q�»��f��','���ڨt','���v�t���t��A<br>�E�_��ԻP�p�ܪ��R��');
        makeSnack('https://pse.is/LFJC2','�g��',25,'�Ż��f��','����','�p�ܥ��ꪺ�n�֤f�P�A���l����');
        makeSnack('https://pse.is/LJ5YN','�g��',25,'�s���f��','���t','�s���z�F�̿W�����死�A<br>�V�Y�V�W�}');
        makeSnack('https://pse.is/L5N46','�g��',25,'�Q��','����','�H�ѵM���Q�����A<br>��Y����ܨ����ѵM����');
        makeSnack('https://pse.is/KJXS7','�s�~',99,'���������f��','�����t','���������W�S������ơA<br>�R�L�n�g');
        makeSnack('https://pse.is/KZ2CA','�s�~',25,'�N���z�f��','�]���t','�f�t�үN���z�A<br>�[���L�}�B�p�ܲn�f');
      }

      produceSnacks();

      //�]�w�g��M�s�~�a
      const specialSnacks = snacks.filter((pack) => pack.special === true);


      return {
        snacks,
        specialSnacks
      }
    })();


    ////CHECK
      // console.log(CreateSnacks.snacks,CreateSnacks.specialSnacks);

//---��ܩҦ��ӫ~�s��---
const DisplaySnacks = ((CreateSnacks) => {
      //�����o�Ҧ����s��[]
      const snacks = CreateSnacks.snacks;
      const inventory = document.querySelector('.inventory-container');
      
      //content loaded
      document.addEventListener('DOMContentLoaded', () => {
      //�M�ŭ쥻�����W���]�w
        inventory.innerHTML = 
          ''
      //�N�ӫ~�s��forEach�W�h
        let output = '';
        snacks.forEach(pack => {
          output += `
 <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-snack ${pack.model}">
            <div class="card food-card">
              
<div class="card-img-top" style="background-image: url(${pack.img}); background-size: cover;"></div>
              <!--�d���� -->
              <div class="card-body">
                <div class="food-info d-flex justify-content-between">
                  <div class="food-text">
                    <h6 class="font-weight-bold">${pack.type}</h6>
                    <h6>${pack.des}</h6>
                  </div>
                  <h5 class="food-value align-self-center py-2 px-3">
                    <span class="food-price">${pack.price}</span>��
                  </h5>
                </div>
              </div>
              <!--�����d���� -->
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


//---�z��s������---
const FilterSnack = ((CreateSnacks) => {
   const filterBtns = document.querySelectorAll('.filter-btn');
   filterBtns.forEach((btn) => {
     btn.addEventListener('click', (e) => {
       const value = e.target.dataset.filter;
       const singleSnacks = document.querySelectorAll('.single-snack');
       singleSnacks.forEach(pack => {
         if(value === '�����ӫ~'){
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

