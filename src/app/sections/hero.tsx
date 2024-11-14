import Section from '../components/section'
import Container from '../components/container'
import Button from '../components/button'
import Image from 'next/image'
import { useState } from 'react'

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
    src: 'tech/box3d-three-points.svg',
    label: 'devops',
    category: 'devops'
  },
  {
    src: 'tech/box3d-three-points.svg',
    label: '_ai vision',
    category: 'ai_vision'
  },
  {
    src: 'tech/box3d-three-points.svg',
    label: '_ai text',
    category: 'ai_text'
  },
  {
    src: 'tech/box3d-three-points.svg',
    label: 'apps',
    category: 'apps'
  },
  {
    src: 'tech/box3d-three-points.svg',
    label: 'data_viz',
    category: 'data viz'
  }
]

const imagesRight = [
  //row1
  {
    src: 'tech/box3d-three-points.svg',
    row: 'row-start-1',
    col: 'col-start-2',
    y: 'translate-y-2',
    x: '-translate-x-[50%]',
    categories: ['ai_native']
  },
  {
    src: 'tech/bridge-surface.svg',
    row: 'row-start-1',
    col: 'col-start-3',
    y: '',
    x: '-translate-x-[50%]',
    categories: ['ai_native']
  },
  //row2
  {
    src: 'tech/curve-array.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-4',
    x: '-translate-x-1',
    categories: ['ai_native']
  },
  {
    src: 'tech/fillet3d.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-1.5',
    x: '-translate-x-1.5',
    categories: ['ai_native']
  },
  {
    src: 'tech/one-point-circle.svg',
    row: 'row-start-2',
    col: '',
    y: '-translate-y-2',
    x: 'translate-x-1',
    categories: ['ai_native']
  },
  //row3
  {
    src: 'tech/pipe3d.svg',
    row: 'row-start-3',
    col: 'col-start-2',
    y: 'translate-y-2',
    x: '-translate-x-[50%]',
    categories: ['ai_native']
  },
  {
    src: 'tech/project-curve3d.svg',
    row: 'row-start-3',
    col: 'col-start-3',
    y: '',
    x: '-translate-x-[50%]',
    categories: ['ai_native']
  },
  //row4
  {
    src: 'tech/project-curve3d.svg',
    row: 'row-start-4',
    col: '',
    y: 'translate-y-4',
    x: 'translate-x-1',
    categories: ['ai_native']
  },
  {
    src: 'tech/sigma-function.svg',
    row: 'row-start-4',
    col: '',
    y: 'translate-y-1.5',
    x: 'translate-x-1.5',
    categories: ['ai_native']
  },
  {
    src: 'tech/spiral.svg',
    row: 'row-start-4',
    col: '',
    y: 'translate-y-2',
    x: 'translate-x-1',
    categories: ['ai_native']
  },
  //row5
  {
    src: 'gptIcon.svg',
    row: 'row-start-5',
    col: 'col-start-2',
    y: 'translate-y-2',
    x: '-translate-x-[50%]',
    categories: ['ai_native']
  },
  {
    src: 'tech/xray-view.svg',
    row: 'row-start-5',
    col: 'col-start-3',
    y: 'translate-y-1',
    x: '-translate-x-[30%]',
    categories: ['ai_native']
  },
  //row6
  {
    src: 'typescriptIcon.svg',
    row: 'row-start-6',
    col: 'col-start-2',
    y: 'translate-y-3',
    x: '-translate-x-[60%]',
    categories: ['ai_native']
  },
  {
    src: 'reactIcon.svg',
    row: 'row-start-6',
    col: 'col-start-3',
    y: '',
    x: '-translate-x-[60%]',
    categories: ['ai_native']
  }
]

