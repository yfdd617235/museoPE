import { EnvelopeIcon } from "@heroicons/react/24/solid";
import CarruselClientes from "../components/CarruselClientes";
import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import { useTranslation } from 'react-i18next';

const HomaPage = () => {

  const [loading, setLoading] = useState(true);
  const [elementsToLoad, setElementsToLoad] = useState(1); // Ajusta según la cantidad total de elementos multimedia
  const { t } = useTranslation();

  // Maneja la carga de cada elemento
  const handleLoad = () => {
    console.log("Video loaded"); // Confirmar que el manejador se llama
    setElementsToLoad((prev) => {
      console.log("Elements to load:", prev - 1); // Verificar el conteo
      return prev - 1;
    });
  };

  // Efecto para ocultar el loader cuando se han cargado todos los elementos
  useEffect(() => {
    if (elementsToLoad <= 0) {
      setLoading(false);
    }
  }, [elementsToLoad]); // Agregar como dependencia

  return (
    <div>

      <div className="z-50">
        {loading && (
          <Loader />
        )}
      </div>



      <div className="scroll-snap-container flex flex-col pt-10">
        <div id="home" className="snap-section relative h-screen w-full flex justify-center items-center overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover -z-20"
            src={`${import.meta.env.BASE_URL}building.mp4`}
            poster={`${import.meta.env.BASE_URL}building.png`}
            muted
            autoPlay
            loop
            playsInline
            // onLoadedData={handleLoad} // Se dispara cuando los metadatos del video están listos
            // onLoadedMetadata={handleLoad} // Se dispara cuando se han cargado los metadatos
            // onCanPlayThrough={handleLoad} // Se dispara cuando se puede reproducir el video sin interrupciones
            onLoadedData={handleLoad} // Se dispara cuando el video comienza a reproducirse
            onError={(e) => {
              console.error("Video failed to load", e); // Manejo de errores
              e.target.style.display = 'none';
            }}
          >Your browser does not support the video tag.</video>

          {/* Poster Image as Fallback */}
          {/* <img
          src={`${import.meta.env.BASE_URL}building.png`}
          alt="Video Poster"
          className="absolute w-full h-full object-cover bg-blue-800 opacity-30"
          style={{ display: 'none' }}
          onLoad={(e) => {
            const video = document.querySelector('video');
            if (video && video.style.display === 'none') {
              e.target.style.display = 'block';
            }
          }}
        /> */}

          {/* Fondo negro con opacidad */}
          <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-30 -z-10" />

          {/* Logo */}
          <div className="absolute flex flex-col px-6 items-center text-white">
            <h1
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 1)" }}
            >
              Inversiones Conti
            </h1>
            <p
              className="text-lg md:text-2xl font-light text-justify"
              style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 1)" }}
            >
              {t('jumbotron.message')}
            </p>
          </div>
        </div>

        {/*About us*/}
        <div id="about" className="snap-section section md:pt-36 text-sm md:text-base">
          <div className="bg-slate-900 text-white">
            <div className="gap-10 flex flex-col md:flex-row justify-center items-center mx-auto px-4 lg:px-20 2xl:px-60">

              <div className="md:w-1/2 pt-10 md:py-10">
                <h2 className="md:text-2xl font-bold text-center">{t('whoarewe.whoarewe')}</h2> <br />
                <p className="text-justify">
                  {t('whoarewe.whoarewetext1')}
                </p>
                <br />
                <p className="text-justify">
                  {t('whoarewe.whoarewetext2')}
                </p>
              </div>

              <div className="flex-shrink-0 md:w-1/2 flex justify-center items-center">
                <video
                  className="w-full h-full object-cover"
                  src={`${import.meta.env.BASE_URL}presentation.mp4`}
                  poster={`${import.meta.env.BASE_URL}presentation.png`}
                  muted
                  autoPlay
                  loop
                  playsInline
                  onError={(e) => {
                    console.error("Video failed to load", e); // Manejo de errores
                    e.target.style.display = 'none';
                  }}
                >Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/*Mision & Vision*/}
          <div className="bg-gradient-to-b from-white to-slate-200">
            <div className="gap-10 flex flex-col md:flex-row justify-center items-center mx-auto px-4 lg:px-20 2xl:px-60">

              <div className="md:w-2/3 pt-10 md:py-10">
                <h2 className="font-bold md:text-xl">{t('whoarewe.mission')}</h2>
                <p className="mt-2 text-gray-700 leading-relaxed text-justify">
                  {t('whoarewe.missiontext')}
                </p>
              </div>

              {/* Barra divisoria */}
              <div className="hidden md:block h-40 w-[2px] bg-blue-900"></div>

              <div className="md:w-2/3 pb-10 md:py-10">
                <h2 className="font-bold md:text-xl">{t('whoarewe.vision')}</h2>
                <p className="mt-2 text-gray-700 leading-relaxed text-justify">
                  {t('whoarewe.visiontext')}
                </p>
              </div>

            </div>
          </div>
        </div>


        {/* Cards Section */}
        <div id="services" className="snap-section section mx-auto px-4 lg:px-20 2xl:px-60">
          <h2 className="text-lg md:text-2xl font-bold text-center py-16">{t('services.services')}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Card Template */}
            {[
              {
                title: t('services.card1title'),
                description: t('services.card1text'),
                image: "ofi1.jpg",
              },
              {
                title: t('services.card2title'),
                description: t('services.card2text'),
                image: "ofi2.jpg",
              },
              {
                title: t('services.card3title'),
                description: t('services.card3text'),
                image: "ofi3.jpg",
              },
              {
                title: t('services.card4title'),
                description: t('services.card4text'),
                image: "ofi4.jpg",
              },
              {
                title: t('services.card5title'),
                description: t('services.card5text'),
                image: "ofi5.jpg",
              },
              {
                title: t('services.card6title'),
                description: t('services.card6text'),
                image: "ofi6.jpg",
              },
            ].map((card, index) => (
              <div key={index} className="cursor-pointer h-full shadow-md rounded-lg relative group overflow-hidden hover:z-50">
                {/* Image */}
                <img
                  src={`${import.meta.env.BASE_URL}${card.image}`}
                  alt={card.title}
                  className="w-full h-48 object-cover rounded-t-lg transition-opacity duration-1000 group-hover:opacity-0"
                />
                {/* Title (visible initially) */}
                <div className="p-4 md:p-6 text-center">
                  <h5 className="text-base md:text-lg font-semibold text-blue-900">{card.title}</h5>
                </div>
                {/* Description (hidden until hover) */}
                <div className="p-4 md:p-6 absolute inset-0 bg-white flex flex-col justify-center text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h5 className="text-base md:text-lg font-semibold text-blue-900">{card.title}</h5>
                  <p className="text-sm md:text-base text-gray-700 mt-2">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/*Nuestros Clientes */}
        <div id="clients" className="snap-section section">
          <CarruselClientes />
        </div>


        {/* Prefooter Section */}
        <div id="contact" className="snap-section section bg-black text-white w-full text-left mt-16 p-4 md:p-8 bg-repeat bg-center min-h-[200px]">
          <div className="px-4 md:px-32 lg:px-48">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center justify-center">
                <img className="h-12 md:h-32" src={`${import.meta.env.BASE_URL}logoIC.webp`} alt="Logo" />
              </div>

              <div className="flex items-center justify-left p-6">
                <div className="flex flex-col space-y-3 text-left">
                  <h5 className="text-xs md:text-sm lg:text-lg font-bold">{t('contact.contact')}</h5>

                  {/* Correo electrónico */}
                  <a
                    href="mailto:gerencia@inversionesconti.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-xs md:text-sm"
                  >
                    <EnvelopeIcon className="w-4 h-4 text-white" />
                    <span >gerencia@inversionesconti.com</span>
                  </a>

                  {/* <div className="flex gap-4">
                    
                    <a
                      href="https://es.linkedin.com/company/conti"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-xs md:text-sm"
                    >
                      <svg
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M22.23 0H1.77C.792 0 0 .774 0 1.728v20.543C0 23.225.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.729V1.728C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zm-1.78-13.01a2.07 2.07 0 11-.001-4.138 2.07 2.07 0 010 4.138zm15.18 13.01h-3.56v-5.941c0-1.417-.028-3.245-1.975-3.245-1.976 0-2.278 1.543-2.278 3.14v6.045h-3.56V9h3.42v1.563h.049c.476-.9 1.636-1.846 3.368-1.846 3.602 0 4.267 2.369 4.267 5.452v6.283z" />
                      </svg>
                    </a>

                    
                    <a
                      href="https://wa.me/+573104221653"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-xs md:text-sm"
                    >
                      <svg
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path>
                        <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path>
                      </svg>
                    </a>

                    
                    <a
                      href="https://www.instagram.com/tu_nombre_usuario"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-xs md:text-sm"
                    >
                      <svg
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M12 2.163c3.2 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.918 4.918.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.147 3.252-1.692 4.771-4.918 4.918-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.147-4.771-1.692-4.918-4.918-.058-1.266-.07-1.65-.07-4.85s.012-3.584.07-4.85c.147-3.252 1.692-4.771 4.918-4.918 1.266-.058 1.65-.07 4.85-.07m0-2.163C8.755 0 8.338.012 7.054.07 2.9.228.228 2.9.07 7.054.012 8.338 0 8.755 0 12s.012 3.662.07 4.946C.228 21.1 2.9 23.772 7.054 23.93 8.338 23.988 8.755 24 12 24s3.662-.012 4.946-.07C21.1 23.772 23.772 21.1 23.93 16.946 23.988 15.662 24 15.245 24 12s-.012-3.662-.07-4.946C23.772 2.9 21.1.228 16.946.07 15.662.012 15.245 0 12 0zM12 5.838a6.162 6.162 0 1 0 6.162 6.162A6.168 6.168 0 0 0 12 5.838zm0 10.137a3.975 3.975 0 1 1 3.975-3.975A3.979 3.979 0 0 1 12 15.975zm4.406-10.845a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                      </svg>
                    </a>

                   
                    <a
                      href="https://www.facebook.com/tu_nombre_usuario"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-xs md:text-sm"
                    >
                      <svg
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#ffffff"
                        className="w-4 h-4"
                      >
                        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.35C0 23.403.597 24 1.325 24h21.35C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0zm-4.133 12h-3.775v10h-4.017v-10h-2.5V9.5h2.5V7.5c0-2.775 1.533-4.5 4.5-4.5 1.275 0 2.5.1 2.5.1v2.758h-1.5c-1.25 0-1.5.59-1.5 1.5v1.492h3.021l-.48 3.5z" />
                      </svg>
                    </a>

                    <a
                      href="https://twitter.com/tu_nombre_usuario"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-xs md:text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <path d="M22.46 6c-.77.34-1.6.57-2.48.67a4.34 4.34 0 0 0 1.91-2.39c-.84.5-1.77.87-2.76 1.07A4.303 4.303 0 0 0 16.54 5a4.3 4.3 0 0 0-4.3 4.3c0 .34.04.67.11 1a12.23 12.23 0 0 1-8.86-4.48c-.36.62-.56 1.34-.56 2.1 0 1.44.73 2.72 1.83 3.47-.67-.02-1.29-.2-1.83-.5v.05c0 2.01 1.43 3.68 3.34 4.05-.35.1-.73.15-1.12.15-.27 0-.53-.02-.78-.07.53 1.67 2.07 2.88 3.91 2.91-1.43 1.12-3.23 1.79-5.19 1.79-.34 0-.67-.02-1-.07 1.83 1.17 4 1.86 6.32 1.86 7.62 0 11.77-6.3 11.77-11.75 0-.18 0-.35-.01-.53a8.31 8.31 0 0 0 2.04-2.12z" />
                      </svg>
                    </a>
                  </div> */}


                </div>
              </div>




              <div className="flex items-center justify-left p-6">
                <div className="flex flex-col space-y-3 text-left">
                  <h5 className="text-xs md:text-sm lg:text-lg font-bold">{t('contact.location')}</h5>
                  <div className="flex items-center">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Cra+43A+%233+Sur+-130,+Torre+2,+Oficina+915,+CE+Milla+de+Oro,+Medellín,+Antioquia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs md:text-sm hover:underline"
                    >
                      <svg
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        className="w-4 h-4 mr-2"
                      >
                        <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z" />
                      </svg>
                      <span>Cra 43A #3 Sur -130, Torre 2, Oficina 915, CE Milla de Oro, Medellín, Antioquia</span>
                    </a>
                  </div>

                  {/* Google Maps Embed */}
                  {/* <div className="mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5293888150147!2d-75.57070552562394!3d6.1986474923078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428298ff0fb6b%3A0x6a81d18a462ccf02!2sCra.%2043a%20%233%20Sur%20-%20130%2C%20El%20Poblado%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1sen!2sus!4v1698513794075!5m2!1sen!2sus"
                    width="50"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full rounded-lg"
                  ></iframe>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-black text-white text-xs bottom-0 w-full text-center py-1">
          <p>&copy; 2024 Inversiones Conti. All rights reserved.</p>
        </footer>
      </div>

    </div>


  );
};

export default HomaPage;
