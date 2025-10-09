
import { EstudiarMejor } from '@/components/estudiar-mejor';
import { BlurTitle } from '@/components/ui/blur-title';
import { CarouselPage } from '@/components/ui/carousel-page';
import { levels } from '@/lib/utils';

const InicialPage = () => {

    const inicial = levels[0];

  return (
    <section className='container mx-auto mt-32'>
        <BlurTitle word="Nivel Inicial" />
        
        <div className='mt-10'>
        <CarouselPage images={inicial.images}/>
            <div className=''>
                <p className='text-lg text-primary-dark-gray mt-12 text-justify'>{inicial?.description}</p>
                <div className='flex flex-col mt-12 text-lg text-primary-blue uppercase'>
                    <span>{inicial?.range}</span>
                    <span>{inicial?.turns}</span>
                </div>
            </div>
            <EstudiarMejor />
            <div className='my-12 '>
                <h3 className='text-2xl md:text-3xl text-primary-blue uppercase underline'>horarios de consulta</h3>
                <p className='text-lg text-primary-dark-gray my-5 text-justify'>Para una mejor organización y atención de calidad en las consultas, tanto de docentes como de directivos, se recomienda a los padres solicitar con anticipación sus entrevistas y esperar la confirmación de la misma.</p>
                <p className='text-xl text-primary-dark-gray my-5 italic'>Los horarios de consultas se deben ver con docentes de aula y especiales.</p>
                <span className='text-lg text-primary-red'>En caso de URGENCIAS consultar a dirección.</span>
            </div>
        </div>
    </section>
  )
}

export default InicialPage