import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-1 rounded-full">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of these channels.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { icon: Mail, title: 'Email Us', content: 'support@healthcare.com' },
              { icon: Phone, title: 'Call Us', content: '+1 (555) 123-4567' },
              { icon: MapPin, title: 'Visit Us', content: '123 Healthcare Ave, Medical District' }
            ].map((item) => (
              <div key={item.title} className="card flex items-start space-x-4">
                <div className="p-3 bg-teal-50 rounded-lg">
                  <item.icon className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
          <form className="card space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="input-field"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="input-field"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="input-field"
              ></textarea>
            </div>
            <button className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}