import React, { useEffect, useState } from "react";
import { TextField, Box, Button, Container, Stack } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../assests/css/AddProduct.css";
import Messages from "./Messages";
import CancelIcon from "@mui/icons-material/Cancel";
// import Error from "./Error";

const schema = yup
  .object({
    title: yup.string().required().min(2),
    image: yup.mixed().required(),
    category: yup.string().required(),
    price: yup.number().required().typeError("price is required "),
    description: yup.string().required().min(10),
    // rate: yup.number().required().typeError("rate is required "),
    // count: yup
    //   .number()
    //   .positive()
    //   .integer()
    //   .required()
    //   .typeError("count is required "),
  })
  .required();

function AddProduct() {
  const [searchParams] = useSearchParams();
  let editid = searchParams.get("id");
  const [editProduct, seteditProduct] = useState(null);

  const isFetched = useSelector((state) => state.isFetched);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorImgType, setErrorImgType] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imgName, setImgName] = useState(null);
  const [image, setImage] = useState();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState({
    msg: "",
    msgType: "",
  });
  const extenstions = ["jpg", "jpeg", "png"];

  const { register, handleSubmit, reset, formState, getValues, setValue } =
    useForm({
      resolver: yupResolver(schema),
    });
  const { errors } = formState;

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("f", file);

    const isimage = extenstions.findIndex((extenstion) => {
      return file?.type.includes(extenstion);
    });
    console.log("isimage", isimage);
    if (isimage !== -1) {
      setImage(file);

      const reader = new FileReader();

      reader.onloadend = () => {
        setImageUrl(reader.result);
      };

      console.log("imgup", imageUrl);
      reader.readAsDataURL(file);
      console.log("img", image);
      setErrorImgType(null)
    } else {
      setErrorImgType("only can upload JPG, JPEG and PNG files");
    }
  };

  // const [editid, seteditid] = useState(null);

  // console.log("outside eid", searchParams.get("id"));
  // console.log("outside eidproducts", editProduct);

  useEffect(() => {
    // seteditid(id);
    // console.log("inside eid2", editid);
    if (editid) {
      axios
        .get(`https://dummy-api-un4f.onrender.com/api/v1/products/${editid}`)
        .then((res) => {
          console.log("res", res.data.data.product);
          seteditProduct(res.data.data.product);
          // let prod = res.data.data;
        })
        .catch((error) => {
          console.log("err", error);
          setOpen(true);
          setMessage({
            msg: error.message,
            msgType: "error",
          });
        });
    }
  }, []);

  // console.log("editprodout", editProduct);
  useEffect(() => {
    if (editProduct !== null) {
      console.log("editprod", editProduct);
      console.log("editimg", editProduct?.image);

      setValue("id", editProduct?._id);
      setValue("title", editProduct?.title);
      // setValue("image", editProduct?.image);
      setImage(editProduct?.image);

      setImageUrl(editProduct?.image);

      setValue("description", editProduct?.description);
      console.log("cate", editProduct.category);
      setValue("category", editProduct?.category);
      setValue("price", editProduct?.price);
    }
  }, [editProduct]);

  // useEffect(()=)

  const onSubmit = (data) => {
    const formData = new FormData();
    console.log("image at update", image);

    formData.append("image", image);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);

    console.log("formda", formData);
    // console.log("Data", data);

    if (editid) {
      // data.image = imageUrl;

      axios
        .put(
          `https://dummy-api-un4f.onrender.com/api/v1/products/${editid}`,
          formData
        )
        .then(function (response) {
          setOpen(true);
          setMessage({
            msg: "successfully updated!",
            msgType: "success",
          });

          // dispatch({ type: "addProduct", value: data });
        })
        .catch(function (error) {
          console.log("adderr", error);
          setOpen(true);
          setMessage({
            msg: error.message,
            msgType: "error",
          });
        });
      // dispatch({ type: "updateProduct", value: data });
    } else {
      axios
        .post("https://dummy-api-un4f.onrender.com/api/v1/products", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          // <Messages message="successfully added!" />;
          console.log("open before", open);
          // alert("added");
          setOpen(true);
          setMessage({
            msg: "successfully added!",
            msgType: "success",
          });
          console.log("open after", open);

          // dispatch({ type: "addProduct", value: data });
        })
        .catch(function (error) {
          console.log("adderr", error);
          setOpen(true);
          setMessage({
            msg: error.message,
            msgType: "error",
          });
        });
    }
  };

  const handleMsgClose = () => {
    // if (reason === "clickaway") {
    //   return;
    // }

    setOpen(false);
    console.log("errormsg", message.msgType);
    if (!message.msgType === "error") {
      navigate("/");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };
  const handleChange = (val) => {
    setValue("category", val);
  };

  const handleCancelImage = () => {
    console.log("icon");
    setImage("");
    setImageUrl("");
  };
  return (
    <>
      <Container maxWidth="sm">
        <Box>
          {!editid ? <h2>Add Product</h2> : <h2>Update Product</h2>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                className="textfield"
                defaultValue={formState.title}
                value={formState.title}
                fullWidth
                onFocus={() => {
                  console.log("DEBUG ", register("title"));
                }}
                {...register("title")}
                error={!!errors.title}
              />
              <p style={{ color: "red" }}>
                {errors.title && errors.title?.message}
              </p>
            </div>

            {/* <div>
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
            </div> */}

            <div>
              {console.log("edt", editProduct)}
              <select
                className="form-select categorySelect"
                aria-label="Default select example"
                {...register("category")}
                error={!!errors.category}
                // value={editProduct?.category}
              >
                <option selected>Category</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's clothing</option>
              </select>
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
              <Stack direction="row" alignItems="center" spacing={2}>
                <label htmlFor="upload-image">
                  <Button variant="outlined" component="span">
                    Upload Image
                  </Button>
                  <input
                    id="upload-image"
                    // name="image"
                    hidden
                    accept="image/*"
                    type="file"
                    // value={editProduct?.image}
                    {...register("image")}
                    error={!!errors.image}
                    onChange={handleFileUpload}
                  />
                </label>

                {/* {imgName && console.log("imggg", imageUrl.data)} */}

                {/* {image?.name && <p>{image.name}</p>} */}
                {/* {!image && <p>No Image Choosen</p>}
                {image && <img src={imageUrl} width={"100px"}></img> }
                {image && <CancelIcon/>}  */}

                {!image ? (
                  <p>No Image Choosen</p>
                ) : (
                  <div>
                    <img src={imageUrl} width={"100px"}></img>
                    <CancelIcon onClick={handleCancelImage} />
                  </div>
                )}
              </Stack>
              <p style={{ color: "red" }}>
                {errorImgType !== null && errorImgType}
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
      {console.log("send", open)}
      <Messages open={open} handleMsgClose={handleMsgClose} message={message} />
    </>
  );
}

export default AddProduct;
