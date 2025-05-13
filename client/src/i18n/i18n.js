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
            // services: {
            //     services: "Services",
            //     card1title: "Project Planning and Execution Consulting",
            //     card1text: "We help plan and execute projects from the initial analysis to their completion, ensuring success at every stage through personalized strategies and practical solutions.",
            //     card2title: "Legal Consulting",
            //     card2text: "We offer specialized legal advice for companies and individuals, supporting informed decision-making, risk management, and compliance with current regulations.",
            //     card3title: "Commercial Consulting",
            //     card3text: "We develop commercial strategies that allow our clients to identify and seize market opportunities, improve their sales, and strengthen their position in the industry.",
            //     card4title: "Financial Consulting",
            //     card4text: "We provide comprehensive financial advice to optimize resources, increase profitability, and help our clients make informed and sustainable economic decisions.",
            //     card5title: "Digital Assets Consulting",
            //     card5text: "We advise on managing and expanding digital assets, facilitating an effective and secure presence in the digital environment, and making the most of new technologies and trends.",
            //     card6title: "IT Consulting",
            //     card6text: "We offer advanced technological solutions to optimize internal processes, improve operational efficiency, and support the digital transformation of companies.",
            // },
            services: {
                services: "Services",
                card1title: "Investment Strategy Facilitation",
                card1text: "We connect our clients with accredited experts who can help design sustainable and personalized investment strategies.",
                card2title: "Resource Optimization Consulting",
                card2text: "We provide analysis and tools that support efficiency in resource utilization and economic flow for businesses.",
                card3title: "Risk Management",
                card3text: "We facilitate access to specialists who can evaluate financial risks and propose strategies to protect assets and foster growth.",
                card4title: "Portfolio Optimization",
                card4text: "We help companies optimize their portfolios by connecting them with experts who analyze the balance between risk and return.",
                card5title: "Digital Financial Transformation",
                card5text: "We support the transition toward financial digitalization, facilitating the implementation of innovative technological solutions.",
                card6title: "Scalability Consulting",
                card6text: "We provide tools to design sustainable expansion strategies, improving processes and strengthening growth."
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
            services: {
                services: "Servicios",
                card1title: "Facilitación de Estrategias de Inversión",
                card1text: "Conectamos a nuestros clientes con expertos acreditados que pueden ayudar a diseñar estrategias de inversión sostenibles y personalizadas.",
                card2title: "Consultoría para la Optimización de Recursos",
                card2text: "Brindamos análisis y herramientas que apoyan la eficiencia en el uso de recursos y el flujo económico de las empresas.",
                card3title: "Gestión de Riesgos",
                card3text: "Facilitamos el acceso a especialistas que pueden evaluar riesgos financieros y proponer estrategias para proteger activos y fomentar el crecimiento.",
                card4title: "Optimización de Portafolios",
                card4text: "Ayudamos a las empresas a optimizar sus portafolios conectándolas con expertos que analizan el balance entre riesgo y retorno.",
                card5title: "Transformación Financiera Digital",
                card5text: "Apoyamos en la transición hacia la digitalización financiera, facilitando la implementación de soluciones tecnológicas innovadoras.",
                card6title: "Consultoría para Escalabilidad",
                card6text: "Proveemos herramientas para diseñar estrategias de expansión sostenibles, mejorando procesos y fortaleciendo el crecimiento."
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
