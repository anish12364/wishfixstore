import React, { useState } from 'react';

import "./Category.css"
import { CatageroiesData } from './Catageroies.js';

const Category = () => {
  const [data, setData] = useState(CatageroiesData);
  const filterResult=(catItem)=>{
    const result=CatageroiesData.filter((curData)=>{
    return curData.categories===catItem;
  });
  setData(result);
}
  return (
    <>

      <div className='container'>
        <div className='row '>
          <nav className='main-nav' >
            {/*logo part*/}
            <a href="Nav">
              <div className='logo'>
                <h2>

                  <span>Wishfix</span>store

                </h2>

              </div>
            </a>
            {/*menu part*/}
            <div className='menu-link'>
              <ul >

                <li>
                  <a href='#' onClick={() => filterResult('Men')}>Men</a>
                </li>
                <li>
                  <a href='#' onClick={() => filterResult('Women')}>Women</a>
                </li>
                <li>
                  <a href='#' onClick={() => filterResult('Kid')}>Kid</a>
                </li>
                <li>
                  <a href='#' onClick={() => setData(CatageroiesData)}>All</a>
                </li>

              </ul>
            </div>

          </nav>
          <div className='col'>
            <div className='col_row'>
              {data.map((values) => {
                const { id, title, price, image, description } = values;
                return (
                  <>
                    <div className='col_2' key={id}>
                      <div className='card'>
                        <img src={image} className='card-img' />
                        <div className='card-body'>
                          <h5 className='card-title'>{title}</h5>
                          <p>{price}</p>

                          <p className="card-description">{description}</p>
                          <div className='cartbtn'>
                            <a href='Catageroies/index'>
                              <button className="carts">Buy Now</button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                  </>
                )

              })}

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
