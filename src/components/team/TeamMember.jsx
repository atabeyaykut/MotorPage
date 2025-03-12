import { cn } from "@/lib/utils";

const TeamMember = ({ name, profession, image }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-full aspect-square overflow-hidden rounded-full border-4 border-primary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full border-4 border-transparent "
        />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{profession}</p>
      </div>
    </div>
  );
};

export default TeamMember;
