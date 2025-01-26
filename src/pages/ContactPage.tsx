import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const mailtoLink = `mailto:netsaj4@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(
      formData.name
    )}%0AEmail:%20${encodeURIComponent(formData.email)}%0A%0AMessage:%20${encodeURIComponent(
      formData.message
    )}`;
  
    window.location.href = mailtoLink;
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-gray-900 px-3 py-10">
      <div className="max-w-4xl mx-auto bg-gray-800 p-5 rounded-lg shadow-lg sm:p-8 sm:w-2/5">
        <header className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-yellow-400 border-b-2 border-gray-400 w-fit pb-2 mb-6 sm:text-4xl">
            Contact Us
          </h1>

          <p className="text-lg text-gray-300 mb-6 text-center">
            We would love to hear from you! Feel free to reach out using the
            form below.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-300 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-gray-200"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-300 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-gray-200"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-300 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-gray-200"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-600 text-white font-bold rounded-lg hover:bg-yellow-700 transition duration-200"
          >
            Submit
          </button>
        </form>

        {/* Submission Feedback */}
        {isSubmitted && (
          <p className="mt-4 text-green-400 text-center">
            Thank you for your message! We will get back to you soon.
          </p>
        )}

        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-gray-300">Our Address</h3>
          <p className="text-gray-400">
            <a
              href="https://maps.app.goo.gl/nRY96BKSSgZhzUzV9"
              className="text-yellow-500 hover:text-yellow-400"
            >
              WMV8+CQ6, Mwembe Tayari Rd, Mombasa
            </a>
          </p>

          <h3 className="text-xl font-semibold text-gray-300 mt-4">Email</h3>
          <p className="text-lg">
            <a
              href="mailto: sgssgurudwaramsa@gmail.com"
              className="text-yellow-500 hover:text-yellow-400"
            >
              <u>sgssgurudwaramsa@gmail.com</u>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
