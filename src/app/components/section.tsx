import clsx from 'clsx'

type props = {
  children: React.ReactNode
  className?: string
}

export default function Section({ children, className }: props) {
  return (
    <section className={clsx('flex flex-col w-full my-12 py-12 md:my-20 md:py-20', className)}>
      {children}
    </section>
  )
}
