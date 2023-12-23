import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPasswordAsync } from "../../Contexts/actionCreators/authActionCreator";
import { getUsers } from "../../Contexts/actionCreators/ userActionCreator";
const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const selectUsers = (state) => state.users.users;
  const userData = useSelector(selectUsers);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in both email and password fields.", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    try {
      const result = await dispatch(
        signInWithEmailAndPasswordAsync(email, password, userData)
      );
      if (result.success) {
        navigate("/dashboard");
        toast.success(`Welcome Doctor!`, {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="w-full max-w-md py-5">
      <p className="mb-4 text-lg font-semibold text-center text-gray-500">
        Please Log in to continue
      </p>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => handleLogin}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
