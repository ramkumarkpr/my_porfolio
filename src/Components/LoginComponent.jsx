import React from "react";
import HeaderComponent from "./HeaderComponent";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
let renderCount = 0;

const FormValues = {
  username: "string",
  email: "string",
  message: "string",
  phone: "number",
};

const LoginComponent = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      contactMsg: "",
      phone: "",
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  renderCount++;

  // Validations for Forms Input Field

  const formGroup = {
    name: {
      ...register("username", {
        required: { value: true, message: "Username is Required" },
      }),
    },
    email: {
      ...register("email", {
        required: {
          value: true,
          message: "Email Should not be Empty",
        },
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Invalid Email Format",
        },
      }),
    },
    contactMsg: {
      ...register("contactMsg", {
        required: {
          value: true,
          message: "Message Should not be Empty",
        },
      }),
    },

    phone: {
      ...register("phone", {
        required: {
          value: true,
          message: "Please Enter a Valid 10 digit Number",
        },
      }),
    },
  };

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    form.reset();
  };

  return (
    <>
      <div>{<HeaderComponent />}</div>
      <h4 className="text-xl">Render Count {renderCount / 2} </h4>
      <div id="MainForm" className="flex justify-around">
        <div id="FormImgField">
          <p>Hello</p>
        </div>
        <div id="FormLayouts" className="w-100">
          {/* <h4 className="text-xl font-extrabold text-blue-500">Contact Me</h4> */}
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4"
            >
              <h2 className="text-2xl font-bold text-center text-gray-800">
                Contact Me
              </h2>

              {/* <!-- Name --> */}
              <div className="form-control">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  {...formGroup.name}
                  id="username"
                  className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 text-black"
                  placeholder="Enter Full Name"
                />
                <p className="text-red-500 font-semibold">
                  {errors.username?.message}
                </p>
              </div>

              {/* <!-- Email --> */}
              <div className="form-control">
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  {...formGroup.email}
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 text-black"
                  placeholder="Enter Email Address"
                />
                <p className="text-red-500 font-semibold">
                  {" "}
                  {errors.email?.message}{" "}
                </p>
              </div>

              {/* Phone */}

              <div className="form-control">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="number"
                  {...formGroup.phone}
                  id="phone"
                  className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 text-black"
                  placeholder="Enter Phone Number"
                />
                <p className="text-red-500 font-semibold">
                  {" "}
                  {errors.phone?.message}{" "}
                </p>
              </div>

              {/* <!-- Message --> */}
              <div className="form-control">
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="contactMsg"
                  {...formGroup.contactMsg}
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 text-black"
                  placeholder="Reason to Contact"
                ></textarea>
                <p className="text-red-500 font-semibold">
                  {" "}
                  {errors.contactMsg?.message}{" "}
                </p>
              </div>

              {/* <!-- Submit --> */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <DevTool control={control} />
    </>
  );
};

export default LoginComponent;
