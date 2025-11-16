function Contact() {
  return (
    <section className="container mx-auto p-4 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative">
        <div className="hidden lg:block">
          <img
            src="/six.jpg"
            alt="Contact Us"
            className="mx-auto mb-4 w-full h-auto object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-9 text-white">
            Ready to Begin Journey business in chain supply ? <br />
            Schedule Your Complementary Consultation
          </h2>
          <p className="text-lg text-gray-100 mb-12">
            Contact us today to make sure that our accessories are attractive and ready market goods.
          </p>

          <form
            action="#"
            className="flex flex-wrap items-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 bg-white rounded-md w-64 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-3 rounded-md cursor-pointer hover:bg-blue-500 transition-colors"
            >
              Schedule Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
