
// ================ this part in coding just for the haeder ==================//

let shownBtn = document.getElementById('shown-btn');
let links = document.querySelector('.links');
let btn = document.querySelector('.btn');
let hidenBtn = document.createElement('button');
hidenBtn.textContent = 'close';

shownBtn.addEventListener('click', function () {
    links.classList.toggle('show');


});


// ======================= this part for counter project ===============//


let counter = document.querySelector('.count');
let decrease = document.querySelector('.decrease');
let reset = document.querySelector('.reset');
let increase = document.querySelector('.increase');



let count = 0;



// this function for increament
increase.addEventListener('click', function () {
    counter.textContent = count += 1;


});


// this function for decreament
decrease.addEventListener('click', function () {
    counter.textContent = count -= 1;

});

// this function for reset

reset.addEventListener('click', function () {
    counter.textContent = 0;
    count = 0;// this condition to reset the conter after reseting the program

});
// **** off course there are many ways to do that but this the basic way ****//





// ====================== this part for color-flliper project ==================//

let project2content = document.querySelector('.project2-content');
let background = document.querySelector('.background');
let changecolor = document.querySelector('.change-color');

let colors = ['red', 'white', 'orange', 'green', 'gray'];
let colorss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']


changecolor.addEventListener('click', function () {

    let dias = '#';
    for (let i = 0; i < 6; i++) {
        dias += colorss[getrandomnumber()]
    }
    project2content.style.background = dias;
    background.textContent = dias;

});

// randomly chose color betwen 0-6
function getrandomnumber() {
    return Math.floor(Math.random() * colorss.length);
}


// ===================== this part for review card ===================//

let profile1 = document.querySelector('.profile');
let full_name1 = document.querySelector('.full-name');
let job1 = document.querySelector('.job');
let job_description1 = document.querySelector('.job-description');
let previous_btn1 = document.querySelector('.goleft');
let next_btn1 = document.querySelector('.goright');

let cards = [
    {
        id: 0,
        img: './photos/bessto.png',
        fullname: 'hassan el ouazizi',
        job: 'developer',
        job_description: 'hassan is a greattest web developer in the worldas you see he is so cleaver as fox in the forestas a eagl in the sky',
    },

    {
        id: 1,
        img: './photos/nassim.jpg',
        fullname: 'nassim',
        job: 'agent',
        job_description: 'nassim is my brother nassim is my brother nassim is my brother'
    },
    {
        id: 2,
        img: './photos/lucia.jpg',
        fullname: 'lucia',
        job: 'designer',
        job_description: 'lucia is a good designer that can design for you a friendly designs'
    },
    {
        id: 3,
        img: './photos/samir.jpg',
        fullname: 'samir',
        job: 'student',
        job_description: 'samir is my brother samir is my brother samir is my brother'
    }

]

let curentitem = 0;

window.addEventListener('DOMContentLoaded', function () {
    showperson();
})

next_btn1.addEventListener('click', function () {

    if (curentitem < cards.length) {
        //curentitem ++ ;
        showperson()
        //console.log(curentitem)
        curentitem++;

    } else {
        curentitem = cards.length;
    }
});

previous_btn1.addEventListener('click', function () {
    if (curentitem > 0) {
        curentitem--;
        showperson();
        //curentitem = curentitem - 1;
        //console.log(curentitem)
        //console.log('previous');
    }

});



function showperson() {

    const item = cards[curentitem]
    profile1.src = item.img;
    full_name1.innerHTML = item.fullname
    job1.innerHTML = item.job
    job_description1.innerHTML = item.job_description
    full_name1.innerHTML = item.fullname
}







// ====================== this part for bmi project ==================//


var calcule;
document.querySelector('.calcul-btn').addEventListener('click', function () {

    // this step to get the user wheight from the input  
    var wheight = document.querySelector('.wheight').value;
    // this step to get the user height from the input
    var height = document.querySelector('.height').value;
    // this the final result the use in if statment 
    var result = wheight / height * height;

    var message = document.querySelector('.message');

    console.log(wheight, height)

    if (result > 40) {
        message.innerHTML = "you are sooo fat";
    }
    else if (result < 40 && result > 35) {
        message.innerHTML = " a little bit fat";
    }
    else if (result < 34.9 && result > 30) {
        message.innerHTML = " fist degree fat ";
    }
    else if (result < 29.9 && result > 25) {
        message.innerHTML = " extra wheight";
    }
    else if (result < 24.9 && result > 18) {
        message.innerHTML = " your wheight is perfect";
    } else if (result < 18) {
        message.innerHTML = " you are soo skinny";
    } else {
        message.innerHTML = " incorect information";
    }


})