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
            legacy: {
                title: "El Legado",
                text: "A legacy is not always something inherited with pride; sometimes, it is also the weight of a history that hurts, that divides, and that demands reflection. In Colombia, the name Pablo Escobar does not only evoke the most feared drug lord of his time, but also a dark chapter that scarred entire generations with blood, fear, and silence.\n\nThe Pablo Museum was born as a response to the need to narrate that legacy with truth, critical thought, and memory. Not to perpetuate the man’s image, but to understand the magnitude of his actions and how they shaped the social, political, and cultural fabric of a country still trying to heal its wounds.\n\nThis space does not seek to glorify, justify, or condemn in a one-sided way. It seeks to remember. It seeks to invite deep reflection on the roots of drug trafficking, the fragility of our institutions, and the resilience of those who fought for life amid chaos. It is an opportunity for new generations to understand that the true legacy is not in mansions, luxury, or power, but in the human consequences left by a poorly told story.\n\nThe Legacy is, then, an invitation to look back with honesty, to confront what is uncomfortable, and to turn memory into a tool for collective awareness. Because only by understanding our past can we build a different future."
            },
              founder: {
                text: "\"I have personally experienced the aftermath of an era marked by violence and impunity. My goal in creating this space is to foster intergenerational dialogue that helps us understand the past in order to build a more conscious, informed, and resilient future.\" – Claudia Patricia Escárraga"
              },
              reservations: {
                button: "Reservations"
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

            legacy: {
                title: "El Legado",
                text: "El legado no siempre es aquello que se hereda con orgullo; a veces, también es la carga de una historia que duele, que divide, y que interpela. En Colombia, el nombre de Pablo Escobar no solo evoca al narcotraficante más temido de su época, sino también a un capítulo oscuro que marcó generaciones enteras con sangre, miedo y silencios.\n\nEl Museo de Pablo nace como una respuesta a la necesidad de narrar ese legado desde la verdad, la crítica y la memoria. No para perpetuar la figura del hombre, sino para entender la dimensión de sus actos y cómo estos moldearon el tejido social, político y cultural de un país que aún hoy intenta sanar sus heridas.\n\nEste espacio no busca glorificar, justificar ni condenar de forma unilateral. Busca recordar. Busca invitar a la reflexión profunda sobre las raíces del narcotráfico, sobre la fragilidad de nuestras instituciones, sobre la resistencia de quienes lucharon por la vida en medio del caos. Es una oportunidad para que nuevas generaciones comprendan que el verdadero legado no está en las mansiones, los lujos o el poder, sino en las consecuencias humanas que deja una historia mal contada.\n\nEl Legado es, entonces, una invitación a mirar atrás con honestidad, a confrontar lo incómodo, y a transformar la memoria en una herramienta de conciencia colectiva. Porque solo entendiendo nuestro pasado seremos capaces de construir un futuro distinto."
  },
              founder: {
                text: "\"He vivido de cerca las secuelas de una época marcada por la violencia y la impunidad. Mi objetivo al crear este espacio es abrir un diálogo intergeneracional que nos permita comprender el pasado para construir un futuro más consciente, informado y resiliente.\" – Claudia Patricia Escárraga"
              },
              reservations: {
                button: "Reservas"
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
