import clsx from "clsx";

type props = {
    children: React.ReactNode
    className?: string
}

export default function Button({children, className}: props) {
  return (
    <button className={clsx('flex py-2 px-6 border-2 border-white text-2xl font-bold rounded-xl', className)}>
        {children}
    </button>
  );
}