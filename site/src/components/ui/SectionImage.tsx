import image1 from "../../assets/fundo-riscado.jpg";
import image2 from "../../assets/website-wallpaper.jpg";
import image3 from "../../assets/fundo-amassado-virado.jpg";

const sectionImagePath = {
  image1: image1,
  image2: image2,
  image3: image3,
}

export function SectionImage({ image }: { image: string }) {
  
  return (
    <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${sectionImagePath[image]})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.30,
          mixBlendMode: "multiply",
        }}
      >   
    </div>
  );
}
