import React, {useEffect, useState} from 'react';
import './Cats.scss'
import axios from "axios";
import {useDispatch} from "react-redux";
import Spinner from "../../components/Spinner";

const Cats = () => {
  const dispatch = useDispatch()
  const [cats, setCats] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(null)

  useEffect(() => {
    axios.get(`https://api.thecatapi.com/v1/images/search?page=${currentPage + 1}&limit=20&orders=Desc`,
      {
        headers: {
          'x-api-key': '369d6278-b49d-4754-a1d0-6dfcc8e29343'
        }
      })
      .then((res) => {
        setCats(res.data)
        setIsLoading(false)
        setTotalPages(Math.floor((res.headers['pagination-count'] / 20)))
      })
  }, [currentPage])
  const addToFavourites = (cat) => {
    dispatch({type: "ADD_TO_FAVOURITES", payload: cat})
  }

  if (isLoading) {
    return <Spinner/>
  }

  return (
    <section className="cats container">
      <div className="row">
        {
          cats.map((cat) => (
            <div key={cat.id} className="cat-card col-2_4 relative">
              <img src={cat.url} alt=""/>
              <svg onClick={() => addToFavourites(cat)} className="favourite-svg" width="40" height="37"
                   viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29 0C25.52 0 22.18 1.62 20 4.18C17.82 1.62 14.48 0 11 0C4.84 0 0 4.84 0 11C0 18.56 6.8 24.72 17.1 34.08L20 36.7L22.9 34.06C33.2 24.72 40 18.56 40 11C40 4.84 35.16 0 29 0ZM20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z"
                  fill="#F24E1E"/>
                <path d="M14 28L2.5 13V8L8 2.5L15 3.5L21 6.5L24 2.5H31.5L37 6.5L36 16.5L20 32.5L14 28Z"
                      fill="transparent"/>
              </svg>
            </div>
          ))
        }
      </div>
      <div className="pagination">
        {
          Array(Math.floor(totalPages / 55)).fill(0).map((buttonNum, idx) => (
            <button key={idx} className="pagination-btn" onClick={() => setCurrentPage(idx + 1)}>{idx + 1}</button>
          ))
        }
      </div>
    </section>
  );
};

export default Cats;