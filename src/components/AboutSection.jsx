import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="bg-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/800/600?random=10"
              alt="Motosiklet dünyasındaki yolculuğumuz"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="space-y-6 h-full flex flex-col justify-center items-end">
            <h2
              id="about-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl "
            >
              1994'TEN BERİ MOTOSİKLET DÜNYASINDA EN YÜKSEK KALİTE
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Hayatınızın herhangi bir döneminde motosikletle ilgilendiyseniz bizi zaten tanıyorsunuz.
                1994 yılında motosiklet tutkunları alanında profesyonel anlayışımızla başladığımız ticari
                serüvenimize Ducati, Triumph, Royal Alloy, Fanatic, Moto Morini ve İtaljet markalarının
                distribütörlüğü ile devam ediyoruz.
              </p>
              <p>
                2023 yılının son çeyreğinde açtığımız Watergarden'da bulunan merkez Showroom hacmini 2600m2
                ye çıkardık. Hem servis, hem showroom, hem de çalışma alanlarımız genişletildi. A+ Hizmet
                verme döneminde büyüme hedefimize kararlılıkla yürüyerek müşterilerimize yüksek standartlarda
                hizmet verdiğimiz bir noktaya doğru emin adımlarla ilerliyoruz.
              </p>
            </div>
            <div className="pt-4 ">
              <Link
                to="/kurumsal/hakkimizda"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                aria-label="Hakkımızda sayfasına git"
              >
                HAKKIMIZDA
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
