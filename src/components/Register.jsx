import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "../features/userSlice";
import InputValidation from "../shared/InpoutValidation";
import { userSignUpSchema } from "../validations/userValidation";
import { useEffect } from "react";
const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSignUpSchema),
  });
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    password: "",
    phone: "",
  });
  const [localError, setLocalError] = useState("");

  let user = useSelector((state) => state.user);
  const { status, error } = user | {};
  console.log({ error });
  const onSubmit = async (data) => {
    console.log({ formData });
    // Add your registration logic here
    const res = await dispatch(registerUser(data));
    console.log({ res });
    if (res?.error) {
      setLocalError(res.payload);
    } else if (res?.payload) {
      navigate("/signin");
    }
  };
  const onFieldChange = () => {
    setLocalError("");
  };
  return (
    <div className="register">
      <form
        onSubmit={handleSubmit(onSubmit)}
        onChange={onFieldChange}
        className="mt-6 space-y-6"
      >
        <InputValidation
          name="name"
          type="text"
          placeholder="Full name"
          register={register}
          error={errors}
        />
        <InputValidation
          name="email"
          type="text"
          placeholder="Email address"
          register={register}
          error={errors}
        />
        <InputValidation
          name="phone"
          type="text"
          placeholder="Phone number"
          register={register}
          error={errors}
        />
        <InputValidation
          name="title"
          type="text"
          placeholder="title"
          register={register}
          error={errors}
        />
        <InputValidation
          name="password"
          type="password"
          placeholder="Password"
          register={register}
          error={errors}
        />

        {/* if we have an error */}
        {localError ? (
          <div>
            <p className="text-red-400">{localError}</p>
          </div>
        ) : (
          ""
        )}
        <button type="submit" className="">
          {status === "loading" ? <p>Loading...</p> : "Sign up"}
        </button>
        <p className="">
          <span>have an account ?</span>
          <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
