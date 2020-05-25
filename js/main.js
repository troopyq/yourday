$(".slider").hide();

//получаю аудио и создаю объект звука нажатия на слайд
let tap = new Audio();
tap.src = "sound/tap.mp3";
tap.volume = 0.04;


// инициализирую количество фото и настройки
var gifAll = 19, photoAll1 = 86, photoAll2 = 129;
var replace = 'Просто смотрите фото ^_^';
var gifNum1 = 0, gifNum2 = 0, photoNum1 = 0, photoNum2 = 0; 
var id1 = 0, id2 = 86;

// пустышка и id слайда
var card1 = '', card2 = '';
var slider1 = $('#slider-1');
var slider2 = $('#slider-2');

// инициализирую аудио
let idAudio = 0;
let musics = $(".div-audio").children("audio");

function playMusic(){  
  // какая песня сейчас будет играть
  console.log(musics[idAudio]);
  // убавляю немного громкость
  musics[idAudio].volume = 0.9;

  // проверяю, играет ли сейчас музыка, включается когда не была нажата кнопка в первый раз
  //включает автоматически музыку при конце предыдущей 
  if ( musics[idAudio].paused && $(".music-btn").hasClass("music-play")){  
    var music = musics[idAudio].play();
  }
// какая то функция чтобы проверяла загрузилась ли музыка
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

 // ждет когда музыка закончится чтобы включить следующую 
  musics[idAudio].addEventListener("ended", function(){
    musics[idAudio].pause();
    console.log('next');
    // проверяет, есть ли следующий трек
    if (idAudio < musics.length - 1  ){
      
      idAudio++;
      console.log(idAudio);
      playMusic();
      // если нет то зацикливает 3-ю музыку
    }else { 
      idAudio = 2
      musics[idAudio].setAttribute('loop', 'loop');
      playMusic();

    }
    
  })
}
// запускает музыку
$(".music-btn").on("click", playMusic);
// функция для включения выключения музыки покнопке и изменения стиля
$(".music-btn").click( function(){
  // скрываю подсказку
  $(".popup").fadeOut(500);
  // проверяю стоит ли музыка на паузе, если да то включаю музыку
  if ($(".music-btn").hasClass("music-pause")){
    $(".music-btn").toggleClass("music-pause music-play");
    musics[idAudio].play();
    console.log('play');
    // если она играет, то выключаю
  }else if($(".music-btn").hasClass("music-play")){
    $(".music-btn").toggleClass("music-play music-pause");
    musics[idAudio].pause();
    console.log('pause');
  }
})




// -----------------------------------
// первый счетчик для первого слайдера
for (let i=1; i <= 2; i++){
  id1++;
  photoNum1 += 1;
  // оптимизация - выводим гифки на нечетных карточках
  if (i % 2 != 0){
    gifNum1 += 1;
  }
  // повторяем гифки с начала если закончились
  if (gifNum1 > gifAll){
    gifNum1 = 1;
  }
  // заменяем пропущенный текст
  if(text[id1] == undefined){
    text[id1] = replace;
  }
  card1 = `
             <div id="${id1}" class="card flipper card-next">
               <div class="gif-card"><img src="img/gif/${gifNum1}.gif" alt=""></div>
               <div class="lock lock-close front"><img src="img/lock/lock-close.svg" alt=""></div>
               <div class="card-img back"><img src="img/photo/ (${photoNum1}).jpg" alt=""></div>
               <div class="card-transparent back back-1 slick-arrow"></div>
               <div class="text front"><div class="text_inner"><p>${text[id1]}</p></div></div>
             </div>
           `;
  
   slider1.append(card1);   //добавляем карточку в слайдер 1

  // оптимизация - удаляем гифки на четных слайдах
  if (id1 % 2 == 0){
    $(`#${id1} .gif-card img`).remove();
  }
}

