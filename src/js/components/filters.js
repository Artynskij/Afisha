const allFilters = document.querySelectorAll(".input_checkbox");
// window.addEventListener('resize', (event) =>{
//   if (event.currentTarget.innerWidth>831) return
 
 
//  })
 if(window.innerWidth<=831) {
  const mobFilters = document.querySelector('.mobile-filters')
  const deskFilter = document.querySelector('.main_filters ')
  mobFilters.innerHTML = deskFilter.innerHTML
  deskFilter.innerHTML= ''
  console.log("mobile");
 }


//main menu
export let filterCheckBox
document.addEventListener("click", () => {
  let choices = [];
  allFilters.forEach((filter) =>
    choices.push({name:filter.id, checked:filter.checked})
  );
  filterCheckBox=choices
});

//select town --------------------------------------------------------------------------------------------------------
const drop = document.querySelector(".__select__content");

// console.dir(drop);
// inputfind
const find = document.querySelectorAll(".header__button_find");

find.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("find");
  });
});

//filters desktop hidden --------------------------------------------------------------------------------------------------------
const filterHidden = document.querySelector(".filter_hidden");
const buttonFilterHidden = document.querySelector(
  ".main_filters__container_toggle_filter"
);

const iconFiltersToggle = document.querySelector(".filters_toggle");
const ctnFilterTitle = document.querySelector(
  ".main_filters__container_toggle_filter_text"
);
buttonFilterHidden.addEventListener("click", () => {
  filterHidden.classList.toggle("block_visible");
  iconFiltersToggle.classList.toggle("filters_toggle_icon_active");
  ctnFilterTitle.innerText === "Показать фильтры"
    ? (ctnFilterTitle.innerText = "Скрыть фильтры")
    : (ctnFilterTitle.innerText = "Показать фильтры");
});
// filters mobile visible --------------------------------------------------------------------------------------------------------
const modalBg = document.querySelector(".modal_bg");
const mobileFilters = document.querySelector(".mobile-filters");
const mobileNavBar = document.querySelector(".mobile_navbar_hidden");

// const ctnFilterTitleMob = document.querySelector(
//   ".main_filters__container_toggle_filter_mobile"
// );
const butonOpenMobFilters = document.querySelector(
  ".button_open_mobile_filter"
);
butonOpenMobFilters.addEventListener("click", () => {
  mobileNavBar.style.display = "none";
  setTimeout(() => {
    mobileFilters.classList.add("filter_mobile_visible");
  }, 2);
  modalBg.style.display = "block";
  window.scrollBy(0, -50000);
});
// ctnFilterTitleMob.addEventListener("click", () => {
//   setTimeout(() => {
//     modalBg.style.display = "none";
//     mobileNavBar.style.display = "block";
//   }, 200);
//   mobileFilters.classList.remove("filter_mobile_visible");
// });

//  section mobile visible --------------------------------------------------------------------------------------------------------

const butonOpenMobSection = document.querySelector(
  ".button_open_mobile_sections"
);
const ctnSectionTitleMob = document.querySelector(
  ".container_toggle_section_mobile"
);

butonOpenMobSection.addEventListener("click", () => {
  mobileFilters.style.display = "none";
  setTimeout(() => {
    mobileNavBar.classList.add("mobile_navbar_hidden_visible");
  }, 2);
  modalBg.style.display = "block";

  window.scrollBy(0, -50000);
});
ctnSectionTitleMob.addEventListener("click", () => {
  setTimeout(() => {
    modalBg.style.display = "none";
    mobileFilters.style.display = "block";
  }, 200);
  mobileNavBar.classList.remove("mobile_navbar_hidden_visible");
});
modalBg.addEventListener("click", (e) => {
  if (e.target === modalBg) {
    setTimeout(() => {
      modalBg.style.display = "none";
      mobileFilters.style.display = "block";
      mobileNavBar.style.display = "block";
    }, 200);
    mobileFilters.classList.remove("filter_mobile_visible");
    mobileNavBar.classList.remove("mobile_navbar_hidden_visible");
  }
});








