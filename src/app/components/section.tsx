import clsx from "clsx";

type props = {
    children: React.ReactNode
    className?: string
}

export default function Section({children, className}: props) {
  return (
    <section className={clsx('flex flex-col w-full my-20 py-20', className)}>
        {children}
    </section>
  );
}
