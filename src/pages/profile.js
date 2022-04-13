import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ErrMsg } from "../components/BecomeAMemberSection";




const Profile = (props) => {
  const { loggedIn, user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);



  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().max(20, "Too Long!").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Required"),
  });

  const onSubmit = (values) => {
    const { name, email, password } = values;
    const savedBlogs = []
    setLoading(true);
    // createUserWithEmailAndPassword(AUTH, email, password)
    //   .then((userCredential) => {
    //     // success
    //     // create user entity, get him then log in thru auth
    //     addItem("users", { email, name, savedBlogs }, userCredential.user.uid)
    //       .then((res) => {
    //         getItem("users", userCredential.user.uid).then((currentUser) => {
    //           signInWithEmailAndPassword(AUTH, email, password).then(() => {
    //             setLoading(false);
    //             dispatch(setUser(currentUser));
    //             navigate("/saved-blogs");
    //           });
    //         });
    //       })
    //       .catch((err) => {
    //         setLoading(false);
    //       });
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     console.log("err", error);
    //   });
  };

  return (
    <div className="container">
      <div className="user-data">
        <h3 className="user-data-ttile">
          Your Profile
        </h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => (
            <Form className="form">
              <div className="input-wrapper">
                <label htmlFor="name">Name:</label>
                <Field name="name" id="name" placeholder="Lany Kravitz" />
                <ErrorMessage name="name" component={ErrMsg} />
              </div>

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
                  className={`buttonTitle ${loading ? "isLoading" : ""}`}
                  role="button"
                  onClick={() => (loading ? null : handleSubmit())}
                >
                  {loading ? "Loading" : "Create account"}
                </span>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="user-image">

      </div>
      This is profile
      {loggedIn && <p>im logged in</p>}
      {!!user && <p>{user.name || ""}</p>}
    </div>
  );
};

export default Profile;
