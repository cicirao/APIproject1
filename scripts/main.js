//************* how many songs. use object instead of variables
document.getElementById("num").innerHTML = myMusic.length;

var musicStyle, isLike;
var styleScores={
  Blues:0,
  Folk:0,
  Pop:0,
  Jazz:0,
  'R&B':0,
  Rock:0,
  Electronic:0
};

countNum();
$("#folk").html(findFav().toUpperCase());
fillDayList();

//************* count the number of styles. by object.
function countNum() {
  for (var i=0; i < myMusic.length; i++) {
    isLike = myMusic[i].isLike;
    if (isLike == true) {
      for (var j= 0;  j < myMusic[i].musicStyle.length; j++) {
        musicStyle = myMusic[i].musicStyle[j];
        if ($.isNumeric(styleScores[musicStyle])) {
          styleScores[musicStyle]++;
        }
      }
    }else
    { continue; }
  }
}

//************* find the fav style by sort.
function findFav(){
  return sortKeys(styleScores)[6];
}

//************* find the day by .each().
function fillDayList() {
  var dayItems = $('#infolist .day-item');
  $.each(myMusic, function(i, music) {
    var day = music.date.getDay();
    dayItems.eq(day).find('ul').append(getMusicItem(music));
  })
}
//************* fill music list 
function getMusicItem(music) {
  var dayTemplate = [
    '<li>',
    '<div class="songinfo">',
      '<div class="coverpage"></div>',
      '<h3>TITLE</h3>',
      '<h5>YEAR</h5>',
      '<h4>SINGER</h4>',
    '</div>',
    '<div class="heart"></div>',
    '<div class="musicstyle">MUSIC_STYLE</div>',
    '</li>',
  ].join('');

  var musicItem =
    $(dayTemplate
      .replace('TITLE', music.songName)
      .replace('YEAR', music.year)
      .replace('SINGER', music.singer.join(','))
      .replace('MUSIC_STYLE', music.musicStyle.join('/'))
     );

  musicItem
    .find('.coverpage').css('background-image', music.coverUrl)
  .end().find('.heart').css('background', heartBg);

  function heartBg(music) {
    var file = music.isLike ? 'like' : 'unlike'
    return 'url(imgs/' + file + '.png) no-repeat'
  }

  return musicItem;
}

//*************  sort songs
function objToArr(obj) {
  var arr = [];
  $.each(obj, function(key, value) {
    arr.push({ key: key, value: value })
  });
  return arr;
}

function sortKeys(scoreObj) {
  var scoreArr = objToArr(scoreObj);
  var sortArr = scoreArr.sort(function(obj) {
    return obj.value;
  })
  return $.map(sortArr, function(obj) {
    return obj.key;
  })
}