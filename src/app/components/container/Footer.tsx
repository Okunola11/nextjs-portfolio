import { footerSection } from "@/app/portfolio";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  if (footerSection.display) {
    return (
      <footer className="border-t p-4 grid place-content-center text-white bg-gradient-to-tr from-purple-500 to-cyan-500">
        <p>Designed and Crafted by Okunola Abdulwasiu</p>
        <p className="text-center  text-purple-300">&copy; {currentYear}</p>
      </footer>
    );
  }
  return null;
}
