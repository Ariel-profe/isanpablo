"use client";

import { Accordion } from '@/components/ui/accordion';
import { BlurTitle } from '@/components/ui/blur-title';

const AboutPage = () => {

  return (
    <section className='container mx-auto mt-32'>
      <BlurTitle word="Sobre nosotros" />

      <Accordion />

      <div className='flex justify-center'>
        <img src={'/assets/global/organigrama.png'} alt='organigrama' className='w-full' />
      </div>
    </section>
  )
}

export default AboutPage