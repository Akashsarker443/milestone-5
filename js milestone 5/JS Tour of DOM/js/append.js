// where to add
const placeslist = document.getElementById('place-list');
// what to be added
const li = document.createElement('li');
li.innerText= 'pahartoli bon';

//  add the child
placeslist.appendChild(li);






const maincontainer =document.getElementById('main-content');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText= 'my food list';
section.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'salad';
ul.appendChild(li3);

section.appendChild(ul);

maincontainer.appendChild(section);



//  set innerHtml directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>this is my dress section</h1>
            <ul>
                <li>t-shirt</li>
                <li>sari</li>
                <li>pant</li>
            </ul>


`
maincontainer.appendChild(sectionDress); 