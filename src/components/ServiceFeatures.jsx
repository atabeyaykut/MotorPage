import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { cn } from "@/lib/utils";
import NewsSlider from './NewsSlider';

const features = [
  {
    id: 1,
    title: "Online Randevu",
    icon: "/icons/calendar.svg",
    description: "DARIC olarak siz değerli müşterilerimize sadakat programımız sayesinde iskontolar yapıyoruz. Olağan bakım süresinde tespit ettiğimiz arızaları da hizmetleri önce sizden onay alarak onarıyoruz."
  },
  {
    id: 2,
    title: "İyi Niyet Garantisi",
    icon: "/icons/guarantee.svg",
    description: "Mekaniklerimiz, distribütörü olduğumuz tüm markalar tarafından da denetimden geçiyor. Her yıl sertifikalarını yenileyerek güncel kalıyorlar."
  },
  {
    id: 3,
    title: "Elektronik Hasar Kontrolü",
    icon: "/icons/diagnostic.svg",
    description: "En son teknoloji diagnostik cihazlarımızla elektronik hasar kontrolü yapıyoruz."
  },
  {
    id: 4,
    title: "En Deneyimli Servis",
    icon: "/icons/service.svg",
    description: "Uzman servis ekibimizle en kaliteli hizmeti sunuyoruz."
  },
  {
    id: 5,
    title: "Sertifikalı Mekanikler",
    icon: "/icons/certificate.svg",
    description: "Tüm mekaniklerimiz sertifikalı ve sürekli eğitimlerle kendilerini geliştiriyor."
  },
  {
    id: 6,
    title: "Ücretsiz Motosiklet Yıkama",
    icon: "/icons/wash.svg",
    description: "Her servis sonrası ücretsiz motosiklet yıkama hizmeti sunuyoruz."
  }
];

const FeatureCircle = React.memo(({ feature, isActive, onHover, onLeave }) => (
  <div
    className={cn(
      "w-28 h-28 bg-white rounded-full flex flex-col items-center justify-center p-3",
      "cursor-pointer",
      "hover:shadow-lg hover:shadow-white/20 hover:bg-opacity-100",
      "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1C1F26]",
      isActive ? "bg-opacity-100 scale-110" : "bg-opacity-90"
    )}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    onFocus={onHover}
    onBlur={onLeave}
    tabIndex={0}
    role="button"
    aria-pressed={isActive}
    aria-label={`${feature.title} servis özelliği`}
  >
    <div className="w-10 h-10 mb-2 flex items-center justify-center">
      <img
        src={feature.icon}
        alt=""
        className="w-full h-full object-contain"
        aria-hidden="true"
      />
    </div>
    <p className="text-xs text-center font-medium leading-tight text-[#1C1F26]">
      {feature.title}
    </p>
  </div>
));

FeatureCircle.displayName = 'FeatureCircle';

const ServiceFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [description, setDescription] = useState(features[0].description);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  }, []);

  const handleFeatureChange = useCallback((feature) => {
    setActiveFeature(feature.id);
    setDescription(feature.description);
  }, []);

  const handleFeatureReset = useCallback(() => {
    setActiveFeature(null);
    setDescription(features[0].description);
  }, []);

  const calculatePosition = useCallback((index, totalItems) => {
    const angle = (index * (360 / totalItems) - 90) * (Math.PI / 180);
    const radius = 300;
    return {
      left: `calc(50% + ${Math.cos(angle) * radius}px)`,
      top: `calc(50% + ${Math.sin(angle) * radius}px)`,
    };
  }, []);

  const featureElements = useMemo(() => (
    features.map((feature, index) => {
      const position = calculatePosition(index, features.length);
      return (
        <div
          key={feature.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={position}
        >
          <FeatureCircle
            feature={feature}
            isActive={activeFeature === feature.id}
            onHover={() => handleFeatureChange(feature)}
            onLeave={handleFeatureReset}
          />
        </div>
      );
    })
  ), [activeFeature, handleFeatureChange, handleFeatureReset, calculatePosition]);

  return (
    <>
      <section
        className="py-20 relative max-h-screen overflow-hidden"
        aria-label="Servis Özellikleri"
      >
        <div className="max-w-full mx-auto">
          <div
            className="relative bottom-40 w-full aspect-[16/9] flex items-center justify-center"
            onMouseMove={handleMouseMove}
          >
            {/* Background image with gradient overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
              <img
                src="https://picsum.photos/id/133/1800/2200"
                alt=""
                className="w-[120%] h-[120%] object-cover hover:scale-110"
                style={{
                  transform: `translate(${(mousePosition.x - 0.5) * -100}px, ${(mousePosition.y - 0.5) * -100}px)`,
                  transformOrigin: 'center',

                }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#1C1F26] via-[#1C1F26]/80 to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Center text */}
            <div
              className="relative z-10 text-center max-w-2xl mx-auto px-4"
              role="region"
              aria-live="polite"
            >
              <p className="text-white text-lg">
                {description}
              </p>
            </div>

            {/* Feature circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              {featureElements}
            </div>
          </div>
        </div>
      </section>
      <NewsSlider />
    </>
  );
};

export default React.memo(ServiceFeatures);
