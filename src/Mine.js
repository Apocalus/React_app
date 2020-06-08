import React from 'react';
import './Mine.css';
import App from './App';


function Mine({name}) {
    return <div>Hello <strong className = "name">{name}</strong>!
    <br></br>
    <h1>This is a heading</h1>
    <div className = "lists">
     <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
     </ol>
    <br></br> 
     <p className = "calc"><em id = "forcalc">Calculations:</em></p>
     <ul>
      <li>{5 + 10}</li> 
      <li>{5 - 10}</li> 
      <li>{5 * 10}</li> 
      <li>{10 / 10}</li>
     </ul>
    </div>
    <p id = "for_p">Random picture:</p>
    <img src = "https://i.imgur.com/TsKDdxC.jpg" alt = "children listening during civil war"></img>
    <p id = "for_p">Random video:</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/6ptI5B4a-ag" frameborder="0" allow="accelerometer; autoplay; encrypted-media; 
    gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p id = "for_p">Random Survey:</p>
    <footer id = "form">
    <form>
      <div className ="input">
    First name: <input type = "text" name = "fname"/><br></br><br></br> </div>
    Last name: <input type = "text"  name = "lname"/><br></br><br></br>
    <div id = "button">
    <button type="reset">Reset</button><span id = "submit"><button type="submit">Submit</button></span></div><br></br>
    </form>
    </footer>
      </div>
  }
  
  export default Mine;