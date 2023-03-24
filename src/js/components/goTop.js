const goTopButton = document.querySelector('.arrow_to_top')

goTopButton.addEventListener('click', goTop)
window.addEventListener('scroll', trackScroll)
function trackScroll() {
    const offset = window.pageYOffset
    const coords = document.documentElement.clientHeight
    console.log([offset, coords]);
    
    if(offset > coords) {
        goTopButton.classList.add('arrow_to_top_visible')
    } else {
        goTopButton.classList.remove('arrow_to_top_visible')
    }
}
function goTop() {
   
    if(window.pageYOffset > 0) {
        window.scrollBy(0, -75)
        setTimeout(goTop,0)
    }
}