var arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
var checkArr = [];
var cheakArrId = [];
var Count = 0;
function newGame(arr) {
  var randomIndex;
  var temp;
  for (var i = arr.length - 1; i > 0; i--) {
    randomIndex = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  var output = "";
  for (var i = 0; i < arr.length; i++) {
    output =
      '<div id="' + i + '" onclick="clicked(this,\'' + arr[i] + "')\"></div>";
    $(".main").append(output);
  }
}
newGame(arr);

//addElem();
//checked the clicked
function clicked(card, val) {
  if (card.innerHTML == "" && checkArr.length < 2) {
    card.innerHTML = val;

    console.log((card.innerHTML = val));
    if (checkArr.length == 0) {
      checkArr.push(val);
      cheakArrId.push(card.id);
      console.log(checkArr);
    } else if (checkArr.length == 1 && card.id !== cheakArrId[0]) {
      card.innerHTML = val;
      checkArr.push(val);
      console.log(checkArr);
      cheakArrId.push(card.id);
      if (checkArr[0] == checkArr[1]) {
        checkArr = [];
        cheakArrId = [];
        alert("bravoooo!!");
        console.log(Count);
        Count += 2;
        if (Count === arr.length) {
          alert("You Are Finish");
          document.getElementById("main").innerHTML = "";
          newGame(arr);
        }
      } else {
        checkTime();
      }
    }
  }
}

function checkTime() {
  setTimeout(function () {
    var card1 = document.getElementById(cheakArrId[0]);
    var card2 = document.getElementById(cheakArrId[1]);
    card1.style.background = "red";
    card2.style.background = "red";
    card1.innerHTML = "";
    card2.innerHTML = "";
    checkArr = [];
    cheakArrId = [];
    console.log("sdfsdf");
  }, 2000);
}
