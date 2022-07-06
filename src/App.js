import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Cats from "./pages/Cats";
import Favourites from "./pages/Favourites";

const App = () => {
  const [favourites, setFavourites] = useState([])
  return (
   <div>
     <Header/>
       <Routes>
         <Route path="/" element={<Cats setFavourites={setFavourites} favourites={favourites} />}/>
         <Route path="/favourites" element={<Favourites favourites={favourites}/>} />
       </Routes>
   </div>
  );
};

export default App;