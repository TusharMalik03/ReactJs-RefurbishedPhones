import React from 'react'
import Cards from './Cards'

const Cards1 = (props) => {
  return (
    <div className="my-4 w-full px-10">

        <div className='space-y-10'>
         { 
         props.mobiles.map((item) => {
            return(
                <Cards key={item.mobileUrl} site={item.site} imageUrl={item.imageUrl} model={item.model} price={item.price} mobileUrl={item.mobileUrl} condition={item.condition} storage={item.storage} />
            )
        })
         }
      </div>
    </div>
  )
}

export default Cards1