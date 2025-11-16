import Head from "next/head";
import { useState } from "react";
import axios from "axios";

export default function Contact() {

  const [contactError, setContactError] = useState('');
  const [contactSuccess, setContactSuccess] = useState('');
  const [formData, setFormData] = useState({
      fullname: '',
      email: '',
      message: '',
  });

  const handleChanged = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const formSubmitted = async (e) => {
    e.preventDefault();

    let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let errorValue = false;

    if (formData.fullname === "") {
      setContactError("Please enter your name");
      errorValue = true;
    } else if (!emailVal.test(formData.email)) {
      setContactError("Please enter a valid email");
      errorValue = true;
    } else {
      setContactError("");
    }

    if (!errorValue) {
      try {
        let url = "https://example.com/api/contact";

        const response = await axios.post(url, formData, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (response.data.status === "error") {
          setContactError(response.data.message);
        }

        if (response.data.status === "successful") {
          setContactSuccess("Message sent successfully");
          counterStart();
          setFormData({
            fullname: "",
            email: "",
            message: "",
          });
        }
      } catch (error) {
        console.log("Error submitting form:", error);
      }
    }
  };

  function counterStart() {
    setTimeout(() => {
      setContactSuccess("");
    }, 5000);
  }

  return (
    <>
      <Head>
        <title>Contact Us | Example Company</title>
      </Head>

      <section className="relative z-10 w-screen min-h-screen flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-5xl bg-transparent rounded-lg flex flex-col md:flex-row overflow-hidden">

          {/* Left: Info */}
          <div className="w-full md:w-1/2 bg-transparent text-offWhite flex flex-col justify-center p-8">
            <h2 className="text-3xl font-bold mb-4 text-primary">Contact Information</h2>
            <p className="mb-6 text-offBlack">
              Example Company<br />
              123 Maple Street, Suite 400<br />
              Riverton, Colorado, USA
            </p>

            <div className="mb-4 flex items-center">
              <i className="fa fa-phone mr-2 text-primary"></i>
              <span className="text-offBlack">+1 (555) 123-4567</span>
            </div>

            <div className="mb-4 flex items-center">
              <i className="fa fa-envelope mr-2 text-primary"></i>
              <span className="text-offBlack">contact@example.com</span>
            </div>

            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="Facebook">
                <i className="fa fa-facebook text-3xl text-primary"></i>
              </a>
              <a href="#" aria-label="WhatsApp">
                <i className="fa fa-whatsapp text-3xl text-primary"></i>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl text-primary font-bold mb-4 text-center md:text-left">Get in Touch</h2>
            <p className="text-base text-offBlack mb-8 text-center md:text-left">
              Have a question or message? Fill out the form and we’ll respond shortly.
            </p>

            {contactError && (
              <div className="my-2 w-full text-center py-2 rounded text-base bg-red-500 text-white">
                {contactError}
              </div>
            )}

            {contactSuccess && (
              <div className="my-2 w-full text-center py-2 rounded text-base bg-green-500 text-white">
                {contactSuccess}
              </div>
            )}

            <form className="flex flex-col gap-5" onSubmit={formSubmitted}>
              <input
                type="text"
                placeholder="Your Name"
                name="fullname"
                value={formData.fullname}
                onChange={handleChanged}
                className="px-4 py-3 rounded border border-grey text-black"
              />

              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChanged}
                className="px-4 py-3 rounded border border-grey text-black"
              />

              <textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChanged}
                className="px-4 py-3 rounded border border-grey text-black"
                rows={5}
              />

              <button
                type="submit"
                className="px-8 py-3 bg-primary text-offWhite rounded transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
