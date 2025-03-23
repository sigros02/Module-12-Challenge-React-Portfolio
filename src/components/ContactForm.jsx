import { useState } from "react";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleInputChange = (formEvent) => {
    const { name, value } = formEvent.target;

    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setFormMessage(value);
    }
  };

  const handleFormSubmit = (formEvent) => {
    formEvent.preventDefault();

    // SG: Show a modal with a message if any of the fields are empty
    if (!firstName || !lastName || !email || !formMessage) {
      return handleShowModal("Please fill out all fields!");
      // SG: show a modal message if first or last name has non alphabetic characters
    } else if (
      !/^[a-zA-Z]+$/.test(firstName) ||
      !/^[a-zA-Z]+$/.test(lastName)
    ) {
      return handleShowModal(
        "First and Last Name must contain only alphabetic characters!"
      );
    }

    handleShowModal("Thank you for your submission!");

    // SG: Clear the form fields after submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setFormMessage("");
  };

  const handleShowModal = (message) => {
    setModalMessage(message);
    setIsModalVisible(true);
  };

  // SG: Hide the modal when the close button is clicked
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {/* SG: Conditionally render the modal */}
      {isModalVisible && (
        <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Attention</h5>
              </div>
              <div className="modal-body">
                <p>{modalMessage}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
    </>
  );
}
