'use strict';

let myForm = document.getElementById( 'myForm' );
let myDiv = document.getElementById( 'info' );
let allObj = [];
function Obj( carsName, category, model ) {
  this.carsName = carsName;
  this.category = category;
  this.model = model;
  allObj.push( this );
}

Obj.prototype.render = function () {
  const ul = document.createElement( 'ul' );

  const button = document.createElement( 'button' );
  button.textContent = 'X';
  //   button.setAttribute( 'onclick', `remove(${index})` );

  const li = document.createElement( 'li' );
  li.textContent = this.carsName;
  const p1 = document.createElement( 'p' );
  p1.textContent = this.category;
  const p2 = document.createElement( 'p' );
  p2.textContent = this.model;

  myDiv.appendChild( button );
  myDiv.appendChild( ul );
  ul.appendChild( li );
  li.appendChild( p1 );
  li.appendChild( p2 );

};
function hendleClick( event ) {
  event.preventDefault();

  let carsName = event.target.carsName.value;
  let category = event.target.category.value;
  let model = event.target.model.value;

  //   console.log(category);
  let newObj = new Obj( carsName, category, model );
  console.log( newObj );
  newObj.render();
  localStorage.setItem( 'data', JSON.stringify( allObj ) );
}

function getRender() {
  for ( let i = 0; i < allObj.length; i++ ) {
    const ul = document.createElement( 'ul' );
    const button = document.createElement( 'button' );
    button.textContent = 'X';
    // button.setAttribute( 'onclick', `remove(${index})` );
    const li = document.createElement( 'li' );
    li.textContent = allObj[i].carsName;
    const p1 = document.createElement( 'p' );
    p1.textContent = allObj[i].category;
    const p2 = document.createElement( 'p' );
    p2.textContent = allObj[i].model;
    myDiv.appendChild( button );

    myDiv.appendChild( ul );
    ul.appendChild( li );
    li.appendChild( p1 );
    li.appendChild( p2 );
  }

}

function checkLS() {
  if ( localStorage.getItem( 'data' ) ) {
    allObj = JSON.parse( localStorage.getItem( 'data' ) );
    getRender();
  }
}


// function remove(){
//   let allObj = localStorage['data'];
//   for ( let i =0; i< allObj.length; i++ ) {
//     let item = JSON.parse( allObj[i] );
//     if ( item.itemId === 3 ) {
//       allObj.slice( i );
//       break;
//     }
//   }

//   // Don't forget to store the result back in localStorage
//   localStorage.setItem( 'data', allObj );
// }
// remove();

checkLS();
myForm.addEventListener( 'submit', hendleClick );
