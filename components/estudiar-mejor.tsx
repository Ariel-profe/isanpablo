
export const EstudiarMejor = () => {
    return (
        <div className='my-8'>
            <h3 className='text-2xl md:text-3xl text-primary-blue uppercase underline'>A organizarse</h3>


            <div className='mt-5 '>
                <p className="text-lg text-primary-dark-gray">
                    Al momento de estudiar es necesario saber que cada uno de nosotros tiene diferentes modos de aprender, por lo tanto es importante que podamos conocernos a nosotros mismos y ver si las herramientas que utilizamos nos sirven o debemos buscar nuevas maneras para aprender.
                </p>
                <h5 className='mt-3'>Conozcamos cómo aprendemos y qué estrategias nos sirven en cada momento:</h5>
                
                <div className="grid sm:grid-cols-2">
                    <img src="/assets/global/estudiar-mejor.png" alt="estudiar-mejor" />
                    <img src="/assets/inicial/estudiando.jpg" alt="estudiar-mejor" />
                </div>
            </div>

            <div className='mt-5 text-lg text-primary-dark-gray'>
                <ul className='list-disc list-inside mt-3 space-y-2 text-justify'>
                    <li>Organiza tu tiempo y materiales para evitar pérdida de motivación. Usa tu calendario Google para agendar tareas y evaluaciones.</li>
                    <li>Estudia lejos del celular, TV o radio, te permitirá sostener la atención en el tiempo sin distracciones.</li>
                    <li>Al momento de sentarse a estudiar comienza con lo más difícil y termina con lo más fácil, ya que al principio es más rápida la incorporación de información porque estamos con más energía.</li>
                    <li>Comienza estudiando 30 minutos e incorpora por semana 15 min. hasta llegar a las 2 hs. Es cuestión de entrenamiento como un deporte.</li>
                    <li>No te olvides de descansar, es importante que en esos momentos nuestra cabeza se despeje salí a caminar, hace un deporte, come algo. No se recomienda quedarnos en la computadora porque así continuas haciendo un esfuerzo mental y no descansas.</li>
                    <li>Revisa Classroom y GEM para conocer tus calificaciones.</li>
                </ul>
            </div>
        </div>
    )
}
