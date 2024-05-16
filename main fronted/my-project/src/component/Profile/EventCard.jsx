import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
      <Card sx={{width:300}}>
        <CardMedia sx={{height: 300}} image='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400' />
        <CardContent>
            <Typography variant='h7'>
                Indian Fast Food
            </Typography>
            <Typography variant='body2'>
                50% off on your first order
            </Typography>
            <div className='py-2 space-y-2'>
                <p>{"Delhi"}</p>
                <p className='text-sm text-blue-500'>March 26, 2024 12:00 AM</p>
                <p className='text-sm text-red-500'>March 28, 2024 12:00 AM</p>
            </div>
        </CardContent>

        {false && <CardActions>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>}
      </Card>
    </div>
  )
}

export default EventCard
