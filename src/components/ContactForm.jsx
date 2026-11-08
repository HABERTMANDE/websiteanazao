import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="min-h-screen bg-[#07142B] py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-yellow-400 mb-4">
            Get In Touch
          </h2>

          <p className="text-gray-300 text-lg">
            We'd love to hear from you. Send us your message and our team
            will respond as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-black/40 backdrop-blur-md border border-yellow-500/30 rounded-2xl p-10 space-y-6"
        >
          {/* Full Name */}
          <div>
            <label className="block text-yellow-400 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-4 rounded-lg bg-[#0E1B36] border border-gray-700 text-white focus:border-yellow-400 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-yellow-400 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-4 rounded-lg bg-[#0E1B36] border border-gray-700 text-white focus:border-yellow-400 focus:outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-yellow-400 mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+254..."
              className="w-full p-4 rounded-lg bg-[#0E1B36] border border-gray-700 text-white focus:border-yellow-400 focus:outline-none"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-yellow-400 mb-2">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Message subject"
              className="w-full p-4 rounded-lg bg-[#0E1B36] border border-gray-700 text-white focus:border-yellow-400 focus:outline-none"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-yellow-400 mb-2">
              Message
            </label>

            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full p-4 rounded-lg bg-[#0E1B36] border border-gray-700 text-white focus:border-yellow-400 focus:outline-none resize-none"
              required
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactForm;