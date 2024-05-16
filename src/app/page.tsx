'use client'

import Image from "next/image";
import Section from "./components/section";
import Container from "./components/container";
import Button from "./components/button";
import StickyBox from "react-sticky-box";
import Skills from "./sections/skills";

export default function Home() {
  return (
    <>
      <Section>
        <Container>
          <div className="basis-4/6 xl:basis-3/6">
            <h2 className="text-4xl">
              With a vision for innovation and excellence, 
              we create cohesive brand transformations that reflect the values and ethos of your company.
            </h2>
          </div>

          <div className='basis-2/6 xl:basis-3/6 flex items-center'>
            <Image src="/next.svg" alt="Logo" width={100} height={24} className="bg-white px-2 py-10 w-full"/>
          </div>
        </Container>

        <Button className="m-auto mt-20">Book a call and meet us</Button>
      </Section>

      <Skills />

      <Section>
        <Container>
          <div className="md:flex-col text-center max-w-2xl m-auto">
            <h3 className="text-4xl mb-10">
              We are gathering capital to invest in our own inhouse products
            </h3>

            <p className="text-xl font-light">
              Our team connects skills that are usually compartmentalized: data prototyping, 
              complex information design, processing of large datasets, creative coding, data journalism, 
              distributed system.
            </p>
            <p className="text-xl mt-6">We will share details and blog posts soon enough...</p>
            
            <Image src="/dd_eye.png" alt="Diffusion Dynamics eye" width={80} height={80} className="m-auto mt-10"/>
          </div>
        </Container>
      </Section>

      {/* FOOTER */}
      <Section className="mb-0">
        <Container>
          <div className="flex flex-col flex-1 justify-between">
            <div>
              <Image src="/dd_logo.svg" alt="Logo" width={180} height={80} className="mb-14"/>
              <Button>Schedule a Call</Button>
            </div>
            <p>DIFFUSION DYNAMICS © 2023-2024</p>
          </div>
          <div className="flex flex-col justify-start items-start">
            <h4 className="text-3xl font-bold mb-8">Our Company</h4>
            <ul className="flex flex-col">
              <li className="text-2xl font-light border-b border-gray-400 pb-3 mb-3 pr-5"><a href="#">about us</a></li>
              <li className="text-2xl font-light border-b border-gray-400 pb-3 mb-3 pr-5"><a href="#">careers</a></li>
              <li className="text-2xl font-light border-b border-gray-400 pb-3 mb-3 pr-5"><a href="#">blog</a></li>
              <li className="text-2xl font-light"><a href="#">book us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-3xl font-bold mb-8">Contacts</h4>
            <div className="text-xl mb-8">
              <h5 className="font-bold">_addr</h5>
              <p className="font-light"> 
                Avenida Óscar Monteiro Torres <br />
                64 - 1º Esquerdo <br />
                1000 - 220 Lisboa
              </p>
            </div>
            <div className="text-xl  mb-8">
              <h5 className="font-bold">_email</h5>
              <p className="font-light">contact@diffusiondynamics.ai</p>
            </div>
            <div className="text-xl">
              <h5 className="font-bold">_telegram</h5>
              <p className="font-light">@diffusion</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
