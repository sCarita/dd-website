import clsx from 'clsx'

type props = {
  className?: string
  title: string
  description: string
  tech?: JSX.Element[]
}

export default function TechBox({ className, title, description, tech }: props) {
  return (
    <div className={clsx(`flex flex-col p-5 min-w-[200px] bg-[#CFCFCF]`, className)}>
      <h3 className="text-base font-light">{title}</h3>
      <p className="text-xs font-bold mt-1">{description}</p>
      {tech && (
        <>
          <p className="text-xs mt-5">Used with:</p>
          <div className="flex flex-row gap-2">{tech.map((item) => item)}</div>
        </>
      )}
    </div>
  )
}
