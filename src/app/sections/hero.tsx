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

const imagesRight = [
  //row1
  {
    src: 'tech/data-viz/HIGHCHARTS.svg',
    row: 'row-start-1',
    col: 'col-start-2',
    y: '',
    x: '-translate-x-[80%]',
    scale: '',
    categories: ['data viz']
  },
  {
    src: 'tech/data-viz/TRADINGVIEW.svg',
    row: 'row-start-1',
    col: 'col-start-3',
    y: '',
    x: '-translate-x-[50%]',
    scale: '',
    categories: ['data viz']
  },
  //row2
  {
    src: 'tech/apps/VUEJS.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-4',
    x: '-translate-x-1',
    scale: '',
    categories: ['apps']
  },
  {
    src: 'tech/data-viz/ECHARTS.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-1.5',
    x: '-translate-x-1.5',
    scale: '',
    categories: ['data viz']
  },
  {
    src: 'tech/data-viz/D3.svg',
    row: 'row-start-2',
    col: '',
    y: '-translate-y-2',
    x: 'translate-x-1',
    scale: '',
    categories: ['data viz']
  },
  //row3
  {
    src: 'tech/apps/TYPESCRIPT.svg',
    row: 'row-start-3',
    col: 'col-start-2',
    y: 'translate-y-2.5',
    x: '-translate-x-[70%]',
    scale: '',
    categories: ['apps']
  },
  {
    src: 'tech/data-viz/CHART.JS.svg',
    row: 'row-start-3',
    col: 'col-start-3',
    y: '',
    x: '-translate-x-[50%]',
    scale: '',
    categories: ['data viz']
  },
  //row4
  {
    src: 'tech/apps/TAILWIND.svg',
    row: 'row-start-4',
    col: '',
    y: 'translate-y-4',
    x: 'translate-x-1',
    scale: '',
    categories: ['apps']
  },
  {
    src: 'tech/apps/NODEJS.svg',
    row: 'row-start-4',
    col: '',
    y: 'translate-y-1.5',
    x: 'translate-x-1.5',
    scale: '',
    categories: ['apps']
  },
  {
    src: 'tech/apps/EXPRESSJS.svg',
    row: 'row-start-4',
    col: '',
    y: 'translate-y-2',
    x: 'translate-x-1',
    scale: '',
    categories: ['apps']
  },
  //row5
  {
    src: 'tech/apps/EXPO.svg',
    row: 'row-start-5',
    col: 'col-start-2',
    y: 'translate-y-2',
    x: '-translate-x-[50%]',
    scale: '',
    categories: ['apps']
  },
  {
    src: 'tech/apps/IOS.svg',
    row: 'row-start-5',
    col: 'col-start-3',
    y: 'translate-y-1',
    x: '-translate-x-[30%]',
    scale: '',
    categories: ['apps']
  },
  //row6
  {
    src: 'tech/apps/REACT-NATIVE.svg',
    row: 'row-start-6',
    col: 'col-start-2',
    y: 'translate-y-3',
    x: '-translate-x-[60%]',
    scale: '',
    categories: ['apps']
  },
  {
    src: 'tech/apps/ANDROID.svg',
    row: 'row-start-6',
    col: 'col-start-3',
    y: 'translate-y-2',
    x: '-translate-x-[50%]',
    scale: '',
    categories: ['apps']
  }
]