const imagesLeft = [
  //row1
  {
    src: 'tech/box3d-three-points.svg',
    row: 'row-start-1',
    col: 'col-start-2',
    y: 'translate-y-2',
    x: '',
    categories: ['ai_voice']
  },
  //row2
  {
    src: 'tech/curve-array.svg',
    row: 'row-start-2',
    col: 'col-start-1',
    y: 'translate-y-4',
    x: 'translate-x-[50%]',
    categories: ['ai_voice']
  },
  {
    src: 'tech/fillet3d.svg',
    row: 'row-start-2',
    col: 'col-start-3',
    y: 'translate-y-1.5',
    x: '-translate-x-[50%]',
    categories: ['ai_voice']
  },
  //row3
  {
    src: 'tech/pipe3d.svg',
    row: 'row-start-3',
    col: '',
    y: 'translate-y-2',
    x: '-translate-x-[50%]',
    categories: ['ai_voice']
  },
  {
    src: 'tech/project-curve3d.svg',
    row: 'row-start-3',
    col: '',
    y: '',
    x: '-translate-x-1',
    categories: ['ai_voice']
  },
  //row4
  {
    src: 'tech/project-curve3d.svg',
    row: 'row-start-4',
    col: '',
    y: 'translate-y-4',
    x: '-translate-x-[100%]',
    categories: ['ai_voice']
  },
  {
    src: 'tech/sigma-function.svg',
    row: 'row-start-4',
    col: '',
    y: 'translate-y-1.5',
    x: '-translate-x-[50%]',
    categories: ['ai_voice']
  },
  {
    src: 'tech/spiral.svg',
    row: 'row-start-4',
    col: '',
    y: 'translate-y-2',
    x: '',
    categories: ['ai_voice']
  },
  //row5
  {
    src: 'gptIcon.svg',
    row: 'row-start-5',
    col: '',
    y: 'translate-y-4',
    x: '-translate-x-[50%]',
    categories: ['ai_voice']
  },
  {
    src: 'tech/xray-view.svg',
    row: 'row-start-5',
    col: '',
    y: 'translate-y-2',
    x: '-translate-x-[50%]',
    categories: ['ai_voice']
  },
  {
    src: 'tech/xray-view.svg',
    row: 'row-start-5',
    col: '',
    y: 'translate-y-3',
    x: 'translate-x-[30%]',
    categories: ['ai_voice']
  },
  //row6
  {
    src: 'gptIcon.svg',
    row: 'row-start-6',
    col: '',
    y: 'translate-y-3',
    x: 'translate-x-[50%]',
    categories: ['ai_voice']
  },
  {
    src: 'tech/xray-view.svg',
    row: 'row-start-6',
    col: '',
    y: 'translate-y-1',
    x: 'translate-x-[50%]',
    categories: ['ai_voice']
  },
  {
    src: 'tech/xray-view.svg',
    row: 'row-start-6',
    col: '',
    y: 'translate-y-3',
    x: 'translate-x-[80%]',
    categories: ['ai_voice']
  },
  //row7
  {
    src: 'typescriptIcon.svg',
    row: 'row-start-7',
    col: 'col-start-2',
    y: 'translate-y-3',
    x: '-translate-x-[20%]',
    categories: ['ai_voice']
  },
  {
    src: 'reactIcon.svg',
    row: 'row-start-7',
    col: 'col-start-3',
    y: 'translate-y-4',
    x: '-translate-x-[20%]',
    categories: ['ai_voice']
  }
]

const imagesTop = [
  //row1
  {
    src: 'tech/box3d-three-points.svg',
    row: 'row-start-1',
    y: '',
    x: '',
    categories: ['ai_text']
  },
  //row2
  {
    src: 'tech/project-curve3d.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-2',
    x: '-translate-x-5',
    categories: ['ai_text']
  },
  {
    src: 'tech/sigma-function.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-2',
    x: '-translate-x-5',
    categories: ['ai_text']
  },
  {
    src: 'tech/spiral.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-1.5',
    x: '-translate-x-5',
    categories: ['ai_text']
  },
  //row3
  {
    src: 'gptIcon.svg',
    row: 'row-start-3',
    col: '',
    y: 'translate-y-4',
    x: '',
    categories: ['ai_text']
  },
  {
    src: 'tech/xray-view.svg',
    row: 'row-start-3',
    col: '',
    y: 'translate-y-2',
    x: '',
    categories: ['ai_text']
  },
  {
    src: 'tech/xray-view.svg',
    row: 'row-start-3',
    col: '',
    y: 'translate-y-1',
    x: 'translate-x-3',
    categories: ['ai_text']
  }
]

