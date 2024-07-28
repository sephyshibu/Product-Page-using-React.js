import React from "react";
import classes from './Topbar.module.css'; // Use the correct casing;


const Topbar=() =>{
    return(
        <header className="App-header">
        <nav className={classes.topbar}>
          <img src="./am2.png" alt="Amazon Logo" />
        </nav>
      </header>
    )
}
export default Topbar;