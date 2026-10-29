import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false });

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

  // Handle Submit with Web3Forms (No Backend Needed)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus({ loading: true, success: false });

    try {
      // Free form submission using Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "559d7f3f-4e86-4927-873c-c58d0910d3f3", // Get free key at web3forms.com
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus({ loading: false, success: false }), 5000);
      }
    } catch (error) {
      setStatus({ loading: false, success: false });
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900">
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
            <a href="mailto:nishantmathur572@email.com" className="flex items-center gap-4 hover:opacity-80 transition">
              <FiMail className="text-indigo-400 text-xl" />
              <span className="text-slate-300">nishantmathur572@email.com</span>
            </a>

            <a href="tel:+916376073082" className="flex items-center gap-4 hover:opacity-80 transition">
              <FiPhone className="text-indigo-400 text-xl" />
              <span className="text-slate-300">+91 63760 73082</span>
            </a>

            <div className="flex items-center gap-4">
              <FiMapPin className="text-indigo-400 text-xl" />
              <span className="text-slate-300">Jaipur (Rajasthan)</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl space-y-6"
        >
          {/* Success Message Banner */}
          {status.success && (
            <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm rounded-lg text-center">
              Message sent successfully! I will get back to you soon.
            </div>
          )}

          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
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
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
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
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 transition rounded-lg py-3 font-medium text-white shadow-lg shadow-indigo-600/20"
          >
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}