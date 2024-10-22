import { Button, message } from "antd";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

function SignUp() {
  const navigate = useNavigate();
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log("results=>", result);
        const ref = doc(db, "users", user.uid);
        setDoc(ref, {
          email: user.email,
          photoUrl: user.photoURL,
          uid: user.uid,
          displayName: user.displayName,
        }).then(() => {
          navigate("/Login");
          message.success("Accout Created Succesfully");
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        message.success(errorMessage);

        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleSignUp = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        setUser(userCredential.user);
        setUser(user);
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        setError(error.message);
        console.log("error=", error);
      });
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <div className="flex justify-center my-32 ">
      <div className=" p-7 border rounded border-black ">
        <div className="text-center mb-4">
          <p className="text-black font-extrabold text-3xl underline ">
            SIGN UP
          </p>
        </div>
        <form onSubmit={handleSignUp}>
          <div>
            <label>Email:</label>
          </div>
          <div>
            <input
              className="w-72 border border-gray focus:rounded focus:outline-1 focus:border-none py-1 px-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mt-3">
            <label>Password:</label>
          </div>
          <div className="flex">
            <input
              className="w-72 border border-gray focus:rounded focus:outline-1 focus:border-none py-1 px-2"
              type={type}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              class="flex justify-around items-center"
              onClick={handleToggle}
            >
              <Icon class="absolute mr-10" icon={icon} size={25} />
            </span>
          </div>
          <button
            className="mt-3 py-2.5 w-72 rounded bg-black text-white"
            type="submit"
          >
            Sign Up
        {error && console.log(error) && message.error("Invalid Email/Pasword")}
        {user && message.success("Accout Created Succesfully")}
          </button>
        </form>
        <div>
          <Link to="/login">
            <button className="w-72 border border-black rounded mt-3 focus:rounded focus:outline-none active:outline-none active:border-none focus:border-none py-1.5 px-2 hover:bg-black hover:text-white ">
              
              Already have an account
            </button>
          </Link>
        </div>
        <button
          className="w-72 flex border border-black rounded mt-3 focus:rounded focus:outline-none active:outline-none active:border-none focus:border-none py-1.5 px-2 hover:bg-black hover:text-white justify-center items-center"
          onClick={handleLogin}
          >
          
          <img
            className="w-9 pr-2"
            src="/src/assets/images/googleIcon.svg"
            alt=""
          />
          Sign Up with Google
        </button>
      </div>
    </div>
  );
}

export default SignUp;
