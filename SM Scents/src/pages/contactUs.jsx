import React from 'react';
import { BsTiktok, BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';

const ContactUs = () => {
  const contactData = {
    phone: "+92-300-1234567",
    email: "info@smscents.com",
    address: "123 Fragrance Avenue, Karachi, Pakistan",
    socialMedia: [
      { platform: "Facebook", url: "https://facebook.com/yourbrand", icon: <FaFacebook/> },
      { platform: "Instagram", url: "https://instagram.com/yourbrand", icon: <FaInstagram/> },
      { platform: "Twitter", url: "https://twitter.com/yourbrand", icon: <BsTwitterX/> },
      { platform: "TikTok", url: "https://tiktok.com/company/yourbrand", icon: <BsTiktok/> },
    ]
  };

  return (
    <div className="contact-us-container p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="mb-8 text-center">
        <p className="text-lg"><strong>Phone:</strong> {contactData.phone}</p>
        <p className="text-lg"><strong>Email:</strong> <a href={`mailto:${contactData.email}`} className="text-blue-600">{contactData.email}</a></p>
        <p className="text-lg"><strong>Address:</strong> {contactData.address}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Get in Touch</h2>
        <form className="space-y-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-md"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {contactData.socialMedia.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline flex items-center"
            >
              <span className="mr-2">{social.icon}</span>
              {social.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
