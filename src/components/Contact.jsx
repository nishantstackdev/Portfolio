import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation Function
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    return newErrors;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Submitted:", formData);

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Have a project in mind or just want to say hi?
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FiMail className="text-indigo-400 text-xl" />
              <span className="text-slate-300">nishantmathur572@email.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FiPhone className="text-indigo-400 text-xl" />
              <span className="text-slate-300">+91 63760 73082</span>
            </div>

            <div className="flex items-center gap-4">
              <FiMapPin className="text-indigo-400 text-xl" />
              <span className="text-slate-300">Jaipur (Rajasthan)</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#020617]/80 backdrop-blur rounded-2xl p-8 shadow-lg space-y-6"
        >
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-transparent border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-transparent border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full bg-transparent border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 transition rounded-lg py-3 font-medium text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}