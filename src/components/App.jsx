import React from "react";
import foto from "../assets/foto.png";
import logo from "../assets/logo.svg";
import googleLogo from "../assets/google.svg";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[700px] shadow-lg stroke-gray-700 sm:max-w-[900px]">
        <div className="w-full h-[600px] hidden md:block">
          <img src={foto} alt="Foto" className="w-full h-[720px] object-cover" />
        </div>
        <div className="bg-white p-8 md:p-16">
          <div className="flex">
            <img src={logo} alt="Logo" className="w-1/9 mb-3" />
            <h1 className="text-2xl font-bold text-gray-800 mt-4 ml-4">
              Margin capital
            </h1>
          </div>
          <h2 className="text-3xl mb-8">Nice to see you again</h2>
          <label htmlFor="email" className="block mb-2">
            login
          </label>
          <input
            className="border p-2 mb-4 w-full"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
          <label htmlFor="password" className="block mb-2">
            Password
          </label>{" "}
          <input
            className="border p-2 mb-8 w-full"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
          <a
            className="block text-blue-500 mb-6 text-right hover:underline"
            href="#"
          >
            Forgot password?
          </a>
          <button className="p-2 mb-4 w-full bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500">
            Sign in
          </button>
          <button className="p-2 mb-4 w-full bg-white text-gray-800 py-2 px-4 rounded-lg border border-gray-300 flex items-center hover:bg-gray-100 mt-4">
            <img src={googleLogo} alt="googleLogo" className="ml-12 mr-2" />
            <div className="flex items-center">
              <i className="fab fa-google"></i>
              <div className="text-center ml-2">or sign in with Google</div>
            </div>
          </button>
          <p className="ml-10 text-gray-600 mt-8">
            Dont have an account?
            <a className="text-blue-500 hover:underline" href="#">
              Sign up now!
            </a>
          </p>
          <p className="mt-20 text-center text-gray-500 text-xs">
            ©Perfect Login 2021
          </p>
        </div>
      </div>
    </div>
  );
}
