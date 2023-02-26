import { useContext } from 'react';
import './App.css';
import DataContext from './component/context';
import Home from "./component/home/Home"
import Navbar from './component/navbar/Navbar';
import Popup from './component/popup/Popup';

function App() {
  const { theme, popup } = useContext(DataContext)

  return (
    <div className={theme ? "dark " : "light "}>
      <Navbar />
      <Home />
      {popup ? <Popup /> : ""}
    </div>
  );
}

export default App;
