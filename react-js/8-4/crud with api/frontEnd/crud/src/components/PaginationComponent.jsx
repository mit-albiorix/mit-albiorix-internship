import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "../assests/css/Pagination.css";
import { useDispatch } from "react-redux";

function PaginationComponent(props) {
  // const [page, setPage] = useState();
  const dispatch = useDispatch();
  const handlePagination = (pageNumber) => {
    console.log("page", pageNumber);
    // setPage(pageNumber);
    props.pageNumberFunc(pageNumber);
  };
  console.log("in page",props.totalPage);
  return (
    <>
      <Stack spacing={2}>
        <Pagination
          count={props.totalPage}
          variant="outlined"
          color="primary"
          // onChange={(_, page) => {
          //   console.log("under",_);
          //   console.log(page);
          // }}
          onChange={(_, page) => {
            handlePagination(page);
          }}
        />
      </Stack>
    </>
  );
}

export default PaginationComponent;
