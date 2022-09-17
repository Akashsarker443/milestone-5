/* -----use of getElementByTagName ----*/

const newHeadings = document.getElementsByTagName('h1');
for(const newHeading of newHeadings){
    console.log(newHeading.innerText);
}


/* -----use of getElementByClassName ----*/

// const places = document.getElementsByClassName('place');
// for(const place of places){
//     console.log(place.innerText);
// } 





/* -----use of queryselectorAll----*/

const newsong = document.querySelectorAll('.song li') ;
console.log(newsong);


/* -----use of queryselector----*/

const newfruit = document.querySelector('#fruitslist li');
console.log(newfruit);



const songparagraph = document.getElementById('song-para');
const p =document.createElement('p');
p.innerText = 'visit your dream places quickly. There many more places to explore for you . what are you waiting for';
songparagraph.appendChild(p);






