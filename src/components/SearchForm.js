import React, { useState } from 'react';
import { Label } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}


export const SearchForm = () => {
    const [value, setValue] = React.useState([50, 2000]);
    const [zip, setZip] = useState();
    const [startDate,setStartDate]=useState(new Date());
    const [endDate,setEndDate]=useState(new Date());
    const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
      mode: "onChange"
  });
  const navigate = useNavigate();
  const onSubmit = () => {
    console.log(`Zip: ${zip}, [Lower Price, Upper Price]:[${value}], Start-Date: ${startDate}, End-Date: ${endDate}`);
    navigate(`listings/${zip}`);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
        </div>
        <div className="my-3 mx-5">
          <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row d-flex justify-content-center">
            <label htmlFor="zip">Zip Code:</label>
            <input name="zip" id="zip" value={zip} onInput={(event)=>setZip(event.target.value)}
                placeholder="12345" className="form-control" 
                {...register("zip", { required: true, maxLength: 5})}
                />
                {errors.zip && <p className="text-danger">Please enter a valid zip code.</p>}
                            
              
            <label htmlFor="slider">Price Range Per Month (USD):</label>  
                <Box className="" sx={{width:300}}>
                <Slider 
                  className="text-info"
                  min={50}
                  max={2000}
                  defaultValue={[50,2000]}
                  getAriaLabel={() => 'Pricing Range in USD'}
                  value={value}
                  onChange={(event)=>setValue(event.target.value)}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
                </Box>
                 
               <Label htmlFor='start-date'>Start Date:</Label>
              <DatePicker className='date-pickers form-control mb-2' id="start-date" name="start-date" 
                  selected={startDate} onChange={(date) => setStartDate(date)} 
                  />
              <Label htmlFor='end-date'>End Date:</Label>
              <DatePicker className='date-pickers form-control' id='end-date' name="end-date" 
                  selected={endDate} onChange={(date) => setEndDate(date)} 
                />     
              <input type="submit" value="Submit" className='btn btn-info text-white my-4 submit-btn'/>       
            </div>          
          </form>
          </div>
        </div>
      </div>

    </>

  );

};

           