import React from 'react'
import Back from '../common/back/Back'
import CategoriesCard from './CategoriesCard'
import Shop from './Shop'
const CategoriesHome = () => {
  return (
    <>
    <Back title='Explore Categories' />
<CategoriesCard/>
<Shop/>
    </>
  )
}

export default CategoriesHome