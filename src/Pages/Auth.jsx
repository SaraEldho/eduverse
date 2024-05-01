import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// // import { loginAPI, registerAPI } from "../Services/allAPI";
import Swal from "sweetalert2";
function Auth({ register }) {
  // const navigate = useNavigate();
  // const [userData, setUserData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   if (!userData.username || !userData.email || !userData.password) {
  //     Swal.fire({
  //       title: "Warning",
  //       text: "Please fill the form",
  //       icon: "warning",
  //       confirmButtonText: "Back",
  //     });
  //   } else {
  //     const result = await registerAPI(userData);
  //     console.log(result);
  //     if (result.status == 200) {
  //       Swal.fire({
  //         title: "Success",
  //         text: "Successfully Registered",
  //         icon: "success",
  //         confirmButtonText: "Back",
  //       });
  //       setUserData({
  //         username: "",
  //         email: "",
  //         password: "",
  //       });
  //       //to navigate to login page
  //       navigate("/login");
  //     } else if (result.response.status == 406) {
  //       Swal.fire({
  //         title: "Error",
  //         text: result.response.data,
  //         icon: "error",
  //         confirmButtonText: "Back",
  //       });
  //     }
  //   }
  //   console.log(userData);
  // };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   if (!userData.email || !userData.password) {
  //     Swal.fire({
  //       title: "Warning",
  //       text: "Please fill the form",
  //       icon: "warning",
  //       confirmButtonText: "Back",
  //     });
  //   } else {
  //     const result = await loginAPI(userData);
  //     console.log(result);
  //     if (result.status == 200) {
  //       Swal.fire({
  //         title: "Success",
  //         text: "Login Successfull",
  //         icon: "success",
  //         confirmButtonText: "Back",
  //       });

  //       //store token in sessionstorage
  //       sessionStorage.setItem("username", result.data.existingUser.username);
  //       sessionStorage.setItem("token", result.data.token);
  //       setUserData({
  //         email: "",
  //         password: "",
  //       });

  //       //to navigate to main page
  //       navigate("/");
  //     } else if (result.response.status == 404) {
  //       Swal.fire({
  //         title: "Error",
  //         text: result.response.data,
  //         icon: "error",
  //         confirmButtonText: "Back",
  //       });
  //     }
  //   }
  //   console.log(userData);
  // };

  return (
    <div>
      <div className="row5 text-center">
        <div className="col-lg-8 m-5" >
          <form className="shadow m-5 p-2" >
            <h2 className="text-center  pt-5"
            style={{color:"  #3e6553",fontWeight:"600"}}>EduVerse </h2>

            <div className="p-5">
              {register && (
                <input
                  // onChange={(e) =>
                  //   setUserData({ ...userData, username: e.target.value })
                  // }
                  // value={userData.username}
                  type="text"
                  placeholder="Username"
                  className="form-control mb-3"
                />
              )}
              <input
                // onChange={(e) =>
                //   setUserData({ ...userData, email: e.target.value })
                // }
                // value={userData.email}
                type="email"
                placeholder="Email"
                className="form-control mb-3"
              />
              <input
                // onChange={(e) =>
                //   setUserData({ ...userData, password: e.target.value })
                // }
                // value={userData.password}
                type="password"
                placeholder="Password"
                className="form-control"
              />
            </div>
            <div className="text-center ">
              {register ? (
                <div>
                  <button
                    // onClick={handleRegister}
                    className="btn btn-light mb-4 p-2"
                    style={{backgroundColor:"  #3e6553",color:"white"}}
                  >
                    Register{" "}
                  </button>
                  <p className="mb-5">
                    Already Registered?
                    <Link to={"/login"}>&nbsp;Login here</Link>
                  </p>
                </div>
              ) : (
                <div>
                  <button
                    // onClick={handleLogin}
                    className="btn btn-light mb-5 p-"
                    style={{backgroundColor:"  #3e6553",color:"white"}}
                  >
                    Login
                  </button>
                  <p className="mb-5"
                   style={{color:"  #3e6553"}}>
                    New to Here?
                    <Link to={"/register"}> &nbsp; Register here</Link>
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