const imagesLeft = [
  //row1
  {
    src: 'tech/ai/LLAMA3.svg',
    row: 'row-start-1',
    col: 'col-start-2',
    y: 'translate-y-2',
    x: '',
    scale: '',
    categories: ['ai_text']
  },
  //row2
  {
    src: 'tech/ai/HUGGINGFACE.svg',
    row: 'row-start-2',
    col: 'col-start-1',
    y: 'translate-y-2',
    x: 'translate-x-[50%]',
    scale: '',
    categories: ['ai_vision']
  },
  {
    src: 'tech/ai/ANTROPHIC.svg',
    row: 'row-start-2',
    col: 'col-start-3',
    y: 'translate-y-1.5',
    x: '-translate-x-[50%]',
    scale: '',
    categories: ['ai_text']
  },
  //row3
  {
    src: 'tech/ai/TENSORFLOW.svg',
    row: 'row-start-3',
    col: '',
    y: 'translate-y-2',
    x: '-translate-x-[50%]',
    scale: '',
    categories: ['ai_native']
  },
  {
    src: 'tech/ai/GPT.svg',
    row: 'row-start-3',
    col: '',
    y: 'translate-y-2.5',
    x: '-translate-x-1',
    scale: '',
    categories: ['ai_text']
  },
  //row4
  {
    src: 'tech/ai/PYTORCH.svg',
    row: 'row-start-4',
    col: '',
    y: 'translate-y-4',
    x: '-translate-x-[100%]',
    scale: '',
    categories: ['ai_native']
  },
  {
    src: 'tech/ai/STABILITYAI.svg',
    row: 'row-start-4',
    col: '',
    y: 'translate-y-1.5',
    x: '-translate-x-[50%]',
    scale: 'scale-125',
    categories: ['ai_vision']
  },
  {
    src: 'tech/ai/RUNPOD.svg',
    row: 'row-start-4',
    col: '',
    y: 'translate-y-2',
    x: '-translate-x-3',
    scale: 'scale-150',
    categories: ['ai_vision']
  },
  //row5
  {
    src: 'tech/ai/KERAS.svg',
    row: 'row-start-5',
    col: '',
    y: 'translate-y-5',
    x: '-translate-x-[50%]',
    scale: 'scale-75',
    categories: ['ai_native']
  },
  {
    src: 'tech/ai/VOICECLONING.svg',
    row: 'row-start-5',
    col: '',
    y: 'translate-y-2',
    x: '-translate-x-[30%]',
    scale: '',
    categories: ['ai_voice']
  },
  {
    src: 'tech/ai/COMFYUI.svg',
    row: 'row-start-5',
    col: '',
    y: 'translate-y-3',
    x: 'translate-x-[30%]',
    scale: '',
    categories: ['ai_vision']
  },
  //row6
  {
    src: 'tech/ai/REPLICATE.svg',
    row: 'row-start-6',
    col: '',
    y: 'translate-y-4',
    x: 'translate-x-[50%]',
    scale: 'scale-75',
    categories: ['ai_vision']
  },
  {
    src: 'tech/ai/ELEVENLABS.svg',
    row: 'row-start-6',
    col: '',
    y: 'translate-y-3',
    x: 'translate-x-[50%]',
    scale: 'scale-125',
    categories: ['ai_voice']
  },
  {
    src: 'tech/ai/LAMBDALABS.svg',
    row: 'row-start-6',
    col: '',
    y: 'translate-y-3',
    x: 'translate-x-[80%]',
    scale: 'scale-125',
    categories: ['ai_vision']
  },
  //row7
  {
    src: 'tech/ai/SKLEARN.svg',
    row: 'row-start-7',
    col: 'col-start-2',
    y: 'translate-y-3',
    x: '-translate-x-[20%]',
    scale: '',
    categories: ['ai_native']
  },
  {
    src: 'tech/ai/MURFAI.svg',
    row: 'row-start-7',
    col: 'col-start-3',
    y: 'translate-y-4',
    x: '-translate-x-[20%]',
    scale: '',
    categories: ['ai_voice']
  }
]

const imagesTop = [
  //row1
  {
    src: 'tech/data/SNOWFLAKE.svg',
    row: 'row-start-1',
    y: '',
    x: '',
    scale: '',
    categories: ['data']
  },
  //row2
  {
    src: 'tech/data/FIREBASE.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-2',
    x: '-translate-x-5',
    scale: '',
    categories: ['data']
  },
  {
    src: 'tech/data/TIMESCALE.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-2',
    x: '-translate-x-5',
    scale: '',
    categories: ['data']
  },
  {
    src: 'tech/data/GRAFANA.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-1.5',
    x: '-translate-x-5',
    scale: '',
    categories: ['data']
  },
  //row3
  {
    src: 'tech/data/POSTGRES.svg',
    row: 'row-start-3',
    col: '',
    y: 'translate-y-4',
    x: '',
    scale: '',
    categories: ['data']
  },
  {
    src: 'tech/data/REDIS.svg',
    row: 'row-start-3',
    col: '',
    y: 'translate-y-2',
    x: '',
    scale: '',
    categories: ['data']
  },
  {
    src: 'tech/data/RABBITMQ.svg',
    row: 'row-start-3',
    col: '',
    y: 'translate-y-1',
    x: 'translate-x-3',
    scale: '',
    categories: ['data']
  }
]

