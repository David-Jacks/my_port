import { useState, useRef, useEffect } from 'react';
import './contact.css';

const Contact = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFlipped && firstInputRef.current) {
      setTimeout(() => firstInputRef.current?.focus(), 420);
    }
  }, [isFlipped]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFlipped(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div id="contact__page">
      <div className="contact__header">
        <span className="contact__label">Get in Touch</span>
        <h2>Contact Me</h2>
        <p>Have a project in mind or want to collaborate? I'd love to hear from you.</p>
      </div>
      <div className="contact_div_wrapper">
        <div className="card-3d-wrap">
          <div className={`card-3d-wrapper ${isFlipped ? 'is-flipped' : ''}`}>
            <div className="card-front card cont__head">
              <div className="center-wrap">
                <h3>Let's Connect</h3>
                <p>
                  Are you ready to turn your ideas into reality? Let's collaborate and
                  create something exceptional together.
                  Whether it's building innovative applications, enhancing user experiences,
                  or solving intricate challenges, I'm here to make a difference.
                </p>
                <button
                  id="contact_btn"
                  className="btn"
                  onClick={() => setIsFlipped(true)}
                >
                  <span>Send Message</span>
                </button>
              </div>
            </div>
            <div className="card-back card cont__form">
              <div className="center-wrap">
                <h3>Write to me</h3>
                <form
                  id="contact-form"
                  action="https://formspree.io/f/mvojapal"
                  className="form"
                  method="POST"
                >
                  <input
                    ref={firstInputRef}
                    className="n"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <input
                    className="n"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <textarea
                    name="message"
                    id="cont-mess"
                    cols={15}
                    rows={6}
                    placeholder="write message"
                    required
                  ></textarea>
                  <div className="form-ctas">
                    <button
                      type="button"
                      className="btn ghost"
                      onClick={() => setIsFlipped(false)}
                    >
                      Back
                    </button>
                    <input type="submit" className="send" value="Send" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
