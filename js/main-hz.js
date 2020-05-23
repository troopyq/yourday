let tap = new Audio();
tap.src = "sound/tap.mp3";
tap.volume = 0.04;

var gifAll = 19;
var photoAll1 = 79;
var photoAll2 = 124;
var replace = 'Просто смотрите фото ^_^';


var card1 = '';
var card2 = '';
var slider1 = $('#slider-1');
var slider11;
var slider2 = $('#slider-2');
var gifNum1 = 0; 
var gifNum2 = 0; 
var photoNum1 = 0;
var photoNum2 = 0;


let idAudio = 0;
let musics = $(".div-audio").children("audio");

function playMusic(){  
  console.log(musics[idAudio]);
  musics[idAudio].volume = 0.9;

  if ( musics[idAudio].paused && $(".music-btn").hasClass("music-play")){  
    var music = musics[idAudio].play();
    console.log('play____');

   
  }

  if (music !== undefined) {
     music.then(_ => {
       // Automatic playback started!
       // Show playing UI.
     })
     music.catch(error => {
       // Auto-play was prevented
       // Show paused UI.
     });
   }

 
  musics[idAudio].addEventListener("ended", function(){
    musics[idAudio].pause();
    console.log('next');
    if (idAudio < musics.length - 1  ){
      
      idAudio++;
      console.log(idAudio);
      console.log('________');
      playMusic();
      
    }else { 
      idAudio = 2
      musics[idAudio].setAttribute('loop', 'loop');
      playMusic();

      // console.log('end');
      // idAudio = 0;
      // $(".music-btn").toggleClass("music-play music-pause");
      // return;


      // idAudio--;
      // setTimeout(playMusic, 800);
    }
    
  })
}

$(".music-btn").on("click", playMusic);
$(".music-btn").click( function(){
  

  if ($(".music-btn").hasClass("music-pause")){
    $(".music-btn").toggleClass("music-pause music-play");
    musics[idAudio].play();
    console.log('play');
  }else if($(".music-btn").hasClass("music-play")){
    $(".music-btn").toggleClass("music-play music-pause");
    musics[idAudio].pause();
    console.log('pause');
  }
})


var id1 = 0, id2 = 79;






function renderCard1(i1, slider1){
  id1++;

  photoNum1 += 1;
  // оптимизация - выводим гифки на нечетных карточках
  if (i1 % 2 != 0){
    gifNum1 += 1;
  }
  // повторяем гифки с начала если закончились
  if (gifNum1 > gifAll){
    gifNum1 = 1;
  }
  // заменяем пропущенный текст
  if(text[i1] == undefined){
    text[i1] = replace;
  }

  card1 = `<div id="${id1}" class="card flipper card-next">
              <div class="gif-card"><img src="img/gif/${gifNum1}.gif" alt=""></div>
              <div class="lock lock-close front"><img src="img/lock/lock-close.svg" alt=""></div>
              <div class="card-img back"><img src="img/photo/${photoNum1}.jpg" alt=""></div>
              <div class="card-transparent back back-1"></div>
              <div class="text front"><div class="text_inner"><p>${text[i1]}</p></div></div>
          </div>`;

  slider1.append(card1); 

//добавляем карточку в слайдер 1
// оптимизация - удаляем гифки на четных слайдах
  if (i1 % 2 == 0){
    $(`#${id1} .gif-card img`).remove();
  }
}

// первый счетчик для первого слайдера
// for (let i=1; i <= photoAll1; i++){   //рабочее не оптимизированное
for (var i1=1; i1 <= 4; i1++){
    renderCard1(i1, slider1);
}

gifNum2 = 0; 
photoNum2 = 0;
card2 = '';
// id = 79;


function renderCard2(i2, slider2){
  photoNum2 += 1;
  id2++;
  // оптимизация - выводим гифки на нечетных карточках
  if (i2 % 2 != 0){
    gifNum2 += 1;
  }
  // повторяем гифки с начала если закончились
  if (gifNum2 > gifAll){
    gifNum2 = 1;
  }
  // заменяем пропущенный текст
  if(text2[i2] == undefined){
    text2[i2] = replace;
  }

const card2 = document.createElement('div');
card2.className = 'slick-slide';
card2.setAttribute('data-slick-index', i2 - 1);
card2.setAttribute('aria-hidden', 'true');
card2.setAttribute('tabIndex', '-1');
card2.style.width = '100vw';

// добавляете в него html-разметку
card2.innerHTML =
      `<div>
        <div id="${id2}" class="card flipper card-next">
          <div class="gif-card"><img src="img/gif/${gifNum2}.gif" alt=""></div>
          <div class="lock lock-close front"><img src="img/lock/lock-close.svg" alt=""></div>
          <div class="card-img back"><img src="img/photo/${photoNum2}.jpg" alt=""></div>
          <div class="card-transparent back back-1"></div>
          <div class="text front"><div class="text_inner"><p>${text2[i2]}</p></div></div>
        </div>
      </div>`
;
// добавляете его в разметку слайдера
slider2.append(card2);

// регистрируете в slick, используйте свое имя slickInstance
$("#slider-2").slick("slickAdd",card2);

// оптимизация - удаляем гифки на четных слайдах
  if (i2 % 2 == 0){
    $(`#${id2} .gif-card img`).remove();
  }
}

