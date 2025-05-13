import { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

function Gallery() {
  const { t } = useTranslation();
  const [items, setItems] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const updatedItems = [
      {
        img: `${import.meta.env.BASE_URL}g1.jpg`,
        text: t("gallery.cardtext1"),
        tooltip: t("gallery.tooltip1"),
      },
      {
        img: `${import.meta.env.BASE_URL}g2.jpg`,
        text: t("gallery.cardtext2"),
        tooltip: t("gallery.tooltip2"),
      },
      {
        img: `${import.meta.env.BASE_URL}g3.jpg`,
        text: t("gallery.cardtext3"),
        tooltip: t("gallery.tooltip3"),
      },
      {
        img: `${import.meta.env.BASE_URL}g4.jpg`,
        text: t("gallery.cardtext4"),
        tooltip: t("gallery.tooltip4"),
      },
      {
        img: `${import.meta.env.BASE_URL}g5.jpg`,
        text: t("gallery.cardtext5"),
        tooltip: t("gallery.tooltip5"),
      },
      {
        img: `${import.meta.env.BASE_URL}g6.jpg`,
        text: t("gallery.cardtext6"),
        tooltip: t("gallery.tooltip6"),
      },
      {
        img: `${import.meta.env.BASE_URL}g7.jpg`,
        text: t("gallery.cardtext7"),
        tooltip: t("gallery.tooltip6"),
      },
      {
        img: `${import.meta.env.BASE_URL}g8.jpg`,
        text: t("gallery.cardtext8"),
        tooltip: t("gallery.tooltip6"),
      },
      {
        img: `${import.meta.env.BASE_URL}g9.jpg`,
        text: t("gallery.cardtext9"),
        tooltip: t("gallery.tooltip6"),
      },
    ];

    setItems(updatedItems);
  }, [t]);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Función para hacer el carrusel infinito
  const handleScroll = (direction) => {
    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (direction === "right") {
      if (container.scrollLeft + 300 >= maxScroll) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 300;
      }
    } else if (direction === "left") {
      if (container.scrollLeft <= 0) {
        container.scrollLeft = maxScroll;
      } else {
        container.scrollLeft -= 300;
      }
    }
  };

  return (
    <div className="py-16 bg-[#F2F0E4]">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold">{t("gallery.title")}</h2>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Botón Izquierda */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 z-10 bg-slate-800 p-2 rounded-full hover:bg-slate-700"
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>

        {/* Contenedor Scrollable */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto px-4 sm:px-10 py-4 scrollbar-hide scroll-smooth snap-x"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="snap-start min-w-full sm:min-w-[300px] sm:max-w-[320px] md:min-w-[340px] md:max-w-[360px] lg:min-w-[380px] lg:max-w-[400px] h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px] bg-[#6c6f5a] rounded-lg shadow-md p-4 text-center relative group hover:shadow-xl transition overflow-hidden flex-shrink-0"
            >
              {/* Contenido visible normalmente */}
              <div className="group-hover:opacity-0 transition-opacity duration-300">
                <img
                  src={item.img}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-full md:h-36 lg:h-52 object-contain mb-2 rounded-md"
                />
                <p className="text-white text-sm md:text-base">{item.text}</p>
              </div>

              {/* Overlay al hacer hover */}
              <div className="absolute inset-0 bg-[#6c6f5a] bg-opacity-90 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <p className="text-white text-sm md:text-base">{item.tooltip}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Derecha */}
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 z-10 bg-slate-800 p-2 rounded-full hover:bg-slate-700"
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}

export default Gallery;