// -----------------------------------
// второй счетчик для второго слайдера
for (let i=1; i <= 2; i++){
  photoNum2 += 1;
  id2++;
  // оптимизация - выводим гифки на нечетных карточках
  if (id2 % 2 != 0){
    gifNum2 += 1;
  }
  // повторяем гифки с начала если закончились
  if (gifNum2 > gifAll){
    gifNum2 = 1;
  }
  // заменяем пропущенный текст
  if(text2[i] == undefined){
    text2[i] = replace;
  }

  card2 = `
            <div id="${id2}" class="card flipper card-next">
              <div class="gif-card"><img src="img/gif/${gifNum2}.gif" alt=""></div>
              <div class="lock lock-close front"><img src="img/lock/lock-close.svg" alt=""></div>
              <div class="card-img back"><img src="img/photo-2/ (${photoNum2}).jpg" alt=""></div>
              <div class="card-transparent back back-2 slick-arrow"></div>
              <div class="text front"><div class="text_inner"><p>${text2[i]}</p></div></div>
            </div>
          `;
  
  slider2.append(card2);  //добавляем карточку в слайдер 2
   // оптимизация - удаляем гифки на четных слайдах
  if (id2 % 2 == 0){
    $(`#${id2} .gif-card img`).remove();
  }
}

//------------------------------------------------------------------------
// -----------------------------------
// функция для динамического создания слайдов в 1 слайдер
function renderNextCard1(){
  id1++;
  photoNum1 += 1;
  // оптимизация - выводим гифки на нечетных карточках
  if (id1 % 2 != 0){
    gifNum1 += 1;
  }
  // повторяем гифки с начала если закончились
  if (gifNum1 > gifAll){
    gifNum1 = 1;
  }
  // заменяем пропущенный текст
  if(text[id1] == undefined){
    text[id1] = replace;
  }

  card1 = `<div class="slick-slide" data-slick-index="${id1-1}" aria-hidden="true" style="width: 100vw;" tabindex="-1">
        <div>
          <div id="${id1}" class="card flipper card-next">
           <div class="gif-card"><img src="img/gif/${gifNum1}.gif" alt=""></div>
           <div class="lock lock-close front"><img src="img/lock/lock-close.svg" alt=""></div>
           <div class="card-img back"><img src="img/photo/ (${id1}).jpg" alt=""></div>
           <div class="card-transparent back back-1 slick-arrow" aria-disabled="false"></div>
           <div class="text front"><div class="text_inner"><p>${text[id1]}</p></div></div>
         </div>
       </div>
     </div> `;
  // возвращаем слайд
  return card1;
}

// -------------------------------------------------------
// -----------------------------------

// функция для динамического создания слайдов во 2 слайдер
function renderNextCard2(){
  id2++;
  photoNum2 += 1;
  // оптимизация - выводим гифки на нечетных карточках
  if (id2 % 2 != 0){
    gifNum2 += 1;
  }
  // повторяем гифки с начала если закончились
  if (gifNum2 > gifAll){
    gifNum2 = 1;
  }
  // заменяем пропущенный текст
  if(text2[id2-id1] == undefined){
    text2[id2-id1] = replace;
  }

  card2 = `<div class="slick-slide" data-slick-index="${id2-1}" aria-hidden="true" style="width: 100vw;" tabindex="-1">
        <div>
          <div id="${id2}" class="card flipper card-next">
           <div class="gif-card"><img src="img/gif/${gifNum2}.gif" alt=""></div>
           <div class="lock lock-close front"><img src="img/lock/lock-close.svg" alt=""></div>
           <div class="card-img back"><img src="img/photo-2/ (${id2-id1}).jpg" alt=""></div>
           <div class="card-transparent back back-2 slick-arrow" aria-disabled="false"></div>
           <div class="text front"><div class="text_inner"><p>${text2[id2-id1]}</p></div></div>
         </div>
       </div>
     </div> `;
  // возвращаем слайд 
  return card2;
}

// -------------------------------------------------------
// -----------------------------------

