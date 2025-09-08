"use client";

import Link from 'next/link';
import { indexImgs } from '@/lib/utils';
import { CarouselPage } from '@/components/ui/carousel-page';

export const Hero = () => {


  return (
    <section className="mt-32 bg-white">
      <div className="mx-auto text-gray-600 items-center justify-between overflow-hidden flex flex-col lg:flex-row gap-5 w-full">
        <div className="flex flex-col justify-center items-center w-full space-y-10 max-w-3xl mx-auto mb-5 text-center">
          <h1 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
            Potenciamos el <span className='text-primary-light-blue'>aprendizaje</span> para asegurar un mejor <span className='text-primary-light-blue'>futuro</span>
          </h1>

          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0 z-40">
            <Link href="/nosotros" className="block py-2 px-4 text-center text-white font-medium bg-primary-blue duration-150 hover:bg-primary-light-blue active:bg-primary-blue rounded-lg shadow-lg hover:shadow-none">
              Conocenos
            </Link>
            <a href='mailto:info@instituto-sanpablo.com' className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-primary-light-blue font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
              Escribinos
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <CarouselPage images={indexImgs} />
    </section>
  )
}
