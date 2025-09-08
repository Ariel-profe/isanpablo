import { BlurTitle } from '@/components/ui/blur-title';
import { GlobalCard } from '@/components/ui/global-card';

const AdminPage = () => {
  return (
    <section className='container mx-auto mt-32'>
      <BlurTitle word="Administración" />
      <div className='mt-10'>
          <p className='text-xl md:text-2xl text-primary-blue'>Horarios de atención: <span className=''>de 7:30 a 12:00 hs de lunes a viernes</span></p>
          <div className='p-3 mt-5 rounded-xl'>
            <h4 className='mb-3 text-lg md:text-xl text-primary-light-blue'>En el colegio sólo se cobran cuotas vencidas, recibimos:</h4>
            <ul className='list-disc ml-10 text-lg md:text-xl text-slate-600'>
              <li>Efectivo</li>
              <li>Tarjetas</li>
              <li>Cheques</li>
            </ul>
          </div>
          <div>
          
          <div className='p-3 mt-5 rounded-xl'>

          <h4 className='mt-5 text-lg md:text-xl mb-3 text-primary-light-blue'>Los medios de pago externos son:</h4>
            <p className='lg:text-lg text-slate-600'>- Débito automático en cuenta: quienes hayan proporcionado previamente los datos en la administración del colegio o lo hayan enviado por mail. Los descuentos se realizan 1 única vez, los días 5 de cada mes aprox.
            </p>
              <ul className='list-disc ml-10'>
                <li>CBU (Compartido desde Home Banking)</li>
                <li>DNI del titular de la cuenta</li>
              </ul>

            <p className='lg:text-lg mt-2 text-slate-600'>- Descuento en tarjeta de crédito: quienes hayan proporcionado previamente los datos en la administración del colegio o lo hayan enviado por mail.
            </p>
              <ul className='list-disc ml-10'>
                <li>TARJETA DE CRÉDITO VISA</li>
                <li>DNI del titular de la tarjeta</li>
              </ul>
           
            <p className='lg:text-lg mt-2 text-slate-600'>- “PAGOMISCUENTAS”: Buscar en rubro <span className='font-semibold'>“Establecimientos Educativos”  -  “San Pablo Mendoza”</span> y cargar el código identificatorio que aparece en la factura.</p>

            <p className='lg:text-lg mt-2 text-slate-600'>- Pago fácil (cupón mes en curso).</p>
          </div>
        </div>
        <div className='grid md:grid-cols-2 mx-auto items-center gap-3 py-12'>
          {/* Facebook */}
          <GlobalCard
           href="https://www.facebook.com/profile.php?id=100063448822390"
           title="Facebook"
           subtitle='Administración'
           desc="Haz click para ir"
           img="/assets/logos/rrss.jpg"
           isExternal
         />
          {/* Intranet */}
          <GlobalCard
           href="https://docs.google.com/forms/d/e/1FAIpQLSfADQikus7GGW-0ZTMTzQQG27uwxhItuFIO8TpgAC652fdPtw/viewform"
           title="Intranet"
           subtitle='Administración'
           desc="Actualizar tu ficha de datos personales"
           img="/assets/logos/internet.webp"
           isExternal
         />
        </div>
      </div>
    </section>
  )
}

export default AdminPage