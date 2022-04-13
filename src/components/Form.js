import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (name && email && message) {
      emailjs
        .sendForm(
          "service_4vezptm",
          "template_nfhof4l",
          form.current,
          "pgjlkDp_KGVrswI95"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setEmail("");
      setName("");
      setMessage("");
    } else {
      alert("Please Fill The Form");
    }
  };
  return (
    <div>
      {" "}
      <form
        ref={form}
        className="flex items-center justify-center flex-col space-y-3"
        // onSubmit={(e) => {
        //   if (name && email && message) {
        //     sendEmail();
        //     console.log(name, email, message);
        //     setEmail("");
        //     setName("");
        //     setMessage("");
        //   } else {
        //     e.preventDefault();

        //     alert("please fill form");
        //   }
        // }}
        onSubmit={sendEmail}
      >
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          placeholder="Your Name"
          type="text"
          className="p-1 w-full border-4 border-[#2a1d66] text-gray-200 bg-indigo-900 rounded-xl"
          name="name"
          id="name"
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          placeholder="Your Email"
          type="email"
          className="p-1 w-full border-4 border-[#2a1d66] text-gray-200 bg-indigo-900 rounded-xl"
          name="email"
          id="email"
        />
        <textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
          placeholder="Your Message"
          className="p-1 w-full border-4 border-[#2a1d66] text-gray-200 bg-indigo-900 rounded-xl"
          name="message"
          id="message"
          cols="30"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="bg-[#2a1d66] text-white  p-2 rounded-lg  hover:shadow-xl"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