// функция когда кликают по замку
// проверяет открыты ли замки, создает анимации слайдов и динамическое добавление
function lockClick(){
  // если последний слайд 1 слайдера открыт, то открываем второй слайдер
  if ($(`#${photoAll1}`).children(".lock").hasClass("lock-open")){
    $(`#${photoAll1+1}`).children(".lock").toggleClass('lock-close lock-open');
  }
  nextId = $(this).parent().parent().index(".card") + 2;
  // console.log(nextId)
  
  // проверяем открыт ли замок 
  if ($(this).parent().hasClass("lock-open") || $(this).attr("src") == "img/lock/lock-open.svg"){
    $(this).parent().parent().addClass('open');
    // $(this).parent().fadeOut(300);
    setTimeout(() => tap.play(), 260)
    // скрываем текст при открытии слайда
    $(this).parent().children(".text").addClass('text-none');
    // открываем следующий замок
    $(`#${nextId}`).children(".lock").removeClass('lock-close');
    $(`#${nextId}`).children(".lock").addClass('lock-open');
    // $(`#${nextId}`).children(".lock").toggleClass('lock-close lock-open');
    $(`#${nextId}`).children(".lock").children("img").attr("src", "img/lock/lock-open.svg");
    // показываем текст к след слайду
    $(`#${nextId}`).children(".text").show();
  };
  
  // динамически добавляем слайды если следующий замок открыт к 1 слайдеру
  setTimeout(() => {
    if($(`#${nextId}`).children(".lock").hasClass("lock-open") && nextId + 3 <= id2){
      // вроде как при перелистываении фиксирует позицию
      $('#slider-1').slick('setPosition');
       // удаляем четных слайдах гифки
      if (id1 % 2 == 0){
        $(`#${id1} .gif-card img`).remove();
      }
      //рендерим слайд в 1 слайдер
      setTimeout(()=> {$('#slider-1').slick('slickAdd', renderNextCard1());} ,1000);  //ставим таймер в 1200 чтобы работала анимация
    } //условие проверки нужно ли добавлять слайд
  }, 0)

  // динамически добавляем слайды если следующий замок открыт к 2 слайдеру
  setTimeout(() => {
    if ($(`#${id2 - 1}`).children(".lock").hasClass("lock-open") && (id2 - id1 + 1) <= photoAll2){
      // вроде как при перелистываении фиксирует позицию
      $('#slider-2').slick('setPosition');
      // удаляем четных слайдах гифки
      if (id2 % 2 == 0){
        $(`#${id2} .gif-card img`).remove();
      } 
      // рендерим следующий слайд во 2 слайдер
      setTimeout(() => {$('#slider-2').slick('slickAdd', renderNextCard2());}, 1200);  //ставим таймер в 1200 чтобы работала анимация
      
    }//условие проверки нужно ли добавлять слайд
  },200)


}


//открываем замок для первых слайдов в слайдере 
$(".slider .card:first-child").children(".lock").children("img").attr("src", "img/lock/lock-open.svg");
$(".slider .card:first-child").children(".lock").toggleClass('lock-close lock-open');

// скрываем ко всем слайдам текст и показываем только для перваых в слайдере
$(".slider .card").children(".text").hide();
$(".slider .card:first-child").children(".text").show();

// закрываем во втором слайдере замок 
$(`#${photoAll1+1}`).children(".lock").children("img").attr("src", "img/lock/lock-close.svg");
$(`#${photoAll1+1}`).children(".lock").toggleClass('lock-open lock-close');

// отслеживаем, когда на замок нажали и выполняем функцию проверки
$('body').on("click", ".lock img", lockClick);

// добавляем возможность литсать к след слайдам к динамически добавленным слайдам для 1 слайдера
$("#slider-1").on("click", ".back-1", ()=>{
  $("#slider-1").slick("slickNext");
})
// добавляем возможность литсать к след слайдам к динамически добавленным слайдам для 1 слайдера
$("#slider-2").on("click", ".back-2", ()=>{
  $("#slider-2").slick("slickNext");
})
