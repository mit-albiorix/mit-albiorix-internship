import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function Error() {
  const error = useRouteError();
  console.log("err", error);
  let title = "an error occured!";
  let message = "something went wrong!";

//   if (error.status === 500) {
//     // message = error.data
//     message = JSON.parse(error.data).message;
//     console.log("ms", message);
//   }


  //if you use json then don't need parse 
  if (error.status === 500) {
    // message = error.data
    message = error.data.message;
    console.log("ms", message);
  }
  if (error.status === 404) {
    title = "not found!";
    message = "page not found!";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default Error;
