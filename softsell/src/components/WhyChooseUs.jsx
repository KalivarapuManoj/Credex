const points = [
    { icon: "🚀", text: "Fast & Easy Process", description: "Get your license valuation done in just a few clicks with minimal effort." },
    { icon: "🔒", text: "Secure Transactions", description: "We prioritize your privacy with state-of-the-art encryption for all transactions." },
    { icon: "📊", text: "Accurate Valuations", description: "Our system uses advanced algorithms to ensure precise and fair valuation of your software licenses." },
    { icon: "💼", text: "Trusted by Businesses", description: "Join hundreds of businesses that rely on us for smooth and reliable software resale." }
  ];
  
  const WhyChooseUs = () => (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-5">Why Choose Us</h2>
        <div className="row justify-content-center">
          {points.map((item, i) => (
            <div key={i} className="col-md-3 mb-4">
              <div className="card p-4 h-100">
                <div className="display-4">{item.icon}</div>
                <h5 className="mt-3">{item.text}</h5>
                <p className="mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default WhyChooseUs;
  