// // import { testing } from "../app";

// import { Api } from "../../api/api.js";

// let routes = {};
// let templates = {};
// const main = document.querySelector(".main");
// const mainSlider = document.querySelector(".main_sliderOneImg ");
// const navBar = document.querySelector(".navbar");
// // console.log(testing);
// const api = new Api()
// const perfomanceData = await api.getPerfomance()
// console.log(perfomanceData.data);
// const mockData = {
//   cinema: [
//     {
//       id: 1,
//       title: "Аватар: путь воды",
//       price: "15.00 - 25.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "./src/img/Poster1.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 2,
//       title:
//         "Аватар: путь воды и слоган нашео счастья в том что ты пранеь норм",
//       price: "15.00 - 25.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "./src/img/Poster1.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 3,
//       title: "Аватар: путь воды",
//       price: "15.00 - 25.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "./src/img/Poster1.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 4,
//       title: "Аватар: путь воды",
//       price: "15.00 - 25.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "./src/img/Poster1.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 5,
//       title: "Аватар: путь воды",
//       price: "15.00 - 25.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "./src/img/Poster1.png",
//       place: "Концертный зал Минск, Минск",
//     },
//   ],
//   fest: [
//     {
//       id: 1,
//       title: "Саша Савик",
//       price: "65.00 - 95.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "./src/img/Poster3.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 2,
//       title: "Саша Савик",
//       price: "65.00 - 95.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "./src/img/Poster3.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 3,
//       title: "Саша Савик",
//       price: "65.00 - 95.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "./src/img/Poster3.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 4,
//       title: "Саша Савик",
//       price: "65.00 - 95.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "./src/img/Poster3.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 5,
//       title: "Саша Савик",
//       price: "65.00 - 95.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "./src/img/Poster3.png",
//       place: "Концертный зал Минск, Минск",
//     },
//   ],
//   kids: [
//     {
//       id: 1,
//       title: "Мот",
//       price: "165.00 - 295.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "./src/img/Poster2.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 2,
//       title: "Мот",
//       price: "165.00 - 295.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "./src/img/Poster2.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 3,
//       title: "Мот",
//       price: "165.00 - 295.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "./src/img/Poster2.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 4,
//       title: "Мот",
//       price: "165.00 - 295.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "./src/img/Poster2.png",
//       place: "Концертный зал Минск, Минск",
//     },
//     {
//       id: 5,
//       title: "Мот",
//       price: "165.00 - 295.00",
//       date: "Ср 28.12.2022",
//       time: "19:00",
//       poster: "./src/img/Poster2.png",
//       place: "Концертный зал Минск, Минск",
//     },
//   ],
//   default: [
//     {
//       id: 1,
//       title:
//         "Тут название чего-то Тут название чего-то Тут название чего-то Тут название чего-то",
//       price: "а тут цена",
//       date: "а тут дата",
//       time: "и время соответсвенно",
//       poster: "./src/img/Poster3.png",
//       place: "место",
//     },
//     {
//       id: 2,
//       title: "Тут название чего-то",
//       price: "а тут цена",
//       date: "а тут дата",
//       time: "и время соответсвенно",
//       poster: "./src/img/marketing.png",
//       place: "место",
//     },
//   ],
// };
// const mockCategories = [
//   { title: "Спектакли", path: "teatr", id: 1 },
//   { title: "Концерты", path: "concert", id: 2 },
//   { title: "Кино", path: "cinema", id: 3 },
//   { title: "Фестивали", path: "fest", id: 4 },
//   { title: "Мюзиклы", path: "music", id: 5 },
//   { title: "Детям", path: "kids", id: 6 },
//   { title: "Классика", path: "classic", id: 7 },
//   { title: "Спорт", path: "sport", id: 8 },
//   { title: "Новости мероприятий", path: "news", id: 9 },
// ];
// //components
// import style from "../../../index.html"
// function breadCrumbComponents({ category }){
//   return `
//         <div class="breadCrumb">
//             <a href="../../../index.html" type="MIME-тип" class="breadCrumb__item">Главная</a>
//             <div class="breadCrumb__item__line">/</div>
//             <div class="breadCrumb__item">${
//               category || "еще пока не знаю"
//             }</div>
            
            
//         </div>

