import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../../assests/css/Category.css";


//validation 
import { useForm } from "react-hook-form";

function CategoryTag() {
  const [category, setCategory] = React.useState("");
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    console.log("e",event.target.value);
    setCategory(event.target.value);
  };

//validaion
  const {  register,formState } = useForm();
  const { errors } = formState;
  return (
    <>
      {/* <Box sx={{ minWidth: 120 }}> */}
        <FormControl fullWidth style={{justifyContent : 'center'}}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="category"
            name="category"
            placeholder="category"
            fullWidth   
            {...register("category")}
            error={!!errors.category}
            onChange={handleChange}
            
          >
            <MenuItem value="Men's clothing">Men's clothing</MenuItem>
            <MenuItem value="jwellery">jwellery</MenuItem>
            <MenuItem value="electronics">electronics</MenuItem>
            <MenuItem value="cars">cars</MenuItem>
          </Select>
        </FormControl>


      {/* </Box> */}
    </>
  );
}

export default CategoryTag;
