import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    acceptPrivacy: false,
    acceptKVKK: false,
    acceptCommercial: false
  });

  useEffect(() => {
    document.title = "İletişim | MotorPage";
    window.scrollTo({
      top: 80,
      behavior: 'smooth'
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be implemented here
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Contact Form Section */}
      <div className="relative bg-gradient-to-r min-h-screen from-teal-900 to-cyan-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Contact Info */}
            <div>
              <h1 className="text-4xl font-bold mb-6">İLETİŞİM</h1>
              <p className="mb-8 text-gray-100">
                Bizimle iletişime geçmek için formu doldurabilir veya iletişim bilgilerimizi kullanabilirsiniz.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>info@motorpage.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>+90 (212) 123 45 67</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5" />
                  <span>7/24 Destek</span>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white text-gray-900 rounded-lg shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      Adı
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Soyadı
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="acceptPrivacy"
                      name="acceptPrivacy"
                      checked={formData.acceptPrivacy}
                      onChange={handleChange}
                      className="mt-1 mr-2"
                      required
                    />
                    <label htmlFor="acceptPrivacy" className="text-sm">
                      Aydınlatma metnini okudum, anladım ve kabul ediyorum.
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="acceptKVKK"
                      name="acceptKVKK"
                      checked={formData.acceptKVKK}
                      onChange={handleChange}
                      className="mt-1 mr-2"
                      required
                    />
                    <label htmlFor="acceptKVKK" className="text-sm">
                      KVKK metnini okudum, anladım ve kabul ediyorum.
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="acceptCommercial"
                      name="acceptCommercial"
                      checked={formData.acceptCommercial}
                      onChange={handleChange}
                      className="mt-1 mr-2"
                      required
                    />
                    <label htmlFor="acceptCommercial" className="text-sm">
                      Ticari Elektronik İleti İznini okudum, anladım ve kabul ediyorum.
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="w-full h-[700px] relative mt-20">
        <iframe
          src="https://maps.google.com/maps?q=korlas&t=m&z=17&output=embed&iwloc=near"
          title="MotorPage Konum"
          aria-label="MotorPage Konum"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Contact;
