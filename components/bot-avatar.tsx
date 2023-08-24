import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src="/aizz-logo.png" className="p-1" />
    </Avatar>
  );
};

export default BotAvatar;
