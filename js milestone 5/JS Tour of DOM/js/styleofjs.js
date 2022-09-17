const sections = document.querySelectorAll('section');
for ( const section of sections){
    section.style.border = '2px solid skyblue';
    section.style.marginBottom= '5px';
    section.style.borderRadius= '15px';
    // section.style.backgroundColor= 'gray';
    // removing class in js 
    section.classList.remove('large-text');
}

const songlines = document.getElementsByClassName('song');
for(const songline of songlines){
  songline.style.color= 'white';
//   adding css in js code
  songline.classList.add('bg-yellow');
  songline.classList.add('text-center');
}

const lyrics = document.getElementsByClassName('song');
for(const lyric of  lyrics){

  lyric.setAttribute('title', 'tooltip set by javascript');
}


const title = document.getElementById('title');
title.setAttribute('title', 'my first javascript project');
