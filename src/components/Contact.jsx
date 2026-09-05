import { Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "4ce6dca1-caf1-47a8-8300-2ddd69691090");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(
      data.success
        ? "Success! I received your message."
        : "Error! Please try again after some time.",
    );
    if (data.success) {
      event.target.reset();
    }
  };

  return (
    <>
      <section
        id="contact"
        className="min-h-screen py-20 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div data-aos="fade-up" className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 dark:text-white text-gray-900">
              Get In{" "}
              <span className="text-red-500 dark:text-red-400">Touch</span>
            </h2>
          </div>
          <div className="flex gap-16 items-center justify-center mt-8 w-full">
            <form
              onSubmit={(e) => onSubmit(e)}
              className="flex flex-col gap-5 dark:bg-zinc-900/30 bg-white/50 p-8 sm:p-10 rounded-3xl border dark:border-zinc-800 border-gray-100 backdrop-blur-sm w-full max-w-xl mx-auto lg:mx-0 order-2 lg:order-1"
              data-aos="fade-right"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-zinc-800 border-gray-200 dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 focus:border-red-500 dark:focus:border-red-400"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-zinc-800 border-gray-200 dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 focus:border-red-500 dark:focus:border-red-400"
                required
                data-aos="fade-up"
                data-aos-delay="200"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className="w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-zinc-800 border-gray-200 dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 focus:border-red-500 dark:focus:border-red-400"
                required
                data-aos="fade-up"
                data-aos-delay="300"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-medium text-base bg-red-600 hover:bg-red-700 acrive:scale-98 transition-all cursor-pointer w-full sm:w-fit"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Send size={18} /> Send Message
              </button>
              <p
                className={`text-lg bg-green-300 text-black p-3 w-full flex-wrap rounded-2xl mt-5 overflow-hidden ${result === "" && "hidden"}`}
              >
                {result}
              </p>
            </form>
            
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Contact;
