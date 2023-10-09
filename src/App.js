import React, {useState} from "react";
import NavBar from "./components/NavBar";
import Main from './components/Main';
// import NewMain from "./components/NewMain";
import Features from "./components/Features";
import Offers from "./components/Offers";
import VoiceMail from "./components/VoiceMail";

function App() {
  
  const [isUKR, setIsUKR] = useState(true)
  return (
    <div className="App">
      <NavBar changeLang={receive => setIsUKR(receive)} isUKR={isUKR}/>
      <Main isUKR={isUKR}/>
      {/* <NewMain /> */}
      <Features isUKR={isUKR}/>
      <Offers isUKR={isUKR}/>
      <VoiceMail isUKR={isUKR}/>
    </div>
  );
}

export default App;
