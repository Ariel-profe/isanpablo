import { BlurTitle } from '@/components/ui/blur-title';
import { Button } from '@/components/ui/button';
import { CarouselPage } from '@/components/ui/carousel-page';
import { activities } from '@/lib/utils';

const SportPage = () => {

  const deportiva = activities[0];

  return (
    <section className='container mx-auto mt-32'>
      <BlurTitle word='Escuela Deportiva' />
        <div className='mt-10'>
          <CarouselPage images={deportiva.images} />
          <p className='text-lg text-primary-dark-gray mt-12 text-justify'>{deportiva.description}</p>

          <h3 className='mt-5 text-xl md:text-2xl text-primary-blue mb-3 uppercase'>Las opciones abarcan las siguientes disciplinas:</h3>
          
          <ul className='ml-10 mb-4'>
            {deportiva.sports?.map(sport => (
              <li className='text-slate-900 md:text-lg list-disc my-1' key={sport}>{sport}</li>
            ))}
          </ul>
            
          <p className='italic text-slate-600'>Recordá que no hace falta ser alumno del colegio para poder participar.</p>

          <div className='px-3 my-5 text-center bg-primary-light-blue p-3 rounded-md'>
            <a className='underline underline-offset-2  text-white text-lg md:text-xl md:hover:opacity-60 transition' href="/horarios2024.pdf" download={true}>Descargar horarios de actividades 2024</a>
          </div>
          
          <div className="group my-12 text-center px-3 md:hover:opacity-75 ">
            <Button variant="link">
              <a href='https://www.facebook.com/people/Instituto-San-Pablo-Escuela-Deportiva-Lujan-de-Cuyo/100069651686072/' target='_blank'>
                En este link podrás ver actividades relacionadas
              </a>
            </Button>
          </div>
        </div>
    </section>
  )
};

export default SportPage