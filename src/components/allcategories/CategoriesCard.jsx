import React from 'react';
import { categoriesCard } from "../../dummydata";
import "./categories.css"
const CategoriesCard = ()  => {
  return (
    <section className="categoriesCard">
      <div className="container grid2">
        {categoriesCard.map((val) => (
          <div className="items" >
            <div className="content flex">
              <div className="left">
                <div className="img">
                <img src={val.cover} alt="" />
                </div>
              </div>
              <div className="text">
                <h1>{val.title}</h1>
              </div>
            </div>
            <button className='outline-btn'>CHECK NOW </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesCard;
