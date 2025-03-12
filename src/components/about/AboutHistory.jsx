import { motion } from "framer-motion";

const AboutHistory = () => {
  return (
    <section className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold md:text-4xl">Tarihçemiz</h2>
        
        <div className="space-y-4 text-gray-600">
          <p>
            MotorPage, 1994 yılında motosiklet lastikleri dağıtıcılığı ile başladığı ticari hayatına motosiklet bayiliği ve sarf malzemeleri satışını da ekleyerek devam etmiştir.
          </p>

          <p>
            2000 yılında Piaggio Grubu'nun ürünlerini satarak başladığı motosiklet satışına, 2001 yılında Suzuki markasının motosiklet konusundaki yapılanmasıyla birlikte, MotorPage Suzuki markalı motosikletlerin İstanbul Anadolu yakasındaki tek 4S noktası olmuştur. Suzuki markalı motosikletlerin Türkiye'de tanıtılması ve satılması konularında üstün gayret gösteren MotorPage, başarılı sonuçlara imza atmış ve Suzuki Türkiye Çözüm Ortağı olarak da görev üstlenmiştir.
          </p>

          <p>
            2007 yılında İtalyan egzotik motosiklet üreticisi MV Agusta Türkiye temsilciliğini üstlenen MotorPage, 2010 yılında İtalya'nın en ünlü motosiklet markalarından biri olan Ducati'nin temsilciliğini de ekleyerek farklı bir boyutta yoluna devam etmiştir.
          </p>

          <p>
            2014 yılında motosiklet sektörünün dünyadaki kurucu markalarından ve İngiliz Kraliyetinin alametifarikası olan Triumph motosikletlerinin Türkiye distribütörlüğüne layık görülmüştür.
          </p>

          <p>
            2015 yılı itibarıyla MotorPage, tam yetkili Türkiye ve KKTC distribütörü olarak yürütmekte olduğu MV Agusta, Ducati ve Triumph motosikletlerinin Türkiye yapılanmasına hız vermiş ve İstanbul Ataşehir'de toplamda 1400 m²'den fazla kullanım alanına sahip iki ayrı teşhir, depolama ve servis alanlarını hayata geçirmiştir.
          </p>

          <p>
            Günümüz itibariyle Ducati, Triumph, Scrambler Ducati, Moto Morini, Italjet, Royal Alloy, Fantic ve Kamax markalarının distribütörlüğünü üstlenerek sektöre değer katan MotorPage, 2023 yılında toplam alanını 2600 m²'ye çıkararak, 11 liftlik servis alanı, Scrambler Ducati Showroom'u ve Ankara'daki 2 yeni mağazası ile büyümeye, gelişmeye ve yenilenmeye devam etmiştir.
          </p>

          <p>
            Türkiye genelinde 10 büyük ilde 13 yetkili satış noktası ve 18 ilde 28 servis ile faaliyet gösteren MotorPage, geniş hizmet ağı ve sektördeki güçlü konumuyla öne çıkmaktadır. Yeni bayilik ve satış sonrası hizmetler alanındaki başvurular değerlendirilerek bayi ve servis ağı genişletilmeye devam etmektedir.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHistory;
