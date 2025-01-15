export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#D35F0C]/90 text-[#1E1E1E] py-20"
    >
      <div className="container mx-auto px-8 sm:px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 terminal-text text-white">Contact_Me</h2>
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg w-full lg:max-w-[70%] xl:max-w-[50%] mx-auto relative overflow-hidden">
          {/* Floating Circles */}
          <div className="floating-circle floating-circle-1 top-[-20px] left-[-20px]" />
          <div className="floating-circle floating-circle-2 bottom-[-30px] right-[-20px]" />
          <div className="floating-circle floating-circle-3 top-[40%] left-[60%]" />
          
          <div className="max-w-2xl mx-auto relative z-10 selection:bg-black/20">
            <form className="space-y-6">
              <div>
              <label
                htmlFor="name"
                className="block text-base sm:text-xl mb-2 terminal-text text-[#1E1E1E]"
              >
                Name_
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-4 text-sm sm:text-base rounded-xl bg-[#D35F0C]/30 text-[#1E1E1E] terminal-text focus:outline-none placeholder:text-[#636262]"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-base sm:text-xl mb-2 terminal-text text-[#1E1E1E]"
              >
                Email_
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 text-sm sm:text-base rounded-xl bg-[#D35F0C]/30 text-[#1E1E1E] terminal-text focus:outline-none placeholder:text-[#636262]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-base sm:text-xl mb-2 terminal-text text-[#1E1E1E]"
              >
                Message_
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full p-4 text-sm sm:text-base rounded-xl bg-[#D35F0C]/30 text-[#1E1E1E] terminal-text focus:outline-none placeholder:text-[#636262]"
                placeholder="Enter your message"
              />
            </div>
            <button
              type="submit"
              className="w-full p-4 text-sm sm:text-base bg-[#2a2a2a] text-white terminal-text hover:bg-[#1f1e1e] rounded-xl transition-colors cursor"
            >
                Send_Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
