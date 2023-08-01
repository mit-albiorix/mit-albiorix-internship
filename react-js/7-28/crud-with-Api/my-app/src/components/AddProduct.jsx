import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// import Input from "@material-ui/core/Input";
// import Input from "@mui/material/Input";
import { Form, useLocation, useSearchParams } from "react-router-dom";
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
    title: yup.string().required().min(2),
    image: yup.string().url().required(),
    // category: yup.required(),
    price: yup.number().positive().required().typeError("price is required "),
    description: yup.string().required().min(10),
    rate: yup.number().positive().required().typeError("rate is required "),
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
  console.log("products", products);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  let editid = searchParams.get("id");
  console.log("editid", editid);
  console.log("editproducts", products);
  let editUser = {};
  if (editid) {
    const matchedIndexForEdit = products?.findIndex((product) => {
      return product.id == editid;
    });
    console.log("matchedEdit", matchedIndexForEdit);

    editUser = {
      id: products[matchedIndexForEdit]?.id,
      title: products[matchedIndexForEdit].title,
      image: products[matchedIndexForEdit].image,
      description: products[matchedIndexForEdit].description,
      category: products[matchedIndexForEdit].category,
      price: products[matchedIndexForEdit].price,

      rate: products[matchedIndexForEdit].rating.rate,
      count: products[matchedIndexForEdit].rating.count,
    };
    console.log("edituytser", editUser);
  }

  const onSubmit = (data) => {
    let tempdata;
    if (!editid) {
      console.log("data", data);
      let length = products.length;
      let id = length + 1;
      console.log("len", length);
      tempdata = { ...data, id: id };
    } else {
      tempdata = data;
      console.log("updatetempd", tempdata);
    }
    console.log("datadddd", data);
    let addedData = {
      id: editid ? editid : tempdata.id,
      title: tempdata.title,
      image: tempdata.image,
      description: tempdata.description,
      category: tempdata.category,
      price: tempdata.price,
      rating: {
        rate: tempdata.rate,
        count: tempdata.count,
      },
    };

    // products.unshift(addedData);
    console.log("added", addedData);

    // console.log("addedddddd", addedData);

    // products.push(data);
    // console.clear();
    console.log("editiddddd", editid);
    if (editid) {
      reset();
      editid = null;
      dispatch({ type: "updateProduct", value: addedData });
    } else {
      axios
        .post("https://fakestoreapi.com/products", data)
        .then(function (response) {
          console.log(response);
          console.log("editidddd", editid);
          reset();
          dispatch({ type: "addProduct", value: addedData });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  // console.log("id", editid);
  return (
    <>
      <Container maxWidth="sm">
        <Box>
          {!editid ? <h2>Add Product</h2> : <h2>Update Product</h2>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextField
                id="outlined-basic"
                label="Title"
                // defaultValue=""
                defaultValue={editUser.title}
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
                defaultValue={editUser.image}
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
              <CategoryTag editcategory={editUser.category} />
            </div>

            <div>
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                defaultValue={editUser.description}
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
                defaultValue={editUser.price}
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
                defaultValue={editUser.rate}
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
                defaultValue={editUser.count}
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
                {!editid ? "Add Product" : "Update Product"}
              </Button>
            </div>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default AddProduct;
