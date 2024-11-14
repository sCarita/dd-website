'use client'

import Image from 'next/image'
import Section from './components/section'
import Container from './components/container'
import Button from './components/button'
import Skills from './sections/skills'
import ThemeToggle from './components/themeToggle'
import Hero from './sections/hero'

export default function Home() {
  return (
    <>
      <section className="fixed left-0 top-0 w-full py-4 z-10">
        <Container className="justify-end">
          <div className="flex gap-4">
            <Button className="bg-white dark:bg-black">Book a call</Button>
            <ThemeToggle />
          </div>
        </Container>
      </section>

      <Hero />

      <Section>
        <Container>
          <div className="basis-4/6 xl:basis-3/6">
            <h2 className="text-3xl font-favorit font-thin">
              Accelerate your success through cutting-edge{' '}
              <span className="font-recoleta font-bold text-green-300">
                Artificial Intelligence
              </span>{' '}
              solutions.
              <br />
              <br />
            </h2>
            <h2 className="text-3xl font-favorit font-thin">
              We deliver{' '}
              <span className="font-recoleta font-bold text-green-300">Applications</span> that
              embody your company&apos;s vision, transforming ambitious ideas into impactful
              realities.
            </h2>
          </div>

          <div className="basis-2/6 xl:basis-3/6 flex items-center">
            <Image
              src="/next.svg"
              alt="Logo"
              width={100}
              height={24}
              className="bg-white px-2 py-10 w-full invert dark:invert-0"
            />
          </div>
        </Container>

        <Button className="m-auto mt-20">
          Quickly ! <span className="text-2xl px-2">☎️</span> Book a Call
        </Button>
      </Section>

      <Skills />

      <Section>
        <Container>
          <div className="md:flex-col text-center max-w-2xl m-auto font-favorit">
            <h3 className="text-4xl mb-10">
              We are gathering capital to invest in our own inhouse products
            </h3>

            <p className="text-xl font-light">
              We are channeling our resources into developing our own in-house products.
            </p>
            <p className="text-xl font-light mt-6">
              More information and insights about our upcoming projects will be available shortly —
              stay connected with us.
            </p>

            <Image
              src="/dd_eye.png"
              alt="Diffusion Dynamics eye"
              width={80}
              height={80}
              className="m-auto mt-10"
            />
          </div>
        </Container>
      </Section>

      {/* FOOTER */}
      <Section className="mb-0">
        <Container>
          <div className="flex flex-col flex-1 items-start">
            <Image
              src="/dd_logo.svg"
              alt="Logo"
              width={180}
              height={80}
              className="mb-14 invert dark:invert-0"
            />
            <Button>
              Schedule a Call <span className="text-2xl pl-4">☎️</span>
            </Button>
          </div>
          <div className="flex flex-col justify-start items-start">
            <h4 className="text-3xl font-bold mb-8 font-recoleta">Our Company</h4>
            <ul className="flex flex-col font-basis">
              <li className="text-2xl font-light border-b border-gray-400 pb-3 mb-3 pr-5">
                <a href="#">about us</a>
              </li>
              <li className="text-2xl font-light border-b border-gray-400 pb-3 mb-3 pr-5">
                <a href="#">careers</a>
              </li>
              <li className="text-2xl font-light border-b border-gray-400 pb-3 mb-3 pr-5">
                <a href="#">blog</a>
              </li>
              <li className="text-2xl font-light">
                <a href="#">book us</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-3xl font-bold mb-8 font-recoleta">Contacts</h4>
            <div className="text-xl mb-8">
              <h5 className="font-recoleta font-bold">_addr</h5>
              <Image
                src="/address.svg"
                alt="address"
                width={100}
                height={100}
                className="mb-14 w-auto h-auto invert dark:invert-0"
              />
            </div>
            <div className="text-xl  mb-8">
              <h5 className="font-recoleta font-bold">_email</h5>
              <p className="font-basis font-light">contact@diffusiondynamics.ai</p>
            </div>
            <div className="text-xl">
              <h5 className="font-recoleta font-bold">_telegram</h5>
              <p className="font-basis font-light">@diffusion</p>
            </div>
          </div>
        </Container>
        <Container>
          <p className="font-favorit mt-10 sm:mt-0">DIFFUSION DYNAMICS © 2023-2024</p>
        </Container>
      </Section>
    </>
  )
}
