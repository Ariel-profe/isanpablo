"use client";

import { motion } from "framer-motion";
import { BlurTitle } from "@/components/ui/blur-title";
import { Button } from "@/components/ui/button";
import { CarouselPage } from "@/components/ui/carousel-page";
import { pastoral } from "@/lib/utils";
import Link from "next/link";

const PastoralPage = () => {
  return (
   <section className="container mx-auto mt-32">
    <BlurTitle word="Pastoral" />
    <div className="mt-10">
      <CarouselPage images={pastoral.images}/>
      <div className="grid lg:grid-cols-2 gap-4 my-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-2 rounded-xl"
        >
          <h1 className="uppercase text-xl md:text-3xl text-primary-blue mb-5">pastoral</h1>
          <p className="text-primary-dark-gray my-2 text-justify tracking-wider leading-relaxed rounded-md">
          Nuestra propuesta pastoral educativa incluye ofrecer los medios para educar al hombre entero como fue la intención de Juan María expresada así: «En estas escuelas se forma al hombre entero, su corazón y su espíritu.»(A. 308). Es por ello que favorecemos y brindamos la posibilidad de que sus hijos aprecien y se acerquen regularmente a los Sacramentos, signos del amor de Dios, especialmente el de la Reconciliación y Eucaristía. <br />
          Porque creemos que Dios quiere que cada persona sea feliz, ayudaremos a los niños y jóvenes a encontrar las herramientas básicas para la construcción y vivencia de un proyecto de vida centrado en Jesús.</p>
          <p className="text-primary-dark-gray text-justify tracking-wider leading-relaxed rounded-md">
          Porque somos portadores de un carisma, ayudaremos a los niños y jóvenes a descubrir en la espiritualidad menesiana una alternativa evangélica válida y particular de lectura de la realidad (verla a la manera de Jesús) y de búsqueda de la voluntad de Dios. <br />
          Porque estamos llamados a construir una sociedad más justa y más fraterna, ayudaremos a los niños y jóvenes a comprometerse cristianamente en una comunidad educativa caracterizada por la práctica de la justicia y la solidaridad. <br />
          </p>
          <p className="text-primary-dark-gray my-2 text-justify tracking-wider leading-relaxed rounded-md">
          Respondiendo a las invitaciones del Capítulo Provincial estamos trabajando en el colegio en clave de Pastoral Menesiana. Lo mismo que ayer, con las mismas intuiciones de nuestros Fundadores, seguimos percibiendo hoy que la escuela es el lugar más adaptado para encontrar a los jóvenes, acompañar su vida y roturar con ellos caminos de futuro. Hoy, como ayer, sentimos el corazón enternecido que nos urge a repartir el pan de la instrucción, el pan de los valores y el sentido, el pan Dios, el pan de la Palabra.
          </p>
        </motion.div>

         <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-2 rounded-xl"
        >
          <h1 className="uppercase text-xl md:text-3xl text-primary-blue mb-5">confirmación</h1>
          <p className="text-primary-dark-gray text-justify tracking-wider leading-relaxed">
          Es una actividad Pastoral donde queremos brindar un espacio de formación en la fe, a partir de la vivencia de la confirmación, permitiéndole darle más fundamento al proceso iniciado: <br />
          * Ofrecerle herramientas para la integración en la vida de la Palabra, la Oración y la Vida eclesial. <br />
          * Prepararlos para el servicio eclesial concreto en los ámbitos en donde se sientan llamados. <br />
          * Acompañarlos en el camino de seguimiento como comunidad de jóvenes al servicio de los más pequeños, desde un estilo carismático particular. <br />
          * Para alumnos del Colegio y de la comunidad vecina, a partir de 3er año (15 años Cumplidos). <br />
          </p>
        </motion.div>

         <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-2 rounded-xl"
        >
          <h1 className="uppercase text-xl md:text-3xl text-primary-blue mb-5">movimiento amén</h1>
          <p className="text-primary-dark-gray text-justify tracking-wider leading-relaxed">
          Para responder a las inquietudes de muchos niños y jóvenes que desean vivir la vida cristiana de un modo más activo y comprometido, la Comunidad de Hermanos Menesianos ha fundado el Movimiento Amén, que es un grupo apostólico con la Espiritualidad Menesiana. <br /> 
          El Movimiento tiene como ideal a Jesús, y para responder a ese llamado adapta actividades que ayuden a los participantes a crecer. Compartimos convivencias, campamentos, bicicleteadas, salidas solidarias, retiros, etc. <br /> 
          Pueden participar alumnos de primaria y secundaria. Estás invitado a participar.
          </p>
        </motion.div>

         <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-2 rounded-xl"
        >
          <h1 className="uppercase text-xl md:text-3xl text-primary-blue mb-5">convivencias</h1>
          <p className="text-primary-dark-gray text-justify tracking-wider leading-relaxed">
          Creemos que las convivencias son encuentros claves que ayudan a nuestros alumnos a concientizarse sobre la necesidad de vivir según determinados valores, que los humanicen cada vez más y que los hagan crecer como personas. <br /> 
          Les permiten compartir ideas, opiniones, experiencias y sentimientos con el resto del curso, en un ambiente de confianza y respeto, dar algunos pasos hacia una mayor unidad de grupo. <br />
          <span className="italic text-black "> Aprender a mirarse como personas y como curso desde una óptica distinta, nueva, “a la manera de Jesús”. </span>
          </p>
        </motion.div>

         <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-2 rounded-xl"
        >
          <h1 className="uppercase text-xl md:text-3xl text-primary-blue mb-5">campamentos formativos</h1>
          <p className="text-primary-dark-gray text-justify tracking-wider leading-relaxed">
          Este es un espacio donde queremos brindarle a nuestros alumnos un crecimiento en la vida del grupo, para que puedan descubrir y dar sentido a la vida. Aceptar y valorar positivamente la propia transformación, física, psicológica y afectiva. Dar razón de la propia fe. Desarrollar la capacidad de expresar en palabras sus dudas, interrogantes, sentimientos y experiencias.
          Vivir los valores del Evangelio. Descubrir a Jesús como modelo de relación con Dios y con los demás. <br />
          Durante el año tenemos los campamentos formativos en nuestra casa de Agrelo: ”Nuestra Señora del Amén”.
          </p>
        </motion.div>

         <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-2 rounded-xl"
        >
          <h1 className="uppercase text-xl md:text-3xl text-primary-blue mb-5">comunidad juvenil (grupo misionero)</h1>
          <p className="text-primary-dark-gray text-justify tracking-wider leading-relaxed">
          Son jóvenes de los últimos años y ex-alumnos que deciden comprometerse en la vida de fe y quieren imitar más de cerca la vida de las Primeras Comunidades Cristianas. <br />
          Viven, comparten, celebran y anuncian a Jesús al estilo Menesiano. <br />
          Se reúnen cada 15 días para rezar, formarse y compartir. <br />
          Al final del Año participan de una Misión en Potrerillos.
          </p>
        </motion.div>
      </div>

      <div className="my-12 w-full flex flex-col md:flex-row items-center justify-center ">
        <Button variant="link">
          <a href='https://www.facebook.com/profile.php?id=100039873042628' target='_blank'>
            En este link podrás ver actividades relacionadas
          </a>
        </Button>

        <Button>
          <Link href='/pepi'>
            Conocé más sobre nuestro nuevo proyecto
          </Link>
        </Button>
      </div>

    </div>
   </section>
  )
}

export default PastoralPage