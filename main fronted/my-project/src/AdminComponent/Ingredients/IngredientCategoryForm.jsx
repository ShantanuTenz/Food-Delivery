import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const IngredientCategoryForm = () => {
    const [formData, setFormData] = useState({
        name: ""
    })
    const handleSubmit = (e) => {
        
        console.log(formData);
    }
    const handleInputChange = (e) => {
        setFormData({
           ...formData,
            [e.target.name]: e.target.value
        })
    }
  return (
    <div>
        <div className='p-5'>
            <h1 className='text-gray-400 text-center text-xl pb-10'>Create Ingredient Category</h1>
            <form className='space-y-4' onSubmit={handleSubmit}>
            <TextField fullWidth
              id='name'
              name='name'
              label='Category'
              variant='outlined'
              onChange={handleInputChange}
              value={formData.name}
              />
              <Button variant='contained' type="submit">
                Create Category
              </Button>
            </form>

        </div>
    </div>
  )
}

export default IngredientCategoryForm