//         `;
// };
// function navBarComponents(){
//   //   const section = `
//   // <a type="MIME-тип" href="#/category/teatr" name="teatr" class="navbar_item" >Спектакли</a >
//   // <a type="MIME-тип" href="#/category" name="concert" class="navbar_item" >Концерты</a >
//   // <a type="MIME-тип" href="#/category" name="cinema"class="navbar_item">Кино</a>
//   // <a type="MIME-тип" href="#/category" name="fest" class="navbar_item" >Фестивали</a >
//   // <a type="MIME-тип" href="#/category" name="music" class="navbar_item navbar_item_hiden" >Мюзиклы</a >
//   // <a type="MIME-тип" href="#/category" name="kids" class="navbar_item navbar_item_hiden">Детям</a>
//   // <a type="MIME-тип" href="#/category" name="classic" class="navbar_item navbar_item_hiden" >Классика</a >
//   // <a type="MIME-тип" href="#/category" name="sport" class="navbar_item navbar_item_hiden" >Спорт</a >
//   // <a type="MIME-тип" href="#/category" name="news" class="navbar_item navbar_item_hiden" >Новости мероприятий</a >
//   // `;
//   //   const section = `
//   // <a type="MIME-тип" href="#/category/teatr" name="teatr" class="navbar_item" >Спектакли</a >
//   // `;
//   return mockCategories
//     .map(
//       (cat) => `
// <a type="MIME-тип" href="#/category/${cat.path}" name="teatr" class="navbar_item" >${cat.title}</a >
// `
//     )
//     .join(" ");
// };
// function filtersComponentsMobile(){
// const section = `
// <div class="modal_bg">
// <div class="main_filters__mobile grid_filters">
// <div class="main_filters_head">
//   <img
//     class="imgFilterEqualizer"
//     src="../img/icons/filter.png"
//     alt="filters"
//   />
//   <div class="main_filters__container_toggle_filter">
//     <img
//       class="filters_toggle"
//       src="../img/icons/arrow-left-grey.png"
//       alt="arrow"
//     />
//     Скрыть фильтры
//   </div>
// </div>
// <div class="main_filters__item">
//   <div class="button mb35">
//     <img
//       class="imgLocation mr10"
//       src="../img/icons/location white.png"
//       alt="loc"
//     />
//     Поиск по карте
//   </div>
//   <div class="main_filters__item_title">Статус мероприятия</div>
//   <ul class="main_filters__item_list_of_filters">
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_inSale"
//         name="inSale"
//         type="checkbox"
//       />
//       <label for="check_inSale"> В продаже </label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_saled"
//         type="checkbox"
//       />
//       <label for="check_saled">Продано</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_returned"
//         type="checkbox"
//       />
//       <label for="check_returned">Возврат</label>
//     </li>
//   </ul>
// </div>
// <div class="main_filters__item">
//   <div class="main_filters__item_title">Дата проведения с:</div>
//   <div class="button mb35">
//     <img
//       class="imgDate mr10"
//       src="../img/icons/date white.png"
//       alt="calendar"
//     />
//     Выбрать период
//   </div>
//   <div class="main_filters__item_title">Дата проведения по:</div>
//   <div class="button">
//     <img
//       class="imgDate mr10"
//       src="../img/icons/date white.png"
//       alt="calendar"
//     />
//     Выбрать период
//   </div>
// </div>
// <div class="main_filters__item">
//   <div class="main_filters__item_title">Категории</div>
//   <ul class="main_filters__item_list_of_filters">
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_performances"
//         type="checkbox"
//       />
//       <label for="check_performances"> Спектакли </label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_сoncert"
//         type="checkbox"
//       />
//       <label for="check_сoncert">Концерты</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_cinema"
//         type="checkbox"
//       />
//       <label for="check_cinema">Кино</label>
//     </li>
//     <li>
//       <input class="input_checkbox" id="check_fest" type="checkbox" />
//       <label for="check_fest">Фестивали</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_hip-hop"
//         type="checkbox"
//       />
//       <label for="check_hip-hop">Хип-хоп и рэп</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_music"
//         type="checkbox"
//       />
//       <label for="check_music">Мюзиклы</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_forkids"
//         type="checkbox"
//       />
//       <label for="check_forkids">Детям</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_ballet"
//         type="checkbox"
//       />
//       <label for="check_ballet">Балет</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_opera"
//         type="checkbox"
//       />
//       <label for="check_opera">Опера</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_inctumentalMusik"
//         type="checkbox"
//       />
//       <label for="check_inctumentalMusik"
//         >Инструментальная музыка</label
//       >
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_vokals"
//         type="checkbox"
//       />
//       <label for="check_vokals">Вокал</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_sport"
//         type="checkbox"
//       />
//       <label for="check_sport">Спорт</label>
//     </li>
//   </ul>
// </div>
// <div class="main_filters__item dnone">
//   <div class="main_filters__item_title">Город</div>
//   <ul class="main_filters__item_list_of_filters">
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_town_minsk"
//         type="checkbox"
//       />
//       <label for="check_town_minsk">Минск</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_town_brest"
//         type="checkbox"
//       />
//       <label for="check_town_brest">Брест</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_town_grodno"
//         type="checkbox"
//       />
//       <label for="check_town_grodno">Гродно</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_town_vitebsk"
//         type="checkbox"
//       />
//       <label for="check_town_vitebsk">Витебск</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_town_gomel"
//         type="checkbox"
//       />
//       <label for="check_town_gomel">Гомель</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_town_mogilev"
//         type="checkbox"
//       />
//       <label for="check_town_mogilev">Могилев</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_town_another"
//         type="checkbox"
//       />
//       <label for="check_town_another">Другой город</label>
//     </li>
//   </ul>
// </div>
// <div class="main_filters__item">
//   <div class="main_filters__item_title">Место проведения</div>
//   <ul class="main_filters__item_list_of_filters">
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_place_arena"
//         type="checkbox"
//       />
//       <label for="check_place_arena">минск-арена</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_place_prime"
//         type="checkbox"
//       />
//       <label for="check_place_prime">Прайм холл / Prime Hall</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_place_falcon"
//         type="checkbox"
//       />
//       <label for="check_place_falcon">Falcon Club арена</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_place_club_base"
//         type="checkbox"
//       />
//       <label for="check_place_club_base">Клуб база</label>
//     </li>
//     <li>
//       <input
//         class="input_checkbox"
//         id="check_place_grodno_philarmony"
//         type="checkbox"
//       />
//       <label for="check_place_grodno_philarmony"
//         >Гродненская областная филармония</label
//       >
//     </li>
//   </ul>
// </div>
// </div>
// <div class="under_filters_marketing">
// <img
//   class="main_filters_marketing__item"
//   src="../img/marketing2.png"
//   alt="marketing"
// />
// <img
//   class="main_filters_marketing__item"
//   src="../img/marketing2.png"
//   alt="marketing"
// />
// </div>
// </div>
// `
// }
// //componentsPage
// function home() {
  
