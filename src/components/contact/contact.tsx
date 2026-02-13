import { useState, useRef, useEffect } from 'react';
import type { FormEvent } from 'react';
import './contact.css';

const Contact = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const firstInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isFlipped && firstInputRef.current && submitStatus === 'idle') {
      setTimeout(() => firstInputRef.current?.focus(), 420);
    }
  }, [isFlipped, submitStatus]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFlipped(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/mvojapal', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        formRef.current?.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  const resetForm = () => {
    setSubmitStatus('idle');
    setIsFlipped(false);
  };

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
                {submitStatus === 'success' ? (
                  <div className="success-message">
                    <i className="fa-solid fa-circle-check"></i>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. I'll get back to you soon.</p>
                    <button className="btn" onClick={resetForm}>
                      <span>Done</span>
                    </button>
                  </div>
                ) : submitStatus === 'error' ? (
                  <div className="error-message">
                    <i className="fa-solid fa-circle-xmark"></i>
                    <h3>Something went wrong</h3>
                    <p>Please try again or email me directly.</p>
                    <button className="btn" onClick={() => setSubmitStatus('idle')}>
                      <span>Try Again</span>
                    </button>
                  </div>
                ) : (
                  <>
                    <h3>Write to me</h3>
                    <form
                      ref={formRef}
                      id="contact-form"
                      className="form"
                      onSubmit={handleSubmit}
                    >
                      <input
                        ref={firstInputRef}
                        className="n"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        disabled={submitStatus === 'submitting'}
                      />
                      <input
                        className="n"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        disabled={submitStatus === 'submitting'}
                      />
                      <textarea
                        name="message"
                        id="cont-mess"
                        cols={15}
                        rows={6}
                        placeholder="write message"
                        required
                        disabled={submitStatus === 'submitting'}
                      ></textarea>
                      <div className="form-ctas">
                        <button
                          type="button"
                          className="btn ghost"
                          onClick={() => setIsFlipped(false)}
                          disabled={submitStatus === 'submitting'}
                        >
                          Back
                        </button>
                        <input 
                          type="submit" 
                          className="send" 
                          value={submitStatus === 'submitting' ? 'Sending...' : 'Send'}
                          disabled={submitStatus === 'submitting'}
                        />
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
