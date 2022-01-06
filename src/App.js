import { BrowserRouter } from "react-router-dom";
import Navi from "./Components/Navi";
import Main from "./Screens/Main";
import {Routes,Route} from "react-router";
import Admin from "./Screens/Admin";

function App() {
  return (
    <BrowserRouter>
      <Navi/>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
