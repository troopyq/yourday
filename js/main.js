var gifAll = 19;
var photoAll = 45;

var card = ''
var elem = $('.slider')
var gifNum = 0; 
var photoNum = 0;

for (let i=1; i <= photoAll; i++){
  gifNum += 1;
  photoNum += 1;

  if (gifNum > gifAll){
    gifNum = 1;
  }

  card = `<div class="card">
              <div class="gif-card"><img src="img/gif/${gifNum}.gif" alt=""></div>
              <div class="lock"><img src="img/lock/lock-close.svg" alt=""></div>
              <div class="card-img"><img src="img/photo/${photoNum}.jpg" alt=""></div>
              <p>${text[i]}</p>
            </div>`;
  
  
  elem.append(card);
}
