import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaRegStar, FaRegUserCircle } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IconType } from "react-icons";

interface Size {
    width: number | undefined;
    height: number | undefined;
  }

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<Size>({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  
      window.addEventListener("resize", handleResize);
  
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowSize;
  };

export const Accordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="my-10 lg:my-20">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full mx-auto shadow overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
              maxDescription={item.maxDescription}
            />
          );
        })}
      </div>
    </section>
  );
};

interface PanelProps {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  id: number;
  Icon: IconType;
  title: string;
  imgSrc: string;
  description: string;
  maxDescription: string;
};

const Panel = ({
  open,
  setOpen,
  id,
  Icon,
  title,
  imgSrc,
  description,
  maxDescription
}: PanelProps) => {
  const { width } = useWindowSize();
  const isOpen = open === id;  

  return (
    <>
      <button
        className={`bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group`}
        onClick={() => setOpen(id)}
      >
        {!isOpen && <IoIosArrowRoundDown className="animate-float" size={30} />}
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180 w-full h-full"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-primary-light-blue text-white grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPositionY: "top"
            }}
            className="w-full h-full overflow-hidden relative flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-2 py-2 bg-primary-blue/40 backdrop-blur-sm text-xs sm:text-sm md:text-base lg:text-lg text-white"
            >
              <p>{width && width < 640 ? description : maxDescription}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "Historia",
    Icon: CgNotes,
    imgSrc:
      "/assets/sliders/slider1.webp",
    description:
      "En 1964 se funda el instituto iniciativa del Padre Paulino Reale (a cargo de la Parroquia Santa María Goretti) junto al grupo A.B.C (Amigos del Bien Común).",
      maxDescription: "En 1964 se funda el instituto iniciativa del Padre Paulino Reale (a cargo de la Parroquia Santa María Goretti) junto al grupo A.B.C (Amigos del Bien Común). De esta forma se da respuestas a las necesidades educativas del Departamento de Luján de Cuyo. El desafío de ser la primera escuela técnica y católica para varones."
  },
  {
    id: 2,
    title: "Primeros pasos",
    Icon: FaRegStar,
    imgSrc:
      "/assets/primaria/primaria3.webp",
    description:
      'En 1987 se hace cargo del Instituto la Congregación de los Hermanos de la Instrucción Cristiana (Menesianos), quienes inspirados por la consigna "Dios Solo"; reafirman el propósito de formar alumnos que egresen con sus conocimientos científicos y con la presencia de Jesús en sus vidas.',
      maxDescription: 'En 1987 se hace cargo del Instituto la Congregación de los Hermanos de la Instrucción Cristiana (Menesianos), quienes inspirados por la consigna "Dios Solo"; reafirman el propósito de formar alumnos que egresen con sus conocimientos científicos y con la presencia de Jesús en sus vidas, para que su camino sea más claro, profundo en las relaciones interpersonales, esperanzados en el futuro y más virtuoso en el corazón de cada uno.'
  },
  {
    id: 3,
    title: "Juan La Mennais",
    Icon: FaRegUserCircle,
    imgSrc:
      "/assets/global/juan-lamennais.webp",
    description:
      'Nació en Francia el 8 de septiembre de 1780. Cuando la Revolución Francesa quiso hacer "desaparecer" el nombre de Dios en la sociedad, Juan Maria estableció y defendió la escuela cristiana.',
      maxDescription: 'Nació en Francia el 8 de septiembre de 1780. Cuando la Revolución Francesa quiso hacer "desaparecer" el nombre de Dios en la sociedad, Juan Maria estableció y defendió la escuela cristiana, preparó Educadores que dieran a los niños y jovenes una instrucción y una educación humana y religiosa. Misión que comparten hermanos y laicos, que se sintetiza en el lema: "Mis escuelas han sido fundadas para dar a conocer a Jesucristo".'
  },
  {
    id: 4,
    title: "Gabriel Deshayes",
    Icon: FaRegUserCircle,
    imgSrc:
      "/assets/global/gabriel-deshayes.webp",
    description:
      'Nace en Beignon, entonces importante parroquia rural de la diócesis de Saint-Maló, Bretana. Su humilde casa natal sigue en pie. De la familia labradora, trabajadora y sólidamente cristiana.',
      maxDescription: 'Nace en Beignon, entonces importante parroquia rural de la diócesis de Saint-Maló, Bretana. Su humilde casa natal sigue en pie. De la familia labradora, trabajadora y sólidamente cristiana. Ordenado sacerdote el 04 de Marzo de 1792. El 6 de Junio de 1819, fiesta de la Santísima Trinidad, Gabriel y Juan María firmaron el tratado de Unión, carta fundacional de la Congregación de los "Hermanos de la instrucción Cristiana".'
  },
];