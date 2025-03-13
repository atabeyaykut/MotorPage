import { motion } from "framer-motion";

const AboutWelcome = () => {
  return (
    <section className="container py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative aspect-square overflow-hidden rounded-lg"
        >
          <img
            src="/images/about-welcome.jpg"
            alt="MotorPage'e Hoşgeldiniz"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            MOTORPAGE'E HOŞGELDİNİZ
          </h2>
          
          <div className="space-y-4 text-gray-600">
            <h5 className="text-lg font-semibold text-black">
              Her zaman yenilikçi, her zaman kaliteli ve her zaman daha iyi. 20 yılı aşkın bir süredir…
            </h5>
            
            <p>
              İnternet sitemizi ziyaret ederek bize vakit ayırdığınız için öncelikle teşekkür etmek isteriz. 
              Amacımız siz değerli motosiklet tutkunlarına hem sıfır, hem de ikinci elde satış ve satış sonrası 
              hizmetler noktasında elimizden geleni değil, üzerimize düşeni yapmaktır.
            </p>

            <p className="italic">
              — KORAY EYİLİK
              <br />
              <span className="text-sm">MotorPage Yönetim Kurulu Başkanı</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutWelcome;
