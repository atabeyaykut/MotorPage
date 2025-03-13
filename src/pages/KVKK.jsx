import { motion } from "framer-motion";
import { useEffect } from "react";

const KVKK = () => {
  useEffect(() => {
    document.title = "KVKK | MotorPage";
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
            KİŞİSEL VERİLERİN KORUNMASI KANUNU
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="prose max-w-none">
          <h2>1. VERİ SORUMLUSUNUN KİMLİĞİ</h2>
          <p>KORLAS OTOMOTİV SANAYİ VE TİCARET A.Ş. (Şirket) kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekte, bu verilerin güvenliği için en üst düzeyde güvenlik tedbirlerini almaktadır. Bu bilinçle, Şirket ürün ve hizmetlerimizden faydalanan kişiler dahil, Şirket ile ilişkili tüm şahıslara ait her türlü kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVK Kanunu")'na uygun olarak işlenerek, muhafaza edilmesine büyük önem göstermektedir. Bu metnin amacı, Veri Sorumlusu sıfatına haiz şirketin KVK Kanunu'nun 10.maddesi uyarınca kişisel verilerinizin alınma şekilleri, işlenme amaçları, paylaşılan kişiler, hukuki nedenleri ve haklarınız konularında sizi en şeffaf şekilde kullanıcıyı bilgilendirmektir.</p>

          <h2>2. Kişisel Verilerin Toplanması, İşlenmesi ve İşleme Amaçları</h2>
          <p>Kişisel verileriniz, Şirketimiz tarafından verilen hizmet, ürün ya da ticari faaliyete bağlı olarak değişkenlik gösterebilmekle; otomatik ya da otomatik olmayan yöntemlerle, ofisler, şubeler, bayiler, çağrı merkezi, internet sitesi, sosyal medya mecraları, mobil uygulamalar ve benzeri vasıtalarla sözlü, yazılı ya da elektronik olarak toplanabilecektir. Şirketimizin ürün ve hizmetlerinden yararlandığınız müddetçe oluşturularak ve güncellenerek kişisel verileriniz işlenebilecektir.</p>

          <p>Ayrıca, Şirket hizmetlerini kullanmak niyetiyle çağrı merkezimizi veya internet sayfamızı kullandığınızda, Şirketimizden alış-veriş yaptığınızda, Şirketimizi veya internet sitemizi ziyaret ettiğinizde, Şirketimizin düzenlediği organizasyonlara katıldığınızda kişisel verileriniz işlenebilecektir.</p>

          <h2>3. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
          <p>Toplanan kişisel verileriniz; Şirketimiz tarafından sunulan ürün ve hizmetlerden sizleri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması, Şirketimiz tarafından sunulan ürün ve hizmetlerin sizlerin beğeni, kullanım alışkanlıkları ve ihtiyaçlarına göre özelleştirilerek sizlere önerilmesi, Şirketimizin ve Şirketimizle iş ilişkisi içerisinde olan kişilerin hukuki ve ticari güvenliğinin temini amaçlarıyla iş ortaklarımıza, tedarikçilerimize, hissedarlarımıza, kanunen yetkili kamu kurumları ve özel kişilere, KVK Kanunu'nun 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.</p>

          <h2>4. Kişisel Veri Sahibinin KVK Kanunu'nun 11. Maddesinde Sayılan Hakları</h2>
          <p>Kişisel veri sahipleri olarak, haklarınıza ilişkin taleplerinizi aşağıda düzenlenen yöntemlerle Şirketimize iletmeniz durumunda Şirketimiz talebin niteliğine göre talebi en geç otuz gün içinde ücretsiz olarak sonuçlandıracaktır. Ancak, Kişisel Verileri Koruma Kurulunca bir ücret öngörülmesi halinde, Şirketimiz tarafından belirlenen tarifedeki ücret alınacaktır.</p>

          <ul>
            <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
            <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
            <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
            <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
            <li>KVK Kanunu'nun ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
            <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme haklarına sahipsiniz.</li>
          </ul>

          <p>KVK Kanunu'nun 13. maddesinin 1. fıkrası gereğince, yukarıda belirtilen haklarınızı kullanmak ile ilgili talebinizi, yazılı olarak veya Kişisel Verileri Koruma Kurulu'nun belirlediği diğer yöntemlerle Şirketimize iletebilirsiniz.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default KVKK;
