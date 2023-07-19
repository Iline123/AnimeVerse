import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <>
    <section className="newletter">
        <div className="container flexSB">
            < div className='left row '>
                <h1>Newsletter -Stay tune and get the latest update</h1>
                <span>Immerse yourself in an elite anime experience. Elevate your passion with our curated newsletter</span>
            </div>
            <div className='right row'>
                <input type ='text' placeholder='Enter email address' />
               <i className='fa fa-paper-plane'></i> 
            </div>
        </div>
    </section>
    <footer>
        <div className="container padding">
            <div className="box logo">
                <h1>AnimeVerse</h1>
                <span>Anime Fashion & Collectibles Galore
</span>
<p> Experience the captivating world of anime through AnimeVerse, your ultimate destination for immersive storytelling, stunning visuals, and unforgettable characters</p>
           
<i className='fab fa-facebook-f icon'></i>
    <i className='fab fa-instagram icon'></i>
    <i className='fab fa-linkedin icon'></i> </div>
        </div>
        <div className='box link'>
            <h3>Explore</h3>
            <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Categories</li>
                <li>product</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='box link'>
            <h3>Quik Links</h3>
            <ul>
                <li>Contact Us</li>
                <li>Pricing</li>
                <li>Terms & Conditions</li>
                <li>Privacy</li>
                <li>Feedbacks</li>
            </ul>
        </div>
        <div className='box last'>
    <h3>Have a Questions?</h3>
    <ul>
        <li>
            <i className='fa fa-map'></i>
                cité Monji Slim2,Makthar
         </li>
         <li>
            <i className='fa fa-phone-alt'></i>
            +216 00 000 000
                </li>
                <li>
            <i className='fa fa-paper-plane'></i>
             exemple@gmail.com
                </li>
                
    </ul>
    
</div>

    </footer>
    <div className="legal">
        <p>Copyright @2023 All rights reserved | <i className='fa fa-heart'></i> by swiftcode</p>
    </div>
    </>
  )
}

export default Footer