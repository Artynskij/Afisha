let valueSinceDate;
let valueForDate;
let valueAloneDate;

const buttonSinceCal = document.querySelector(".open_since_calendar");
const buttonForCal = document.querySelector(".open_for_calendar");
const buttonBuyCal = document.querySelector(".open_buyTicket_calendar");
const calendarBlockFilterSince = buttonSinceCal.querySelector(
  ".calendar_filter_since"
);
const calendarBlockFilterFor = buttonForCal.querySelector(
  ".calendar_filter_for"
);
const calendarBlockBuyTicket = buttonBuyCal?.querySelector(
  ".buyTicket_header__date_calendar"
);

const calendarHeader = document.querySelector(".calendar_month");

const rusDay = {
  0: "Вс",
  1: "Пн",
  2: "Вт",
  3: "Ср",
  4: "Чт",
  5: "Пт",
  6: "Сб",
};
const rusMonth = {
  0: "Январь",
  1: "Февраль",
  2: "Март",
  3: "Апрель",
  4: "Май",
  5: "Июнь",
  6: "Июль",
  7: "Август",
  8: "Сентябрь",
  9: "Октябрь",
  10: "Ноябрь",
  11: "Декабрь",
};
const numberMonth = {
  Январь: "01",
  Февраль: "02",
  Март: "03",
  Апрель: "04",
  Май: "05",
  Июнь: "06",
  Июль: "07",
  Август: "08",
  Сентябрь: "09",
  Октябрь: "10",
  Ноябрь: "11",
  Декабрь: "12",
};
function calendar(mainBlock, typeFilter) {
  // main block
  const rowBlockCalendar = mainBlock.querySelector(".calendar_row"); //week day
  const monthBlockCalendar = mainBlock.querySelector(".calendar_month_title"); // year month
  const indicators = {
    prev: mainBlock.parentElement.querySelector(".calendar_month_arrow_prev"),
    next: mainBlock.parentElement.querySelector(".calendar_month_arrow_next"),
  }; // indicators next prev

  function dateAddEventListener() {
    const _date = mainBlock.querySelectorAll(".calendar_number_day");

    let prevBlockInFocus;
    let prevBlockSince;
    let prevBlockFor;
    _date.forEach((block) => {
      const _activeDateMonthAndYear = mainBlock.querySelector(
        ".calendar_month_title"
      );
      const _monthYear = _activeDateMonthAndYear.innerHTML.split(",");
      //смотрим и помечаем наш прошлый выбор если он был
      if (typeFilter !== "buyTicket")
        if (
          valueSinceDate?.day === block.innerHTML &&
          _monthYear[0] === valueSinceDate?.month &&
          _monthYear[1].trim() === valueSinceDate?.year &&
          typeFilter !== "buyTicket"
        )
          block.classList.add("calendar_number_day__active"),
            (prevBlockSince = block);
      if (
        valueForDate?.day === block.innerHTML &&
        _monthYear[0] === valueForDate?.month &&
        _monthYear[1].trim() === valueForDate?.year &&
        typeFilter !== "buyTicket"
      )
        block.classList.add("calendar_number_day__active"),
          (prevBlockFor = block);
      if (
        valueAloneDate?.day === block.innerHTML &&
        _monthYear[0] === valueAloneDate?.month &&
        _monthYear[1].trim() === valueAloneDate?.year &&
        typeFilter === "buyTicket"
      )
        block.classList.add("calendar_number_day__active"),
          (prevBlockFor = block);
      // и ещё дисэйблим невозмодные варианты

      const _specialIdBlock =
        _monthYear[1].trim() +
        numberMonth[_monthYear[0]] +
        (block.innerHTML.length === 1
          ? "0" + block.innerHTML
          : block.innerHTML);
      const _specialIdDateFor =
        valueForDate?.year +
        numberMonth[valueForDate?.month] +
        (valueForDate?.day.length === 1
          ? "0" + valueForDate?.day
          : valueForDate?.day);
      const _specialIdDateSince =
        valueSinceDate?.year +
        numberMonth[valueSinceDate?.month] +
        (valueSinceDate?.day.length === 1
          ? "0" + valueSinceDate?.day
          : valueSinceDate?.day);
      if (_specialIdDateFor <= _specialIdBlock && typeFilter === "since") {
        block.classList.add("calendar_number_day__disable"),
          block.setAttribute("disabled", true);
      }
      if (_specialIdDateSince >= _specialIdBlock && typeFilter === "for") {
        block.classList.add("calendar_number_day__disable"),
          block.setAttribute("disabled", true);
      }
      // console.log(_specialIdDateSince);
      // ------------------------------------------------------------------------
      const todayDate = new Date();
      //при нажатии на блок числа
      block.addEventListener("click", (e) => {
        if (e.target !== block) {
          calendarBlockFilterSince.classList.remove("df");
          calendarBlockFilterFor.classList.remove("df");
          calendarBlockBuyTicket.classList.remove("df");
        }
        if (block.className.includes("calendar_number_day__active")) {
          block.classList.remove("calendar_number_day__active");
          // console.log(block.className.includes("calendar_number_day__active"));
          typeFilter === "since"
            ? (valueSinceDate = undefined)
            : typeFilter === "since"
            ? (valueForDate = undefined)
            : (valueAloneDate = undefined);
        } else {
          if (prevBlockInFocus)
            prevBlockInFocus.classList.remove("calendar_number_day__active");
          if (prevBlockSince && typeFilter === "since")
            prevBlockSince.classList.remove("calendar_number_day__active");
          if (prevBlockFor && typeFilter === "for")
            prevBlockFor.classList.remove("calendar_number_day__active");
          // if(prevBlockFor)
          block.classList.add("calendar_number_day__active");
          prevBlockInFocus = block;
          if (typeFilter === "since") {
            valueSinceDate = {
              day: block.innerHTML,
              month: _monthYear[0],
              year: _monthYear[1].trim(),
            };
          } else if (typeFilter === "for") {
            valueForDate = {
              day: block.innerHTML,
              month: _monthYear[0],
              year: _monthYear[1].trim(),
            };
          } else if (typeFilter === "buyTicket") {
            valueAloneDate = {
              day: block.innerHTML,
              month: _monthYear[0],
              year: _monthYear[1].trim(),
            };
          } /// запись дат в общую область видимости
          calendarBlockFilterSince.classList.remove("df");
          calendarBlockFilterFor.classList.remove("df");
          calendarBlockBuyTicket?.classList.remove("df");
          createBlockClear();
        }
      });
    });
  }

  Date.prototype.daysInMonth = function (month) {
    return (
      32 - new Date(this.getFullYear(), month || this.getMonth(), 32).getDate()
    );
  };

  const todayDate = new Date(); // change data 2024, 5, 3

  function createCalendarContent(date) {
    const dayOfWeek = date.getDay(); // day of week
    const year = date.getFullYear(); // year
    const month = date.getMonth(); // month
    const day = date.getDate(); // num day
    const dayInMonth = date.daysInMonth(); // дней в месяце

    const allWeekDay = [];
    for (let index = 1; index <= dayInMonth; index++) {
      const dateInDay = new Date(year, month, index);
      const data = {
        dayOfWeek: dateInDay.getDay(),
        day: index,
        month: rusMonth[dateInDay.getMonth()],
        year: dateInDay.getFullYear(),
        disable: true,
      };
      allWeekDay.push(data);
    }

    // console.log(contentWeekDays);

    allWeekDay[0].dayOfWeek === 0;

    switch (allWeekDay[0].dayOfWeek) {
      case 0: {
        allWeekDay.unshift({});
      }
      case 6: {
        allWeekDay.unshift({});
      }
      case 5: {
        allWeekDay.unshift({});
      }
      case 4: {
        allWeekDay.unshift({});
      }
      case 3: {
        allWeekDay.unshift({});
      }
      case 2: {
        allWeekDay.unshift({});
      }

      default:
        break;
    }

    allWeekDay.forEach((i) =>
      date.getMonth() === todayDate.getMonth() &&
      date.getFullYear() === todayDate.getFullYear() &&
      i.day < day
        ? (i.disable = true)
        : (i.disable = false)
    );

    allWeekDay.forEach((i) => (i.dayOfWeek = rusDay[i.dayOfWeek]));
    //for mobile calendar
    let mobAllWeekDay;
    if (mainBlock.className.includes("calendar_mobile")) {
      mobAllWeekDay = allWeekDay.filter((i) => {
        return (
          !(
            i.day <= todayDate.getDate() &&
            i.year === todayDate.getFullYear() &&
            i.month === rusMonth[todayDate.getMonth()]
          ) && i.day
        );
      });
    }
    // for mobile calendar
    monthBlockCalendar.innerHTML = `${rusMonth[month]}, ${year}`;
    const contentData = mobAllWeekDay || allWeekDay;
    rowBlockCalendar.innerHTML = contentData
      .map((col) => {
        return createBlockColumn(col.dayOfWeek, col.day, col.disable);
      })
      .join("");

    return date;
  }
  //default first render
  createCalendarContent(todayDate);
  let prevDate = todayDate;
  dateAddEventListener();

  indicators.next.addEventListener("click", () => {
    const date = new Date();
    date.setFullYear(prevDate.getFullYear());
    date.setMonth(prevDate.getMonth() + 1);
    date.getMonth() === 0 ? date.setFullYear(prevDate.getFullYear() + 1) : " ";
    prevDate = createCalendarContent(date);

    dateAddEventListener();
  });
  indicators.prev.addEventListener("click", () => {
    if (
      prevDate.getMonth() > todayDate.getMonth() ||
      prevDate.getFullYear() > todayDate.getFullYear()
    ) {
      const date = new Date();
      date.setFullYear(prevDate.getFullYear());
      date.setMonth(prevDate.getMonth() - 1);

      prevDate = createCalendarContent(date);
      dateAddEventListener();
    }
  });
}

