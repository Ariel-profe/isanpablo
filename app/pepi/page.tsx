"use client";

import { motion } from "framer-motion";
import { BlurTitle } from "@/components/ui/blur-title";

const PepiPage = () => {
    return (
        <section className="container mx-auto mt-32">
            <BlurTitle word="Proyecto Educativo Pastoral Institucional" />
            <div className="mt-10">
                <div className="my-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 rounded-xl"
                    >
                        <h1 className="uppercase text-xl md:text-3xl text-primary-blue mb-5">presentación</h1>
                        <p className="text-primary-dark-gray my-2 text-justify tracking-wider leading-relaxed rounded-md">
                            El Proyecto Educativo Pastoral (PEPI) expresa la unidad orgánica y la complementariedad de: los diferentes objetivos, las intervenciones y las acciones mutuamente entrelazadas y orientadas hacia una misma finalidad. Así, este punto implica definir: Objetivos y Líneas de Acción. <br />
                            Porque creemos que Dios quiere que cada persona sea feliz, ayudaremos a los niños y jóvenes a encontrar las herramientas básicas para la construcción y vivencia de un proyecto de vida centrado en Jesús.</p>
                        <p className="text-primary-dark-gray text-justify tracking-wider leading-relaxed rounded-md">
                            Presentamos una apretada síntesis que nos permite comprender un poco más que significa el sabernos escuela, escuela católica, y escuela católica menesiana. Un superior salesiano cuando se le preguntó por los grandes desafías de la escuela católica HOY, respondió: son dos. El primero ser ESCUELA y el segundo ser CATÓLICA. <br />
                        </p>

                        <h3 className="uppercase text-base md:text-xl text-primary-blue my-3">La escuela</h3>
                        <p className="text-primary-dark-gray text-justify tracking-wider leading-relaxed rounded-md">En primer lugar debe darse el sustantivo: ESCUELA. Y escuela entendida en el sentido amplio, donde se hacen presentes tres grandes ámbitos:</p>
                        <ul className="list-disc list-inside text-primary-light-blue text-justify tracking-wider leading-relaxed rounded-md my-3">
                            <li>Modelo de hombre</li>
                            <li>Horizonte cultural</li>
                            <li>Procesos de socialización</li>
                        </ul>

                        <p className="text-primary-dark-gray text-justify tracking-wider leading-relaxed rounded-md">Toda escuela que quiera ser católica debe ante todo y sobre todo ser ESCUELA. El hecho educativo tiene que ser intrínsecamente esencial a ella. Primero tiene que darse la escuela, que debe ser una buena escuela, de calidad de enseñanza, calidad organizativa, pedagógica, relacional.</p>

                        <h3 className="uppercase text-base md:text-xl text-primary-blue my-3">La escuela católica</h3>
                        <p className="text-primary-dark-gray text-justify tracking-wider leading-relaxed rounded-md">El ser católica le ofrece a la escuela una mirada nueva de su propio ser.  ¿Por qué? Porque la escuela católica respeta las tres dimensiones que recién detallábamos, pero se permite decir una palabra sobre las mismas, o mejor dicho, las cualifica.
                        </p>
                        <ul className="list-disc list-inside text-primary-light-blue text-justify tracking-wider leading-relaxed rounded-md my-3">
                            <li>Modelo de hombre: el modelo de hombre es Jesucristo. El Hijo de Dios que se ha hecho Hombre.</li>
                            <li>Horizonte cultural: el Reino, proyecto de amor, justicia, dignidad y felicidad para todos, que se hace realidad aquí y ahora.
                            </li>
                            <li>Procesos de socialización: fuerzas que tratan de moverse en la lógica del servicio e inclusión, tanto en las opciones pedagógicas, como en las de gestión y relación institucional.</li>
                        </ul>

                        <p className="text-primary-dark-gray text-justify tracking-wider leading-relaxed rounded-md">De esta forma el hecho educativo se convierte en hecho evangelizador. Porque no sólo ofrece una lectura de la realidad (educación) sino una lectura cristiana de la realidad (evangelización).</p>

                        <h3 className="uppercase text-base md:text-xl text-primary-blue my-3">la escuela católica menesiana</h3>
                        <p className="text-primary-dark-gray text-justify tracking-wider leading-relaxed rounded-md">El carisma nos regala unas especificaciones de identidad importantísimas, que le dan a la escuela rasgos propios en su triple dimensión.
                        </p>
                        <ul className="list-disc list-inside text-primary-light-blue text-justify tracking-wider leading-relaxed rounded-md my-3">
                            <li>Modelo de hombre: Jesús Maestro y Pastor, en medio de los niños y jóvenes.</li>
                            Horizonte socio-cultural: para la escuela menesiana el Reino se concretiza y entiende como la mesa común a la cual todos estamos llamados a sentarnos en fraternidad.

                            Procesos de socialización: la escuela menesiana debe realizar los milagros del Reino y debe encarnar las parábolas del Reino.

                        </ul>

                        <p className="text-primary-dark-gray text-justify tracking-wider leading-relaxed rounded-md">De esta forma el hecho educativo se convierte en hecho evangelizador. Porque no sólo ofrece una lectura de la realidad (educación) sino una lectura cristiana de la realidad (evangelización).</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 rounded-xl"
                    >
                        <h1 className="uppercase text-xl md:text-3xl text-primary-blue mb-5">dimensiones</h1>
                        <p className="text-primary-dark-gray text-justify tracking-wider leading-relaxed rounded-md">Esta unidad orgánica se expresa en áreas o dimensiones en las que toda la vida pastoral del centro educativo intenta plasmar el legado de Juan María:

                        </p>
                        <ul className="list-disc list-inside text-primary-light-blue text-justify tracking-wider leading-relaxed rounded-md my-3">
                            <li>Misión educativa</li>
                            <li>Espiritualidad</li>
                            <li>Animación y servicio</li>
                            <li>Pastoral vocacional</li>
                            <li>Familia menesiana</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 rounded-xl"
                    >
                        <h1 className="uppercase text-xl md:text-3xl text-primary-blue mb-5">misión y visión</h1>
                        <p className="text-primary-dark-gray text-justify tracking-wider leading-relaxed rounded-md">Al estilo de Juan María nuestra misión es: formar y acompañar jóvenes en su formación integral y en su conocimiento de Jesucristo, para que se sientan y sean capaces de transformar su entorno y la sociedad desde el respeto, la solidaridad, la empatía, la sensibilidad social y el amor.
                        </p>
                        <p className="text-primary-dark-gray text-justify tracking-wider leading-relaxed rounded-md">y nuestra visión: al estilo de Juan María educamos para que nuestros egresados se caractericen por su formación integral que implica:
                        </p>

                        <ul className="list-disc list-inside text-primary-light-blue text-justify tracking-wider leading-relaxed rounded-md my-3">
                            <li>Sólida formación académica.</li>
                            <li>Estilo fraterno de relaciones.</li>
                            <li>Profunda vivencia en Jesucristo al estilo menesiano.</li>
                            <li>Capacidad de mejorar la comunidad en la que viven y desarrollan su misión. </li>
                            <li>Responsabilidad con la realidad social atendiendo especialmente a los más pequeños y vulnerables.</li>
                            <li>Compromiso, como miembros de la Iglesia, al servicio de la vida.</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 rounded-xl"
                    >
                        <h1 className="uppercase text-xl md:text-3xl text-primary-blue mb-5">horizontes</h1>

                        <ul className="list-disc list-inside text-primary-light-blue text-justify tracking-wider leading-relaxed rounded-md my-3">
                            <li>Soñamos con comunidades educativas fraternas, comprometidas con una educación de calidad, formadoras de la persona toda, donde los educandos sean artífices de su proceso formativo.</li>
                            <li>Soñamos con comunidades cristianas, constructoras del Reino, insertas en la vida eclesial y arraigadas profundamente en la identidad carismática menesiana.</li>
                            <li>Soñamos con una Familia Menesiana, reflejo del Reino, generadora de fraternidad, que anima la obra, que convoca al seguimiento de Jesús, que se deja acompañar y acompaña a todos sus miembros en especial a los más pequeños.</li>
                            <li>Soñamos con una Familia Menesiana discípula-misionera, que vive, convoca y acompaña los procesos vocacionales, haciendo de la pastoral vocacional del carisma una prioridad.</li>
                            <li>Soñamos con una comunidad menesiana humanizada y humanizadora, que se ve, se conmueve y actúa en la frontera.</li>
                            <li>Soñamos con comunidades fraternas en las que la animación y el servicio estén centradas en las opciones del Reino, desde los rasgos fundacionales de alternativa y frontera, donde los proyectos y decisiones potencien la educación evangelizadora de todos, privilegiando a los más pequeños.</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 rounded-xl"
                    >
                        <h1 className="uppercase text-xl md:text-3xl text-primary-blue mb-5">áreas del proyecto</h1>

                        <ul className="list-disc list-inside text-primary-light-blue text-justify tracking-wider leading-relaxed rounded-md my-3">
                            <li>Catequesis escolar</li>
                            <li>Formación de educadores nuevos</li>
                            <li>Escuela de Padres</li>
                            <li>Campamentos y convivencias</li>
                            <li>Movimiento amén</li>
                            <li>Confirmación</li>
                            <li>Pastoral de la salud</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 rounded-xl"
                    >
                        <h1 className="uppercase text-xl md:text-3xl text-primary-blue mb-5">responsables</h1>

                        <ul className="list-disc list-inside text-primary-light-blue text-justify tracking-wider leading-relaxed rounded-md my-3">
                            <li>Equipo directivo institucional</li>
                            <li>Director pastoral</li>
                            <li>Coordinador pastoral</li>
                            <li>Equipo de catequistas</li>
                            <li>Educadores en pertenencia</li>
                            <li>Educadores</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default PepiPage