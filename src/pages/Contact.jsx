import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Contact Me
        </h2>

        <p className="text-gray-400 text-center mb-10">
          Have a question, idea, or project? Let’s connect!
        </p>

        <form
          action="https://formsubmit.co/YOUR_EMAIL@gmail.com"
          method="POST"
          className="space-y-6 bg-neutral-900 p-8 rounded-lg shadow-lg border border-white/10"
        >
          <div>
            <label className="block text-sm mb-2 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded bg-black text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded bg-black text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded bg-black text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded hover:bg-gray-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
