import { IoCheckmarkCircleOutline } from "react-icons/io5";

export const BentoGrid = () => {
    return (
        <div className="py-16 sm:py-24 w-full">
            <div className="mx-auto ">
                <p className="text-center text-base/7 font-semibold text-primary-light-blue">La educación como guía principal</p>
                <h2 className="mx-auto mt-2 max-w-xl text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
                    Valores que nos impulsan siempre a seguir
                </h2>

                {/* First card */}
                <div className="mt-10 grid gap-4 sm:mt-16 md:grid-cols-2 place-items-center">
                    <div className="relative flex h-full flex-col justify-center overflow-hidden border rounded shadow-md w-full p-8">

                        <p className=" text-lg sm:text-2xl font-semibold text-gray-800">
                            MISIÓN
                        </p>
                        <p className="mt-2 text-sm lg:text-base text-gray-600 max-lg:text-center text-justify">
                            Al estilo de Juan María, nuestra misión es formar y acompanar a niños y jóvenes en su educación integral y en su conocimiento con Jesucristo, para que sean capaces de transformar su entorno y la sociedad desde:
                        </p>

                        <ul className="w-full text-primary-light-blue text-center mt-5 gap-4 h-full grid grid-cols-2">
                            <li className="flex items-center gap-x-1"> <IoCheckmarkCircleOutline/> Respeto</li> 
                            <li className="flex items-center gap-x-1"> <IoCheckmarkCircleOutline/> Solidaridad</li>
                            <li className="flex items-center gap-x-1"> <IoCheckmarkCircleOutline/> Empatía</li>
                            <li className="flex items-center gap-x-1"> <IoCheckmarkCircleOutline/> Sensibilidad social y amor</li>
                        </ul>
                    </div>


                    <div className="relative flex h-full flex-col justify-center overflow-hidden border rounded shadow-md w-full p-8">
                        <p className="text-lg sm:text-2xl font-semibold text-gray-800">
                            VISIÓN
                        </p>
                        <p className="mt-2 text-sm lg:text-base text-gray-600 text-justify">
                            Al estilo de Juan María educamos para que nuestros egresados se caractericen por su formación integral, que implica:
                        </p>

                        <ul className="w-full text-primary-light-blue text-center mt-5 h-full grid grid-cols-2 gap-4">
                            <li className="flex items-center gap-x-1"> <IoCheckmarkCircleOutline/> Sólida formación académica</li>
                            <li className="flex items-center gap-x-1"> <IoCheckmarkCircleOutline/> Estilo fraterno de relaciones</li>
                            <li className="flex items-center gap-x-1"> <IoCheckmarkCircleOutline/> Vivir en Jesucristo al estilo menesiano</li>
                            <li className="flex items-center gap-x-1"> <IoCheckmarkCircleOutline/> Mejorar la comunidad en la que viven</li>
                            <li className="flex items-center gap-x-1"> <IoCheckmarkCircleOutline/> Responsabilidad con la realidad social</li>
                            <li className="flex items-center gap-x-1"> <IoCheckmarkCircleOutline/> Compromiso como miembros de la iglesia</li>
                            <li className="flex items-center gap-x-1"> <IoCheckmarkCircleOutline/> Estar al servicio de la vida</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
