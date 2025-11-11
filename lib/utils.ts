import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {BsTelephone} from 'react-icons/bs';
import {CiMail} from 'react-icons/ci';
import {TfiLocationPin} from 'react-icons/tfi';

import { IContact, IActivity, ILevel } from "@/interfaces";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};


export const contact:IContact[] = [
  {
      id: 1,
      title: 'San Martín 1425 - Mayor Drumond / Luján de Cuyo - Mendoza ',
      icon: TfiLocationPin
  },
  {
      id: 2,
      title: ['+54 261 498 0403', '+54 261 562 0386', '+54 261 562 0387', '+54 261 562 0388'],
      icon: BsTelephone
  },
  {
      id: 3,
      title: 'info@isanpablo.com',
      icon: CiMail
  }
];

export const indexImgs = [
    {
        id: 1,
        img: '/assets/sliders/slider1.webp'
    },
    {
        id: 2,
        img: '/assets/sliders/slider2.webp'
    },
    {
        id: 3,
        img: '/assets/sliders/slider3.webp'
    }
];

export const levels:ILevel[] = [
    {
        id: 1,
        title: 'inicial',
        cardDesc: 'Abarca la atención y educación que se ofrecen a los niños y las niñas desde el nacimiento hasta los 6 años desde distintas estrategias educativas',
        description: `Nuestra propuesta educativa ofrece los medios para que nuestros pequeños adquieran el tesoro de los conocimientos científicos, pero sobre todo los formamos en su dimensión espiritual, reafirmando valores propios, morales y religiosos para establecer relaciones interpersonales más profundas y esperanzadas en el futuro. Los Hermanos Menesianos, junto a la comunidad educativa, trabajamos cotidianamente en las inquietudes de toda la familia que desea vivir la vida cristiana de un modo más activo y comprometido.`,
        url: '/niveles/inicial',
        range: 'sala de 3 y 4 años',
        turns: 'Turno mañana y tarde',
        mainImg: '/assets/inicial/mainImg.webp',
        images: [
            {
                id: 1,
                img: '/assets/inicial/inicial1.webp'
            }, 
            {
                id: 2,
                img: '/assets/inicial/inicial2.webp'
            }, 
            {
                id: 3,
                img: '/assets/inicial/inicial3.webp'
            }, 
            {
                id: 4,
                img: '/assets/inicial/inicial4.webp'
            }, 
        ]
    },
    {
        id: 2,
        title: 'primaria',
        cardDesc: 'Segundo tramo educativo de los sistemas nacionales de educación y forma parte del tramo de educación básica',
        description: 'Nuestra propuesta educativa ofrece los medios para que nuestros pequeños adquieran el tesoro de los conocimientos científicos, pero sobre todo los formamos en su dimensión espiritual, reafirmando valores propios, morales y religiosos para establecer relaciones interpersonales más profundas y esperanzadas en el futuro. Los Hermanos Menesianos, junto a la comunidad educativa, trabajamos cotidianamente en las inquietudes de toda la familia que desea vivir la vida cristiana de un modo más activo y comprometido.',
        url: '/niveles/primaria',
        range: '1º a 7º grado',
        turns: 'Turno mañana',
        mainImg: '/assets/primaria/mainImg.jpg',
        images: [
            {
                id: 1,
                img: '/assets/primaria/primaria1.webp'
            }, 
            {
                id: 2,
                img: '/assets/primaria/primaria2.webp'
            }, 
            {
                id: 3,
                img: '/assets/primaria/primaria3.webp'
            }
        ]
    },
    {
        id: 3,
        title: 'secundaria',
        cardDesc: 'Tercer tramo educativo de los sistemas nacionales de educación',
        description: 'Nuestra propuesta educativa ofrece los medios para que nuestros pequeños adquieran el tesoro de los conocimientos científicos, pero sobre todo los formamos en su dimensión espiritual, reafirmando valores propios, morales y religiosos para establecer relaciones interpersonales más profundas y esperanzadas en el futuro. Los Hermanos Menesianos, junto a la comunidad educativa, trabajamos cotidianamente en las inquietudes de toda la familia que desea vivir la vida cristiana de un modo más activo y comprometido.',
        url: '/niveles/secundaria',
        range: '1º a 5º año',
        turns: 'Turno mañana',
        mainImg: '/assets/secundaria/mainImg.jpg',
        orientation: [
            'bachillerato con orientación en informática',
            'bachillerato con orientación en ciencias naturales'
        ],
        images: [
            {
                id: 1,
                img: '/assets/secundaria/secundaria1.webp'
            }, 
            {
                id: 2,
                img: '/assets/secundaria/secundaria2.webp'
            }, 
            {
                id: 3,
                img: '/assets/secundaria/secundaria3.webp'
            }, 
            {
                id: 4,
                img: '/assets/secundaria/secundaria4.webp'
            }, 
            {
                id: 5,
                img: '/assets/secundaria/secundaria5.webp'
            }
        ]
    },
];

