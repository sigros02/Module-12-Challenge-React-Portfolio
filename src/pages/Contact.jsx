import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="contact flex-grow-1 min-vh-100 bg-light text-dark py-5">
      <div className="container">
        <div>
          <h1>Contact Me</h1>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
