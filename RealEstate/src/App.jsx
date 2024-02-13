import {Route,Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import SearchInOffers from "./components/SearchInOffers/SearchInOffers"
function App() {

  return (
    <div className="">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<SearchInOffers/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
