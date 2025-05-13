// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traducciones en diferentes idiomas
const resources = {
    en: {
        translation: {
            navbar: {
                history: "History",
                gallery: "Gallery",
                legacy: "The Legacy",
                contact: "Contact",
            },
            jumbotron: {
                message: "What remains untold... is still history.",
            },
            whoarewe: {
                whoarewe: "History",
                whoarewetext1: "Pablo Escobar Gaviria (1949–1993) was a Colombian drug trafficker who led the Medellín Cartel, one of the most powerful and violent criminal organizations of the 20th century. His wealth and influence soared during the 1980s, fueled by cocaine exports to the United States and beyond. Seen by some as a “Robin Hood” for his social work in poor neighborhoods, and condemned by others for his role in a wave of violence that deeply affected Colombia, Escobar remains a controversial figure whose story still invites debate and reflection.",
                whoarewetext2: "The city of Medellín was both the center of his empire and the stage for its most tragic consequences. From neighborhoods built with his funding to years marked by bombings and clashes with the state, Escobar’s story is deeply woven into the city’s recent past. Today, Medellín seeks to transform that legacy into memory, dialogue, and learning.",
                purpose: "Our Purpose",
                purposetext: "This museum aims to explore the life, influence, and contradictions of Pablo Escobar through a critical and reflective lens. We seek to present not only the history, but also the impact that his legacy has had on Colombian society, particularly in Medellín. Our goal is to create a space for memory, understanding, and dialogue.",
                approach: "Our Perspective",
                approachtext: "Rather than glorify or condemn, we invite visitors to experience history from multiple angles — through testimonies, photographs, artifacts, and family voices. This space offers a humanized view that challenges assumptions and invites deeper reflection on a complex and painful past.",

            },
            gallery: {
                title: "Gallery",
                cardtext1: "The early years of Pablo Escobar, a reflection of his beginnings.",
                cardtext2: "The rise to power, a pivotal moment in history.",
                cardtext3: "The infamous events that marked a dark chapter.",
                cardtext4: "The impact on the people, both the victims and the powerful.",
                cardtext5: "The era of wealth and the consequences of a violent empire.",
                cardtext6: "Escobar's family and their role in the story.",
                cardtext7: "The infamous cartel and its reach across the world.",
                cardtext8: "The aftermath: the scars left on society.",
                cardtext9: "The reflection on the legacy: what we can learn from the past.",
                tooltip1: "Reflect on the origins of power and its consequences.",
                tooltip2: "Consider the cost of ambition and the thirst for control.",
                tooltip3: "The devastation caused by unchecked power. Think deeply.",
                tooltip4: "Reflect on the lives affected by a life of crime.",
                tooltip5: "Wealth gained through violence — but at what cost?",
                tooltip6: "The human toll of a legacy marked by blood and fear.",
                tooltip7: "The far-reaching power of the cartel: a global lesson.",
                tooltip8: "What lessons do we take from the destruction left behind?",
                tooltip9: "A look back at history and its lasting effect on society."
            },
            ourcustomers: {
                title: "Our Customers",
                carruseltext1: "Commitment to quality in every service offered.",
                carruseltext2: "Satisfaction guarantee in every project.",
                carruseltext3: "Personalized attention and constant commitment.",
                carruseltext4: "Effective collaboration that enhances our services.",
                title1: "100+ Satisfied Clients",
                text1: "We trust in solid and lasting relationships, providing a satisfying experience for every client.",
                title2: "200+ Projects Executed",
                text2: "Over 200 projects successfully completed, we always ensure professionalism and quality at every stage.",
                title3: "Coverage in 15+ Sectors",
                text3: "We offer personalized solutions for various industries, adapting to the specific needs of each sector.",
                title4: "95% Client Retention",
                text4: "Our dedication and quality are reflected in a high client retention rate year after year.",

            },
            contact: {
                contact: "Contact",
                location: "Location"
            }

        },
    },
    es: {
        translation: {
            navbar: {
                history: "Historia",
                gallery: "Galería",
                legacy: "El Legado",
                contact: "Contacto",
            },
            jumbotron: {
                message: "Lo que no se cuenta… también es historia.",
            },
            whoarewe: {
                whoarewe: "Historia",
                whoarewetext1: "Pablo Escobar Gaviria (1949–1993) fue un narcotraficante colombiano que se convirtió en el líder del Cartel de Medellín, una de las organizaciones criminales más poderosas y violentas del siglo XX. Su fortuna y poder crecieron rápidamente durante los años 80, alimentados por el tráfico de cocaína hacia Estados Unidos y otros países. Aclamado por algunos como un “Robin Hood” por sus obras sociales en barrios populares, y condenado por otros por su papel en una ola de violencia que marcó profundamente a Colombia, Escobar sigue siendo una figura polémica cuya historia continúa generando debate y reflexión.",
                whoarewetext2: "La ciudad de Medellín fue tanto el centro de su imperio como el escenario de sus consecuencias más trágicas. Desde barrios construidos con su financiación hasta años marcados por atentados y enfrentamientos con el Estado, la historia de Escobar está profundamente entrelazada con el pasado reciente de la ciudad. Hoy, Medellín busca transformar ese legado en memoria, diálogo y aprendizaje.",
                purpose: "Nuestro Propósito",
                purposetext: "Este museo busca explorar la vida, la influencia y las contradicciones de Pablo Escobar desde una mirada crítica y reflexiva. Queremos presentar no solo los hechos históricos, sino también el impacto que su legado ha tenido en la sociedad colombiana, especialmente en Medellín. Nuestro objetivo es crear un espacio para la memoria, la comprensión y el diálogo.",
                approach: "Nuestra Perspectiva",
                approachtext: "Más que glorificar o condenar, invitamos a los visitantes a experimentar la historia desde múltiples ángulos —a través de testimonios, fotografías, objetos y voces familiares—. Este espacio ofrece una mirada humanizada que desafía los prejuicios y promueve una reflexión más profunda sobre un pasado complejo y doloroso.",

            },

            gallery: {
                title: "Galería",
                cardtext1: "Los primeros años de Pablo Escobar, una reflexión sobre sus comienzos.",
                cardtext2: "El ascenso al poder, un momento clave en la historia.",
                cardtext3: "Los infames eventos que marcaron un capítulo oscuro.",
                cardtext4: "El impacto en las personas, tanto en las víctimas como en los poderosos.",
                cardtext5: "La era de la riqueza y las consecuencias de un imperio violento.",
                cardtext6: "La familia de Escobar y su papel en la historia.",
                cardtext7: "El infame cartel y su alcance a través del mundo.",
                cardtext8: "Las secuelas: las cicatrices que dejó en la sociedad.",
                cardtext9: "La reflexión sobre el legado: lo que podemos aprender del pasado.",
                tooltip1: "Reflexiona sobre los orígenes del poder y sus consecuencias.",
                tooltip2: "Considera el costo de la ambición y la sed de control.",
                tooltip3: "La devastación causada por el poder descontrolado. Piensa profundamente.",
                tooltip4: "Reflexiona sobre las vidas afectadas por una vida de crimen.",
                tooltip5: "La riqueza obtenida a través de la violencia, ¿pero a qué costo?",
                tooltip6: "El costo humano de un legado marcado por sangre y miedo.",
                tooltip7: "El poder de alcance global del cartel: una lección para el mundo.",
                tooltip8: "¿Qué lecciones tomamos de la destrucción dejada atrás?",
                tooltip9: "Un vistazo al pasado y su efecto duradero en la sociedad."
            },

            ourcustomers: {
                title: "Nuestros Clientes",
                carruseltext1: "Compromiso de calidad en cada servicio ofrecido.",
                carruseltext2: "Garantía de satisfacción en cada proyecto.",
                carruseltext3: "Atención personalizada y compromiso constante.",
                carruseltext4: "Colaboración efectiva que potencia nuestros servicios.",
                title1: "100+ Clientes Satisfechos",
                text1: "Confiamos en relaciones sólidas y duraderas, brindando una experiencia satisfactoria a cada cliente.",
                title2: "200+ Proyectos Ejecutados",
                text2: "Más de 200 proyectos completados con éxito, garantizando profesionalismo y calidad en cada etapa.",
                title3: "Cobertura en 15+ Sectores",
                text3: "Ofrecemos soluciones personalizadas para diversas industrias, adaptándonos a las necesidades específicas de cada sector.",
                title4: "95% Retención de Clientes",
                text4: "Nuestra dedicación y calidad se reflejan en un alto índice de retención de clientes año tras año.",
            },
            contact: {
                contact: "Contacto",
                location: "Ubicación"
            }
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // Idioma predeterminado
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
