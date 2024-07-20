import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Basket from "./pages/Basket";

export const SearchContext = React.createContext();

function App() {
  const [searchValue,setSearchValue] = React.useState('')
  return (
   <SearchContext.Provider value={{searchValue,setSearchValue}}>
     <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="*" element={<NotFound />}/>
              <Route path="/basket" element={<Basket />}/>
            </Routes>
          </div>
        </div>
      </div>
   </div>
   </ SearchContext.Provider>
  );
}

export default App;
