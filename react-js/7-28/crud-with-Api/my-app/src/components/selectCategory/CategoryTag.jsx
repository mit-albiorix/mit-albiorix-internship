// import * as React from "react";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import "../../assests/css/Category.css";

// //validation
// import { useForm } from "react-hook-form";

// function CategoryTag() {
//   const [category, setCategory] = React.useState("");
//   const [age, setAge] = React.useState("");

//   const handleChange = (event) => {
//     console.log("e", event.target.value);
//     setCategory(event.target.value);
//   };

//   //validaion
//   const { register, formState } = useForm();
//   const { errors } = formState;
//   return (
//     <>
//       {/* <Box sx={{ minWidth: 120 }}> */}
//       <FormControl fullWidth style={{ justifyContent: "center" }}>
//         <InputLabel id="demo-simple-select-label">Category</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={category}
//           label="category"
//           // name="category"
//           placeholder="category"
//           fullWidth
//           {...register("category")}
//           error={!!errors.category}
//           onChange={handleChange}
//         >
//           <MenuItem value="Men's clothing">Men's clothing</MenuItem>
//           <MenuItem value="jwellery">jwellery</MenuItem>
//           <MenuItem value="electronics">electronics</MenuItem>
//           <MenuItem value="cars">cars</MenuItem>
//         </Select>
//       </FormControl>

//       {/* </Box> */}
//     </>
//   );
// }

// export default CategoryTag;

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../../assests/css/Category.css";

//validation
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// const schema = yup
//   .object({
//     category: yup.string().required(),
//   })
//   .required();

function CategoryTag({ registerForCategory, error }) {
  const [category, setCategory] = React.useState("");
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    console.log("e", event.target.value);
    setCategory(event.target.value);
  };

  // validaion
  const { register, formState, control } = useForm();
  const { errors } = formState;
  return (
    <>
      {/* <Box sx={{ minWidth: 120 }}> */}
      <FormControl fullWidth style={{ justifyContent: "center" }}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>

        <Controller
          name="select"
          control={control}
          defaultValue=""
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="category"
              // name="category"
              placeholder="category"
              fullWidth
              {...register("category", { required: true })}
              error={!!errors.category}
              onChange={handleChange}
            >
              <MenuItem value="Men's clothing">Men's clothing</MenuItem>
              <MenuItem value="jwellery">jwellery</MenuItem>
              <MenuItem value="electronics">electronics</MenuItem>
              <MenuItem value="cars">cars</MenuItem>
            </Select>
          )}
        />

        <p style={{ color: "red" }}>
          {errors.category && errors.category?.message}
        </p>
      </FormControl>

      {/* </Box> */}
    </>
  );
}

export default CategoryTag;
