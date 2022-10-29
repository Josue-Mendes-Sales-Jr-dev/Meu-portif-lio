//add clss
let hamburguer=document.getElementById('hamburguer')

function action(){
    let headerContainer=document.getElementById('header-container')
    headerContainer.classList.toggle("Active")
}


/*Menu fixed */

hamburguer.addEventListener('click',action)

const nav=document.getElementById('nav');

window.addEventListener('scroll',menuFixed)

function menuFixed(){
    if(window.pageYOffset>0 && nav.classList.contains('nav')){
        nav.classList.add('Tarja')
    }else if(window.pageYOffset===0 && nav.classList.contains('nav')){
        nav.classList.remove('Tarja')
    }
}


//add cards
function inicia(){
const addBtn=document.getElementById('addBtn')

addBtn.addEventListener('click', addCard)


function addCard(){

    const here=document.getElementById("boxProject")
    const Div=document.createElement("div")
    Div.classList.add("card")
    const img=document.createElement("img")
    img.src="imagens/WhatsApp Image 2022-08-20 at 17.52.49 (1).jpeg"
    img.classList.add('image')
    const hTitle=document.createElement("h2")
    hTitle.textContent="projeto 01"
    const p=document.createElement("p")
    p.classList.add('p')
    p.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, at! Tenetur, provident recusandae. Animi quibusdam inventore fuga consectetur incidunt dolores nesciunt, omnis rem architecto asperiores,maxime, eligendi accusamus nemo! Minus."
    
    Div.appendChild(img)
    Div.appendChild(hTitle)
    Div.appendChild(p)
    here.appendChild(Div)

    
    
}
}


window.addEventListener('load', inicia)