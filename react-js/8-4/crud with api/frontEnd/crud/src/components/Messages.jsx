import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Messages(props) {
  const { open, message } = props;
  // const [msgPosition,setMsgPosition] =React.useState({

  //   vertical:"",
  //   horizontal:""
  // });
  // let verticle = '';
  // let horizontal ="";

  // console.log("mes", message);
  // if(message){
  //   verticle = "top",

  // }
  // const {msg,messageType} =message
  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    // if (reason === "clickaway") {
    //   return;
    // }

    // setOpen(false);
    props.handleMsgClose();
  };

  // props.handleClose(reason)

  return (
    <>
      {console.log("type", message.msgType)}
      <Stack spacing={2} sx={{ width: "100%" }}>
        {/* <Button variant="outlined">Open success snackbar</Button> */}
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity={message?.msgType}
            sx={{ width: "100%" }}
          >
            {message?.msg}
          </Alert>
        </Snackbar>
        {/* <Alert severity="error">This is an error message!</Alert>
        <Alert severity="warning">This is a warning message!</Alert>
        <Alert severity="info">This is an information message!</Alert>
        <Alert severity="success">This is a success message!</Alert> */}
      </Stack>
    </>
  );
}

export default Messages;