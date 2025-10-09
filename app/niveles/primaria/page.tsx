import { EstudiarMejor } from '@/components/estudiar-mejor';
import { BlurTitle } from '@/components/ui/blur-title';
import { Button } from '@/components/ui/button';
import { CarouselPage } from '@/components/ui/carousel-page';
import { levels } from '@/lib/utils';

const PrimariaPage = () => {

    const primaria = levels[1];

  return (
    <section className='container mx-auto mt-32'>
        <BlurTitle word="Nivel Primario" />
        <div className='mt-10'>
        <CarouselPage images={primaria.images}/>
            <div className=''>
                <p className='text-lg text-primary-dark-gray mt-12 text-justify'>{primaria.description}</p>
                <div className='flex flex-col mt-12 text-lg text-primary-blue uppercase'>
                    <span>{primaria.range}</span>
                    <span>{primaria.turns}</span>
                </div>
            </div>
            <EstudiarMejor />
            <div className='my-12 '>
                <h3 className='text-2xl md:text-3xl text-primary-blue uppercase underline'>horarios de consulta</h3>
                <p className='text-lg text-primary-dark-gray my-5 text-justify'>Para una mejor organización y atención de calidad en las consultas, tanto de docentes como de directivos, se recomienda a los padres solicitar con anticipación sus entrevistas y esperar la confirmación de la misma.</p>
                <p className='text-xl text-primary-dark-gray my-5 italic'>Los horarios de consultas se deben ver con docentes de aula y especiales.</p>
                <span className='text-lg text-primary-red'>En caso de URGENCIAS consultar a dirección.</span>
            </div>

            <div className="group my-12 text-center px-3 md:hover:opacity-75 ">
              <Button variant="link">
                <a href='https://www.facebook.com/profile.php?id=100063796252728' target='_blank'>
                  En este link podrás ver actividades relacionadas
                </a>
              </Button>
            </div>
        </div>
    </section>
  )
}

export default PrimariaPage