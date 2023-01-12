const modalTag = document.querySelector('.modal')
const contactTag = document.querySelector('.header__link')
const contactTags = document.querySelector('.burger__link')
const closeTag = document.querySelector('.modal__text')
const burgerTag = document.querySelector('.burger')
const body = document.querySelector('body')
const namess = prompt('Как вас зовут?', '')
const years = prompt('Сколько вам лет', '')
const background = prompt('какой вы желаите фон сайта если черный то введите \"black\" елси красный то \"red\"')
const commits = prompt('Добро пожаловать на сайт :) \n напишите свой отзыв по вопросам!!! :| :) :]')


const baza = {
    privat:false,
    commit:{},
    background:{},
    years: {},
    names: {},
}
baza.names = namess
baza.years = years
baza.commit = commits
baza.background = background
console.log(baza)
if(background === 'red' ){
  body.style.background = 'red'
}else if(background === 'black'){
    body.style.background = 'black'
}else{
    prompt('вы ввели неправельный цвет фона попробуйте еще раз перезагрузив страницу :(')   
}

contactTag.addEventListener('click', () => {
    modalTag.style.display = 'block'
    burgerTag.style.display = 'none'

})
closeTag.addEventListener('click', () => {
    modalTag.style.display = 'none'
    burgerTag.style.display = 'block'
    
})
contactTags.addEventListener('click', () => {
    modalTag.style.display = 'block'
    burgerTag.style.display = 'none'
    
})