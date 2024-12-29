import { Sacramento, Sedgwick_Ave_Display, Montserrat } from "next/font/google";

const sacramento = Sacramento({
  subsets: ["latin-ext"],
  weight: ["400"],
  style: ["normal"],
});

const segwick = Sedgwick_Ave_Display({
  weight: ["400"],
  preload: true,
  fallback: ["inter"],
  subsets: ["latin"],
});

const montserrat = Montserrat({ subsets: ["cyrillic-ext"] });

export { sacramento, segwick, montserrat };
