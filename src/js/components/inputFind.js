// find event animation --------------------------------------------------------------------------------------------------------
const mockFilms = [
    {
      title: "Мстители",
      type: "боевик, фантастика, крутой фильм",
      img: "../img/Poster1.png",
      url: "./src/pages/eventPage.html",
      id: 1,
    },
    {
      title: "Саша савик",
      type: "мб норм парень",
      img: "../img/Poster3.png",
      url: "../src/pages/eventPage.html",
      id: 2,
    },
    {
      title: "Корж",
      type: "ну сто про норм парень",
      img: "../img/event_img.jpg",
      url: "../src/pages/eventPage.html",
      id: 3,
    },
    {
      title: "Мстители Война бесконечности",
      type: "боевик, фантастика, крутой фильм",
      img: "../img/Poster1.png",
      url: "../src/pages/eventPage.html",
      id: 4,
    },
    {
      title: "Мстители эра альтрона",
      type: "боевик, фантастика, крутой фильм",
      img: "../img/Poster1.png",
      url: "../src/pages/eventPage.html",
      id: 5,
    },
    {
      title: "Мстители эра альтрона category",
      type: "боевик, фантастика, крутой фильм",
      img: "../img/Poster1.png",
      url: "./eventPage.html",
      id: 6,
    },
    {
      title: "Мстители эра альтрона mainPage",
      type: "боевик, фантастика, крутой фильм",
      img: "./src/img/Poster1.png",
      url: "./src/pages/eventPage.html",
      id: 7,
    },
    {
      title: "Мстители эра альтрона eventPage",
      type: "боевик, фантастика, крутой фильм",
      img: "../img/Poster1.png",
      url: "./eventPage.html",
      id: 8,
    },
  ];
  const fieldFind = document.querySelectorAll(".header__find");
  fieldFind.forEach((field) => {
    const _dropFindContainer = field.querySelector(".input_find__elements");
    const _input = field.querySelector(".input_find");
  
    _input.oninput = function () {
      // document.getElementById("result").innerHTML = _input.value;
  
      if (_input.value.length > 1) {
        _dropFindContainer.style.display = "block";
  
        const findMockFilms = mockFilms.filter((film) =>
          film.title.toLowerCase().includes(_input.value.toLowerCase())
        );
        let content = findMockFilms.map((film) => {
          return dropInputContentItem({ ...film });
        });
        content.length===0 ? content.push(`<div class="input_find__elements_item">К сожалению по вашему запросу ничего не найдено</div>`) : console.log(content);
        console.log(content);
        _dropFindContainer.innerHTML = content.slice(0, 4).join("");
      } else {
        _dropFindContainer.style.display = "none";
      }
    };
  });
  
  function dropInputContentItem({ title, type, img, url, id }) {
    const _section = `
    <a href="${url}" class="input_find__elements_item">
                <img src="${img}" />
                <div class="input_find__elements_item_description">
                  <div class="input_find__elements_item_description_title">${title}</div>
                  <div class="input_find__elements_item_description_title_type">${type}</div>
                </div>
              </a>
    `;
    return _section;
  }
  