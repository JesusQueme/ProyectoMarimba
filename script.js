let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top= window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id+']').classList.add('active');
            });

        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portafolio-box, .contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .acercade-img', {origin:'left'});
ScrollReveal().reveal('.home-content p, .acercade-content', {origin:'right'});

/* typed text*/
const typed = new Typed('.multiple-text',{
    strings: ['Desarrollador Frontend','Estudiante','Músico'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const apiUrl = 'http://localhost:3001/api/posts';


async function fetchBlogPosts() {
  try {
    const response = await fetch(apiUrl);
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('ERROR AL OBTENER LA PUBLICACION DE LA API:', error);
    return [];
  }
}


function renderBlogPosts(posts) {
  const postsContainer = document.getElementById('postsContainer');
  postsContainer.innerHTML = ''; 

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    `;
    postsContainer.appendChild(postElement);
  });
}

// aqui obtengo mi publicacion y la rendereizo
async function main() {
  const posts = await fetchBlogPosts();
  renderBlogPosts(posts);
}

// llamo la funcion 
window.addEventListener('load', main);

srLeft.reveal('.about-info',{delay: 100})
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})
  
srRight.reveal('.form-control',{delay: 100})