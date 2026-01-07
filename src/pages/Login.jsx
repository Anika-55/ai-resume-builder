import { Mail, User2Icon, Lock } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authSlice";
import toast from "react-hot-toast";
import api from "../configs/api";

const Login = () => {
  const dispatch = useDispatch();

  const query = new URLSearchParams(window.location.search);
  const urlState = query.get("state");

  const validStates = ["login", "register"];
  const [state, setState] = React.useState(
    validStates.includes(urlState) ? urlState : "login"
  );

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post(`/api/users/${state}`, formData);
      dispatch(login(data));
      localStorage.setItem("token", data.token);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleState = () => {
    setState((prev) => (prev === "login" ? "register" : "login"));
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
      >
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign up"}
        </h1>

        <p className="text-gray-500 text-sm mt-2">Please {state} to continue</p>

        {state === "register" && (
          <div className="flex items-center mt-6 w-full border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
            <User2Icon size={16} className="text-gray-500" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border-none outline-none w-full"
              required
              autoComplete="name"
            />
          </div>
        )}

        <div className="flex items-center w-full mt-4 border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
          <Mail size={13} className="text-gray-500" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border-none outline-none w-full"
            required
            autoComplete="email"
          />
        </div>

        <div className="flex items-center mt-4 w-full border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
          <Lock size={13} className="text-gray-500" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border-none outline-none w-full"
            required
            autoComplete="current-password"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90"
        >
          {state === "login" ? "Login" : "Register"}
        </button>

        <p
          onClick={toggleState}
          className="cursor-pointer text-gray-500 text-sm mt-4 mb-10"
        >
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span className="text-green-500 hover:underline">Click here</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
