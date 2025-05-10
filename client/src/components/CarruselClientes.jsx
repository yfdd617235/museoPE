import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useTranslation } from 'react-i18next';

function CarruselClientes() {

    const { t } = useTranslation();
    const [items, setItems] = useState([]); // Inicialización correcta del estado

    // Se actualizan los items solo cuando las traducciones estén listas
    useEffect(() => {
        const updatedItems = [
            {
                img: `${import.meta.env.BASE_URL}calidad.png`,
                text: t('ourcustomers.carruseltext1'),
            },
            {
                img: `${import.meta.env.BASE_URL}cartelera.png`,
                text: t('ourcustomers.carruseltext2'),
            },
            {
                img: `${import.meta.env.BASE_URL}persona.png`,
                text: t('ourcustomers.carruseltext3'),
            },
            {
                img: `${import.meta.env.BASE_URL}team.png`,
                text: t('ourcustomers.carruseltext4'),
            },
        ];

        if (updatedItems.every(item => item.text)) {  // Aseguramos que las traducciones están listas
            setItems(updatedItems);
        }
    }, [t]);

    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambiar al siguiente item automáticamente cada 3 segundos solo cuando los items estén disponibles
    useEffect(() => {
        if (items.length > 0) {  // Aseguramos que items tiene datos
            const interval = setInterval(() => {
                nextSlide();
            }, 3000);
            return () => clearInterval(interval);  // Limpieza del intervalo
        }
    }, [items]);  // Ejecutar solo cuando los items cambien

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="py-16">
            <div className="bg-slate-950 flex items-center justify-center py-10">
                <div className=" flex flex-col gap-10 items-center px-4 lg:px-20 2xl:px-60">
                    <div className="h-100 w-full text-center">
                        <h2 className="text-2xl font-bold text-white">{t('ourcustomers.title')}</h2>
                    </div>
                    {/* Carrusel */}
                    <div className="relative">
                        <div className="relative overflow-hidden max-w-xs md:max-w-full">
                            {/* Contenedor del item actual */}
                            <div
                                className="flex transition-transform duration-1000"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-full flex flex-col md:flex-row justify-center items-center p-4 rounded-lg shadow-md"
                                    >
                                        <img
                                            src={item.img}
                                            alt={`Imagen ${index + 1}`}
                                            className="w-20 h-20 p-2 mb-4 md:mb-0 md:mr-6 object-cover bg-slate-300 rounded-md"
                                        />
                                        <p className="text-slate-300 text-base text-center md:text-left">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Flechas de control */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full shadow-md hover:bg-slate-700"
                        >
                            <ChevronLeftIcon className="h-6 w-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full shadow-md hover:bg-slate-700"
                        >
                            <ChevronRightIcon className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Estadística clientes */}
            <div className="bg-gradient-to-b from-white to-slate-200 py-16">
                <div className="container gap-4 flex flex-col md:flex-row justify-center items-center mx-auto px-4 xl:px-14">
                    <div className="md:w-2/3">
                        <h2 className="font-bold md:text-xl">{t('ourcustomers.title1')}</h2>
                        <p className="mt-2 text-gray-700 leading-relaxed ">
                        {t('ourcustomers.text1')}
                        </p>
                    </div>

                    {/* Barra divisoria */}
                    <div className="hidden md:block h-40 w-[2px] bg-blue-900"></div>

                    <div className="md:w-2/3">
                        <h2 className="font-bold md:text-xl">{t('ourcustomers.title2')}</h2>
                        <p className="mt-2 text-gray-700 leading-relaxed">
                        {t('ourcustomers.text2')}
                        </p>
                    </div>

                    {/* Barra divisoria */}
                    <div className="hidden md:block h-40 w-[2px] bg-blue-900"></div>

                    <div className="md:w-2/3">
                        <h2 className="font-bold md:text-xl">{t('ourcustomers.title3')}</h2>
                        <p className="mt-2 text-gray-700 leading-relaxed">
                        {t('ourcustomers.text3')}
                        </p>
                    </div>

                    {/* Barra divisoria */}
                    <div className="hidden md:block h-40 w-[2px] bg-blue-900"></div>

                    <div className="md:w-2/3">
                        <h2 className="font-bold md:text-xl">{t('ourcustomers.title4')}</h2>
                        <p className="mt-2 text-gray-700 leading-relaxed">
                        {t('ourcustomers.text4')}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CarruselClientes;
