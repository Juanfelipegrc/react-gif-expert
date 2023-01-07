import React, { useState } from 'react'
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategoy) => {

      if(categories.includes(newCategoy)) return;

      setCategories([newCategoy, ...categories])
    }

  return (
    <>
    


    <h1>GifExpertApp</h1>

    <AddCategory 

      onNewCategory={(value) => onAddCategory(value)}

    />


    
       {
          categories.map((category) => (
            <GifGrid 
              key={category}
              category={category}
            />
          ))
       }
    
    
    </>
  )
}
