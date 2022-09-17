const container = document.getElementById('main-container');
const section =document.createElement('section');
const h1 =document.createElement('h1');
h1.innerText = 'My dream places to go';
section.appendChild(h1);
const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Maldives';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Indonesia';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Switzerlan';
ul.appendChild(li3);
section.appendChild(ul);

container.appendChild(section);



const sections = document.querySelectorAll('section');
for ( const section of sections){
    section.style.border = '2px solid skyblue';
    section.style.paddingLeft = '10px';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
}
const items = document.getElementsByClassName('item');
for ( const item of items){
    item.style.color = 'red';
    item.style.fontSize= '20px';
}


// this is used when you want to style only one section by id

// const sectionStyle = document.getElementById('section-1');
// sectionStyle.style.border= '2px solid red';