import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


import "./singin.css";

function Join_Twitter() {
  let [pageNo, setpageNo] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  // const [auth , setAuth]=useState(false);

  function Handalsubmit() {
    let obj1 = {
      email,
      password,
    };
    localStorage.setItem("obj1", JSON.stringify(obj1));
    setpageNo(4);
    setEmail("");
    setpassword("");
  }
  const Navigate = useNavigate();
  function hendalLogInfinanl() {
    let obj1 = JSON.parse(localStorage.getItem("obj1"));
    if ((obj1.email == email) & (obj1.password === password)) {
      alert("You are Log in successfully");
      localStorage.setItem("auth", true);

      Navigate("/");
    } else {
      alert("wrong");
    }
  }

  if (pageNo == 1) {
    return (
      <div className="pageNo1">
        <TwitterIcon
          fontSize="large"
          color="primary"
          style={{ marginTop: "10px" }}
        />
        <br />
        <h1>Join Twitter today</h1>
        <Button
          sx={{
            width: "300px",
            height: "38px",
            borderRadius: "20px",
            color: "black",
            border: "0.1px solid rgb(83, 100, 113)",
            fontWeight: "bold",
          }}
          variant="outlined"
        >
          <GoogleIcon color="black" fontSize="small" />
          Sing Up With Google{" "}
        </Button>
        <br />
        <Button
          style={{
            width: "300px",
            height: "38px",
            borderRadius: "20px",
            color: "black",
            border: "0.01px solid rgb(83, 100, 113)",
            fontWeight: "bold",
            marginTop: "30px",
          }}
          variant="outlined"
        >
          <AppleIcon color="black" />
          Sing Up With Apple{" "}
        </Button>

        <div className="container">
          <span className="header__center">or</span>
        </div>

        <br />
        <Button
          onClick={() => {
            setpageNo(2);
          }}
          style={{
            width: "300px",
            height: "38px",
            borderRadius: "20px",
            color: "white",
            backgroundColor: "black",
            border: "0.1px solid gray",
            fontWeight: "bold",
          }}
          variant="outlined"
        >
          {" "}
          Create account
        </Button>
        <br />
        <p style={{ fontSize: "13px", color: "rgb(83, 100, 113)" }}>
          By signing up, you agree to the{" "}
          <span style={{ color: "rgb(29, 155, 240)" }}>Terms of Service</span>{" "}
        </p>
        <p
          style={{
            marginTop: "-10px",
            marginLeft: "-45px",
            color: "rgb(83, 100, 113)",
            fontSize: "13px",
          }}
        >
          and{" "}
          <span style={{ color: "rgb(29, 155, 240)" }}>Privacy Policy,</span>{" "}
          including{" "}
          <span style={{ color: "rgb(29, 155, 240)" }}>Cookie Use.</span>{" "}
        </p>
        <p
          style={{
            marginTop: "50px",
            marginLeft: "-55px",
            color: "rgb(83, 100, 113)",
          }}
        >
          Have an account already?{" "}
          <span style={{ color: "rgb(29, 155, 240)" }}>Log in</span>{" "}
        </p>
      </div>
    );
  } else if (pageNo == 2) {
    return (
      <div className="pageNo2">
        <h3 style={{ marginLeft: "70px" }}>Step 2 of 5</h3>
        <div className="pageNo22">
          <h1>Create your account</h1>

          <TextField
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="filled-basic"
            label="Name"
            sx={{
              bgcolor: "white",
              border: "1px solid rgb(29, 155, 240)",
              width: "423px",
            }}
            variant="filled"
          />
          <TextField
            name="Email"
            type="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="filled-basic"
            label="Email"
            sx={{
              background: "white",
              marginTop: "30px",
              border: "1px solid rgb(29, 155, 240)",
              width: "423px",
            }}
            variant="filled"
          />

          <p style={{ textAlign: "end" }}>
            <span style={{ color: "rgb(29, 155, 240)" }}>
              Use phone instead{" "}
            </span>
          </p>
          <p style={{ fontWeight: "bold" }}>Date of birth</p>
          <p>
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>
          <TextField
            type="number"
            id="filled-basic"
            label="Month"
            sx={{
              background: "white",
              border: "1px solid rgb(29, 155, 240)",
              width: "200px",
            }}
            variant="filled"
          />
          <TextField
            type="number"
            id="filled-basic"
            label="Day"
            sx={{
              background: "white",
              marginLeft: "20px",
              border: "1px solid rgb(29, 155, 240)",
              width: "75px",
            }}
            variant="filled"
          />
          <TextField
            type="number"
            id="filled-basic"
            label="Year"
            sx={{
              background: "white",
              marginLeft: "20px",
              border: "1px solid rgb(29, 155, 240)",
              width: "100px",
            }}
            variant="filled"
          />
          <Button
            onClick={() => {
              setpageNo(3);
            }}
            type="submit"
            style={{
              width: "423px",
              height: "48px",
              marginTop: "20px",
              borderRadius: "20px",
              color: "white",
              backgroundColor: "black",
              border: "1px solid rgb(29, 155, 240)",
              fontWeight: "bold",
            }}
            variant="outlined"
          >
            {" "}
            Next
          </Button>
        </div>
      </div>
    );
  } else if (pageNo == 3) {
    return (
      <div className="pageNo2">
        <h3 style={{ marginLeft: "70px" }}>Step 3 of 5</h3>
        <div className="pageNo22">
          <h1>Create your account</h1>

          <TextField
            name="mobile"
            type="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="filled-basic"
            label="Email"
            sx={{
              background: "white",
              marginTop: "30px",
              border: "1px solid rgb(29, 155, 240)",
              width: "423px",
            }}
            variant="filled"
          />
          <TextField
            name="name"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            id="filled-basic"
            label="password"
            sx={{
              background: "white",
              border: "1px solid rgb(29, 155, 240)",
              width: "423px",
              marginTop: "20px",
            }}
            variant="filled"
          />

          <p style={{ textAlign: "end" }}>
            <span style={{ color: "rgb(29, 155, 240)" }}>
              Use phone instead{" "}
            </span>
          </p>
          <p style={{ fontWeight: "bold" }}>Date of birth</p>
          <p>
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>

          <Button
            onClick={Handalsubmit}
            type="submit"
            style={{
              width: "423px",
              height: "48px",
              marginTop: "20px",
              borderRadius: "20px",
              color: "white",
              backgroundColor: "black",
              border: "1px solid rgb(29, 155, 240)",
              fontWeight: "bold",
            }}
            variant="outlined"
          >
            {" "}
            Next
          </Button>
        </div>
      </div>
    );
  } else if (pageNo == 4) {
    return (
      <div className="pageNo2">
        <h3 style={{ marginLeft: "70px" }}>Step 4 of 5</h3>
        <div className="pageNo22">
          <h1>Create your account</h1>
          <h2>Track where you see Twitter content across the web</h2>
          <p>
            Twitter uses this data to personalize your experience. This web
            browsing history will never be stored with your name, email, or
            phone number.
          </p>
          <br />
          <p>
            By signing up, you agree to our Terms, Privacy Policy, and Cookie
            Use. Twitter may use your contact information, including your email
            address and phone number for purposes outlined in our Privacy
            Policy. Learn more
          </p>
          <Button
            onClick={() => {
              setpageNo(5);
            }}
            type="submit"
            style={{
              width: "423px",
              marginTop: "50px",
              height: "48px",
              marginTop: "80px",
              borderRadius: "20px",
              color: "white",
              backgroundColor: "black",
              border: "1px solid rgb(29, 155, 240)",
              fontWeight: "bold",
            }}
            variant="outlined"
          >
            {" "}
            Next
          </Button>
        </div>
      </div>
    );
  } else if (pageNo == 5) {
    return (
      <div className="pageNo2">
        <TwitterIcon
          fontSize="large"
          color="primary"
          style={{ marginTop: "10px", marginLeft: "270px" }}
        />
        <div className="login1">
          <h1>Log in to Twitter</h1>
          <Button
            style={{
              width: "300px",
              height: "38px",
              borderRadius: "20px",
              color: "black",
              border: "0.1px solid rgb(83, 100, 113)",
              fontWeight: "bold",
            }}
            variant="outlined"
          >
            <GoogleIcon color="black" fontSize="small" />
            Sing Up With Google{" "}
          </Button>
          <br />
          <Button
            style={{
              width: "300px",
              height: "38px",
              borderRadius: "20px",
              color: "black",
              border: "0.01px solid rgb(83, 100, 113)",
              fontWeight: "bold",
              marginTop: "30px",
            }}
            variant="outlined"
          >
            <AppleIcon color="black" />
            Sing Up With Apple{" "}
          </Button>
          <p style={{ marginLeft: "140px" }}>or</p>

          <TextField
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="filled-basic"
            label="email"
            sx={{
              background: "white",
              border: "1px solid rgb(29, 155, 240)",
              width: "290px",
            }}
            variant="filled"
          />

          <Button
            onClick={() => {
              setpageNo(6);
            }}
            style={{
              width: "300px",
              height: "38px",
              borderRadius: "20px",
              color: "white",
              backgroundColor: "black",
              border: "0.1px solid gray",
              fontWeight: "bold",
              marginTop: "30px",
            }}
            variant="outlined"
          >
            {" "}
            Next
          </Button>
          <Button
            onClick={() => {
              setpageNo(6);
            }}
            style={{
              width: "300px",
              height: "38px",
              borderRadius: "20px",
              color: "white",
              backgroundColor: "black",
              border: "0.1px solid gray",
              fontWeight: "bold",
              marginTop: "30px",
            }}
            variant="outlined"
          >
            {" "}
            Forget passward
          </Button>

          <br />
          <p
            style={{
              marginTop: "50px",
              marginLeft: "15px",
              color: "rgb(83, 100, 113)",
            }}
          >
            Have an account already?{" "}
            <span style={{ color: "rgb(29, 155, 240)" }}>sign up</span>{" "}
          </p>
        </div>
      </div>
    );
  } else if (pageNo == 6) {
    return (
      <div className="pageNo2">
        <TwitterIcon
          fontSize="large"
          color="primary"
          style={{ marginTop: "10px", marginLeft: "270px" }}
        />
        <div className="login2">
          <h1>Enter your passwordr</h1>

          <TextField
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="filled-basic"
            label="email"
            sx={{
              background: "white",
              border: "1px solid rgb(29, 155, 240)",
              width: "290px",
              width: "423px",
            }}
            variant="filled"
          />
          <TextField
            name="password"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            id="filled-basic"
            label="password"
            sx={{
              background: "white",
              border: "1px solid rgb(29, 155, 240)",
              width: "290px",
              marginTop: "40px",
              width: "423px",
            }}
            variant="filled"
          />
          <p>Forgot password?</p>
          <Button
            onClick={hendalLogInfinanl}
            style={{
              width: "300px",
              height: "55px",
              borderRadius: "20px",
              color: "white",
              backgroundColor: "black",
              border: "0.1px solid gray",
              fontWeight: "bold",
              marginTop: "100px",
              width: "423px",
            }}
            variant="outlined"
          >
            {" "}
            Log In
          </Button>
          <br />
          <p
            style={{
              marginTop: "30px",
              marginLeft: "15px",
              color: "rgb(83, 100, 113)",
            }}
          >
            Have an account already?{" "}
            <span style={{ color: "rgb(29, 155, 240)" }}>sign up</span>{" "}
          </p>
        </div>
      </div>
    );
  }
}

const Singin = () => {
  return (
    <div className="singin">
      <Join_Twitter />
    </div>
  );
};
export default Singin;
