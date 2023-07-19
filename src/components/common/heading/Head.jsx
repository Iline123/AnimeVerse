import React ,{ useState } from 'react'
const Head = () => {
  const [click, setClick] = useState(false)
  return (
    <>
    <section className='head'>
<div className="container flexSB">
<div className='logo'>
<h1>Animeverse</h1>
<span>Anime Fashion & Collectibles Galore</span>
</div>

               
            
</div>
    </section>
    </>
  )
}

export default Head