// }
// function category() {
//   const urlforCategory = window.location.hash.slice(1).split("/") || "/";
//   const activeCategory = mockCategories.filter((cat) => {
//     let memory;
//     urlforCategory.forEach((item) =>
//       item === cat.path ? (memory = cat) : false
//     );
//     return memory;
//   })[0];
  
//   const cardsContent = activeCategory.path === 'teatr' ? perfomanceData.data : mockData[activeCategory.path] || mockData.default;
// // const getImage = async (url) => {
// // const data = await api.getImage(url)
// // console.log(data);
// // return data
// // }
//   const _section = `<div class="type_page__title">${activeCategory.title}</div>
//                           <div class="type_page__content">
//                          ${cardsContent
//                            .map((card) => {
//                              return `
//                           <div class="type_page__content__card">
//                           <img class="type_page__content__card__img" src="${card.poster || "https://webgate.24guru.by/api/v2" + card.image.thumbnail.url}" alt="img card" />
//                           <div class="type_page__content__card__title">${card.title || card.name}</div>
//                           <div class="button light_button canBuyTicket type_page__content__card__price">
//                                 ${card.price || card.minPrice}
//                           </div>
//                           <div class="type_page__content__card__date">
//                               <img class="imgDate mr10" src="./src/img/icons/caledanr.png" alt="date"/>
//                               ${card.date}
//                               <span class="type_page__content__card__date__time">${card.time || 'Постоянно'}</span>
//                           </div>
//                           <div class="type_page__content__card__place">
//                               <img class="imgLocation mr10" src="./src/img/icons/location.png" alt="location"/>
//                               ${card.place}
//                           </div>
//                       </div>`;
//                            })
//                            .join("")}
         
    
//                       </div>`;

//   mainSlider.innerHTML = breadCrumbComponents({
//     category: activeCategory.title,
//   });
//   main.innerHTML = _section;
// }
// navBar.innerHTML = navBarComponents();
// const navBarItems = document.querySelectorAll(".navbar_item");
// //components ends


// // Добавление класса active в navBar
// let prevNav;
// navBar.addEventListener("click", (e) => {
//   if (e.target.classList[0] != navBarItems[1].classList[0]) {
//     return;
//   }
//   prevNav
//     ? prevNav.classList.remove("navbar_item__active")
//     : console.log("none");
//   navBarItems.forEach(
//     (el) => (
//       el === e.target ? el.classList.add("navbar_item__active") : "",
//       el === e.target ? (prevNav = el) : ""
//     )
//   );
// });
// //Routing
// function route(path, template) {
//   if (typeof template === "function") {
//     return (routes[path] = template);
//   } else if (typeof template === "string") {
//     return (routes[path] = templates[template]);
//   } else {
//     return;
//   }
// }
// function template(name, templateFunction) {
//   return (templates[name] = templateFunction);
// }
// template("home", function () {
//   home();
// });

// template("category", function () {
//   category();
// });
// //create url and content
// route("/", "home");
// mockCategories.map((cat) => route(`/category/${cat.path}`, "category"));
// // route("/category/teatr", "category");
// function resolveRoute(route) {
//   try {
//     return routes[route];
//   } catch (e) {
//     throw new Error(`Route ${route} not found`);
//   }
// }
// function router(evt) {
//   let url = window.location.hash.slice(1) || "/";
//   let route = resolveRoute(url);

//   route();
// }
// window.addEventListener("load", router);
// window.addEventListener("hashchange", router);

