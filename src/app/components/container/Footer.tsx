import { footerSection } from "@/app/portfolio";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  if (footerSection.display) {
    return (
      <footer className="border-t p-4 grid place-content-center bg-gradient-to-tr from-purple-500 to-cyan-500">
        <p className="font-bold text-slate-950">
          Crafted by Okunola Abdulwasiu
        </p>
        <p className="text-center text-stone-900">&copy; {currentYear}</p>
      </footer>
    );
  }
  return null;
}
