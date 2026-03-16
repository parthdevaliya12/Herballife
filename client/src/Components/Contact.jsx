import { Mail, Phone, User, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-(--background) py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-(--primary-color)">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mt-2">
          Have questions about our herbal products? Send us a message.
        </p>

        <form className="mt-10 bg-white shadow-lg rounded-xl p-8 space-y-6">
          {/* Name */}
          <div>
            <label className="text-gray-700 font-medium">Full Name</label>

            <div className="flex items-center border rounded-lg mt-2 px-3">
              <User size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 outline-none"
              required/>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-700 font-medium">Email</label>

            <div className="flex items-center border rounded-lg mt-2 px-3">
              <Mail size={18} className="text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 outline-none"
              required/>
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-gray-700 font-medium">Phone</label>

            <div className="flex items-center border rounded-lg mt-2 px-3">
              <Phone size={18} className="text-gray-400" />
              <input
                type="number"
                placeholder="Enter your phone"
                className="w-full p-3 outline-none"
              required/>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-700 font-medium">Message</label>

            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full mt-2 border rounded-lg p-3 outline-none"
            required></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-(--primary-color) text-white py-3 rounded-lg font-medium hover:opacity-90 flex items-center justify-center gap-2"
          >
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
