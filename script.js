const formElem  =document.querySelector("form");
const containerElem = document.querySelector(".container");

let selected = [];
let operations = ['+','-','/','*'];
let range = 10;


let ques1 = document.querySelector("#question1");
const randomNumber1 = Math.floor(Math.random() * 100);
const randomNumber2 = Math.floor(Math.random() * 100);
let operator1 = operations[Math.floor(Math.random() * 3) +1];
ques1.innerHTML = `What is ${randomNumber1} ${operator1}  ${randomNumber2} ?`
let equation1 = ques1.innerHTML.slice(8,-2);
let answer1 = eval(equation1).toFixed(2);
console.log(answer1);
let answer1Position = Math.floor(Math.random() * 2);
let options1 = [];
for(let i = 0; i<3;i++)
{
    if( i == answer1Position){
        options1[i] = answer1;
    }
    else
    {
        let offset = (Math.random() * 2 * range - range).toFixed(2); // Offset between -range and +range
        let option = (parseFloat(answer1) + parseFloat(offset)).toFixed(2);

        // Ensure the option is not the same as the correct answer
        while (option == answer1) {
            offset = (Math.random() * 2 * range - range).toFixed(2);
            option = (parseFloat(answer1) + parseFloat(offset)).toFixed(2);
        }

        options1[i] = option;
    }
    
}
for(let i = 0; i< 3;i++)
{
    
    let radio = document.getElementById(`q1Option${i+1}`);
    let span = document.getElementById(`q1Label${i+1}`);
    radio.value = options1[i];
    span.textContent = options1[i];
    if(answer1Position == i){
        console.log(radio.parentElement.classList.add("correct"));
    }
    // else{
    //     radio.parentElement.classList.add("incorrect");
    // }
    

    // radio.nextElementSibling.textContent = `${options1[i]}`;

}
// console.log(options1);





let ques2 = document.querySelector("#question2");
const randomNumber3 = Math.floor(Math.random() * 100);
const randomNumber4 = Math.floor(Math.random() * 100);
let operator2 = operations[Math.floor(Math.random() * 3) +1];
ques2.innerHTML = `What is ${randomNumber3} ${operator2}  ${randomNumber4} ?`
let equation2 = ques2.innerHTML.slice(8,-2);
let answer2 = eval(equation2).toFixed(2);
console.log(answer2);
let answer2Position = Math.floor(Math.random() * 2);
let options2 = [];
for(let i = 0; i<3;i++)
{
    if( i == answer2Position){
        options2[i] = answer2;
    }
    else
    {
        let offset = (Math.random() * 2 * range - range).toFixed(2); // Offset between -range and +range
        let option = (parseFloat(answer2) + parseFloat(offset)).toFixed(2);

        // Ensure the option is not the same as the correct answer
        while (option == answer2) {
            offset = (Math.random() * 2 * range - range).toFixed(2);
            option = (parseFloat(answer2) + parseFloat(offset)).toFixed(2);
        }

        options2[i] = option;
    }
    
}
for(let i = 0; i< 3;i++)
{
    let radio = document.getElementById(`q2Option${i+1}`);
    let span = document.getElementById(`q2Label${i+1}`);
    radio.value = options2[i];
    span.textContent = options2[i];
    if(answer2Position == i){
        console.log(radio.parentElement.classList.add("correct"));
    }
    // else{
    //     radio.parentElement.classList.add("incorrect");
    // }

    // radio.nextElementSibling.textContent = `${options1[i]}`;

}
// console.log(options2);





let ques3 = document.querySelector("#question3");
const randomNumber5 = Math.floor(Math.random() * 100);
const randomNumber6 = Math.floor(Math.random() * 100);
let operator3 = operations[Math.floor(Math.random() * 3) +1];
ques3.innerHTML = `What is ${randomNumber5} ${operator3}  ${randomNumber6} ?`
let equation3 = ques3.innerHTML.slice(8,-2);
let answer3 = eval(equation3).toFixed(2);
console.log(answer3);
let answer3Position = Math.floor(Math.random() * 2);
let options3 = [];
for(let i = 0; i<3;i++)
{
    if( i == answer3Position){
        options3[i] = answer3;
    }
    else
    {
        let offset = (Math.random() * 2 * range - range).toFixed(2); // Offset between -range and +range
        let option = (parseFloat(answer3) + parseFloat(offset)).toFixed(2);

        // Ensure the option is not the same as the correct answer
        while (option == answer3) {
            offset = (Math.random() * 2 * range - range).toFixed(2);
            option = (parseFloat(answer3) + parseFloat(offset)).toFixed(2);
        }

        options3[i] = option;
    }
    
}
for(let i = 0; i< 3;i++)
{
    let radio = document.getElementById(`q3Option${i+1}`);
    let span = document.getElementById(`q3Label${i+1}`);
    radio.value = options3[i];
    span.textContent = options3[i];
    if(answer3Position == i){
        console.log(radio.parentElement.classList.add("correct"));
    }
    // else{
    //     radio.parentElement.classList.add("incorrect");
    // }

    // radio.nextElementSibling.textContent = `${options1[i]}`;

}
// console.log(options3);


let answer = [answer1,answer2,answer3];
let score = 0;

formElem.addEventListener("submit" ,function(event){
    event.preventDefault();
    const selected1 = document.querySelector('input[name = "ques1"]:checked').value;
    selected.push(selected1);
    
    
    
    const selected2 = document.querySelector('input[name = "ques2"]:checked').value;
    selected.push(selected2);

    const selected3 = document.querySelector('input[name = "ques3"]:checked').value;
    selected.push(selected3);

    for(let i = 0; i<answer.length;i++){
        if(answer[i] == selected[i]){

            score = score +1;
        }
    }
    
    const result  = document.createElement('div');
    result.classList.add("results");
    result.innerHTML = "Your score is " + score;

    containerElem.appendChild(result);

    let selectedElem1 = document.querySelector('input[name = "ques1"]:checked');
    selectedElem1.parentElement.classList.add("incorrect");
    let selectedElem2 = document.querySelector('input[name = "ques2"]:checked');
    selectedElem2.parentElement.classList.add("incorrect");
    let selectedElem3 = document.querySelector('input[name = "ques3"]:checked');
    selectedElem3.parentElement.classList.add("incorrect");
    let incorrectAns = document.querySelectorAll(".incorrect");
    incorrectAns.forEach(option => option.style.border = '3px solid red');
    


    let correctAns = document.querySelectorAll(".correct");
    correctAns.forEach(option => {
        option.style.border = '3px solid green';
        option.style.backgroundColor = 'rgb(188, 248, 188)'
    });

    
    


});




