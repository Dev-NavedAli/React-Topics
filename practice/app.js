// let cars1 = ["audi", "bmw", "mercedes"]
// let car2 = ["pagani", "koenigsegg", "lexus"]

// let all_cars = cars1.concat(car2)
// // all_cars.reverse()
// all_cars.sort()
// console.log(all_cars);


// let bike = ['honda', 'hero', "bajaj", "tvs", "jupiter"]
// // console.log(bike.slice(2))


// let color = ["red", "green", "blue", "yellow", "megenta"]
// color.splice(0, 0, "violet")
// console.log(color)

// let char = ['a', 'b', 'c', 'z', 'd', 'e', 'f', 'g']
// char.sort()
// console.log(char);

// for (i = 1; i <= 15; i++) {
//     for (j = 1; j <= 3; j++) {
//         console.log(j);

//     }

// }


// let num = 0;
// while (num <= 20) {
//     if (num == 8) {
//         break
//     }
//     console.log(num);

//     num++
// }



// let vowels = ['a', 'e', 'i', 'o', 'u']
// for(vowe of vowels){
//     console.log(vowe);

// }


// let arr = [1,2,3,4,5,6,2,8,9]
// let num = 2
// for(i=0 ; i<arr.length ; i++){
//     if(arr[i] == num){
//         arr.splice(i,1)
//     }
// }
// console.log(arr);


// let n= 5;
// f=1
// for (let i=1 ; i<=n ; i++ ){
//     f *= i
// }
// console.log(f);

// let num = prompt("enter a number")
// num = Number(num)

// for (let i = 1; i <= 10; i++) {
//     console.log(i * num);

// }

// const class_info = {
//     students: {
//         student1: {
//             name: "naved",
//             city: "Bareilly",
//             gender: "Male",
//         },
//         student2: {
//             name: "noman",
//             city: "Delhi",
//             gender: "Male",
//         },
//         student3: {
//             name: "Saimoon",
//             city: "Thiriya",
//             gender: "Female",
//         },
//         student4: {
//             name: "naved",
//             city: "Noida",
//             gender: "Male",
//         },
//     }
// };

// console.log(class_info);


// function average(a, b, c) {
//     let d = (a + b + c) / 3;
//     console.log(d);
// }
// average(10, 11, 17);


// const name = {
//     naam:"naved",
//     city:"bareilly",
//     func:function(){
//         console.log(this.naam)
//     }
// }
// name.func()

// setTimeout(()=>console.log("naved ali khan"),5000)


// for (let i = 1; i <=5; i++) {
//     let id = setTimeout(()=>console.log("hello world"),i*2000)   
// }


// const arrayAverage  = (arr)=>{
//     let total  = 0
//     for(ar of arr){
//         total = total+ar
//     }
//     console.log(total);

// }
// arrayAverage([1,2,3])


// let btn = document.getElementById("butta")
// let h1 = document.querySelector("h1")
// const naved = () => {
//     // console.log('button is clicked');
//     btn.innerText = "Kiya haal hai"
//     h1.innerText = "Bas badiya hain"
// }

// btn.addEventListener("click", naved)

// // btn.onclick = function(){
// //     console.log('button is clicked');
// // }


// let h1 = document.getElementById("heading1")
// let h3 = document.getElementById("heading3")
// let btn = document.getElementById("button1")
// let p = document.getElementById("para")

// const gojoSatoru = function(){
//     console.log(this.innerText);
//     console.log(this.innerText);
//     console.log(this.innerText);
//     console.log(this.innerText);
// }

// btn.addEventListener("click",gojoSatoru)




let btn = document.getElementById("butta")

btn.addEventListener("click", function (e) {
    console.log("btn is pressed", e);

})

// --------------------------Keyboard Event ---------------------------------


let input = document.querySelector("input")

input.addEventListener("keypress", function (e) {
    console.log("A key is pressed", e.key)
})



// -----------------------form Event ---------------------------------------

// let form = document.querySelector('form')
// let user = document.querySelector('#user')
// let password = document.querySelector('#password')
// let email = document.querySelector('#email')

// form.addEventListener("submit",function(e){
//     e.preventDefault()
//     alert("form submitted succesfully")
//     console.log(user.value);
//     console.log(password.value);
//     console.log(email.value);

// })

// textar = document.querySelector("textarea")

// textar.addEventListener("change",function(){
//     console.log("value is changes : ",this.value)
// })


// last  = document.querySelector('#last')
// last.addEventListener("change",function(){
//     console.log("Input value is changed : " , this.value)
// })

// Select the input field and the heading


// const inputField = document.querySelector('#changes2');
// const heading = document.querySelector('#changes');

//     inputField.addEventListener('input', function () {
//         heading.innerText = this.value; // Update the heading's text as you type

// })

// ---------------------------------------------CALL BACK HELL------------------------------------------------
// /Ex-1

// h1 = document.querySelector('#changes')

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         if (nextColorChange) nextColorChange();
//         h1.style.color = color

//     }, delay)
// }

// changeColor("red", 2000, () => {
//     changeColor("orange", 2000)
// })

// soln of above both the code 

h1= document.querySelector('#changes')

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color
            resolve("color changed")
        },delay)
    })
}

changeColor("red",2000)
.then(()=>{
    return changeColor("orange",1000)
})
.then(()=>{
    return changeColor("blue",2000)
}).catch(()=>{
    console.log('error occured');
    reject("some error occured")
})



// Ex-2


// const saveToDb = (data, success, failure) => {
//     let internetSpeed = Math.floor(Math.random() * 10 + 1);
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// };

// saveToDb(
//     "naved ali khan",
//     () => {
//         console.log("success: Your data is saved");
//         saveToDb(
//             "hello world",
//             () => {
//                 console.log("success: data2 is saved");
//                 saveToDb(
//                     "naved",
//                     () => {
//                         console.log("success: data3 is saved");
//                     },
//                     () => {
//                         console.log("failure: data3 is not saved");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure: data2 is not saved");
//             }
//         );
//     },
//     () => {
//         console.log("failure: Your data is not saved due to low internet speed");
//     }
// );


// /Soln 2


function saveToDb(data) {
    return new Promise((success, failure) => {
        let internetSpeed = Math.floor(Math.random() * 10 + 1);
        if (internetSpeed > 4) {
            success("sucess: data is saved succesfully")
        } else {
            failure("fail :  internet speed is too slow");
        }
    })
}

saveToDb("apna college")
    .then(() => {
        console.log('data1 : saved promised is resolved ')
        return saveToDb("naved ali khan")
    })
    .then(()=>{
        console.log('data2 : saved promise 2 resloved ');
        return saveToDb("noman ali khan")
    })
    .then(()=>{
        console.log('data3: saved promise 2 resloved ');
        
    })
    .catch(() => {
        console.log('data1 : reject promise is rejected');

    })



const apiUrl  = "https://official-joke-api.appspot.com/random_joke"
let buttonn = document.querySelector('#getJoke')
let para = document.querySelector('#joke')
let para2 = document.querySelector('#joke2')

const getJoke  = async()=>{
    let joker = await axios(apiUrl)
    console.log(joker.data.setup);
    console.log(joker.data.punchline);   
    para.innerText = joker.data.setup 
    para2.innerText = joker.data.punchline 
}



buttonn.addEventListener("click",function(){
    getJoke()
})





