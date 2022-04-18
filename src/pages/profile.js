import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ErrMsg } from "../components/BecomeAMemberSection";
import { useDropzone } from 'react-dropzone'
import { Icon } from "@iconify/react";
import { getAuth, updatePassword, updateProfile } from "firebase/auth";
import { addItem } from "../firebase/actions";




const Profile = (props) => {
  const { loggedIn, user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState("")
  const auth = getAuth();


  console.log(user && user)

  function toBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      // console.log(reader.result);
      setProfileImage(reader.result)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    return reader.result;
  }

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    toBase64(acceptedFiles[0])
    // console.log("IMAGE", acceptedFiles[0])
  }, [])

  // if (auth.currentUser) {

  //   console.log("CURRENT", auth.currentUser)
  // }
  useEffect(() => {
    if (user) {
      setProfileImage(user.profileImage)
    }
  }, [])






  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const initialValues = {
    name: user && user.name,
    email: user && user.email,
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().max(20, "Too Long!").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long"),
  });

  const onSubmit = (values) => {
    setLoading(true);
    const { name, email, password } = values;

    const userId = auth.currentUser.uid;
    console.log("SUBMIT", password, userId, name, email, profileImage)

    addItem("users", { email, name, profileImage }, userId).then((res) => {
      console.log("SUCCESS", res)
    }).catch(error => {
      console.log(error)
    })
    const savedBlogs = []
    if (password !== "") {
      updatePassword(auth.currentUser, password).then(() => {
        console.log('password changed')
        setLoading(false)
      }).catch((error) => {
        console.log(error)
      })
    }


  };

  return (
    <div className="container  ">
      <h3 className="user-data-title">
        Your Profile
      </h3>
      <div className="profile">


        <div className="user-data">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {({ handleSubmit }) => (
              <Form className="form" autoComplete="off">
                <div className="input-wrapper">
                  <label htmlFor="name">Name:</label>
                  <Field name="name" id="name" autoComplete="new-name" />
                  <ErrorMessage name="name" component={ErrMsg} />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="email">Email:</label>
                  <Field
                    name="email"
                    id="email"
                    autoComplete="new-email"

                  />
                  <ErrorMessage name="email" component={ErrMsg} />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="password">Password:</label>
                  <Field name="password" id="password" type="password" autoComplete="new-password" />
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
                    {loading ? "Loading" : "Save changes"}
                  </span>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="user-image">
          <img src={require("../assets/images/featured-blogs-arrow-2.svg")} className="arrow-deco" alt="" />

          {/* <img src={require("../assets/images/girl-avatar.jpg")} alt="" /> */}
          {/* {user?.profileImage && <img src={user.profileImage} alt="" className="profile-img" />} */}
          {profileImage !== "" && <img src={profileImage} alt="" className="profile-img" />}
          <div {...getRootProps()} className={`drop-zone ${profileImage && 'drop-zone-image-set'} ${isDragActive && 'drop-zone-image-set-drag'}`}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <Icon icon="nimbus:upload" fontSize={100} /> :
                <div className="drop">

                  <Icon icon="ph:user-square-fill" fontSize={100} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
            }
          </div>
          <img src={require("../assets/images/savedBlogsDecoration.svg")} alt="" className="profile-image-decoration" />
        </div>
      </div>

    </div>
  );
};

export default Profile;
