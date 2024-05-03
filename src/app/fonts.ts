import {
  Inter,
  Sacramento,
  Sedgwick_Ave_Display,
  Creepster,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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

const creepster = Creepster({
  weight: ["400"],
  style: ["normal"],
  preload: true,
  fallback: ["inter"],
  subsets: ["latin"],
});

export { inter, sacramento, segwick, creepster };
