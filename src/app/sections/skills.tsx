'use client'

import { useState } from "react";
import Section from "../components/section";
import Container from "../components/container";
import Button from "../components/button";
import Image from "next/image";
import StickyBox from "react-sticky-box";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

const Tab0 = ({isInView}: {isInView: () => void}) => {
  const { ref } = useInView({
    threshold: 0.5,
    fallbackInView: false,
    onChange: (inView) => {
      if (inView) isInView()
    },
  });

  return <div ref={ref} className="font-favorit">
    <h3 className="text-4xl font-recoleta font-bold mb-6">prototyping</h3>
    <p className="text-xl font-light">
      Our team connects skills that are usually compartmentalized: <span className="font-recoleta font-bold">data prototyping</span>, 
      complex information design, processing of large datasets, creative coding, data journalism, 
      <span className="font-recoleta font-bold">distributed system</span>.
    </p>
    <div className="flex flex-col sm:flex-row justify-between gap-6 mt-14">
      <div className="basis-6/12">
        <h4 className="text-xl">YOUR CHALLENGES</h4>
        <ul className="list-disc text-lg font-light">
          <li>Understand the data requirements of your users</li>
          <li>Discover useful information that can be extracted from your data</li>
          <li>Understand how different datasets can be tailored for different audiences</li>
        </ul>
      </div>
      <div className="basis-5/12">
        <h4 className="text-xl">OUR EXPERTISE</h4>
        <ul className="list-disc text-lg font-light">
          <li>User interviews</li>
          <li>User research</li>
          <li>Brainstorming workshops</li>
          <li>Data analysis</li>
          <li>Translation of data to information</li>
          <li>Prioritization of needs</li>
          <li>Use cases definition</li>
          <li>Drafting specifications</li>
        </ul>
      </div>
    </div>
    <Button className="m-auto mt-14">Curious? Book a meeting.</Button>
    <div className="mt-14">
      <h4 className="mb-4">RECENT PROJECT</h4>
      <div className="flex gap-2 font-light">
        <Image src="/next.svg" alt="Logo" width={200} height={24} className="m-auto bg-white px-2 py-12"/>
        <div className="flex flex-col flex-1 justify-between p-2 bg-zinc-900">
          <div>
            <p className="text-sm">PROTOTYPE / SWISSCOM MOBILITY INSIGTHS</p>
            <p className="text-lg mt-1">Conveying the value of Swisscom’s mobility data to better understand urban mobility.</p>
          </div>
          <div className="flex gap-2">
            <Image src="/reactIcon.svg" alt="react" width={20} height={20}/>
            <Image src="/gptIcon.svg" alt="gtp" width={20} height={20}/>
            <Image src="/typescriptIcon.svg" alt="typescript" width={20} height={20}/>
          </div>
        </div>
      </div>
    </div>
  </div>
}

