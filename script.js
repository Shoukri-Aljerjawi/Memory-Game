var arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
var checkArr = [];
var cheakArrId = [];
var Count = 0;
var start;
var player = [];
var name = $("#name").val();

//Start function
function newGame(arr) {
  Count = 0;
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

//----------------------------------------------
for (var i = 0; i < player.length; i++) {
  $(".player").append(
    "<li>" + player[i].Names + " completed it in " + player[i].Score + "</li>"
  );
}
//to check clicked cards
function clicked(card, val) {
  if (card.innerHTML == "" && checkArr.length < 2) {
    card.innerHTML = val;
    var card1 = document.getElementById(card.id);
    card1.style.background = "white";
    console.log((card.innerHTML = val));
    if (checkArr.length == 0) {
      checkArr.push(val);
      cheakArrId.push(card.id);
      //console.log(checkArr);
    } else if (checkArr.length == 1 && card.id !== cheakArrId[0]) {
      card.innerHTML = val;
      checkArr.push(val);
      //console.log(checkArr);
      cheakArrId.push(card.id);
      if (checkArr[0] == checkArr[1]) {
        checkArr = [];
        cheakArrId = [];
        //alert("bravoooo!!");
        console.log(Count);
        Count += 2;
        if (Count === arr.length) {
          alert("You Are Finish");
          var min = $("#minutes").text();
          var sec = $("#seconds").text();
          var name = $("#name").val();
          player.unshift({ Names: name, Score: min - sec });
          $(".player").append(
            "<li>" +
              player[0].Names +
              " completed it in " +
              player[0].Score +
              "</li>"
          );
        }
      } else {
        checkTime();
      }
    }
  }
}
//if the player choose the wrong chosse
function checkTime() {
  setTimeout(function () {
    var card1 = document.getElementById(cheakArrId[0]);
    var card2 = document.getElementById(cheakArrId[1]);
    card1.style.background = "brown";
    card2.style.background = "brown";
    card1.innerHTML = "";
    card2.innerHTML = "";
    checkArr = [];
    cheakArrId = [];
    //console.log("");
  }, 2000);
}

//timer for player
function timer() {
  var minutesLabel = document.getElementById("minutes");
  var secondsLabel = document.getElementById("seconds");
  var totalSeconds = 0;
  setInterval(function () {
    ++totalSeconds;
    secondsLabel.innerHTML = totalSeconds % 60;
    minutesLabel.innerHTML = parseInt(totalSeconds / 60);
  }, 1000);
}

//Start Buttom
$("#btn").on("click", function () {
  timer();
  newGame(arr);
  document.getElementById("btn").style.visibility = "hidden";
  document.getElementById("name").style.visibility = "hidden";
  document.getElementById("refresh").style.visibility = "visible";
  $("#header").append("Weclome " + $("#name").val() + " To Memory-Game ");
});
//refresh button
document.getElementById("refresh").style.visibility = "hidden";
$("#refresh").on("click", function () {
 // location.reload();
});
//open all card

