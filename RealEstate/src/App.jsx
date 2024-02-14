import {Route,Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import SearchInOffers from "./components/SearchInOffers/SearchInOffers"
import Details from "./components/Details/Details";
function App() {

  return (
    <div className="">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="search" element={<SearchInOffers/>}/>
      <Route path="/details" element={<Details/>}/>

      </Routes>
    
    </div>
  );
}

export default App;
