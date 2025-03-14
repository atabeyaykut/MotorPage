import { motion } from "framer-motion";
import { useEffect } from "react";
import { Compass, Target, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const MissionVision = () => {
  useEffect(() => {
    document.title = "Misyon & Vizyon | MotorPage";
  }, []);

  return (
    <>
      <section className="relative min-h-[40vh] bg-[url('https://picsum.photos/2200')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative flex h-full min-h-[40vh] items-center justify-start">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Hakkımızda
            </h1>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2">
                <li className="inline-flex items-center">
                  <Link
                    to="/"
                    className={cn(
                      "inline-flex items-center text-sm font-medium text-white/80",
                      "hover:text-white"
                    )}
                  >
                    Anasayfa
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-white/60">/</span>
                    <span className="text-sm font-medium text-white">
                      Misyon & Vizyon
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Misyon & Vizyon</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Motosiklet tutkunlarına en iyi deneyimi sunmak için çıktığımız bu yolda,
            değerlerimiz ve hedeflerimiz doğrultusunda ilerliyoruz.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold">Misyonumuz</h2>
            </div>
            <div>
              <p className="text-gray-600">
                Türkiye'nin motosiklet sektöründe öncü ve güvenilir bir marka olarak,
                müşterilerimize premium segment motosikletler ve üstün kaliteli hizmet sunmak.
                Her bir müşterimizin ihtiyaçlarını en iyi şekilde anlayarak, onlara en uygun
                çözümleri sunmak ve motosiklet tutkusunu güvenli bir şekilde yaşamalarını sağlamak.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Compass className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold">Vizyonumuz</h2>
            </div>
            <div>
              <p className="text-gray-600">
                Motosiklet sektöründe Türkiye'nin en saygın ve tercih edilen markası olmak.
                Premium segment motosikletlerde pazar liderliğini sürdürürken, müşteri memnuniyetinde
                de sektörün standardını belirlemek. Sürdürülebilir büyüme ile hem çalışanlarımız
                hem de iş ortaklarımız için değer yaratmaya devam etmek.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold">Değerlerimiz</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Müşteri Odaklılık",
              description: "Müşterilerimizin ihtiyaç ve beklentilerini en iyi şekilde anlayarak, onlara özel çözümler sunuyoruz."
            },
            {
              title: "Güvenilirlik",
              description: "Her zaman dürüst, şeffaf ve güvenilir bir iş ortağı olarak hareket ediyoruz."
            },
            {
              title: "Yenilikçilik",
              description: "Sektördeki en son gelişmeleri takip ederek, müşterilerimize en iyi ürün ve hizmetleri sunuyoruz."
            },
            {
              title: "Kalite",
              description: "Premium segment motosikletler ve üstün kaliteli hizmet sunarak müşteri memnuniyetini en üst düzeyde tutuyoruz."
            },
            {
              title: "Sürdürülebilirlik",
              description: "Çevreye ve topluma karşı sorumluluklarımızın bilinciyle hareket ediyor, sürdürülebilir bir gelecek için çalışıyoruz."
            },
            {
              title: "Tutkuyla Çalışma",
              description: "Motosiklet tutkumuzu işimize yansıtıyor, her müşterimize bu tutkuyu yaşatmak için çalışıyoruz."
            }
          ].map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default MissionVision;
