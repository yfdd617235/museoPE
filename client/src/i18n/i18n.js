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
                whoarewetext1: "Pablo Escobar Gaviria (1949–1993) was a Colombian drug lord who led the Medellín Cartel, one of the most powerful and violent organizations of the 20th century. Admired by some for his social projects and condemned for a legacy of violence, his story remains controversial and reflective.",
                whoarewetext2: "Medellín was both the heart of his empire and the scene of its darkest chapters. From neighborhoods he funded to a city marked by conflict, today Medellín seeks to turn that past into memory and learning.",
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
                cardtext10: "The pursuit and the manhunt: a nation in turmoil.",
                cardtext11: "A time when fear ruled daily life across communities.",
                cardtext12: "The hidden stories of those who resisted from within.",
                cardtext13: "The silent complicity of institutions and power.",
                cardtext14: "The international response and its moral dilemmas.",
                cardtext15: "A generation shaped by violence and uncertainty.",
                cardtext16: "The cultural imprint left behind, still present today.",
                cardtext17: "Justice, memory, and the struggle to rebuild truth.",
                cardtext18: "A nation’s resilience in the face of a painful history.",

                tooltip1: "Reflect on the origins of power and its consequences.",
                tooltip2: "Consider the cost of ambition and the thirst for control.",
                tooltip3: "The devastation caused by unchecked power. Think deeply.",
                tooltip4: "Reflect on the lives affected by a life of crime.",
                tooltip5: "Wealth gained through violence — but at what cost?",
                tooltip6: "The human toll of a legacy marked by blood and fear.",
                tooltip7: "The far-reaching power of the cartel: a global lesson.",
                tooltip8: "What lessons do we take from the destruction left behind?",
                tooltip9: "A look back at history and its lasting effect on society.",
                tooltip10: "Chase, chaos, and the price of ending a reign.",
                tooltip11: "Fear is contagious — what does it leave behind?",
                tooltip12: "Even in the darkest times, some chose to resist.",
                tooltip13: "When silence becomes survival — and guilt.",
                tooltip14: "Justice beyond borders — but is it ever enough?",
                tooltip15: "How does a generation heal from collective trauma?",
                tooltip16: "History is not just written — it is felt for decades.",
                tooltip17: "Memory is resistance. Truth demands patience.",
                tooltip18: "There is strength in rebuilding — and remembering."
            },
            legacy: {
                title: "The legacy",
                text: "A legacy is not always something inherited with pride; sometimes, it is also the weight of a history that hurts, that divides, and that demands reflection. In Colombia, the name Pablo Escobar does not only evoke the most feared drug lord of his time, but also a dark chapter that scarred entire generations with blood, fear, and silence.\n\nThe Pablo Museum was born as a response to the need to narrate that legacy with truth, critical thought, and memory. Not to perpetuate the man’s image, but to understand the magnitude of his actions and how they shaped the social, political, and cultural fabric of a country still trying to heal its wounds.\n\nThis space does not seek to glorify, justify, or condemn in a one-sided way. It seeks to remember. It seeks to invite deep reflection on the roots of drug trafficking, the fragility of our institutions, and the resilience of those who fought for life amid chaos. It is an opportunity for new generations to understand that the true legacy is not in mansions, luxury, or power, but in the human consequences left by a poorly told story.\n\nThe Legacy is, then, an invitation to look back with honesty, to confront what is uncomfortable, and to turn memory into a tool for collective awareness. Because only by understanding our past can we build a different future."
            },
            founder: {
                text: "\"I have personally experienced the aftermath of an era marked by violence and impunity. My goal in creating this space is to foster intergenerational dialogue that helps us understand the past in order to build a more conscious, informed, and resilient future.\""
            },
            reservation: {
                text: "Reservations"
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
                whoarewetext1: "Pablo Escobar Gaviria (1949–1993) fue un narcotraficante colombiano que lideró el Cartel de Medellín, una de las organizaciones más poderosas y violentas del siglo XX. Admirado por algunos por sus obras sociales y condenado por su legado de violencia, su historia sigue siendo controversial y reflexiva.",
                whoarewetext2: "Medellín fue el corazón de su imperio y escenario de sus capítulos más oscuros. Desde barrios financiados por él hasta una ciudad marcada por el conflicto, hoy Medellín busca transformar ese pasado en memoria y aprendizaje.",
                purpose: "Nuestro Propósito",
                purposetext: "Este museo busca explorar la vida, la influencia y las contradicciones de Pablo Escobar desde una mirada crítica y reflexiva. Queremos presentar no solo los hechos históricos, sino también el impacto que su legado ha tenido en la sociedad colombiana, especialmente en Medellín. Nuestro objetivo es crear un espacio para la memoria, la comprensión y el diálogo.",
                approach: "Nuestra Perspectiva",
                approachtext: "Más que glorificar o condenar, invitamos a los visitantes a experimentar la historia desde múltiples ángulos —a través de testimonios, fotografías, objetos y voces familiares—. Este espacio ofrece una mirada humanizada que desafía los prejuicios y promueve una reflexión más profunda sobre un pasado complejo y doloroso.",

            },

            gallery: {
                title: "Galería",
                cardtext1: "Los primeros años, un reflejo de sus orígenes.",
                cardtext2: "El ascenso al poder, un momento clave en la historia.",
                cardtext3: "Los hechos infames que marcaron un capítulo oscuro.",
                cardtext4: "El impacto en la gente, tanto en las víctimas como en los poderosos.",
                cardtext5: "La era de la riqueza y las consecuencias de un imperio violento.",
                cardtext6: "La familia y su papel dentro de la historia.",
                cardtext7: "El cartel y su alcance internacional.",
                cardtext8: "Las secuelas: cicatrices que aún permanecen en la sociedad.",
                cardtext9: "Una reflexión sobre el legado: lo que podemos aprender del pasado.",
                cardtext10: "La persecución y la cacería: una nación en crisis.",
                cardtext11: "Una época en la que el miedo gobernaba la vida cotidiana.",
                cardtext12: "Historias ocultas de quienes resistieron desde adentro.",
                cardtext13: "La complicidad silenciosa de las instituciones y el poder.",
                cardtext14: "La respuesta internacional y sus dilemas morales.",
                cardtext15: "Una generación marcada por la violencia y la incertidumbre.",
                cardtext16: "La huella cultural que aún permanece en el presente.",
                cardtext17: "Justicia, memoria y la lucha por reconstruir la verdad.",
                cardtext18: "La resiliencia de una nación frente a una historia dolorosa.",

                tooltip1: "Reflexiona sobre los orígenes del poder y sus consecuencias.",
                tooltip2: "Piensa en el costo de la ambición y la sed de control.",
                tooltip3: "La devastación provocada por el poder sin límites. Medita.",
                tooltip4: "Piensa en las vidas afectadas por una vida de crimen.",
                tooltip5: "Riqueza obtenida con violencia — ¿pero a qué precio?",
                tooltip6: "El costo humano de un legado marcado por sangre y miedo.",
                tooltip7: "El poder del cartel: una lección global que no debe olvidarse.",
                tooltip8: "¿Qué lecciones nos deja la destrucción del pasado?",
                tooltip9: "Una mirada al pasado y su efecto duradero en la sociedad.",
                tooltip10: "Persecución, caos y el precio de terminar un reinado.",
                tooltip11: "El miedo se contagia — ¿qué deja tras de sí?",
                tooltip12: "Incluso en la oscuridad, algunos decidieron resistir.",
                tooltip13: "Cuando el silencio se vuelve una forma de sobrevivir — y de cargar culpas.",
                tooltip14: "Justicia más allá de las fronteras — pero ¿alguna vez es suficiente?",
                tooltip15: "¿Cómo sana una generación marcada por el trauma colectivo?",
                tooltip16: "La historia no solo se escribe — se siente por décadas.",
                tooltip17: "La memoria es resistencia. La verdad exige paciencia.",
                tooltip18: "Hay fuerza en reconstruir — y en recordar."
            },

            legacy: {
                title: "El Legado",
                text: "El legado no siempre es aquello que se hereda con orgullo; a veces, también es la carga de una historia que duele, que divide, y que interpela. En Colombia, el nombre de Pablo Escobar no solo evoca al narcotraficante más temido de su época, sino también a un capítulo oscuro que marcó generaciones enteras con sangre, miedo y silencios.\n\nEl Museo de Pablo nace como una respuesta a la necesidad de narrar ese legado desde la verdad, la crítica y la memoria. No para perpetuar la figura del hombre, sino para entender la dimensión de sus actos y cómo estos moldearon el tejido social, político y cultural de un país que aún hoy intenta sanar sus heridas.\n\nEste espacio no busca glorificar, justificar ni condenar de forma unilateral. Busca recordar. Busca invitar a la reflexión profunda sobre las raíces del narcotráfico, sobre la fragilidad de nuestras instituciones, sobre la resistencia de quienes lucharon por la vida en medio del caos. Es una oportunidad para que nuevas generaciones comprendan que el verdadero legado no está en las mansiones, los lujos o el poder, sino en las consecuencias humanas que deja una historia mal contada.\n\nEl Legado es, entonces, una invitación a mirar atrás con honestidad, a confrontar lo incómodo, y a transformar la memoria en una herramienta de conciencia colectiva. Porque solo entendiendo nuestro pasado seremos capaces de construir un futuro distinto."
            },
            founder: {
                text: "\"He vivido de cerca las secuelas de una época marcada por la violencia y la impunidad. Mi objetivo al crear este espacio es abrir un diálogo intergeneracional que nos permita comprender el pasado para construir un futuro más consciente, informado y resiliente.\""
            },
            reservation: {
                text: "Reservas"
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
