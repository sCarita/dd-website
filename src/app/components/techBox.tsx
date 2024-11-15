import clsx from 'clsx'

type props = {
  className?: string
  title: string
  description: string
  category: string
  tech?: {
    title: string
    image: JSX.Element
  }[]
}

export default function TechBox({ className, title, description, category, tech }: props) {
  return (
    <div
      className={clsx(
        `flex flex-col pt-1 pb-6 px-6 min-w-[200px] bg-[#CFCFCF] text-xs text-black bg-[url('/tech/background.svg')]`,
        className
      )}
    >
      <h3 className="font-favorit font-light uppercase">
        {category} / {title}
      </h3>
      <p className="font-basis font-bold mt-1">{description}</p>
      {tech && (
        <div className="flex flex-col">
          <p className="font-basis font-black mt-3.5 text-[10px] uppercase">Alongside</p>
          <div className="flex items-center gap-1">
            {tech.map((item) => (
              <>
                <div className="invert">{item.image}</div>
                <div className="font-favorit text-[9px] uppercase">{item.title}</div>
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
