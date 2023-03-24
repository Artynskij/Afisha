//mobile toggle footer items  --------------------------------------------------------------------------------------------------------
const footerToggleItem = document.querySelectorAll(".footer__mobile_item");
footerToggleItem.forEach((item) => {
  const _title = item.querySelector(".footer__mobile_item_title");
  const _list = item.querySelector(".footer__mobile_item_list");
  const _icon = item.querySelector(".icon-arrow_footer-mobile");
  _title.addEventListener("click", () => {
    _title.classList.toggle("footer_toggle_title_active");
    _icon.classList.toggle("footer_toggle_icon_active");
    _list.classList.toggle("footer_block_visible");
  });
});



//toggle eventPage items  --------------------------------------------------------------------------------------------------------

const buttonEP = document.querySelectorAll('.event_card_dropdown_title')
const hiddenContentEP = document.querySelectorAll('.event_card_dropdown_item')
const paddingSecuri = document.querySelector('.event_card_main__description_sell ')
 

buttonEP.forEach((button, index) => {
    button.addEventListener('click', () => {
      if(hiddenContentEP[0]) paddingSecuri.classList.toggle('pt30')
        const _icon = button.querySelector('.icon-chevron-right')
        _icon.classList.toggle("transform90")
        
        hiddenContentEP[index].classList.toggle('hAuto')
    })
})

const buttonDeployEP = document.querySelector('.dropwown_deploy')
const hiddenContentDeployEP = document.querySelector('.event_card_additional_description')
const textDeployEP = buttonDeployEP?.querySelector('.dropwown_deploy_text')
const arrowDeployEP = buttonDeployEP.querySelector('.icon-chevron-right')
buttonDeployEP?.addEventListener('click', () => {
    hiddenContentDeployEP.classList.toggle('event_card_additional_description__active')
    arrowDeployEP.classList.toggle('transform_90')
    console.dir(textDeployEP.innerText);
    textDeployEP.innerText === 'Развернуть' ? textDeployEP.innerText = "Свернуть"  :  textDeployEP.innerText = "Развернуть"
})