"use client";

import { motion } from "framer-motion";

export const Lema = () => {
    return (
        <div className="mt-10 lg:mt-20 px-3">
            <p className="text-center text-base/7 font-semibold text-primary-light-blue">
                Mirando el logo
            </p>
            <h2 className="mx-auto mt-2 max-w-xl text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
                Un encuentro que <span className="text-primary-light-blue">transforma</span>
            </h2>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-justify mt-6 text-base/7 text-gray-700 lg:text-lg xl:text-xl"><b>Jesús</b> en el centro destaca dando cohesión y sentido a la imagen de las palabras del lema; la relación con la persona de <b>Jesús</b> es la que transforma la vida. Varios elementos se combinan en el logo para dar armonía al conjunto, siendo este proceso de transformación  gradual y se percibe a partir de tres detalles:
            </motion.p>

            <motion.ul 
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="list-disc list-inside mt-6 text-base/7 text-gray-700 lg:text-lg xl:text-xl"
            >
                <li className="mt-4 text-base/7 text-gray-700 lg:text-lg xl:text-xl">
                    El primero y más evidente, el cambio de las tonalidades de los colores. Las personas al pasar por el encuentro con <b>Jesús</b> descubren con nitidez la belleza y el esplendor de sus vidas.
                </li>

                <li className="mt-4 text-base/7 text-gray-700 lg:text-lg xl:text-xl">
                    El segundo elemento, perceptible a partir de contemplación de los gestos y rostros de las personas. El encuentro con la persona de <b>Jesús</b> transforma en más evangélicos los sentimientos, pensamientos, las acciones de las discípulas y los discípulos de <b>Jesús</b> para construir fraternidad.
                </li>

                <li className="mt-4 text-base/7 text-gray-700 lg:text-lg xl:text-xl">
                    El tercer elemento viene dado por los lazos. Son los lazos, las relaciones que se tejen con <b>Jesús</b> y su <b>Evangelio</b> los que hacen posible la transformación en la vida de las personas. Estos lazos, en tonalidad azul, ponen de manifiesto la vinculación del seguimiento de <b>Jesús</b> desde los rasgos carismáticos destacando el <b>Dios solo</b> en el corazón de <b>Jesús</b> y la espiga en manos de los niños y jóvenes como los principales destinatarios de la educación evangelizadora de las <b>Comunidades Educativas Menesianas</b>.
                </li>
            </motion.ul>
        </div>
    )
}
