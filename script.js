var arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
var checkArr = [];
var cheakArr1 = [];
var Count = 0;
function randomArr(arr) {
  var randomArr1 = [];
  for (var i = 0; i < arr.length; i++) {
    var x = 0;
    x = Math.floor(Math.random() * arr.length);
    randomArr1.push(arr[x]);
    arr.slice(x, 1);
  }
  return randomArr1;
}
var randomAr = randomArr(arr);
//add item
function addElem() {
  var output = "";
  for (var i = 0; i < randomAr.length; i++) {
    output = '<div id="' + randomAr[i] + '"></div>';
    $(".main").append(output);
  }
}
addElem();
console.log(output);

//andomArr.push(arr[Math.floor(Math.random() * (i + 1))]);

// //return randomArr;
randomArr([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]);
