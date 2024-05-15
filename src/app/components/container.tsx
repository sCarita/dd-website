import clsx from "clsx";

type props = {
  children: React.ReactNode
  className?: string
}

const maxWidth = {
  sm: '640px',     // @media (min-width: 640px)
  md: '768px',     // @media (min-width: 768px)
  lg: '1024px',    // @media (min-width: 1024px)
  xl: '1280px',    // @media (min-width: 1280px)
  '2xl': '1357px', // @media (min-width: 1536px)
}

export default function Container({children ,className}: props) {
  return (
    <div className={clsx(
      `flex flex-col md:flex-row w-full mx-auto px-4 gap-20 sm:max-w-[${maxWidth.sm}] md:max-w-[${maxWidth.md}] lg:max-w-[${maxWidth.lg}] xl:max-w-[${maxWidth.xl}] 2xl:max-w-[${maxWidth['2xl']}]`, 
      className)
    }>
      {children}
    </div>
  );
}
