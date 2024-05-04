import Link from "next/link";

type Props = {
  text: string;
  className?: string;
  href: string;
  newTab?: string;
};

export default function Button({ text, className, href, newTab }: Props) {
  return (
    <div className={className}>
      <Link
        className="text-purple-500 bg-pink-500 px-5 py-3"
        href={href}
        target={newTab && "_blank"}
      >
        {text}
      </Link>
    </div>
  );
}
