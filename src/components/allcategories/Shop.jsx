import React from 'react'

import { shop } from "..//..//dummydata"

const Shop = () => {
    return (
      <section className="shop">
        <div className="container">
          <div className="content grid3">
            {shop.map((val) => (
              <div className="box" >
                <div className="img">
                  <img src={val.cover} alt="" />
                  <img src={val.hoverCover} alt="" className="show" />
                </div>
                <h1>{val.title}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Shop;
  

