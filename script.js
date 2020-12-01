const layer1 = document.querySelector('#layer1')
const layer2 = document.querySelector('#layer2')
const text = document.getElementById('text')

scroll = window.pageYOffset

document.addEventListener('scroll', ()=>{
    const offset = window.pageYOffset
    scroll = offset
    layer1.style.width = ( 100 + scroll / 5 ) + '%'
})

document.addEventListener('scroll', ()=>{
    const offset = window.pageYOffset
    scroll = offset
    layer2.style.width = ( 100 + scroll/5 ) + '%' 
    layer2.style.left = scroll/50 + '%' 
})

document.addEventListener('scroll', ()=>{
    const offset = window.pageYOffset
    scroll = offset
    layer2.style.width = ( 100 + scroll/5 ) + '%' 
    text.style.top = -scroll/10 + '%' 
})
