import React from 'react';
import './Spinner.scss'
import {BarLoader} from "react-spinners";

const Spinner = () => {
  return (
    <div className='spinner'>
      <BarLoader color={"#2196F3"} size={50}/>
    </div>
  );
};

export default Spinner;