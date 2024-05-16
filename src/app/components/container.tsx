import clsx from "clsx";

type props = {
  children: React.ReactNode
  className?: string
}

export default function Container({children ,className}: props) {
  return (
    <div className={clsx(
      `flex flex-col md:flex-row w-full mx-auto px-6 gap-20 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1357px]`, 
      className)
    }>
      {children}
    </div>
  );
}
