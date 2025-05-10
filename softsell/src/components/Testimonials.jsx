const testimonials = [
    {
      name: "Rohit",
      role: "CTO",
      company: "TechCorp",
      text: "SoftSell made it incredibly easy to monetize unused software licenses. The process was simple, fast, and seamless, which allowed us to turn unused assets into cash quickly and securely."
    },
    {
      name: "Smith",
      role: "Founder",
      company: "Startupify",
      text: "A fast, secure, and smooth experience. We were able to quickly liquidate our unused software licenses without any hassle. SoftSell is a game changer for businesses looking to optimize resources."
    }
  ];
  
  const Testimonials = () => (
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="mb-5 fw-bold">Customer Testimonials</h2>
        <div className="row justify-content-center">
          {testimonials.map((t, i) => (
            <div key={i} className="col-10 col-md-5 mb-4">
              <div className="card p-4 h-100">
                <p className="fst-italic">"{t.text}"</p>
                <p className="fw-bold mt-3">{t.name} – {t.role}, {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Testimonials;
  