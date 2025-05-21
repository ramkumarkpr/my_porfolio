import React, { useRef } from "react";
import HeaderComponent from "./HeaderComponent";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import contactProfile from "../assets/image/contact_Profile.png";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const formRef = useRef();
  const form = useForm({
    defaultValues: {
      form_name: "",
      email: "",
      contactMsg: "",
      phone: "",
    },
  });

  const navigate = useNavigate();

  const sendEmail = (data) => {
    emailjs
      .send(
        "service_mva93qg",
        "template_d0leq9n",
        {
          name: data.form_name,
          email: data.email,
          message: data.contactMsg,
        },
        "GUZqqBAvVOofa5K2m"
      )
      .then(() => {
        alert("Your Message Has been Sended Successfully");
      })
      .then(() => {
        navigate("/");
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.reset();
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const formGroup = {
    form_name: {
      ...register("form_name", {
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

  return (
    <>
      <HeaderComponent />

      <motion.div
        id="MainForm"
        className="min-h-screen  flex flex-col lg:flex-row justify-around items-center px-6 py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          id="FormImgField"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src={contactProfile} alt="Contact" className="max-w-md" />
        </motion.div>

        <motion.div
          id="FormLayouts"
          className="w-full max-w-xl mt-10 lg:mt-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-white text-lg mb-6 max-w-2xl mx-auto text-justify">
            Have a project in mind, want to collaborate, or just want to say
            hello? I'm always open to new opportunities and conversations. Fill
            out the form below and I'll get back to you soon!
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit(sendEmail)}
            noValidate
            className="p-8 rounded-3xl bg-gradient-to-br from-[#606168] via-[#494a50] to-[#303136] backdrop-blur-lg border border-white/10 shadow-2xl shadow-blue-500/20 space-y-5"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white text-center"
            >
              Contact Me
            </motion.h2>

            {/* Full Name */}
            <div className="form-control">
              <label className="block text-sm font-medium text-white mb-1">
                Full Name
              </label>
              <input
                type="text"
                {...formGroup.form_name}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all"
                placeholder="Enter Full Name"
              />
              <p className="text-pink-400 text-sm mt-1 font-medium">
                {errors.form_name?.message}
              </p>
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="block text-sm font-medium text-white mb-1">
                Email Address
              </label>
              <input
                type="email"
                {...formGroup.email}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all"
                placeholder="Enter Email Address"
              />
              <p className="text-pink-400 text-sm mt-1 font-medium">
                {errors.email?.message}
              </p>
            </div>

            {/* Phone */}
            <div className="form-control">
              <label className="block text-sm font-medium text-white mb-1">
                Phone
              </label>
              <input
                type="number"
                {...formGroup.phone}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all"
                placeholder="Enter Phone Number"
              />
              <p className="text-pink-400 text-sm mt-1 font-medium">
                {errors.phone?.message}
              </p>
            </div>

            {/* Message */}
            <div className="form-control">
              <label className="block text-sm font-medium text-white mb-1">
                Message
              </label>
              <textarea
                {...formGroup.contactMsg}
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all"
                placeholder="Reason to Contact"
              ></textarea>
              <p className="text-pink-400 text-sm mt-1 font-medium">
                {errors.contactMsg?.message}
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #3B82F6" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-md font-semibold transition"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>

      <DevTool control={control} />
    </>
  );
};

export default LoginComponent;
