import Link from 'next/link';
import {BsTelephone} from 'react-icons/bs';
import {CiMail} from 'react-icons/ci';
import {TfiLocationPin} from 'react-icons/tfi';

export const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='relative w-full bg-primary-blue px-3 py-3'>
      <div className="container mx-auto relative grid md:grid-cols-4 items-center justify-items-center gap-1">
        <div className='flex justify-center h-20 gap-3 mt-5'>
          <img src='/assets/logos/50anios.svg' alt='logo' width={150} height={100} className='w-full h-full' />
          <a href="https://www.lamennais.org/es/" target='_blank' className='cursor-pointer w-full md:hover:opacity-70'>
            <img src='/assets/logos/laMennaisLogo.svg' alt='logo' width={150} height={100} className='w-full h-full' />
          </a>
        </div>
        
            {/* Direction */}
            <div className='flex items-center text-slate-300 gap-2 p-2'>
              <span> <TfiLocationPin fontSize={25} /> </span>
              <p>San Martín 1425 - Mayor Drummond / Luján de Cuyo - Mendoza</p>
            </div>
            {/* Phones */}
            <div className='flex items-center text-slate-300 gap-2 p-2'>
              <span> <BsTelephone fontSize={20} /> </span>
              <div className='flex flex-col'>
                <a href='tel:+54 261 498 0403' className='hover:opacity-75'>+54 261 498 0403</a>
                <a href='tel:+54 261 488 0001' className='hover:opacity-75'>+54 261 488 0001</a>
              </div>
            </div>
            {/* Mail */}
            <div className='flex items-center text-slate-300 gap-2 p-2'>
              <span><CiMail fontSize={25} /></span>
              <a href='mailto:info@instituto-sanpablo.com' className='hover:opacity-75'>info@instituto-sanpablo.com</a>
            </div>
      </div>
  
      <p className="text-slate-300 text-center">
        <span> © {year}. 
        </span>
        Todos los derechos reservados. <br className='block lg:hidden' /> Desarrollado por 
          <Link href='https://www.amn.com.ar' target={'_blank'} className='capitalize underline ml-0.5 text-slate-400 md:hover:opacity-60'
          > amn consultora informática
          </Link> </p>
    </footer>
  )
}
