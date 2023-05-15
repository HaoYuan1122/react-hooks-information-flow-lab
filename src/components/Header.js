import React,{useState} from "react";
function Header(props){
    const [isDarkMode, setIsDarkMode] = useState(false);
    function onDarkModeClick(){
        setIsDarkMode((isDarkMode) => !isDarkMode);
        props.mode()
    }
    return(
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}
export default Header