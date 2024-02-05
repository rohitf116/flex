import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { bookCreateSchema } from "../validations/bookValidation";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputValidation from "../shared/InpoutValidation";
import { useState } from "react";
import { createBookApi } from "../features/bookSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let user = useSelector((state) => state.user);
  console.log({ user });
  const [localError, setLocalError] = useState("");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookCreateSchema),
  });
  const onFieldChange = () => {
    setLocalError("");
  };
  const onSubmit = async (data) => {
    // Add your registration logic here
    const res = await dispatch(
      createBookApi({ token: user.user.token, bookData: data })
    );
    console.log({ t: res.payload.id });
    if (res?.error) {
      setLocalError(res.payload);
    } else {
      navigate(`/${res.payload.id}`);
    }
  };
  return (
    <div className="register">
      <form
        onSubmit={handleSubmit(onSubmit)}
        onChange={onFieldChange}
        className="mt-6 space-y-6"
      >
        <InputValidation
          name="title"
          type="text"
          placeholder="title"
          register={register}
          error={errors}
        />
        <InputValidation
          name="excerpt"
          type="text"
          placeholder="excerpt"
          register={register}
          error={errors}
        />
        <InputValidation
          name="ISBN"
          type="text"
          placeholder="ISBN"
          register={register}
          error={errors}
        />
        <InputValidation
          name="category"
          type="text"
          placeholder="category"
          register={register}
          error={errors}
        />
        <InputValidation
          name="releasedAt"
          type="text"
          placeholder="releasedAt"
          register={register}
          error={errors}
        />

        <InputValidation
          name="subcategories"
          type="text"
          placeholder="subcategories"
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
          {status === "loading" ? <p>Loading...</p> : "Add book"}
        </button>
        <p className=""></p>
      </form>
    </div>
  );
};

export default BookForm;
