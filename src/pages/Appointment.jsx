import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = ({ icon: Icon, title, content, href, target }) => (
  <Card className="flex-1">
    <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
      <div className="rounded-full bg-primary/10 p-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-semibold">{title}</h3>
      {href ? (
        <a 
          href={href} 
          target={target}
          className="text-center text-muted-foreground hover:text-primary transition-colors"
        >
          {content}
        </a>
      ) : (
        <p className="text-center text-muted-foreground">{content}</p>
      )}
    </CardContent>
  </Card>
);

const Appointment = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">İletişim Bilgileri</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <ContactInfo
          icon={Phone}
          title="Telefon"
          content="+90 (212) 123 45 67"
          href="tel:+902121234567"
        />
        <ContactInfo
          icon={Mail}
          title="E-posta"
          content="info@daric.com.tr"
          href="mailto:info@daric.com.tr"
        />
        <ContactInfo
          icon={MapPin}
          title="Adres"
          content="Mahmutbey Mah. Taşocağı Yolu Cad. Balance Güneşli No:19/6 Bağcılar/İstanbul"
          href="https://maps.google.com/?q=Mahmutbey+Mah.+Taşocağı+Yolu+Cad.+Balance+Güneşli+No:19/6+Bağcılar/İstanbul"
          target="_blank"
        />
        <ContactInfo
          icon={Clock}
          title="Çalışma Saatleri"
          content="Pazartesi - Cumartesi: 09:00 - 18:30"
        />
      </div>

      <div className="rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.137650605637!2d28.822843776117374!3d41.039751571291946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4e6796d5833%3A0xb993a57a8f91c83f!2sBalance%20G%C3%BCne%C5%9Fli!5e0!3m2!1str!2str!4v1690235283095!5m2!1str!2str"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Daric Motorsiklet Konumu"
        />
      </div>
    </div>
  );
};

export default Appointment;
