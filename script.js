document.querySelector('body').addEventListener('click', (e)=>{
    e.preventDefault();
})

let menu = document.querySelector('.menu-header img')
menu.addEventListener('click', (animationNav))

let workGrid = document.querySelectorAll('[data-anime]')

function showGrid (){
    let windowTop = window.pageYOffset + (window.innerHeight * 0.8);
    workGrid.forEach((element)=>{
        if(windowTop > element.offsetTop){
            element.classList.add('animate')
        } else{
            element.classList.remove('animate')
        }
    })
}

showGrid();

window.addEventListener('scroll', function(){
    showGrid();
})

function animationNav(){
    document.querySelector('.nav-mobile').classList.toggle('nav-mobile-animation');
    document.querySelector('main').classList.toggle('filter');
    document.querySelector('header a').classList.toggle('filter');
    document.querySelector('.header-button').classList.toggle('filter');
    document.querySelector('.process-title').classList.toggle('filter');
    document.querySelector('.process').classList.toggle('filter');
    document.querySelector('.our-work-title').classList.toggle('filter');
    document.querySelector('.our-work').classList.toggle('filter');
    document.querySelector('footer').classList.toggle('filter');
    document.querySelector('.end-page').classList.toggle('filter');
    document.querySelector('.menu-header img').classList.toggle('rotate')
};


let work1 = document.querySelector('.work1');

work1.addEventListener('click', ()=>{
    work1.classList.toggle('grow');
    work2.classList.toggle('bg-dark');
    work3.classList.toggle('bg-dark');
});

let work2 = document.querySelector('.work2')
work2.addEventListener('click', ()=>{
    work2.classList.toggle('grow');
    work1.classList.toggle('bg-dark');
    work3.classList.toggle('bg-dark');
});

let work3 = document.querySelector('.work3')
work3.addEventListener('click', ()=>{
    work3.classList.toggle('grow');
    work2.classList.toggle('bg-dark');
    work1.classList.toggle('bg-dark');
});



let work1Pc = document.querySelector('.work1');
    work1Pc.addEventListener('mouseenter', ()=>{
    work1Pc.classList.add('grow2');
    work2Pc.classList.add('bg-dark2');
    work3Pc.classList.add('bg-dark2');
});

let work2Pc = document.querySelector('.work2')
work2Pc.addEventListener('mouseenter', ()=>{
    work2Pc.classList.add('grow2');
    work1Pc.classList.add('bg-dark2');
    work3Pc.classList.add('bg-dark2');
});

let work3Pc = document.querySelector('.work3')
work3Pc.addEventListener('mouseenter', ()=>{
    work3Pc.classList.add('grow2');
    work2Pc.classList.add('bg-dark2');
    work1Pc.classList.add('bg-dark2');
});

let work1PcOut = document.querySelector('.work1');
    work1PcOut.addEventListener('mouseleave', ()=>{
    work1PcOut.classList.remove('grow2');
    work2PcOut.classList.remove('bg-dark2');
    work3PcOut.classList.remove('bg-dark2');
});

let work2PcOut = document.querySelector('.work2')
work2PcOut.addEventListener('mouseleave', ()=>{
    work2PcOut.classList.remove('grow2');
    work1PcOut.classList.remove('bg-dark2');
    work3PcOut.classList.remove('bg-dark2');
});

let work3PcOut = document.querySelector('.work3')
work3PcOut.addEventListener('mouseleave', ()=>{
    work3PcOut.classList.remove('grow2');
    work2PcOut.classList.remove('bg-dark2');
    work1PcOut.classList.remove('bg-dark2');
});