function createBlockColumn(dayOfWeek, day, dis) {
  const _section = day
    ? `
    <div class="calendar_col">
      <div class="calendar_week_day">${dayOfWeek || ""}</div>
      <button ${dis ? "disabled" : ""} class="calendar_number_day ${
        dis ? "calendar_number_day__disable__before" : ""
      }">${day || ""}</button>
    </div>
    `
    : `
    <div class="calendar_col_without">
      <div class="calendar_week_day_without"></div>
      <button disable class="calendar_number_day_without "></button>
    </div>
    `;
  return _section;
}
let prevButton;
function clickButtonOpen(blockTypeCalendar, buttonOpen, type) {
  buttonOpen.addEventListener("click", (e) => {
    if (e.target !== buttonOpen) return;
    // if(prevButton !== blockTypeCalendar)prevButton?.classList.remove("df")
    // console.log(prevButton);
    // prevButton = blockTypeCalendar
    // console.log(prevButton);

    if (!blockTypeCalendar.className.includes("df")) {
      blockTypeCalendar.classList.add("df");
      calendar(blockTypeCalendar, type);
      createBlockClear();
    } else {
      console.log();
      createBlockClear();
      blockTypeCalendar.classList.remove("df");
    }
  });
}
const buttonCalClear = document.querySelector(".calendar_clear");
buttonCalClear.addEventListener("click", () => {
  valueSinceDate = null;
  valueForDate = null;
  createBlockClear();
  console.log("clear");
});
clickButtonOpen(calendarBlockFilterSince, buttonSinceCal, "since");
clickButtonOpen(calendarBlockFilterFor, buttonForCal, "for");
const mobileCalendarBlock = document.querySelector(".calendar_mobile");

