import React, { useState } from "react";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ErrMsg } from "../BecomeAMemberSection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AUTH } from "../../firebase";
import { getItem } from "../../firebase/actions";
import { setUser } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "Montserrat",
    width: "46%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    // height: "75%",
  },
  overlay: {
    background: "#00000040"
  }
};

Modal.setAppElement("#root");

const LoginModal = ({ openLoginModal, handleLoginModal }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Required"),
  });

  const onSubmit = (values) => {
    const { email, password } = values;
    setLoading(true);
    signInWithEmailAndPassword(AUTH, email, password)
      .then((userCredential) => {
        // success
        // create user entity, get him then log in thru auth
        getItem("users", userCredential.user.uid)
          .then((currentUser) => {
            console.log("CURRENT USER", currentUser)
            setLoading(false);
            dispatch(setUser(currentUser));
            handleLoginModal();
          })
          .catch((err) => {
            setLoading(false);
          });
      })
      .catch((error) => {
        setLoading(false);
        console.log("err", error);
      });
  };

  return (
    <Modal
      isOpen={openLoginModal}
      onRequestClose={handleLoginModal}
      style={customStyles}
      contentLabel="Login Modal"
    >
      <p className="loginTitle">Login</p>
      <>
        <img
          src={require("../../assets/images/caska.svg")}
          alt=""
          className="caska"
        />
        <img
          src={require("../../assets/images/book-moliv.svg")}
          alt=""
          className="book-moliv"
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => (
            <Form className="form loginForm">
              <div className="input-wrapper">
                <label htmlFor="email">Email:</label>
                <Field
                  name="email"
                  id="email"
                  placeholder="lanykravitz@mail.com"
                />
                <ErrorMessage name="email" component={ErrMsg} />
              </div>

              <div className="input-wrapper">
                <label htmlFor="password">Password:</label>
                <Field name="password" id="password" type="password" />
                <ErrorMessage name="password" component={ErrMsg} />
              </div>
              <div className="buttonWrapper">
                <svg
                  width="235"
                  height="68"
                  viewBox="0 0 235 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M54.1683 2.47834C32.9462 4.30952 0.296632 10.8428 0.296632 10.8428V52.9749C0.296632 55.872 -1.1788 68 2.45147 68H13.8641H52.5713C97.0835 68 184.894 62.5011 184.894 62.5011C184.894 62.5011 218.092 65.2678 233.657 60.9522C235.784 60.3626 235.59 35.0584 231.582 19.2073C229.632 11.4969 224.719 0 224.719 0L168.932 1.08428C168.932 1.08428 114.714 -0.363024 80.0263 1.0845C69.9219 1.50615 64.2423 1.60908 54.1683 2.47834Z"
                    fill="#E2CFAF"
                  />
                </svg>
                <span
                  className={`buttonTitle ${loading ? "isLoading" : ""
                    } loginBtn`}
                  role="button"
                  onClick={() => (loading ? null : handleSubmit())}
                >
                  {loading ? "Loading" : "Login"}
                </span>
              </div>
            </Form>
          )}
        </Formik>
        <img
          src={require("../../assets/images/man-pc.svg")}
          alt=""
          className="man-pc"
        />
        <img
          src={require("../../assets/images/dashes-left.svg")}
          alt=""
          className="dashes-left"
        />
      </>
    </Modal>
  );
};

export default LoginModal;
