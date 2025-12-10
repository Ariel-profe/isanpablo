
import React from 'react'
import { GlobalCard } from '../ui/global-card'

export const Contracts = () => {
  return (
    <>
      <p className="text-center text-base/7 font-semibold text-primary-light-blue">Enlaces de utilidad</p>
      <h2 className="mx-auto mt-2 mb-10 max-w-xl text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
        Descargas y solicitudes para el <span className='text-primary-light-blue'> ciclo lectivo 2025/2026</span>
      </h2>
      <div className='grid sm:grid-cols-2 gap-4 pb-10'>
        <GlobalCard
          href="/assets/contrato2025.pdf"
          title="Contrato educativo ciclo lectivo 2025"
          desc="Descarga el archivo en formato PDF"
          img="/assets/homepage/contrato.jpg"
          isDownloadble={true}
          isExternal
        />

        <GlobalCard
          href="https://forms.gle/VCq2GBUsbrCp5AmF6"
          title="Solicitud de vacante 2026"
          img="/assets/homepage/vacante.jpg"
          desc="Te esperamos para vivir juntos tu camino a la excelencia"
          isExternal
        />
      </div>
    </>
  )
}