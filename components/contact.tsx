export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#D35F0C] text-[#1E1E1E] py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 terminal-text text-white">Contact_Me</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-xl mb-2 terminal-text"
              >
                Name_
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-4 bg-[#1E1E1E] text-[#D35F0C] terminal-text focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xl mb-2 terminal-text"
              >
                Email_
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 bg-[#1E1E1E] text-[#D35F0C] terminal-text focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xl mb-2 terminal-text"
              >
                Message_
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full p-4 bg-[#1E1E1E] text-[#D35F0C] terminal-text focus:outline-none"
                placeholder="Enter your message"
              />
            </div>
            <button
              type="submit"
              className="w-full p-4 bg-[#1E1E1E] text-[#D35F0C] terminal-text hover:bg-[#1E1E1E]/90 transition-colors cursor"
            >
              Send_Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
