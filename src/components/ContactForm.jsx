import { useState } from "react";

export default function contactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const handleInputChange = (formEvent) => {
    const { name, value } = formEvent.target;

    // SG-TODO: add validation to form input
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const handleFormSubmit = (formEvent) => {
    formEvent.preventDefault();
    console.log(firstName, lastName, email);
    // SG-TODO: add message to confrim form submission
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="p-4 border rounded shadow-sm bg-light"
    >
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name:
        </label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name:
        </label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="email address"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message:
        </label>
        <textarea
          name="message"
          value={formMessage}
          onChange={handleInputChange}
          placeholder="Enter your message here"
          className="form-control"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
