const Contacts = () => {
  return (
    <section className="px-4 py-12 jost">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-sm text-base-content/70 mt-2">
            Questions about LoanLink? Use this dummy contact page as a template
            — replace with working form logic when ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dummy Form (no functionality) */}
          <div className="card p-6 bg-accent shadow-sm">
            <div className="mb-3">
              <label className="label">
                <span className="label-text">Full name</span>
              </label>
              <input
                className="input input-bordered w-full"
                placeholder="Your name"
                disabled
              />
            </div>

            <div className="mb-3">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                className="input input-bordered w-full"
                placeholder="you@example.com"
                disabled
              />
            </div>

            <div className="mb-3">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                className="input input-bordered w-full"
                placeholder="Subject"
                disabled
              />
            </div>

            <div className="mb-4">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                rows={5}
                placeholder="Your message"
                disabled
              />
            </div>

            <div className="flex items-center justify-end">
              {/* Non-functional button using global site style */}
              <button
                className="btn rounded-full bg-primary text-secondary"
                disabled
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Static Contact Details */}
          <div className="space-y-4">
            <div className="card p-6 bg-accent shadow-sm">
              <h3 className="font-semibold">General</h3>
              <p className="text-sm text-base-content/70 mt-2">
                support@loanlink.com
              </p>
              <p className="text-sm text-base-content/70">+1 (234) 567-890</p>
            </div>

            <div className="card p-6 bg-accent shadow-sm">
              <h3 className="font-semibold">Office</h3>
              <p className="text-sm text-base-content/70 mt-2">
                123 Finance Street
              </p>
              <p className="text-sm text-base-content/70">New York, NY 10001</p>
            </div>

            <div className="card p-4 bg-accent shadow-sm">
              <h4 className="font-semibold">Opening Hours</h4>
              <p className="text-sm text-base-content/70">
                Mon - Fri: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
