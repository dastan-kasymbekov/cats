import React from 'react';
import './Favourites.scss'
import {useDispatch, useSelector} from "react-redux";

const Favourites = () => {
  const dispatch = useDispatch()
  const {favourites} = useSelector((store) => store)

  const removeFromFavourites = (id) => {
    dispatch({type: "REMOVE_FROM_FAVOURITES", payload: id})
  }
  return (
    <section className="favourites container">
      <div className="row">
        {
          favourites.length ? favourites.map((cat) => (
            <div key={cat.id} className="cat-card col-2_4 relative">
              <img src={cat.url} alt=""/>
              <svg onClick={() => removeFromFavourites(cat.id)} className="favourite-svg" width="40" height="37"
                   viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29 0C25.52 0 22.18 1.62 20 4.18C17.82 1.62 14.48 0 11 0C4.84 0 0 4.84 0 11C0 18.56 6.8 24.72 17.1 34.08L20 36.7L22.9 34.06C33.2 24.72 40 18.56 40 11C40 4.84 35.16 0 29 0ZM20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z"
                  fill="#F24E1E"/>
                <path d="M14 28L2.5 13V8L8 2.5L15 3.5L21 6.5L24 2.5H31.5L37 6.5L36 16.5L20 32.5L14 28Z"
                      fill="transparent"/>
              </svg>
            </div>
          )) : 'Нет любимых котиков ♡'
        }
      </div>
    </section>
  );
};

export default Favourites;