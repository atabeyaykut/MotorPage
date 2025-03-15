import { motion } from "framer-motion";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "İletişim Formu Aydınlatma Metni | MotorPage";
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
            İLETİŞİM FORMU AYDINLATMA METNİ
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="prose max-w-none">
          <p>Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanununun <strong>("Kanun")</strong> 10. maddesi ile Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ kapsamında veri sorumlusu sıfatıyla <strong>Korlas Otomotiv Sanayi ve Ticaret Anonim Şirketi ("Şirket") </strong>tarafından hazırlanmıştır.</p>
          
          <p>Şirket tarafından, korlas.com.tr web sitesi ziyaretçilerine/iletişim formu dolduran kişilere ait kimlik ve iletişim kategorilerindeki kişisel veriler korlas.com.tr web sitesisinde bulunan iletişim formu vasıtasıyla toplanmakta olup; İletişim Faaliyetlerinin Yürütülmesi amaçlarıyla işlenmektedir.</p>
          
          <p><strong>İŞLENEN KİŞİSEL VERİLERİNİZ;</strong></p>
          <ol>
            <li>Ad-Soyad,</li>
            <li>E-Posta Adresi,</li>
            <li>Cep Telefonu Numarası ve iletişim formu vasıtası ile tarafımıza ileteceğiniz diğer kişisel verileriniz olup</li>
          </ol>
          
          <p>Söz konusu kişisel veriler, KVKK m.5/2/f maddesinde yazılı hukuka uygunluk sebeplerine dayanarak otomatik ve kısmen yollarla işlenmekte olup söz konusu verileriniz herhangi bir üçüncü kişi ile paylaşılmayacaktır.</p>
          
          <p><strong>İLGİLİ KİŞİ OLARAK HAKLARINIZ NELERDİR?</strong></p>
          <p>KVKK'nın ilgili kişinin haklarını düzenleyen 11'inci maddesi kapsamındaki;</p>
          <ol>
            <li>Kişisel verilerinin işlenip işlenmediğini öğrenme,</li>
            <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
            <li>Kişisel verilerinin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
            <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
            <li>Kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
            <li>Kişisel verilerin düzeltilmesi, silinmesi veya yok edilmesine ilişkin işlemlerin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
            <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme,</li>
          </ol>
          
          <p>Başvurularınızı, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğe uygun olarak, Şirket'e iletebilirsiniz.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
