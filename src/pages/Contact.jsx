import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    privacyConsent: false,
    kvkkConsent: false,
    commercialConsent: false
  }); 

  const [errors, setErrors] = useState({});

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
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = "";
    if (!value.trim() && name !== 'phone') {
      error = "Bu alan zorunludur.";
    } else if (name === 'email' && value.trim() && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = "Geçerli bir e-posta adresi giriniz.";
    }
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "İsim alanı zorunludur";
    if (!formData.lastName) newErrors.lastName = "Soyisim alanı zorunludur";
    if (!formData.email) newErrors.email = "E-posta alanı zorunludur";
    if (!formData.subject) newErrors.subject = "Konu alanı zorunludur";
    if (!formData.message) newErrors.message = "Mesaj alanı zorunludur";
    if (!formData.privacyConsent) newErrors.privacyConsent = "Aydınlatma metnini onaylamanız gerekmektedir";
    if (!formData.kvkkConsent) newErrors.kvkkConsent = "KVKK metnini onaylamanız gerekmektedir";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <div className="bg-gradient-to-r from-blue-900 to-teal-600 min-w-full container h-screen px-4 py-8 mb-20"> {/* Add padding-bottom */}
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center justify-between gap-12">
            {/* Left Side - Contact Info */}
            <div className="text-white flex-1 space-y-8">
              <h1 className="text-4xl font-bold">İletişim</h1>
              <p className="text-lg">
                Bizimle iletişime geçmek için aşağıdaki iletişim bilgilerini kullanabilir veya formu doldurabilirsiniz.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6" />
                  <span>info@korlas.com.tr</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6" />
                  <span>+90 216 123 45 67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageSquare className="w-6 h-6" />
                  <span>Acıbadem, Tekin Sk. No:4, 34718 Kadıköy/İstanbul</span>
                </div>
              </div>

              {/* Map on mobile */}
              <div className="md:hidden w-full h-[300px] mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6504900330166!2d29.006695776332547!3d40.98813012349365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab8679bfb3d31%3A0x7d75715e081dfa5c!2sAcıbadem%2C%20Tekin%20Sk.%20No%3A4%2C%2034718%20Kadık%C4%B1k%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1701101486499!5m2!1str!2str"
                  className="w-full h-full rounded-lg border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white flex-1 rounded-lg shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Adı <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.firstName ? 'border-red-500' : ''}`}
                    />
                    {errors.firstName && <span className="text-red-500 text-sm mt-1 block">{errors.firstName}</span>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Soyadı <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.lastName ? 'border-red-500' : ''}`}
                    />
                    {errors.lastName && <span className="text-red-500 text-sm mt-1 block">{errors.lastName}</span>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Konu <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.subject ? 'border-red-500' : ''}`}
                  />
                  {errors.subject && <span className="text-red-500 text-sm mt-1 block">{errors.subject}</span>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows="4"
                    className={`w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? 'border-red-500' : ''}`}
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-sm mt-1 block">{errors.message}</span>}
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacyConsent"
                      name="privacyConsent"
                      checked={formData.privacyConsent}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="mt-1 mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="privacyConsent" className="text-sm text-gray-700">
                      <Link to="/iletisim-formu-aydinlatma-metni" className="text-blue-600 hover:text-blue-700 underline" target="_blank">
                        Aydınlatma metnini
                      </Link>
                      {' '}okudum ve onaylıyorum <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {errors.privacyConsent && <span className="text-red-500 text-sm block">{errors.privacyConsent}</span>}

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="kvkkConsent"
                      name="kvkkConsent"
                      checked={formData.kvkkConsent}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="mt-1 mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="kvkkConsent" className="text-sm text-gray-700">
                      <Link to="/kvkk" className="text-blue-600 hover:text-blue-700 underline" target="_blank">
                        KVKK metnini
                      </Link>
                      {' '}okudum ve onaylıyorum <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {errors.kvkkConsent && <span className="text-red-500 text-sm block">{errors.kvkkConsent}</span>}

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="commercialConsent"
                      name="commercialConsent"
                      checked={formData.commercialConsent}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="mt-1 mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="commercialConsent" className="text-sm text-gray-700">
                      <Link to="/ticari-elektronik-ileti-izni" className="text-blue-600 hover:text-blue-700 underline" target="_blank">
                        Ticari Elektronik İleti İzni
                      </Link>
                      'ni okudum ve onaylıyorum <span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map on desktop */}
      <div className="hidden md:block w-full h-[600px] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6504900330166!2d29.006695776332547!3d40.98813012349365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab8679bfb3d31%3A0x7d75715e081dfa5c!2sAcıbadem%2C%20Tekin%20Sk.%20No%3A4%2C%2034718%20Kadık%C4%B1k%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1701101486499!5m2!1str!2str"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </motion.div>
  );
};

export default Contact;
