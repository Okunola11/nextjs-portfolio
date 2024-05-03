import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {
  fallback: string;
  imgSrc: string;
};

export function AvatarIcon({ imgSrc, fallback }: Props) {
  return (
    <Avatar>
      <AvatarImage src={imgSrc} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
