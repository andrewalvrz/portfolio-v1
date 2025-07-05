import React, { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const form = formRef.current!;
      const formData = new FormData(form);
      const templateParams = {
        to_name: "Andrew",
        from_name: formData.get("name") as string,
        from_email: formData.get("email") as string,
        message: formData.get("message") as string,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSuccess(true);
      form.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    }
  };

  return (
    <div id="contact" className="flex flex-col justify-between mt-20">
      <div className="flex justify-center w-full mb-20">
        <div className="w-[200px] h-[2px] bg-gray-700 rounded-full"></div>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="max-w-[800px] w-full mx-auto px-4 mb-20">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-lg mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-lg mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-lg mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400"
                  placeholder="Your Message"
                  rows={4}
                ></textarea>
              </div>
              <div className="flex flex-col items-center gap-4">
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && (
                  <div className="w-full p-3 bg-green-500/20 border border-green-500/30 rounded-md text-green-300 text-center">
                    Message sent successfully!
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full p-2 bg-blue-500/20 border border-blue-500/30 rounded-md text-blue-300 hover:bg-blue-500/30 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="w-full bg-white/5 backdrop-blur-sm text-white/80 py-4 text-center border-t border-white/10">
        <div className="flex justify-center items-start space-x-16 mb-4">
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-2">Contact Me</h3>
            <p>Email: andrew.alvarez616@gmail.com</p>
            <p>Phone: 956-429-8540</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Socials</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/andrewalvrz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/github.svg"
                  alt="GitHub"
                  className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/andrewalvrz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
              
              
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full my-4">
          <div className="w-[200px] h-[2px] bg-gray-700 rounded-full"></div>
        </div>
        <p>&copy; 2025 Andrew Alvarez All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
