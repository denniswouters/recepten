var dishes = document.getElementById("list");
let jsosdn = [{
    dishName: "Boerenkool",
    kitchen: "Nederlands",
  },
  {
    dishName: "Spaghetti",
    kitchen: "Italiaans",
  },
  {
    dishName: "Noodles",
    kitchen: "Aziatisch",
  },
  {
    dishName: "Sushi",
    kitchen: "Aziatisch",
  },
  {
    dishName: "Vlaamse friet",
    kitchen: "Belgisch",
  }
];

//filters given array on given name
function filter(filterName, dishArray) {
  return dishArray.filter(function (item) {
    return item.kitchen === filterName
  });
};

//loads when page refreshes
$(function () {

  //generating dishes to view
  $(".container").generateDishes('list', false, jsosdn);

  // onclick to icons
  let kitchens = this.querySelectorAll('.category-item');
  for (let i = 0; i < kitchens.length; i++) {
    let kitchen = kitchens[i];
    kitchen.onclick = function () {
      filterItems(kitchen.attributes[1].nodeValue)
    }
  }

  //changing text on dishes
  $('.dish').changeColorOnTextLength();

})

function filterItems(filterName) {
  //filter items based on name
  let items = filter(filterName, jsosdn)

  $(".container").generateDishes('list', true, items);

  $('.dish').changeColorOnTextLength();
  
};

// plugins 
(function ($) {
  //change color 
  $.fn.changeColorOnTextLength = function () {
    for (let i = 0; i < this.length; i++) {
      if (this[i].innerText.length > 7) {
        this[i].style.color = 'red'
      }
      if (this[i].innerText.length < 7) {
        this[i].style.color = 'green'
      }
      if (this[i].innerText.length === 7) {
        this[i].style.color = 'yellow'
      }
    }
    return this;
  };

  //generate dishes
  $.fn.generateDishes = function (listElement, clean, items) { 
    var d = document.getElementById(listElement);
    // clean list before add depending on variable 'clean'
    if (clean) {
      d.innerHTML = ""
    }
    // loops through given variable 'items' and adds dish to div
    for (let index = 0; index < items.length; index++) {
      var obj = document.createElement('div');
      obj.className = "dish";
      obj.innerHTML = items[index].dishName;
      d.appendChild(obj)
    }
  }

}(jQuery));