const imagesBottom = [
  //row1
  {
    src: 'tech/project-curve3d.svg',
    row: 'row-start-1',
    col: '',
    y: 'translate-y-2',
    x: '',
    categories: ['ai_vision']
  },
  {
    src: 'tech/sigma-function.svg',
    row: 'row-start-1',
    col: '',
    y: '',
    x: '',
    categories: ['ai_vision']
  },
  {
    src: 'tech/spiral.svg',
    row: 'row-start-1',
    col: '',
    y: 'translate-y-1.5',
    x: '',
    categories: ['ai_vision']
  },
  //row2
  {
    src: 'gptIcon.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-4',
    x: '',
    categories: ['ai_vision']
  },
  {
    src: 'tech/xray-view.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-2',
    x: '',
    categories: ['ai_vision']
  },
  {
    src: 'tech/xray-view.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-1',
    x: '',
    categories: ['ai_vision']
  },
  {
    src: 'tech/xray-view.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-1',
    x: '',
    categories: ['ai_vision']
  },
  //row3
  {
    src: 'gptIcon.svg',
    row: 'row-start-3',
    col: 'col-start-3',
    y: '',
    x: '-translate-x-4',
    categories: ['ai_vision']
  },
  {
    src: 'tech/xray-view.svg',
    row: 'row-start-3',
    col: 'col-start-4',
    y: 'translate-y-2',
    x: '-translate-x-5',
    categories: ['ai_vision']
  }
]

export default function Hero() {
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

  return (
    <Section>
      <Container className="relative">
        <div
          onMouseLeave={() => setActiveCategory(undefined)}
          className="nav-menu absolute right-0 top-12 flex flex-col gap-3 items-end font-basis text-lg font-light"
        >
          {nav.map((item, i) => (
            <div
              key={i}
              className={`flex gap-2 justify-center items-center cursor-pointer overflow-hidden`}
              style={isActiveCategoy(item.category)}
              onClick={() => setActiveCategory(item.category)}
            >
              <span className="nav-item-label">{item.label}</span>
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

        <div className="flex justify-center items-center h-[250px] mt-32 mb-24 relative m-auto">
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
          <div className="absolute right-[-85%] top-[-35%] grid grid-cols-3 gap-x-3">
            {imagesRight.map((img, i) => (
              <div
                className={`w-[45px] h-[45px] transform ${img.x} ${img.y} ${img.row} ${img.col}`}
                key={i}
              >
                <Image
                  src={`/${img.src}`}
                  alt="Diffusion Dynamics"
                  width={45}
                  height={45}
                  className={`floating-image invert dark:invert-0`}
                  style={handleActiveCategoy(img.categories)}
                />
              </div>
            ))}
          </div>

          <div className="absolute left-[-85%] bottom-[-40%] grid grid-cols-3 gap-x-3">
            {imagesLeft.map((img, i) => (
              <div
                className={`w-[45px] h-[45px] transform ${img.x} ${img.y} ${img.row} ${img.col}`}
                key={i}
              >
                <Image
                  src={`/${img.src}`}
                  alt="Diffusion Dynamics"
                  width={45}
                  height={45}
                  className={`floating-image invert dark:invert-0`}
                  style={handleActiveCategoy(img.categories)}
                />
              </div>
            ))}
          </div>

          {/* VERTICAL */}
          <div className="absolute top-[-60%] left-[-60%] ml-[50%] grid grid-cols-3 gap-x-3">
            {imagesTop.map((img, i) => (
              <div
                className={`w-[45px] h-[45px] transform ${img.x} ${img.y} ${img.row} ${img.col}`}
                key={i}
              >
                <Image
                  src={`/${img.src}`}
                  alt="Diffusion Dynamics"
                  width={45}
                  height={45}
                  className={`floating-image invert dark:invert-0`}
                  style={handleActiveCategoy(img.categories)}
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-[-50%] right-[-40%] grid grid-cols-4 gap-x-3">
            {imagesBottom.map((img, i) => (
              <div
                className={`w-[45px] h-[45px] transform ${img.x} ${img.y} ${img.row} ${img.col}`}
                key={i}
              >
                <Image
                  src={`/${img.src}`}
                  alt="Diffusion Dynamics"
                  width={45}
                  height={45}
                  className={`floating-image invert dark:invert-0`}
                  style={handleActiveCategoy(img.categories)}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
