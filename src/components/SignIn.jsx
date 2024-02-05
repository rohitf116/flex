import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "../features/userSlice";
import InputValidation from "../shared/InpoutValidation";
import { userSignInSchema } from "../validations/userValidation";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSignInSchema),
  });

  const [localError, setLocalError] = useState("");

  let user = useSelector((state) => state.user);
  const { status, error } = user | {};
  console.log({ error });
  const onSubmit = async (data) => {
    console.log({ data });
    // Add your registration logic here
    const res = await dispatch(loginUser(data));
    console.log({ res });
    if (res?.error) {
      setLocalError(res.payload);
    } else if (res?.payload) {
      navigate("/");
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
          name="email"
          type="email"
          placeholder="Email address"
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