const Tab1 = ({isInView}: {isInView: () => void}) => {
  const { ref } = useInView({
    threshold: 0.5,
    fallbackInView: false,
    onChange: (inView) => {
      if (inView) isInView()
    },
  });

  return <div ref={ref} className="font-favorit">
    <h3 className="text-4xl font-recoleta font-bold mb-6">prototyping2</h3>
    <p className="text-xl font-light">
      Our team connects skills that are usually compartmentalized: <span className="font-recoleta font-bold">data prototyping</span>, 
      complex information design, processing of large datasets, creative coding, data journalism, 
      <span className="font-recoleta font-bold">distributed system</span>.
    </p>
    <div className="flex flex-col sm:flex-row justify-between gap-6 mt-14">
      <div className="basis-6/12">
        <h4 className="text-xl">YOUR CHALLENGES</h4>
        <ul className="list-disc text-lg font-light">
          <li>Understand the data requirements of your users</li>
          <li>Discover useful information that can be extracted from your data</li>
          <li>Understand how different datasets can be tailored for different audiences</li>
        </ul>
      </div>
      <div className="basis-5/12">
        <h4 className="text-xl">OUR EXPERTISE</h4>
        <ul className="list-disc text-lg font-light">
          <li>User interviews</li>
          <li>User research</li>
          <li>Brainstorming workshops</li>
          <li>Data analysis</li>
          <li>Translation of data to information</li>
          <li>Prioritization of needs</li>
          <li>Use cases definition</li>
          <li>Drafting specifications</li>
        </ul>
      </div>
    </div>
    <Button className="m-auto mt-14">Curious? Book a meeting.</Button>
    <div className="mt-14">
      <h4 className="mb-4">RECENT PROJECT</h4>
      <div className="flex gap-2 font-light">
        <Image src="/next.svg" alt="Logo" width={200} height={24} className="m-auto bg-white px-2 py-12"/>
        <div className="flex flex-col flex-1 justify-between p-2 bg-zinc-900">
          <div>
            <p className="text-sm">PROTOTYPE / SWISSCOM MOBILITY INSIGTHS</p>
            <p className="text-lg mt-1">Conveying the value of Swisscom’s mobility data to better understand urban mobility.</p>
          </div>
          <div className="flex gap-2">
            <Image src="/reactIcon.svg" alt="react" width={20} height={20}/>
            <Image src="/gptIcon.svg" alt="gtp" width={20} height={20}/>
            <Image src="/typescriptIcon.svg" alt="typescript" width={20} height={20}/>
          </div>
        </div>
      </div>
    </div>
  </div>
}

const Tab2 =({isInView}: {isInView: () => void}) => {
  const { ref } = useInView({
    threshold: 0.5,
    fallbackInView: false,
    onChange: (inView) => {
      if (inView) isInView()
    },
  });

  return <div ref={ref} className="font-favorit">
    <h3 className="text-4xl font-recoleta font-bold mb-6">prototyping3</h3>
    <p className="text-xl font-light">
      Our team connects skills that are usually compartmentalized: <span className="font-recoleta font-bold">data prototyping</span>, 
      complex information design, processing of large datasets, creative coding, data journalism, 
      <span className="font-recoleta font-bold">distributed system</span>.
    </p>
    <div className="flex flex-col sm:flex-row justify-between gap-6 mt-14">
      <div className="basis-6/12">
        <h4 className="text-xl">YOUR CHALLENGES</h4>
        <ul className="list-disc text-lg font-light">
          <li>Understand the data requirements of your users</li>
          <li>Discover useful information that can be extracted from your data</li>
          <li>Understand how different datasets can be tailored for different audiences</li>
        </ul>
      </div>
      <div className="basis-5/12">
        <h4 className="text-xl">OUR EXPERTISE</h4>
        <ul className="list-disc text-lg font-light">
          <li>User interviews</li>
          <li>User research</li>
          <li>Brainstorming workshops</li>
          <li>Data analysis</li>
          <li>Translation of data to information</li>
          <li>Prioritization of needs</li>
          <li>Use cases definition</li>
          <li>Drafting specifications</li>
        </ul>
      </div>
    </div>
    <Button className="m-auto mt-14">Curious? Book a meeting.</Button>
    <div className="mt-14">
      <h4 className="mb-4">RECENT PROJECT</h4>
      <div className="flex gap-2 font-light">
        <Image src="/next.svg" alt="Logo" width={200} height={24} className="m-auto bg-white px-2 py-12"/>
        <div className="flex flex-col flex-1 justify-between p-2 bg-zinc-900">
          <div>
            <p className="text-sm">PROTOTYPE / SWISSCOM MOBILITY INSIGTHS</p>
            <p className="text-lg mt-1">Conveying the value of Swisscom’s mobility data to better understand urban mobility.</p>
          </div>
          <div className="flex gap-2">
            <Image src="/reactIcon.svg" alt="react" width={20} height={20}/>
            <Image src="/gptIcon.svg" alt="gtp" width={20} height={20}/>
            <Image src="/typescriptIcon.svg" alt="typescript" width={20} height={20}/>
          </div>
        </div>
      </div>
    </div>
  </div>
}

