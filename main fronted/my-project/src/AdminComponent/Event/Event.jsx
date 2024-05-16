import { useState } from 'react';
import { Box, Button, Grid, Modal, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';

const initialValues = {
  image: "",
  location: "",
  name: "",
  startedAt: null,
  endsAt: null,
}

const Event = () => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleDateChange = (date, dateType) => {
    if (date instanceof Date) {
      const formattedDate = dayjs(date).format("MMMM DD, YYYY hh:mm A");
      setFormValues({
        ...formValues,
        [dateType]: formattedDate,
      });
    } else {
      setFormValues({
        ...formValues,
        [dateType]: null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form values before submission:', formValues); // Check form values before submission
    // Perform form submission logic (e.g., API call, data processing)
    console.log('Submitting form...');
    setFormValues(initialValues); // Reset formValues after submission
    console.log('Form values after submission:', formValues); // Check form values after submission
    handleClose(); // Close modal after submission
  };

  return (
    <div>
      <div className='p-5'>
        <Button onClick={handleOpen} variant='contained'>Create New Event</Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    name="image"
                    label="Image URL"
                    variant='outlined'
                    fullWidth
                    value={formValues.image}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="location"
                    label="Location"
                    variant='outlined'
                    fullWidth
                    value={formValues.location}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    label="Event Name"
                    variant='outlined'
                    fullWidth
                    value={formValues.name}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker 
                      label="Start Date and Time"
                      value={formValues.startedAt || null}
                      onChange={(newValue) => handleDateChange(newValue, "startedAt")}
                      inputFormat="MM/dd/yyyy hh:mm a"
                      className='w-full'
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker 
                      label="End Date and Time"
                      value={formValues.endsAt || null}
                      onChange={(newValue) => handleDateChange(newValue, "endsAt")}
                      inputFormat="MM/dd/yyyy hh:mm a"
                      className='w-full'
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Event;


