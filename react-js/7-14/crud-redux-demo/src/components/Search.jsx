import React, { useState } from "react";
import "./Search.css";
import { useDispatch } from "react-redux";

function Search({ searchText, setSearchText }) {
  const dispatch = useDispatch();

  const searchInputHandler = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
    // dispatch({ type: "search", value: e.target.value });
  };

  const searchFormHandler = (e) => {
    e.preventDefault();
    //  dispatch({ type: "search", value: searchText });
    //  setSearchText("")
  };

  return (
    // <div>
    //   <div className="container shadow min-vh-100 py-4">
    //     <div className="row">
    //       <div className="col-md-5 mx-auto">
    //         <div className="input-group">
    //           <input
    //             className="form-control border-end-0 border rounded-pill"
    //             type="search"
    //             // value="search"
    //             placeholder="Search Here"
    //             id="example-search-input"
    //             value={searchText}
    //             onChange={searchInputHandler}
    //           />
    //           {/* <span className="input-group-append">
    //             <button
    //               className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5"
    //               type="button"
    //             >
    //               <i className="fa fa-search"></i>
    //             </button>
    //           </span> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="container mt-5">
        <form className="form-inline" onSubmit={searchFormHandler}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={searchInputHandler}
            value={searchText}
          />
          {/* <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button> */}
        </form>
      </div>
    </>
  );
}

export default Search;
