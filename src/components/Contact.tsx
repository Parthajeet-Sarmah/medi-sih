import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-[#F5F5DC] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#556B2F] mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of these channels.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-[#556B2F] mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#556B2F]">Email Us</h3>
                <p className="text-gray-600">support@healthcare.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-[#556B2F] mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#556B2F]">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-[#556B2F] mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#556B2F]">Visit Us</h3>
                <p className="text-gray-600">123 Healthcare Ave, Medical District</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[#556B2F]"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[#556B2F]"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[#556B2F]"
              ></textarea>
            </div>
            <button className="w-full bg-[#556B2F] text-[#F5F5DC] px-6 py-3 rounded-md hover:bg-[#6B8E23] transition-colors duration-200">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}