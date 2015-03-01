/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
var UI = require('ui');
// var Vector2 = require('vector2');
var ajax = require('ajax');

ajax({
  url: 'https://study-time.herokuapp.com/card'},
    function(data) {
      console.log("this is data " + data);  
      var flashcards = []; //array of flashcard objects
      var result = JSON.parse(data);
      console.log("This is result[0]" + result[0]);
      console.log('Type of result ' + typeof result); //r
      var i = 0;  
      while (i < result.length) {
          console.log(result[i]);  
          flashcards.push({
            title: result[i].title,
            body: result[i].body,
          });
          console.log("Stringified flashcards "+ JSON.stringify(flashcards));
          i = i+1;
        }
        var menu = new UI.Menu({
            sections: [{
                items: flashcards
            }]
        });
      
        menu.on('select', function(e) {
          console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
          var card = new UI.Card({
            title: flashcards[e.itemIndex].title
          });
          card.body(flashcards[e.itemIndex].body);
          card.show();
        });
        menu.show();
    },function(err){
      
    }
);



// var main = new UI.Card({
//   title: 'Pebble.js',
//   icon: 'images/menu_icon.png',
//   subtitle: 'Hello World!',
//   body: 'Press any button.'
// });

// main.show();

// for(var x in page) {
//   title= x.title;
// }

// main.on('click', 'up', function(e) {
//   var menu = new UI.Menu({
//     sections: [{
//       items: [{
//         title: 'Pebble.js',
//         icon: 'images/menu_icon.png',
//         subtitle: 'Can do Menus'
//       }, {
//         title: 'Second Item',
//         subtitle: 'Subtitle Text'
//       }]
//     }]
//   });
//   menu.on('select', function(e) {
//     console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
//     console.log('The item is titled "' + e.item.title + '"');
//   });
//   menu.show();
// });

// main.on('click', 'select', function(e) {
//   var wind = new UI.Window();
//   var textfield = new UI.Text({
//     position: new Vector2(0, 50),
//     size: new Vector2(144, 30),
//     font: 'gothic-24-bold',
//     text: 'Text Anywhere!',
//     textAlign: 'center'
//   });
//   wind.add(textfield);
//   wind.show();
// });

// main.on('click', 'down', function(e) {
//   var card = new UI.Card();
//   card.title('A Card');
//   card.subtitle('Is a Window');
//   card.body('The simplest window type in Pebble.js.');
//   card.show();
// });