// второй счетчик для второго слайдера
for (var i2=1; i2 <= 1; i2++){
  renderCard2(i2, slider2);
}

function renderNextCard1(i1, slider11){
  //при моем условии функция запускается
  id1++;

  photoNum1 += 1;
  // оптимизация - выводим гифки на нечетных карточках
  if (i1 % 2 != 0){
    gifNum1 += 1;
  }
  // повторяем гифки с начала если закончились
  if (gifNum1 > gifAll){
    gifNum1 = 1;
  }
  // заменяем пропущенный текст
  if(text[i1] == undefined){
    text[i1] = replace;
  }
  //слайд для добавления в slider11 = $('#slider-1 .slick-list .slick-track');

$("#slider-1").slick("slickAdd", `
     <div class="slick-slide" data-slick-index="${i1-1}" aria-hidden="true" style="width: 100vw;" tabindex="-1">
       <div>
         <div id="${id}" class="card flipper card-next">
          <div class="gif-card"><img src="img/gif/${gifNum1}.gif" alt=""></div>
          <div class="lock lock-close front"><img src="img/lock/lock-close.svg" alt=""></div>
          <div class="card-img back"><img src="img/photo/${photoNum1}.jpg" alt=""></div>
          <div class="card-transparent back back-1"></div>
          <div class="text front"><div class="text_inner"><p>${text[i1]}</p></div></div>
        </div>
      </div>
    </div> 
`);

//   // создаете слайд и сохраняете на него ссылку
// const nextcard11 = document.createElement('div');
// nextcard11.className = 'slick-slide';
// nextcard11.setAttribute('data-slick-index', i1 - 1);
// nextcard11.setAttribute('aria-hidden', 'true');
// nextcard11.setAttribute('tabIndex', '-1');
// nextcard11.style.width = '100vw';

// // добавляете в него html-разметку
// nextcard11.innerHTML =
//       `<div>
//         <div id="${id1}" class="card flipper card-next">
//           <div class="gif-card"><img src="img/gif/${gifNum1}.gif" alt=""></div>
//           <div class="lock lock-close front"><img src="img/lock/lock-close.svg" alt=""></div>
//           <div class="card-img back"><img src="img/photo/${photoNum1}.jpg" alt=""></div>
//           <div class="card-transparent back back-1"></div>
//           <div class="text front"><div class="text_inner"><p>${text[i1]}</p></div></div>
//         </div>
//       </div>`
// ;
// // добавляете его в разметку слайдера
// slider11.append(nextcard11);

// // регистрируете в slick, используйте свое имя slickInstance
// $("#slider-1").slick("slickAdd",nextcard11);

// оптимизация - удаляем гифки на четных слайдах
  if (i1 % 2 == 0){
    $(`#${id1} .gif-card img`).remove();
  }
}



$(".slider .card:first-child").children(".lock").children("img").attr("src", "img/lock/lock-open.svg");
$(".slider .card:first-child").children(".lock").toggleClass('lock-close lock-open');

$(".slider .card").children(".text").hide();
$(".slider .card:first-child").children(".text").show();

$(`#${photoAll1+1}`).children(".lock").children("img").attr("src", "img/lock/lock-close.svg");
$(`#${photoAll1+1}`).children(".lock").toggleClass('lock-open lock-close');

$(".lock img").on("click", function(){
  if ($(`#${photoAll1}`).children(".lock").hasClass("lock-open")){
    $(`#${photoAll1+1}`).children(".lock").toggleClass('lock-close lock-open');
  }
  nextId = $(this).parent().parent().index(".card") + 2;
  thisId = $(this).parent().parent().index(".card");
 

  if ($(this).parent().hasClass("lock-open")){
    tap.play();
    $(this).parent().fadeOut(300);
    $(this).parent().parent().addClass('open');
    $(this).parent().children(".text").addClass('text-none');
    $(`#${nextId}`).children(".lock").toggleClass('lock-close lock-open');
    $(`#${nextId}`).children(".lock").children("img").attr("src", "img/lock/lock-open.svg");
    $(`#${nextId}`).children(".text").show();

  }
  slider11 = $('#slider-1 .slick-list .slick-track');
  if ($(`#${thisId+2}`).children(".lock").hasClass("lock-open")){
    console.log(id1 + ' - add');
    renderNextCard1(i1, slider11);
    i1++;
  }
 
});

