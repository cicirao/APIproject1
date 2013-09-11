
var musicStyle, isLike;
var styleBlues, styleFolk, stylePop, styleJazz, styleRB, styleRock, styleElectronic;


//************* count the number of styles
function countNum(musicStyle, isLike) { 
for (var i=0; i < myMusic.songs.length; i++) {
     isLike = myMusic.songs[i].isLike;
     if (isLike == true) { 
          for (var j= 0;  j < myMusic.songs.style.length; j++) {
               musicStyle = myMusic.songs[i].style[j];
               switch (musicStyle) {
                    case "Blues":
                         styleBlues ++;
                         break;
                    case "Folk":
                         styleFolk ++;
                         break;
                    case "Pop":
                         stylePop ++;
                         break;
                    case "Jazz":
                         styleJazz ++;
                         break;
                    case "R&B":
                         styleRB ++;
                         break;
                    case "Rock":
                         styleRock ++;
                         break;
                    case "Electronic":
                         styleElectronic ++;
               }
          }   
     }else 
     { continue; } 
}
}

//************* find the largest number
function findFav(styleBlues, styleFolk, stylePop, styleJazz, styleRB, styleRock, styleElectronic) {
var favStyle = Math.max(styleBlues, styleFolk, stylePop, styleJazz, styleRB, styleRock, styleElectronic);
switch (favStyle) {
                    case styleBlues:
                         return "Blues";                  //  return?
                         break;
                    case styleFolk:
                         return "Folk";
                         break;
                    case stylePop:
                         return "Pop";
                         break;
                    case styleJazz:
                         return "Jazz";
                         break;
                    case styleRB:
                         return "R&B";
                         break;
                    case Rock:
                         return "Rock";
                         break;
                    case styleElectronic:
                         return "Electronic";
}
}
