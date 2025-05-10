import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", license: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setError("Please fill in all required fields.");
      return;
    }
    alert("Form submitted (mock)!");
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="d-flex flex-column align-items-center text-center mb-4">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="text-muted">We'd love to hear from you</p>
        </div>
        <form className="row g-3 justify-content-center" onSubmit={handleSubmit}>
          <div className="col-md-5">
            <input className="form-control" name="name" placeholder="Name" onChange={handleChange} />
          </div>
          <div className="col-md-5">
            <input className="form-control" name="email" type="email" placeholder="Email" onChange={handleChange} />
          </div>
          <div className="col-md-5">
            <input className="form-control" name="company" placeholder="Company" onChange={handleChange} />
          </div>
          <div className="col-md-5">
            <select className="form-select" name="license" onChange={handleChange}>
              <option value="">Select License Type</option>
              <option>Windows</option>
              <option>Adobe</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-md-10">
            <textarea className="form-control" name="message" rows="4" placeholder="Message" onChange={handleChange}></textarea>
          </div>
          {error && <div className="col-md-10 text-danger">{error}</div>}
          <div className="col-md-10 text-center">
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
