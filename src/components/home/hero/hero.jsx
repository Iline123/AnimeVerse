import React from 'react'
import "./hero.css"
import Title from "../../common/title/title"
const hero = () => {
    return(
        <>
           <section className='hero'>
            <div className='container'>
                <div className='row'>
                    <Title subtitle='WELCOME TO ANIMEVERSE' title='Your Ultimate Anime Store' />
                    <p>Whether you're a devoted fan or a curious newcomer, our anime store is here to fulfill your passion ,From collectible figures to stylish apparel, from enchanting posters to delightful accessories, we've curated an exquisite collection that will awaken your inner otaku  </p>
               <div className='button'>
                <button className='primary-btn'>
                    SHOP NOW <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button >
                    VIEW CATEGORIES<i className='fa fa-long-arrow-alt-right'></i>
                </button>
               </div>
                </div>
            </div>
            
            </section> 
        <div className='marigin'></div>
        </>
    )
}
export default hero 