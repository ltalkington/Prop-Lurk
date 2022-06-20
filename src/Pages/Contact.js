import ResponsiveDrawer from "../Components/Sidebar/Sidebar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function Contact() {
  let drawerWidth = 240;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <header className="App-header2">
      <ResponsiveDrawer></ResponsiveDrawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography sx={{ mb: 3 }} variant="h4">
          Contact
        </Typography>
        <div className="ContactForm">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="contactForm">
                  <form
                    id="contact-form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                  >
                    {/* Row 1 of form */}
                    <div className="row formRow">
                      <div className="col-6">
                        <input
                          type="text"
                          name="name"
                          {...register("name", {
                            required: {
                              value: true,
                              message: "Please enter your name",
                            },
                            maxLength: {
                              value: 30,
                              message: "Please use 30 characters or less",
                            },
                          })}
                          className="form-control formInput"
                          placeholder="Name"
                        ></input>
                        {errors.name && (
                          <span className="errorMessage">
                            {errors.name.message}
                          </span>
                        )}
                      </div>
                      <div className="col-6">
                        <input
                          type="email"
                          name="email"
                          {...register("email", {
                            required: true,
                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          })}
                          className="form-control formInput"
                          placeholder="Email address"
                        ></input>
                        {errors.email && (
                          <span className="errorMessage">
                            Please enter a valid email address
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Row 2 of form */}
                    <div className="row formRow">
                      <div className="col">
                        <input
                          type="text"
                          name="subject"
                          {...register("subject", {
                            required: {
                              value: true,
                              message: "Please enter a subject",
                            },
                            maxLength: {
                              value: 75,
                              message: "Subject cannot exceed 75 characters",
                            },
                          })}
                          className="form-control formInput"
                          placeholder="Subject"
                        ></input>
                        {errors.subject && (
                          <span className="errorMessage">
                            {errors.subject.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <br />

                    {/* Row 3 of form */}
                    <div className="row formRow">
                      <div className="col">
                        <textarea
                          rows={3}
                          name="message"
                          {...register("message", {
                            required: true,
                          })}
                          className="form-control formInput"
                          placeholder="Message"
                        ></textarea>
                        {errors.message && (
                          <span className="errorMessage">
                            Please enter a message
                          </span>
                        )}
                      </div>
                    </div>
                    <button className="submit-btn" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </Box>
    </header>
  );
}

export default Contact;
