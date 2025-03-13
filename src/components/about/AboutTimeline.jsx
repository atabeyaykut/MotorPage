import { motion } from "framer-motion";

const timelineData = [
  {
    year: "1994",
    title: "MotorPage Kuruldu",
    description:
      "MotorPage 1994 yılında motosiklet lastikleri dağıtıcılığı ile başladığı ticari hayatına motosiklet sarf malzemelerini de ekleyerek devam etmiştir.",
    icon: "/icons/foundation.svg",
  },
  {
    year: "2000",
    title: "Piaggio Grubu'nun Ürünlerini Satmaya Başladı",
    description:
      "2000 yılında Piaggio Grubu'nun ürünlerini satarak başladığı motosiklet satışına, 2001 yılında Suzuki markasının motosiklet konusundaki yapılanmasıyla, MotorPage Suzuki markalı motosikletlerin İstanbul Anadolu yakasındaki tek 4S noktası olmuştur.",
    icon: "/icons/piaggio.svg",
  },
  {
    year: "2007",
    title: "MV Agusta Türkiye Temsilcisi Oldu",
    description:
      "2007 yılında ünlü İtalyan egzotik motosiklet üreticisi MV Agusta Türkiye Temsilciliğini aldı.",
    icon: "/icons/mvagusta.svg",
  },
  {
    year: "2010",
    title: "Ducati Türkiye Temsilcisi Oldu",
    description:
      "2010 yılında bir diğer İtalyan motosiklet sektörü öncüsü Ducati markasının temsilciliğini de ekleyerek farklı bir boyutta yoluna devam etmiştir.",
    icon: "/icons/ducati.svg",
  },
  {
    year: "2014",
    title: "Triumph Türkiye Distribütörlüğünü Aldı",
    description:
      "2014 yılında motosiklet sektörünün dünyadaki kurucu markalarından İngiliz Kraliyetinin alametifarikası Triumph motosikletlerinin Türkiye distribütörlüğüne layık görülmüştür.",
    icon: "/icons/triumph.svg",
  },
  {
    year: "2015",
    title: "Depolama ve Servis Alanlarını Hayata Geçirdi",
    description:
      "2015 yılı itibarıyla MotorPage, İstanbul Ataşehir'de toplamda 1400m2'den fazla kullanım alanında hizmet veren iki ayrı teşhir, depolama ve servis alanlarını hayata geçirmiştir.",
    icon: "/icons/service.svg",
  },
];

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex ${isEven ? "flex-row" : "flex-row-reverse"} gap-4`}
    >
      <div className={`flex-1 ${isEven ? "text-right" : "text-left"}`}>
        <div className="space-y-2">
          <span className="text-sm font-semibold text-gray-500">{item.year}</span>
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute h-full w-px bg-gray-200" />
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 bg-white">
          <img src={item.icon} alt={item.title} className="h-6 w-6" />
        </div>
      </div>

      <div className="flex-1" />
    </motion.div>
  );
};

const AboutTimeline = () => {
  return (
    <section className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Kilometre Taşlarımız
        </h2>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutTimeline;