calendar(mobileCalendarBlock, "buyTicket");

if (buttonBuyCal){

  clickButtonOpen(calendarBlockBuyTicket, buttonBuyCal, "buyTicket");
}

console.log(buttonCalClear);
function createBlockClear() {
  // const buttonCalClear = document.querySelector(".calendar_clear");
  const blockCalChoice = document.querySelector(".calendar_choice");
  if (valueSinceDate || valueForDate) {
    blockCalChoice.style.display = "flex";
    buttonCalClear.style.display = "flex";
    blockCalChoice.innerHTML = `${
      valueSinceDate
        ? valueSinceDate?.day +
          "." +
          numberMonth[valueSinceDate?.month] +
          "." +
          valueSinceDate?.year
        : "дата не выбрана"
    } - ${
      valueForDate
        ? valueForDate?.day +
          "." +
          numberMonth[valueForDate?.month] +
          "." +
          valueForDate?.year
        : "дата не выбрана"
    }`;
  } else {
    blockCalChoice.style.display = "none";
    buttonCalClear.style.display = "none";
  }
}

document.addEventListener("click", (e) => {
  if (
    e.target === buttonSinceCal ||
    buttonSinceCal.contains(e.target) ||
    e.target === buttonForCal ||
    buttonForCal.contains(e.target) ||
    e.target === buttonBuyCal ||
    buttonBuyCal.contains(e.target)
  )
    return;

  calendarBlockFilterSince.classList.remove("df");
  calendarBlockFilterFor.classList.remove("df");
  calendarBlockBuyTicket.classList.remove("df");
});

document.addEventListener("click", (e) => console.log(e.target));