export const activities:IActivity[] = [
    {
        id: 1,
        title: 'escuela deportiva',
        url: '/actividades/escuela-deportiva',
        description: 'Complementando nuestra oferta educativa, desde el año 2013, ofrecemos a nuestros alumnos y a la comunidad de Luján de Cuyo la posibilidad de realizar actividades deportivas en  nuestra institución. Con el propósito de interiorizar y perfeccionar las habilidades  técnico- deportivo específicas de las disciplinas, favoreciendo un espíritu de sana competencia, fomentando la vivencia de valores y promoviendo la salud física y mental.',
        sports: ['Básquet masculino y femenino (federado): + 4 años', 'Futsal masculino (federado): + 4 años', 'Futsal femenino (federado): + 4 años', 'Danzas urbanas - Free Dance - Hip Hop: + 4 años', 'Taekwondo ITF: + 4 años', 'Iniciación deportiva: 4 y 5 años', 'Multideporte: de 6 a 10 años'],
        mainImg: '/assets/deportiva/mainImg.webp',
        images: [
            {
                id: 1,
                img: '/assets/deportiva/deportiva1.webp'
            }, 
            {
                id: 2,
                img: '/assets/deportiva/deportiva2.webp'
            }, 
            {
                id: 3,
                img: '/assets/deportiva/deportiva3.webp'
            }, 
            {
                id: 4,
                img: '/assets/deportiva/deportiva4.webp'
            }, 
        ]
    },
    // {
    //     id: 2,
    //     title: 'escuela de arte',
    //     url: '/actividades/escuela-de-arte',
    //     description: 'Una vez más, la comunidad menesiana da respuestas a las necesidades  artísticas del departamento de Luján de Cuyo, destinando un espacio para que niños, adolescentes, jóvenes y adultos se encuentren con el arte en sus diferentes lenguajes estéticamente comunicables como la música, danza, teatro, artes visuales y multimediales. El desafío será  crear la primera  Escuela Artística de gestión privada en la Provincia, manteniendo  la misión al estilo de Juan María De la Mennais "Formar y acompañar a niños y jóvenes en su educación integral para que sean y se sientan capaces de transformar su entorno y la sociedad desde el respeto, la solidaridad, la empatía, la sensibilidad social y el amor"',
    //     sports: ['Piano', 'Teclado', 'Guitarra', 'Guitarra electrica', 'Bajo eléctrico', 'Ukelele', 'Canto', 'Coro', 'Teatro', 'Artes visuales', 'Iniciacion artística desde los 3 años', 'Batería', 'Percusión', 'Danzas', 'Fotografía', 'Y más...'],
    //     mainImg: '/assets/arte/mainImg.png',
    //     images: [
    //         {
    //             id: 1,
    //             img: '/assets/arte/artistica1.webp'
    //         }
    //     ]
    // },
];

export const pastoral = {
    images: [
        {
            id: 1,
            img: '/assets/pastoral/pastoral1.webp'
        }, 
        {
            id: 2,
            img: '/assets/pastoral/pastoral2.webp'
        },
        {
            id: 3,
            img: '/assets/pastoral/pastoral3.webp'
        },
        {
            id: 4,
            img: '/assets/pastoral/pastoral4.webp'
        },
        {
            id: 5,
            img: '/assets/pastoral/pastoral5.webp'
        },
        {
            id: 6,
            img: '/assets/pastoral/pastoral6.webp'
        },
        {
            id: 7,
            img: '/assets/pastoral/pastoral7.webp'
        },
    ]
}
