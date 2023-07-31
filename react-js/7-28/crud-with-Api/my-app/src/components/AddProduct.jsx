import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// import Input from "@material-ui/core/Input";
// import Input from "@mui/material/Input";
import { Form } from "react-router-dom";
import Button from "@mui/material/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";

import "../assests/css/AddProduct.css";
import CategoryTag from "./selectCategory/CategoryTag";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const schema = yup
  .object({
    title: yup.string().required().max(2),
    image: yup.string().url().required(),
    // category: yup.required(),
    price: yup
      .number()
      .positive()
      .required()
      .typeError("price is required "),
    description: yup.string().required(),
    rate: yup
      .number()
      .positive()
      .required()
      .typeError("rate is required "),
    count: yup
      .number()
      .positive()
      .integer()
      .required()
      .typeError("count is required "),
  })
  .required();

function AddProduct() {
  // const [formData,setFromData] =useState({})
  const { control, register, handleSubmit, reset, formState, resetField } =
    useForm({
      resolver: yupResolver(schema),
    });

  const { errors } = formState;
  const products = useSelector((state) => state.products);

  const onSubmit = (data) => {
    console.log("data", data);
    const sendData = {
      title: data.title,
      image: data.image,
      price: data.price,
      description: data.description,
      // rating: {
        //   rate: data.rate,
        //   count: data.count,
        // },
      };
      reset();
    // products.push(data);
    axios
      .post("https://fakestoreapi.com/products", sendData)
      .then(function (response) {
        console.log(response);
        axios
          .get("https://fakestoreapi.com/products")
          .then((res) => {
            // setProducts(response.data);
            console.log("rs",res);

            console.log("respone", res.data);
          })
          .catch((err) => {
            console.log("err", err);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // useEffect(()=>{
  //   reset(formData)
  // },[formData])

  return (
    <>
      <Container maxWidth="sm">
        <Box>
          <h2>Add Product</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                className="textfield"
                fullWidth
                // name="title"
                {...register("title")}
                error={!!errors.title}
              />
              <p style={{ color: "red" }}>
                {errors.title && errors.title?.message}
              </p>
            </div>

            <div>
              <TextField
                id="outlined-basic"
                label="image"
                variant="outlined"
                className="textfield"
                fullWidth
                // name="title"
                {...register("image")}
                error={!!errors.image}
              />
              <p style={{ color: "red" }}>
                {errors.image && errors.image?.message}
              </p>
            </div>

            <div>
              {/* <TextField
                id="outlined-basic"
                label="Category"
                variant="outlined"
                // name="category"
                {...register("category")}
                error={!!errors.category}
              /> */}
              <CategoryTag />
              <p style={{ color: "red" }}>
                {errors.category && errors.category?.message}
              </p>
            </div>

            <div>
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                fullWidth
                // name="description"
                {...register("description")}
                error={!!errors.description}
              />
              <p style={{ color: "red" }}>
                {errors.description && errors.description?.message}
              </p>
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Price"
                variant="outlined"
                fullWidth
                // name="price"
                {...register("price")}
                error={!!errors.price}
              />
              <p style={{ color: "red" }}>
                {errors.price && errors.price?.message}
              </p>
            </div>

            <div>
              <TextField
                id="outlined-basic"
                label="rate"
                variant="outlined"
                type="number"
                fullWidth
                // name="rate"
                {...register("rate")}
                error={!!errors.rate}
              />
              <p style={{ color: "red" }}>
                {" "}
                {errors.rate && errors.rate?.message}
              </p>
            </div>

            <div>
              <TextField
                id="outlined-basic"
                label="Count"
                variant="outlined"
                name="count"
                type="number"
                fullWidth
                {...register("count")}
                error={!!errors.count}
              />
              <p style={{ color: "red" }}>
                {errors.count && errors.count?.message}
              </p>
            </div>
            <div>
              <Button variant="contained" type="submit">
                Add Product
              </Button>
            </div>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default AddProduct;
