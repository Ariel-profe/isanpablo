
import { Button } from '@/components/ui/button';
import { BlurTitle } from '@/components/ui/blur-title';
import { CarouselPage } from '@/components/ui/carousel-page';
import { levels } from '@/lib/utils';
import { GlobalCard } from '@/components/ui/global-card';
import { EstudiarMejor } from '@/components/estudiar-mejor';

const SecundariaPage = () => {

  const secundaria = levels[2];

  return (
    <section className='container mx-auto mt-32'>
      <BlurTitle word="Nivel Secundario" />
      <div className='mt-10'>
        <CarouselPage images={secundaria.images} />
        <div className='mb-10 lg:mb-20'>
          <p className='text-lg text-primary-dark-gray mt-12 text-justify'>{secundaria.description}</p>
          <div className='flex flex-col mt-12 text-lg text-primary-blue uppercase'>
            <span>{secundaria.range}</span>
            <span>{secundaria.turns}</span>
          </div>

          <EstudiarMejor />

          <div className='flex flex-col mt-12'>
            <span className='text-primary-blue text-xl md:text-2xl uppercase'>orientaciones:</span>
            <span className='md:text-lg text-primary-dark-gray capitalize mt-2'>{secundaria.orientation![1]}</span>
            <span className='md:text-lg text-primary-dark-gray capitalize'>{secundaria.orientation![0]}</span>

            <div className='flex flex-col md:flex-row gap-3 mt-4 bg-slate-300 p-3 font-bold text-justify'>
              <p >La DGE establece que los padres podrán acceder al GEM para realizar el seguimientos académico de sus hijos y otros trámites:</p>
              <a className='underline text-primary-light-blue' href="/gem_manual_padres.pdf" download={true}>Descargar manual de padres aquí</a>
            </div>
          </div>
        </div>

        <GlobalCard
          href="https://forms.gle/VCq2GBUsbrCp5AmF6"
          title="Solicitud de vacante 2026"
          subtitle="Vacante"
          img="/assets/homepage/vacante.jpg"
          desc="Te esperamos para vivir juntos tu camino a la excelencia"
          isExternal
        />

        <div className='my-12'>
          <h3 className='text-2xl md:text-3xl text-primary-blue uppercase underline'>horarios de consulta</h3>
          <p className='text-lg text-primary-dark-gray my-5'>Para una mejor organización y atención de calidad en las consultas, tanto de docentes como de directivos, se recomienda a los padres solicitar con anticipación sus entrevistas y esperar la confirmación de la misma.</p>
          <p className='text-xl text-primary-dark-gray my-5 italic'>Los horarios de consultas se deben ver con docentes de aula y especiales.</p>
          <span className='text-lg text-primary-red'>En caso de URGENCIAS consultar a dirección.</span>
        </div>

        <div className="group my-12 text-center md:hover:opacity-75 ">
          <Button variant="link">
            <a href='https://www.facebook.com/profile.php?id=100064060183662' target='_blank'>
              En este link podrás ver actividades relacionadas
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SecundariaPage