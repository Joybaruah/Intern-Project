
const component = Array.from(document.querySelectorAll('.component'));
const comp1Images = document.querySelectorAll('.comp1Img');
const buttons = document.querySelectorAll('.btn');
const btnFour = document.querySelector('.btn-4');


comp1Images.forEach(Image=>{
    Image.addEventListener('click', (e)=>{
        changeComponent('next');
    })
})

buttons.forEach(Button=>{
    Button.addEventListener('click', (e)=>{
        changeComponent2('next');
    })
})

btnFour.addEventListener('click', (e)=>{
    changeComponent3('next2');
});

function changeComponent(img){
    let index = 0;
    const active = document.querySelector('.active');
    index = component.indexOf(active);
    component[index].classList.remove('active');
    if(img === 'next'){
        index--;
    }
    component[index].classList.add('active');
}

function changeComponent2(){
    let index = 0;
    active = document.querySelector('.active');
    index = component.indexOf(active);
    if(index = 1){
        component[index].classList.add('active');
        if(index = 2){
            component[index].classList.remove('active');
        }
    }
}

function changeComponent3(){
    let index = 0;
    active = document.querySelector('.active');
    index = component.indexOf(active);
    if(index = 2){
        component[index].classList.add('active');
        if(index = 3){
            component[index].classList.remove('active');
        }
    }
}