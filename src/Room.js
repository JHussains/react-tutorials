import React, { useState } from 'react';
import './Room.css';
function Room() {

  //const state = useState(true);
  //console.log("State = ",state);
  let [isLit, setLit] = useState(false);
  function updateLit() {
      console.log("Button clicked");
      setLit(!isLit);
      //isLit = !isLit;
  }

  return (
    <div className={"room "+(isLit?"light":"dark")}>
    <br />
    <center>
    <b>This Room is</b> {isLit? "Light": "Dark"}
    <br/>
    <button onClick={updateLit} >Toggle Light</button>
    <br/>
    </center>
    <center>
    <br />
            <a className="App-link"
          href="https://getinfoline.com"
          target="_blank"rel="noopener noreferrer">
          <h2>Visit Our Website</h2>
        </a>
    <h1>Piaic Offering Best Following Courses</h1>

          <fieldset><legend><b><font color="#10cc26">Piaic Offering</font></b></legend>
            <td>
            <li>Artifical Intelligence</li>
            <li>Cloud Native Computing</li>
            <li>Blockchain</li>
            <li>Internet of Things</li>
           </td>
          </fieldset>
          <h4><font color="yellowgreen">Created by: Javed Hussain</font></h4>
          </center>
    </div>
  );
}

export default Room;
