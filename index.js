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




// 4 chi doesnt work???

// const number = document.querySelectorAll(".number button");
// const operator = document.querySelectorAll(".operator button");
// const equal = document.getElementsByClassName("equal")[0];
// const display = document.getElementsByClassName("display")[0];
// const clear = document.getElementsByClassName("clear")[0];
// let secondValue = "";
// let firstValue = "";
// let result = "";
// let addOperator = "";

// for (let i = 0; i < number.length; i++) {
//   number[i].addEventListener("click", function () {
//     console.log(number[i]);
//     if (!addOperator) {
//       display.innerHTML = +number[i].innerText;
//       firstValue = +number[i].innerText
//     } else {
//       display.innerHTML = +number[i].innerText;
//       secondValue = +number[i].innerText
//     }
//   });
// }
// for(let j = 0; j < operator.length; j++){
// operator[j].addEventListener('click', function(){
//     if(operator[j]){
//         display.innerHTML = ''
//         addOperator = operator[j].innerHTML
//     }
// })
// }

// equal.addEventListener('click', function(){
//     if(addOperator === '+'){
//         result = firstValue + secondValue
//     }
//     if(addOperator === '-'){
//         result = firstValue - secondValue
//     }
//     if(addOperator === '/'){
//         result = firstValue / secondValue
//     }
//     if(addOperator === '*'){
//         result = firstValue * secondValue
//     }
//     display.innerHTML = result
//     firstValue = result
//     secondValue = ''
//     addOperator = ''

//     })

//     clear.addEventListener('click', function(){
//         display.innerHTML = ''
//         firstValue = ''
//         secondValue = ''
//         result = ''
//         addOperator = ''
//     })





// 5 ???? input dashtum grelov txayi anun petqa avtomat bolor txaneri anunner@ cuyc ta p tagum nuynn axjka anvan depqum 

// const boy = document.querySelectorAll('.boys button')
// const girl = document.querySelectorAll('.girls button')
// const input = document.getElementsByClassName('input')[0]
// const result = document.getElementsByClassName('filter')[0]

// for(let i = 0; i < boy.length; i++){
//     boy.addEventListener('click', function(){
//         if(boy[i].innerHTML===input.value){
//             result.innerHTML = boy[i].innerHTML
//         }
//     })
// }
// for(let i = 0; i < girl.length; i++){
//     girl.addEventListener('click', function(){
//         if(girl[i].innerHTML === input.vale){
//             result.innerHTML = girl[i].innerHTML
//         }
//     })
// }

// input.addEventListener('change', function(e){

// })



// 6

const click1 = document.getElementsByClassName('click1')[0]
const click2 = document.getElementsByClassName('click2')[0]
const click3 = document.getElementsByClassName('click3')[0]
const click4 = document.getElementsByClassName('click4')[0]
const click5 = document.getElementsByClassName('click5')[0]

click1.addEventListener('click', function(){
    click1.style.display = 'block'
    click2.style.display = 'none'
    click3.style.display = 'none'
    click4.style.display = 'none'
    click5.style.display = 'none'
})

click2.addEventListener('click', function(){
    click2.style.display = 'block'
    click1.style.display = 'none'
    click3.style.display = 'none'
    click4.style.display = 'none'
    click5.style.display = 'none'
})

click3.addEventListener('click', function(){
    click3.style.display = 'block'
    click1.style.display = 'none'
    click2.style.display = 'none'
    click4.style.display = 'none'
    click5.style.display = 'none'
})

click4.addEventListener('click', function(){
    click4.style.display = 'block'
    click1.style.display = 'none'
    click3.style.display = 'none'
    click2.style.display = 'none'
    click5.style.display = 'none'
})

click5.addEventListener('click', function(){
    click5.style.display = 'block'
    click1.style.display = 'none'
    click3.style.display = 'none'
    click4.style.display = 'none'
    click2.style.display = 'none'
})