const imagesBottom = [
  //row1
  {
    src: 'tech/devops/aws.svg',
    row: 'row-start-1',
    col: '',
    y: 'translate-y-2',
    x: '',
    scale: '',
    categories: ['devops']
  },
  {
    src: 'tech/devops/KUBERNETES.svg',
    row: 'row-start-1',
    col: '',
    y: '',
    x: '',
    scale: '',
    categories: ['devops']
  },
  {
    src: 'tech/devops/DOCKER.svg',
    row: 'row-start-1',
    col: '',
    y: 'translate-y-1',
    x: '',
    scale: '',
    categories: ['devops']
  },
  //row2
  {
    src: 'tech/devops/GCP.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-4',
    x: '',
    scale: '',
    categories: ['devops']
  },
  {
    src: 'tech/devops/TERRAFORM.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-2',
    x: '',
    scale: '',
    categories: ['devops']
  },
  {
    src: 'tech/devops/ANSIBLE.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-1',
    x: '',
    scale: '',
    categories: ['devops']
  },
  {
    src: 'tech/devops/PUPPETEER.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-1',
    x: '',
    scale: '',
    categories: ['devops']
  },
  //row3
  {
    src: 'tech/devops/MONIT.svg',
    row: 'row-start-3',
    col: 'col-start-3',
    y: 'translate-y-2',
    x: '-translate-x-4',
    scale: '',
    categories: ['devops']
  },
  {
    src: 'tech/devops/TOR.svg',
    row: 'row-start-3',
    col: 'col-start-4',
    y: 'translate-y-2',
    x: '-translate-x-5',
    scale: '',
    categories: ['devops']
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
    <Section className="max-md:mb-0 max-md:pb-0">
      <Container className="relative">
        <div
          onMouseLeave={() => setActiveCategory(undefined)}
          className="nav-menu hidden lg:flex absolute right-0 top-12 flex-col gap-3 items-end font-basis text-lg font-light"
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
                className={`w-[40px] h-[40px] transform ${img.x} ${img.y} ${img.row} ${img.col} ${img.scale}`}
                key={i}
              >
                <Image
                  src={`/${img.src}`}
                  alt="Diffusion Dynamics"
                  width={40}
                  height={40}
                  className={`floating-image invert dark:invert-0`}
                  style={handleActiveCategoy(img.categories)}
                />
              </div>
            ))}
          </div>

          <div className="hidden md:grid absolute left-[-77%] bottom-[-40%] grid-cols-3 gap-x-3">
            {imagesLeft.map((img, i) => (
              <div
                className={`w-[40px] h-[40px] transform ${img.x} ${img.y} ${img.row} ${img.col} ${img.scale}`}
                key={i}
              >
                <Image
                  src={`/${img.src}`}
                  alt="Diffusion Dynamics"
                  width={40}
                  height={40}
                  className={`floating-image invert dark:invert-0`}
                  style={handleActiveCategoy(img.categories)}
                />
              </div>
            ))}
          </div>

          {/* VERTICAL */}
          <div className="hidden md:grid absolute top-[-55%] left-[-60%] ml-[50%] grid-cols-3 gap-x-3">
            {imagesTop.map((img, i) => (
              <div
                className={`w-[40px] h-[40px] transform ${img.x} ${img.y} ${img.row} ${img.col} ${img.scale}`}
                key={i}
              >
                <Image
                  src={`/${img.src}`}
                  alt="Diffusion Dynamics"
                  width={40}
                  height={40}
                  className={`floating-image invert dark:invert-0`}
                  style={handleActiveCategoy(img.categories)}
                />
              </div>
            ))}
          </div>

          <div className="hidden md:grid absolute bottom-[-45%] right-[-40%] grid-cols-4 gap-x-3">
            {imagesBottom.map((img, i) => (
              <div
                className={`w-[40px] h-[40px] transform ${img.x} ${img.y} ${img.row} ${img.col} ${img.scale}`}
                key={i}
              >
                <Image
                  src={`/${img.src}`}
                  alt="Diffusion Dynamics"
                  width={40}
                  height={40}
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