const Tab3 = ({isInView}: {isInView: () => void}) => {
  const { ref } = useInView({
    threshold: 0.5,
    fallbackInView: false,
    onChange: (inView) => {
      if (inView) isInView()
    },
  });
  return <div ref={ref} className="font-favorit">
    <h3 className="text-4xl font-recoleta font-bold mb-6">prototyping4</h3>
    <p className="text-xl font-light">
      Our team connects skills that are usually compartmentalized: <span className="font-recoleta font-bold">data prototyping</span>, 
      complex information design, processing of large datasets, creative coding, data journalism, 
      <span className="font-recoleta font-bold">distributed system</span>.
    </p>
    <div className="flex flex-col sm:flex-row justify-between gap-6 mt-14">
      <div className="basis-6/12">
        <h4 className="text-xl">YOUR CHALLENGES</h4>
        <ul className="list-disc text-lg font-light">
          <li>Understand the data requirements of your users</li>
          <li>Discover useful information that can be extracted from your data</li>
          <li>Understand how different datasets can be tailored for different audiences</li>
        </ul>
      </div>
      <div className="basis-5/12">
        <h4 className="text-xl">OUR EXPERTISE</h4>
        <ul className="list-disc text-lg font-light">
          <li>User interviews</li>
          <li>User research</li>
          <li>Brainstorming workshops</li>
          <li>Data analysis</li>
          <li>Translation of data to information</li>
          <li>Prioritization of needs</li>
          <li>Use cases definition</li>
          <li>Drafting specifications</li>
        </ul>
      </div>
    </div>
    <Button className="m-auto mt-14">Curious? Book a meeting.</Button>
    <div className="mt-14">
      <h4 className="mb-4">RECENT PROJECT</h4>
      <div className="flex gap-2 font-light">
        <Image src="/next.svg" alt="Logo" width={200} height={24} className="m-auto bg-white px-2 py-12"/>
        <div className="flex flex-col flex-1 justify-between p-2 bg-zinc-900">
          <div>
            <p className="text-sm">PROTOTYPE / SWISSCOM MOBILITY INSIGTHS</p>
            <p className="text-lg mt-1">Conveying the value of Swisscom’s mobility data to better understand urban mobility.</p>
          </div>
          <div className="flex gap-2">
            <Image src="/reactIcon.svg" alt="react" width={20} height={20}/>
            <Image src="/gptIcon.svg" alt="gtp" width={20} height={20}/>
            <Image src="/typescriptIcon.svg" alt="typescript" width={20} height={20}/>
          </div>
        </div>
      </div>
    </div>
  </div>
}

