import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wollsbg", "template_t88grx5", form.current, {
        publicKey: "10Tx-P5q_QxgimHN5",
      })
      .then(
        () => {
          // window.location.reload();
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    toast.success("🏎️ Form Subimitted!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Slide,
    });
  };

  return (
    <div id="contact">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        // transition: Slide,
      />

      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Please Fill the form below to discuss any work oppurtunities.
      </span>

      <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="from_name"
          className="name"
          placeholder="Enter your Name"
          required
        />
        <input
          type="email"
          name="your_email"
          className="email"
          placeholder="Enter your E-mail"
          required
        />
        <textarea
          name="message"
          className="msg"
          rows="5"
          placeholder="Enter your message here"
          required
        />
        <br />
        <button type="submit" className="subBtn">
          Submit
        </button>
      </form>
    </div>
  );
}