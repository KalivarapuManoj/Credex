const steps = [
    { icon: "📤", title: "Upload License" },
    { icon: "💰", title: "Get Valuation" },
    { icon: "🏦", title: "Get Paid" }
  ];
  
  const HowItWorks = () => (
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="mb-5 fw-bold">How It Works</h2>
        <div className="row justify-content-center">
          {steps.map((step, i) => (
            <div key={i} className="col-10 col-md-4 mb-4">
              <div className="card p-4 h-100">
                <div className="display-3">{step.icon}</div>
                <h5 className="mt-3">{step.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  export default HowItWorks;
  