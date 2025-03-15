import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "@/lib/emailjs";

const Contact = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = "İletişim | MotorPage";
    window.scrollTo({
      top: 80,
      behavior: 'smooth'
    });
  }, []);

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

  const mutation = useMutation({
    mutationFn: async (data) => {
      return emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `${data.firstName} ${data.lastName}`,
          from_email: data.email,
          phone: data.phone || 'Belirtilmedi',
          subject: data.subject,
          message: data.message
        },
        EMAILJS_PUBLIC_KEY
      );
    },
    onSuccess: () => {
      toast.success("Mesajınız başarıyla gönderildi!");
      reset();
    },
    onError: (error) => {
      console.error('EmailJS Error:', error);
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  });

  const onSubmit = (data) => {
    if (!data.privacyConsent) {
      toast.error("Aydınlatma metnini onaylamanız gerekmektedir");
      return;
    }
    if (!data.kvkkConsent) {
      toast.error("KVKK metnini onaylamanız gerekmektedir");
      return;
    }
    if (!data.commercialConsent) {
      toast.error("Ticari Elektronik İleti İzni onaylamanız gerekmektedir");
      return;
    }
    mutation.mutate(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <div className="bg-gradient-to-r from-blue-900 to-teal-600 min-w-full container h-auto min-h-screen px-4 py-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-12">
            {/* Left Side - Contact Info */}
            <div className="text-white w-full lg:flex-1 space-y-6 lg:space-y-8">
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
              <div className="lg:hidden w-full h-[300px] mt-8">
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
            <div className="bg-white w-full lg:flex-1 rounded-lg shadow-xl p-4 sm:p-6 lg:p-8">
              <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Adı <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      {...register("firstName", { required: "İsim alanı zorunludur" })}
                      className={`w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.firstName ? 'border-red-500' : ''}`}
                    />
                    {errors.firstName && <span className="text-red-500 text-sm mt-1 block">{errors.firstName.message}</span>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Soyadı <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      {...register("lastName", { required: "Soyisim alanı zorunludur" })}
                      className={`w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.lastName ? 'border-red-500' : ''}`}
                    />
                    {errors.lastName && <span className="text-red-500 text-sm mt-1 block">{errors.lastName.message}</span>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "E-posta alanı zorunludur",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Geçerli bir e-posta adresi giriniz"
                      }
                    })}
                    className={`w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email.message}</span>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
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
                    {...register("subject", { required: "Konu alanı zorunludur" })}
                    className={`w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.subject ? 'border-red-500' : ''}`}
                  />
                  {errors.subject && <span className="text-red-500 text-sm mt-1 block">{errors.subject.message}</span>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    {...register("message", { required: "Mesaj alanı zorunludur" })}
                    rows="4"
                    className={`w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? 'border-red-500' : ''}`}
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-sm mt-1 block">{errors.message.message}</span>}
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacyConsent"
                      {...register("privacyConsent")}
                      className="mt-1"
                    />
                    <label htmlFor="privacyConsent" className="ml-2 text-sm text-gray-600">
                      <Link to="/iletisim-formu-aydinlatma-metni" className="text-blue-600 hover:underline" target="_blank">
                        İletişim Formu Aydınlatma Metni
                      </Link>'ni okudum ve onaylıyorum. <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="kvkkConsent"
                      {...register("kvkkConsent")}
                      className="mt-1"
                    />
                    <label htmlFor="kvkkConsent" className="ml-2 text-sm text-gray-600">
                      <Link to="/kvkk" className="text-blue-600 hover:underline" target="_blank">
                        KVKK Aydınlatma Metni
                      </Link>'ni okudum ve onaylıyorum. <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="commercialConsent"
                      {...register("commercialConsent")}
                      className="mt-1"
                    />
                    <label htmlFor="commercialConsent" className="ml-2 text-sm text-gray-600">
                      <Link to="/ticari-elektronik-ileti-izni" className="text-blue-600 hover:underline" target="_blank">
                        Ticari Elektronik İleti İzni
                      </Link>'ni okudum ve onaylıyorum. <span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className={`w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 ${mutation.isPending ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                  {mutation.isPending ? 'Gönderiliyor...' : 'Gönder'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map on desktop */}
      <div className="hidden lg:block w-full h-[600px] ">
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
