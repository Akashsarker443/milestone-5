// option 1 is applied on the html directly

// part of option 2 [we will use this most of the time]
function makeRed(){
    document.body.style.backgroundColor = 'red';
}
// part of option 3 [we will use this maje maje]
const makeBlueButton =document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}


//  part of option 3 another
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}


 // part of option 4
 const pinkButton =document.getElementById('make-pink');
 pinkButton.addEventListener('click', makePink);

 function makePink(){
     document.body.style.backgroundColor ='pink';
 }


// part of option 4 another
const greenButton =document.getElementById('make-green');
 greenButton.addEventListener('click', function makeGreen(){
document.body.style.backgroundColor ='green';
})

// part of option 4 final [ we will use this very often]

document.getElementById('make-orange').addEventListener('click', function(){
    document.body.style.backgroundColor ='orange';
   })