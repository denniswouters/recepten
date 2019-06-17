# Recepten
Recepten is een onderdeel van onze progressive web-app genaamd Mattie. 

# Images
![](animation.gif)

# Plugins
```js
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
``` 
In bovenstaande functie kan aan de hand van de lengte van een woord een kleur gegeven worden.

```js
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
``` 
In bovenstaande functie kan aan de hand van een element in de code een lijst worden ingeladen van een aantal items.

# Install
Om gebruik te maken van de bovenstaande plugins moet het Javascript bestanden geimporteerd worden in het project. Dit kan als volgt gedaan worden:
```html
    <script type="text/javascript" src="js/recepten.js"></script>
```
Om de functies te kunnen gebruiken kan je het onderstaande voorbeeld volgen:
```js
function filterItems(filterName) {
  let items = filter(filterName, jsosdn)

  $(".container").generateDishes('list', true, items);

  $('.dish').changeColorOnTextLength();
  
};
```
De bovenstaande functie roept beide plugins aan. De functie wordt aangeroepen wanneer een gebruiker op een icoontje klikt (zie Images). Deze functies filtert eerst de items aan de hand van een filter variabele. Zodra er een lijst met gefilterde items wordt gemaakt dan wordt door de functie 'generateDishes' de html aangepast zodat alleen de gefilterde items weergegeven worden. Als laatste worden de items weer opgehaald en dan wordt aan de hand van de lengte van het item bepaald welke kleur de tekst in de html wordt. Dit gebeurd in de functie 'changeColorOnTextLength'.
