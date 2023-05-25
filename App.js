import "./App.css";
import MonMenu from "./components/builder/Monmenu";
import MonNom from "./components/profile/FullName";
import MonAdresse from "./components/profile/Address";
import MaPhoto from "./components/profile/ProfilePhoto";
import NouveauF from "./lespages/NouveauF";

function App() {
  return (
    <div className="App">
      <MonMenu />
      <MonNom />
      <MonAdresse />
      <MaPhoto />
    </div>
  );
}

export default App;
