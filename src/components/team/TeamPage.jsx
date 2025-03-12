import TeamMember from "./TeamMember";

const teamMembers = [
  {
    name: "Ahmet Yılmaz",
    profession: "Motosiklet Uzmanı",
    image: "https://picsum.photos/200",
  },
  {
    name: "Ayşe Demir",
    profession: "Satış Danışmanı",
    image: "https://picsum.photos/200",
  },
  {
    name: "Mehmet Kaya",
    profession: "Teknik Servis Uzmanı",
    image: "https://picsum.photos/200",
  },
  {
    name: "Zeynep Şahin",
    profession: "Müşteri İlişkileri",
    image: "https://picsum.photos/200",
  },
  {
    name: "Can Öztürk",
    profession: "Servis Yöneticisi",
    image: "https://picsum.photos/200",
  },
  {
    name: "Elif Yıldız",
    profession: "Pazarlama Uzmanı",
    image: "https://picsum.photos/200",
  },
  {
    name: "Burak Aydın",
    profession: "Yedek Parça Uzmanı",
    image: "https://picsum.photos/200",
  },
  {
    name: "Selin Arslan",
    profession: "Finans Yöneticisi",
    image: "https://picsum.photos/200",
  },
  {
    name: "Emre Çelik",
    profession: "Test Sürüş Uzmanı",
    image: "https://picsum.photos/200",
  }
];

const TeamPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Ekibimizle Tanışın</h1>
      </div>
      <div className="flex flex-wrap gap-x-[10%] gap-y-16 justify-items-center justify-center items-center ">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            profession={member.profession}
            image={member.image}
          />
        ))}
      </div>
    </div >
  );
};

export default TeamPage;
