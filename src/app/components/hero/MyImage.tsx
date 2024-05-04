import Image from "next/image";

export default function MyImage() {
  return (
    <div className="grid place-content-center">
      <div className="grid place-content-center ">
        <Image
          className="rounded-xl"
          src="/images/okunola.png"
          alt="Okunola Abdulwasiu"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}
// from-purple-500 to bg-cyan-200
// from-purple-500 to bg-pink-200
// border border-white rounded-tr-3xl rounded-bl-3xl w-[250px] h-[250px] bg-gradient-to-br from-purple-500 to bg-cyan-200 shadow-3xl
