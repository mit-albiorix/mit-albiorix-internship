import React from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// import Input from "@material-ui/core/Input";
// import Input from "@mui/material/Input";
import { Form } from "react-router-dom";
import {
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";

function AddProduct() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      select: {},
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Add Product</h2>

      <Container maxWidth="sm" style={{ textAlign: "Center" }}>
        <Box >
          <form>
            <div>
              <TextField id="outlined-basic" label="Title" variant="outlined" />

              <TextField
                id="outlined-basic"
                label="Category"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
              />
              <TextField id="outlined-basic" label="Price" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Rating"
                variant="outlined"
              />
              <TextField id="outlined-basic" label="Count" variant="outlined" />
            </div>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default AddProduct;
