import Link from "next/link";

interface Props {
    img: string;
    href: string;
    title: string;
    desc: string;
    isExternal?: boolean;
    isDownloadble?: boolean;
}

export const GlobalCard = ({img, href, title, desc, isExternal = false, isDownloadble = false}:Props) => {
  return (
    <Link 
      href={href} 
      target={isExternal ? '_blank' : '_self'} 
      className="group grid grid-cols-2 rounded focus:outline-none lg:hover:outline outline-slate-100 transition w-full"
      download={isDownloadble}
    >
      <div className="relative lg:h-full min-h-[50px] overflow-hidden w-full">
        <img className="h-52 w-full object-cover lg:group-hover:scale-105 transition overflow-hidden" src={img}  alt={`imagen-${title}`} />
      </div>

      <div className="h-full">
        <div className="p-4 flex flex-col h-full">
          <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-primary-light-blue group-focus:text-primary-light-blue dark:text-neutral-300 dark:group-hover:text-white dark:group-focus:text-white capitalize">
          {title}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-neutral-400">
            {desc}
          </p>
        </div>
      </div>
    </Link>
  )
}
