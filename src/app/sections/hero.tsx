import Section from '../components/section'
import Container from '../components/container'
import Button from '../components/button'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import TechBox from '../components/techBox'
import { imagesRight, imagesLeft, imagesTop, imagesBottom } from '../utils/tech'

const nav = [
  {
    src: 'tech/ainative.svg',
    label: 'ai // native',
    category: 'ai_native'
  },
  {
    src: 'tech/aivoice.svg',
    label: 'ai // voice',
    category: 'ai_voice'
  },
  {
    src: 'tech/data.svg',
    label: 'data',
    category: 'data'
  },
  {
    src: 'tech/Devops.svg',
    label: 'devops',
    category: 'devops'
  },
  {
    src: 'tech/AI Vision.svg',
    label: '_ai vision',
    category: 'ai_vision'
  },
  {
    src: 'tech/AI LLMs.svg',
    label: '_ai text',
    category: 'ai_text'
  },
  {
    src: 'tech/DATA VIZ.svg',
    label: 'apps',
    category: 'apps'
  },
  {
    src: 'tech/APPS.svg',
    label: 'data_viz',
    category: 'data viz'
  }
]

export default function Hero() {
  const menuRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState<string | undefined>()

  const handleActiveCategoy = (category: Array<string>) => {
    if (!activeCategory) return {}

    if (activeCategory && activeCategory !== category[0]) {
      return { filter: 'contrast(20%)' }
    }
  }

  const isActiveCategoy = (category: string) => {
    if (!activeCategory) return {}

    if (activeCategory && activeCategory !== category) {
      return { color: 'gray' }
    }

    return {}
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node))
      setActiveCategory(undefined)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <Section className="max-md:mb-0 max-md:pb-0">
      <Container className="relative">
        <div
          ref={menuRef}
          className="nav-menu hidden lg:flex absolute right-0 top-12 flex-col gap-3 px-6 items-end font-basis text-lg font-light"
        >
          {nav.map((item, i) => (
            <div
              key={i}
              className={`flex gap-2 justify-center items-center cursor-pointer overflow-hidden`}
              style={isActiveCategoy(item.category)}
              onClick={() => setActiveCategory(item.category)}
            >
              <span
                className="nav-item-label"
                style={{ transform: activeCategory ? 'translateX(0)' : '' }}
              >
                {item.label}
              </span>
              <Image
                src={`/${item.src}`}
                alt="Diffusion Dynamics"
                width={35}
                height={35}
                className={`invert dark:invert-0 bg-black dark:bg-black`}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center relative m-auto md:h-[250px] md:mt-32 md:mb-24">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/dd_logo.svg"
              alt="Diffusion Dynamics"
              width={220}
              height={220}
              className="max-w-full invert dark:invert-0"
            />
            <p className="text-xl font-light">Let&apos;s plant your flag ...</p>
            <Button className="bg-white dark:bg-black">Get in touch</Button>
          </div>

          {/* SIDES */}
          <div className="hidden md:grid absolute right-[-80%] top-[-35%] grid-cols-3 gap-x-3">
            {imagesRight.map((img, i) => (
              <div
                className={`relative group ${img.x} ${img.y} ${img.row} ${img.col}`}
                style={{ zIndex: 100 - i }} // ensure z-index is higher than the other images, and the groups to the right
                key={i}
              >
                <div className={`w-[40px] h-[40px] transform ${img.scale}`}>
                  <Image
                    src={`/${img.src}`}
                    alt="Diffusion Dynamics"
                    width={40}
                    height={40}
                    className={`floating-image invert dark:invert-0`}
                    style={handleActiveCategoy(img.categories)}
                  />
                </div>

                <TechBox
                  className={`group-hover:flex hidden absolute top-10 left-10`}
                  title={img.info.title}
                  description={img.info.description}
                  category={img.categories[0]}
                  tech={img.info.tech}
                />
              </div>
            ))}
          </div>

          <div className="hidden md:grid absolute left-[-77%] bottom-[-40%] grid-cols-3 gap-x-3">
            {imagesLeft.map((img, i) => (
              <div
                className={`relative group ${img.x} ${img.y} ${img.row} ${img.col}`}
                style={{ zIndex: 1000 - i }} // ensure z-index is higher than the other images, and the groups to the right
                key={i}
              >
                <div className={`w-[40px] h-[40px] transform ${img.scale}`}>
                  <Image
                    src={`/${img.src}`}
                    alt="Diffusion Dynamics"
                    width={40}
                    height={40}
                    className={`floating-image invert dark:invert-0`}
                    style={handleActiveCategoy(img.categories)}
                  />
                </div>

                <TechBox
                  className={`group-hover:flex hidden absolute top-10 left-10`}
                  title={img.info.title}
                  description={img.info.description}
                  category={img.categories[0]}
                  tech={img.info.tech}
                />
              </div>
            ))}
          </div>

          {/* VERTICAL */}
          <div className="hidden md:grid absolute top-[-55%] left-[-60%] ml-[50%] grid-cols-3 gap-x-3">
            {imagesTop.map((img, i) => (
              <div
                className={`relative group ${img.x} ${img.y} ${img.row} ${img.col}`}
                style={{ zIndex: 1000 - i }} // ensure z-index is higher than the other images, and the groups to the right
                key={i}
              >
                <div className={`w-[40px] h-[40px] transform ${img.scale}`}>
                  <Image
                    src={`/${img.src}`}
                    alt="Diffusion Dynamics"
                    width={40}
                    height={40}
                    className={`floating-image invert dark:invert-0`}
                    style={handleActiveCategoy(img.categories)}
                  />
                </div>

                <TechBox
                  className={`group-hover:flex hidden absolute top-10 left-10`}
                  title={img.info.title}
                  description={img.info.description}
                  category={img.categories[0]}
                  tech={img.info.tech}
                />
              </div>
            ))}
          </div>

          <div className="hidden md:grid absolute bottom-[-45%] right-[-40%] grid-cols-4 gap-x-3">
            {imagesBottom.map((img, i) => (
              <div
                className={`relative group ${img.x} ${img.y} ${img.row} ${img.col}`}
                style={{ zIndex: 100 - i }} // ensure z-index is higher than the other images, and the groups to the right
                key={i}
              >
                <div className={`w-[40px] h-[40px] transform ${img.scale}`}>
                  <Image
                    src={`/${img.src}`}
                    alt="Diffusion Dynamics"
                    width={40}
                    height={40}
                    className={`floating-image invert dark:invert-0`}
                    style={handleActiveCategoy(img.categories)}
                  />
                </div>

                <TechBox
                  className={`group-hover:flex hidden absolute top-10 left-10`}
                  title={img.info.title}
                  description={img.info.description}
                  category={img.categories[0]}
                  tech={img.info.tech}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
