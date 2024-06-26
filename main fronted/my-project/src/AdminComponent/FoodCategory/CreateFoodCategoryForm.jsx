import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const CreateFoodCategoryForm = () => {
    const [formData, setFormData] = useState({
        categoryName: "",
        restaurantId: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name : formData.categoryName,
            restaurantId : {
                id: 1,
            }
        };
        console.log("category data ...", data);
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
            <h1 className='text-gray-400 text-center text-xl pb-10'>Create Food Category</h1>
            <form className='space-y-4' onSubmit={handleSubmit}>
            <TextField fullWidth
              id='categoryName'
              name='categoryName'
              label='Category Name'
              variant='outlined'
              onChange={handleInputChange}
              value={formData.categoryName}
              />
              <Button variant='contained' type="submit">
                Create Category
              </Button>
            </form>

        </div>
    </div>
  )
}

export default CreateFoodCategoryForm