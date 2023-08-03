import React, { useEffect, useState } from "react";
import { TextField, Box, Button, Container } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../assests/css/AddProduct.css";

const schema = yup
  .object({
    title: yup.string().required().min(2),
    image: yup.string().url().required(),
    category: yup.string().required(),
    price: yup.number().required().typeError("price is required "),
    description: yup.string().required().min(10),
    rate: yup.number().required().typeError("rate is required "),
    count: yup
      .number()
      .positive()
      .integer()
      .required()
      .typeError("count is required "),
  })
  .required();

function AddProduct() {
  const { register, handleSubmit, reset, formState, getValues, setValue } =
    useForm({
      resolver: yupResolver(schema),
    });

  const [editid, seteditid] = useState();

  const isFetched = useSelector((state) => state.isFetched);
  const { errors } = formState;
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (isFetched === false) {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          dispatch({ type: "apiData", value: response.data });
        })
        .catch((error) => {
          
        });
    }
  }, []);

  let matchedIndexForEdit;
  let category;
  useEffect(() => {
    seteditid(searchParams.get("id"));

    if (editid) {
      matchedIndexForEdit = products?.findIndex((product) => {
        return product.id == editid;
      });

      setValue("id", products[matchedIndexForEdit]?.id);
      setValue("title", products[matchedIndexForEdit]?.title);
      setValue("image", products[matchedIndexForEdit]?.image);
      setValue("description", products[matchedIndexForEdit]?.description);
      setValue("category", products[matchedIndexForEdit]?.category);
      setValue("price", products[matchedIndexForEdit]?.price);
      setValue("rate", products[matchedIndexForEdit]?.rating.rate);
      setValue("count", products[matchedIndexForEdit]?.rating.count);
    }
  }, [products, editid]);

 
  
  const onSubmit = (data) => {
    let tempdata;
    if (!editid) {
      
      let length = products.length;
      let id = length + 1;
      tempdata = { ...data, id: id };
    } else {
      tempdata = data;
    }

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

    if (editid) {
      navigate("/");
      dispatch({ type: "updateProduct", value: addedData });
    } else {
      axios
        .post("https://fakestoreapi.com/products", data)
        .then(function (response) {
          navigate("/");
          dispatch({ type: "addProduct", value: addedData });
        })
        .catch(function (error) {
          
        });
    }
  };

  const handleCancel = () => {
    navigate("/");
  };
  const handleChange = (val) => {
    setValue("category", val);
  };
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
                variant="outlined"
                className="textfield"
                fullWidth
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
                label="Image"
                variant="outlined"
                className="textfield"
                fullWidth
                {...register("image")}
                error={!!errors.image}
              />
              <p style={{ color: "red" }}>
                {errors.image && errors.image?.message}
              </p>
            </div>

            <div>
              <select
                className="form-select categorySelect"
                aria-label="Default select example"
                {...register("category")}
                error={!!errors.category}
              >
                <option selected>Category</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's clothing</option>
              </select>
            </div>

            <div>
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                fullWidth
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
                label="Rate"
                variant="outlined"
                type="number"
                fullWidth
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
                {!editid ? "Add Product" : "Update Product"}
              </Button>
              {
                <Button
                  variant="contained"
                  type="submit"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              }
            </div>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default AddProduct;
