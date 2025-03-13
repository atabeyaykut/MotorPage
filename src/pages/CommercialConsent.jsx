import { motion } from "framer-motion";
import { useEffect } from "react";

const CommercialConsent = () => {
  useEffect(() => {
    document.title = "Ticari Elektronik İleti İzni | MotorPage";
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="relative h-[200px] bg-gradient-to-r from-teal-900 to-cyan-600">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            Ticari Elektronik İleti İzni
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed">
            TİCARİ ELEKTRONİK İLETİ İZNİ Tarafıma Korlas Otomotiv Sanayi ve Ticaret Anonim Şirketi tarafından ticari elektronik ileti gönderilmesine ilişkin gerekli aydınlatma yapıldı. Tarafıma ticari elektronik ileti gönderilebileceğini beyan ediyorum. Bu kapsamda tercih ettiğim kanallarla tarafıma ticari elektronik ileti gönderilmesine açık rıza ve onay veriyorum.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CommercialConsent;
