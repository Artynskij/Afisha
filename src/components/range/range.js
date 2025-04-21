
const slider = document.getElementById('slider-range');
const legend = document.querySelector('.buyTicket_header__time_legend')
  const legendSmallItems = legend.querySelectorAll('.time_legend_item_small')
  const legendItems = legend.querySelectorAll('.time_legend_item_small')
const sliderRange = {
    a:8,
    b:26
}

if(window.screen.availWidth<=1000 && window.screen.availWidth>=830 || window.screen.availWidth<=530) {
    sliderRange.c={
        'min': [8,3],
        '11%': [11,3],
        '30%': [14,4],
        '48%': [18,3],
        '67%': [21,3],
        '87%': [24,2],
        'max': 26
    }
}

noUiSlider.create(slider, {
    start: [sliderRange.a, sliderRange.b],
    connect: true,
    step:1,
    connect: [false, true, false],
    range:sliderRange.c || {
        'min': sliderRange.a,
        'max': sliderRange.b
    },
  
    
});

slider.noUiSlider.on("update", (values, handle) => {

})
// console.log(noUiSlider);

  
//   const unvisBlocks = legend.querySelectorAll('.dn')
//   console.dir(legendSmallItems[0]);
