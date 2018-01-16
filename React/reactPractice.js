// Ex. JSX contained within an object
const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};

/* -------------------------------------------*/

// If JSX takes more than 1 line, put in parenthesis
var myDiv = (
  // need to div wrapper for multiple elements
  <div id = 'some-id'>
    <h1>
      Hello world
    </h1>
    <article>
      An article goes here.
     </article>
  </div>
);

/* -------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';

// render using reactDOM library
ReactDOM.render(<h1>Render me!</h1>, 
                document.getElementById('app'));

/* -------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
);

ReactDOM.render(
  myList, 
  document.getElementById('app')
);

/* -------------------------------------------*/

// Class is reserved in JavaScript, so use className in JSX to refer to class in HTML
import React from 'react';
import ReactDOM from 'react-dom';

var myDiv = <div className="big">I AM A BIG DIV</div>;

ReactDOM.render(myDiv, 
                document.getElementById('app'))

/* -------------------------------------------*/

const profile = (
  <div>
    <h1>I AM JENKINS</h1>
    <img src="images/jenkins.png" >
    <article>
      I LIKE TO SIT
      
      // <br> needs a closing tag, unlike it's html counterpart    
  
      <br />
      JENKINS IS MY NAME
      <br />
      THANKS HA LOT
    </article>
  </div>
);

/* -------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  
  // Having curly braces makes the numbers behave like JavaScript instead of JSX
  // So output is '5'
  
  <h1>2 + 3 = {2 + 3}</h1>,
  document.getElementById('app')
);

/* -------------------------------------------*/

const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);

/* -------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty" 
    onClick={makeDoggy}/>
);

ReactDOM.render(kitty, document.getElementById('app'));

/* -------------------------------------------*/

