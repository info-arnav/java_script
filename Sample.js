/*
*
*var http = require("http");
*
*http.createServer(function (req, res) {
*  res.writeHead(200, {"Content-Type": "text/html"});
*  res.end("Hello World!");
*}).listen(8000);
*
*/


//  Functionality

function time(){
  console.log("delayed")
}

function second(){
  console.log("i am the second")
}

function third(){
  console.log("i am the third")
}

setTimeout(third, 1000)
setTimeout(second, 0)
console.log("i am the first")


//arrays

let arrays = [[1,4],[2,3]]

for(i = 0; i<arrays.length; i++){
  for(j = 0; j<arrays[i].length; j++){
    console.log(arrays[i][j])
  }
}

//functions


function runFirst(value){
  return value * 4;
  function runSecond(newValue){
    return newValue  *4
  }
  runSecond(value)
}

var result = runFirst(4)
console.log(result)

//backpack

function big(array){
  let i = 0
  function small(){
      let result = array[i];
      j = 0
      i++
      return result;
  }
  return small
}

main = big([1,4,5,8])
sub = main()
console.log(sub)
sub = main()
console.log(sub)