// 1

//     function Foo(){
//     this.setValue = function(a, b){
//         console.log(a,b);
//     }
//     this.plus = function(){
//         return this.a + this.b
//     }
//     this.minus = function(){
//         return this.a - this.b
//     }
//     this.multiply = function(){
//         return this.a * this.b
//     }
//     this.divide = function(){
//         return this.a / this.b
//     }
// }

// let result = new Foo()
// this.setValue(5,7)
// console.log(result.plus());




//2

// function Foo() {
//   this.isDigit = function (a, b) {
//     if (a % 2 === 0) {
//        console.log(a);;
//     }
//     if (b % 2 === 0) {
//      console.log(b);;
//     }
//   };
//   this.isPrime = function (a, b) {
//     if (a / a === 1) {
//       console.log(a);;
//     }
//     if (b / b === 1) {
//        console.log(b);;
//     }
//   };
// }

// let result = new Foo();
// // result.isDigit(8,9)
// result.isPrime(7,6);



//3
const input = document.getElementsByClassName("input")[0]
const login = document.getElementsByClassName("login")[0]
const sand = document.getElementsByClassName("sand")[0]
const showList = document.getElementsByClassName("show-list")[0]
const remove = document.getElementsByClassName("remove")[0]


login.addEventListener('click', function(){
if(input.value.trim()){
    showList.innerHTML = input.value
    showList.style.display = 'block'
}
})

remove.addEventListener("click", function(){
    if(showList.innerHTML){
        showList.style.display = 'none'
    }
})