const Tab4 = ({isInView}: {isInView: () => void}) => {
  const { ref } = useInView({
    threshold: 0.5,
    fallbackInView: false,
    onChange: (inView) => {
      if (inView) isInView()
    },
  });
  return <div ref={ref} className="font-favorit">
    <h3 className="text-4xl font-recoleta font-bold mb-6">prototyping5</h3>
    <p className="text-xl font-light">
      Our team connects skills that are usually compartmentalized: <span className="font-recoleta font-bold">data prototyping</span>, 
      complex information design, processing of large datasets, creative coding, data journalism, 
      <span className="font-recoleta font-bold">distributed system</span>.
    </p>
    <div className="flex flex-col sm:flex-row justify-between gap-6 mt-14">
      <div className="basis-6/12">
        <h4 className="text-xl">YOUR CHALLENGES</h4>
        <ul className="list-disc text-lg font-light">
          <li>Understand the data requirements of your users</li>
          <li>Discover useful information that can be extracted from your data</li>
          <li>Understand how different datasets can be tailored for different audiences</li>
        </ul>
      </div>
      <div className="basis-5/12">
        <h4 className="text-xl">OUR EXPERTISE</h4>
        <ul className="list-disc text-lg font-light">
          <li>User interviews</li>
          <li>User research</li>
          <li>Brainstorming workshops</li>
          <li>Data analysis</li>
          <li>Translation of data to information</li>
          <li>Prioritization of needs</li>
          <li>Use cases definition</li>
          <li>Drafting specifications</li>
        </ul>
      </div>
    </div>
    <Button className="m-auto mt-14">Curious? Book a meeting.</Button>
    <div className="mt-14">
      <h4 className="mb-4">RECENT PROJECT</h4>
      <div className="flex gap-2 font-light">
        <Image src="/next.svg" alt="Logo" width={200} height={24} className="m-auto bg-white px-2 py-12"/>
        <div className="flex flex-col flex-1 justify-between p-2 bg-zinc-900">
          <div>
            <p className="text-sm">PROTOTYPE / SWISSCOM MOBILITY INSIGTHS</p>
            <p className="text-lg mt-1">Conveying the value of Swisscom’s mobility data to better understand urban mobility.</p>
          </div>
          <div className="flex gap-2">
            <Image src="/reactIcon.svg" alt="react" width={20} height={20}/>
            <Image src="/gptIcon.svg" alt="gtp" width={20} height={20}/>
            <Image src="/typescriptIcon.svg" alt="typescript" width={20} height={20}/>
          </div>

        </div>
      </div>
    </div>
  </div>
}

const tabsMenu = [
  {label: 'data collection', icon: "/dd-gifs/gif_0_white.gif"},
  {label: 'prototyping', icon: "/dd-gifs/gif_5_white.gif"},
  {label: 'crypto', icon: "/dd-gifs/gif_2_white.gif"},
  {label: 'data visualization', icon: "/dd-gifs/gif_3_white.gif"},
  {label: 'ai voice', icon: "/dd-gifs/gif_4_white.gif"},
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)  

  return (
    <Section>
      <Container className="justify-between">
          <div className="basis-4/12">
          <h3 className="text-4xl font-bold mb-6 hidden sm:block sm:invisible">invisible</h3>
          <StickyBox offsetTop={15}>
            <p className="text-xl font-favorit font-light">
              Our team connects skills that are usually compartmentalized: <span className="font-recoleta font-bold">data prototyping</span>, 
              complex information design, processing of large datasets, creative coding, data journalism, 
              <span className="font-recoleta font-bold">distributed system</span>.
            </p>
            <p className="text-xl font-favorit font-light mt-6">Our team connects skills that are usually compartmentalized:</p>
            <ul className="flex flex-col mt-20 font-recoleta">
              {tabsMenu.map( (tab, idx) => (
                <li 
                  key={idx} 
                  className={clsx(
                    "flex text-2xl font-light border-b border-gray-400 last:border-0 pb-3 mb-3 pr-5 h-12 cursor-pointer transition-all", 
                    activeTab === idx && 'h-24 font-bold'
                  )}
                  onClick={()=> setActiveTab(idx)}
                >
                  {tab.label}
                  <div className={clsx(
                        "flex flex-1 justify-end items-center overflow-hidden transition-all",
                        activeTab === idx ? 'h-24' : 'h-0'
                  )}>
                    <Image
                      unoptimized
                      src={tab.icon}
                      alt={tab.label}
                      width={50}
                      height={24}
                    />
                    </div>
                </li>
              ))}
            </ul>
            </StickyBox>
          </div>
        <div className="basis-8/12 lg:max-w-[600px]">
          <Tab0 isInView={()=> setActiveTab(0)} />
          <Tab1 isInView={()=> setActiveTab(1)} />
          <Tab2 isInView={()=> setActiveTab(2)} />
          <Tab3 isInView={()=> setActiveTab(3)} />
          <Tab4 isInView={()=> setActiveTab(4)} />
        </div>
      </Container>
    </Section>
  );
}
