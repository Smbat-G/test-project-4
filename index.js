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
// const input = document.getElementsByClassName("input")[0]
// const login = document.getElementsByClassName("login")[0]
// const sand = document.getElementsByClassName("sand")[0]
// const showList = document.getElementsByClassName("show-list")[0]
// const remove = document.getElementsByClassName("remove")[0]
// const reload = document.getElementsByClassName("reload")[0]

// login.addEventListener('click', function(){
// if(input.value.trim()){
//     showList.innerHTML = input.value
//     showList.style.display = 'block'
// }
// })

// remove.addEventListener("click", function(){
//     if(showList.innerHTML){
//         showList.style.display = 'none'
//     }
// })

// sand.addEventListener("click", function(){
//     if(showList.innerHTML){
//         localStorage.setItem('login', showList.innerHTML)
//     }
// })
// reload.addEventListener("click", function(){
//     localStorage.removeItem("login")
// })




// 4

const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const equal = document.getElementsByClassName("equal")[0];
const display = document.getElementsByClassName("display")[0];
const clear = document.getElementsByClassName("clear")[0];
let secondValue = "";
let firstValue = "";
let result = "";
let addOperator = "";

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    console.log(number[i]);
    if (!operator.value) {
      display.value = +number[i].innerText;
      firstValue = display.value;
    } else {
      display.value = +number[i].innerText;
      secondValue = display.value;
    }
  });
}
for(let j = 0; j < operator.length; j++){
operator[j].addEventListener('click', function(){
    if(operator[j]){
        display.value = ''
        addOperator = operator[j].innerHTML
    }
})
}

equal.addEventListener('click', function(){
    if(addOperator === '+'){
        result = firstValue + secondValue
    }
    if(addOperator === '-'){
        result = firstValue - secondValue
    }
    if(addOperator === '/'){
        result = firstValue / secondValue
    }
    if(addOperator === '*'){
        result = firstValue * secondValue
    }
    display.value === result
    firstValue = result
    secondValue = ''
    addOperator = ''

    })

    clear.addEventListener('click', function(){
        display.value = ''
        firstValue = ''
        secondValue = ''
        result = ''
        addOperator = ''
    })