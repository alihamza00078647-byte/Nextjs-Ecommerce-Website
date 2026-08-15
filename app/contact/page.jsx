"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32">
        {/* Hero Section */}
        <div className="text-center py-20">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Get in Touch with <span className="text-orange-600">QuickCart</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 py-12 mb-16">
          <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-200 text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600 font-medium">+1-234-567-890</p>
            <p className="text-gray-500 text-sm">Mon-Fri 9AM - 6PM EST</p>
          </div>
          <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl border border-orange-200 text-center">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 font-medium">contact@greatstack.dev</p>
            <p className="text-gray-500 text-sm">
              We'll get back within 24 hours
            </p>
          </div>
          <div className="p-8 bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl border border-green-200 text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Office</h3>
            <p className="text-gray-600 font-medium">San Francisco, CA</p>
            <p className="text-gray-500 text-sm">Visit us anytime</p>
          </div>
        </div>

        {/* Contact Form and Info */}
        <div className="grid md:grid-cols-2 gap-12 py-12 mb-16">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 transition resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-medium text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Why Contact Us?
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 text-2xl">💬</span> Support
                </h3>
                <p className="text-gray-600">
                  Have questions about your order or account? Our support team
                  is ready to help you with any concerns.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 text-2xl">🤝</span>{" "}
                  Partnerships
                </h3>
                <p className="text-gray-600">
                  Interested in collaborating with QuickCart? We're always open
                  to partnerships and business opportunities.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 text-2xl">📝</span> Feedback
                </h3>
                <p className="text-gray-600">
                  Your feedback helps us improve. We'd love to hear your
                  suggestions and ideas for making QuickCart better.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 text-2xl">🐛</span> Report
                  Issues
                </h3>
                <p className="text-gray-600">
                  Found a bug or technical issue? Let us know immediately and
                  we'll work to resolve it quickly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-[#E6E9F2] rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                📦 How long does delivery take?
              </h3>
              <p className="text-gray-600">
                Most orders are delivered within 3-5 business days depending on
                your location and the product availability.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                💳 Is my payment secure?
              </h3>
              <p className="text-gray-600">
                Yes! We use industry-standard Stripe encryption to protect all
                payment and personal information.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🔄 What's your return policy?
              </h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee on all products if you're
                not completely satisfied.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                👤 How do I become a seller?
              </h3>
              <p className="text-gray-600">
                Apply through our seller program! Contact us for details on how
                to start selling on QuickCart.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
