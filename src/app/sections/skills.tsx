'use client'

import { useEffect, useState } from "react";
import Section from "../components/section";
import Container from "../components/container";
import Button from "../components/button";
import Image from "next/image";
import StickyBox from "react-sticky-box";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

const Tab0 = ({ id, isInView }: { id: string; isInView: () => void }) => {
  const { ref } = useInView({
    threshold: 0.5,
    fallbackInView: false,
    onChange: (inView) => {
      if (inView) isInView();
    },
  });

  return (
    <div ref={ref} id={id} className="font-favorit">
      <h3 className="text-4xl font-recoleta font-bold mb-6">
        Machine Learning Modeling
      </h3>
      <p className="text-xl font-light">
        We integrate <span className="font-recoleta font-bold">machine learning algorithms</span>, time series analysis, predictive modeling techniques, and dynamic data visualization to deliver comprehensive solutions.
      </p>
      <div className="flex flex-col sm:flex-row justify-between gap-6 mt-14">
        <div className="basis-6/12">
          <h4 className="text-xl pb-4">YOUR CHALLENGES</h4>
          <ul className="list-disc text-md text-gray-300 font-light">
            <li className="pb-2">Need accurate predictive models for business decision making.</li>
            <li className="pb-2">Handling large and complex datasets effectively, daily and continuously.</li>
            <li className="pb-2">Detecting patterns and anomalies in critical parts of your business.</li>
          </ul>
        </div>
        <div className="basis-5/12">
          <h4 className="text-xl pb-4">OUR EXPERTISE</h4>
          <ul className="list-disc text-md text-gray-300 font-light">
            <li className="pb-2">Developed LLM-based systems with dimensionality reduction for skill categorization.</li>
            <li className="pb-2">Time series analysis for industrial anomaly detection.</li>
            <li className="pb-2">Churn prediction systems for telecommunications.</li>
            <li className="pb-2">Debt collection likelihood modeling.</li>
            <li className="pb-2">Proven success in international data science competitions (Kaggle)</li>
          </ul>
        </div>
      </div>
      <Button className="m-auto mt-14">🛰️ Start detection today.</Button>
      <div className="mt-14">
        <h4 className="mb-4">RECENT PROJECT</h4>
        <div className="flex gap-2 font-light">
          <Image
            src="/ml_modelling.webp"
            alt="Project Logo"
            width={200}
            height={24}
            className="m-auto bg-white px-2 py-12 invert dark:invert-0"
          />
          <div className="flex flex-col flex-1 justify-between p-2 bg-zinc-200 dark:bg-zinc-900">
            <div>
              <p className="text-sm">
                MACHINE LEARNING / INDUSTRIAL ANOMALY DETECTION
              </p>
              <p className="text-lg mt-1">
                Implemented predictive maintenance using time series data to
                detect equipment anomalies, reducing downtime by 30%.
              </p>
              <br/>
            </div>
            <div className="flex gap-2">
              <Image src="/reactIcon.svg" alt="react" width={20} height={20} className="invert dark:invert-0"/>
              <Image src="/gptIcon.svg" alt="gtp" width={20} height={20} className="invert dark:invert-0"/>
              <Image src="/typescriptIcon.svg" alt="typescript" width={20} height={20} className="invert dark:invert-0"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tab1 = ({ id, isInView }: { id: string; isInView: () => void }) => {
  const { ref } = useInView({
    threshold: 0.5,
    fallbackInView: false,
    onChange: (inView) => {
      if (inView) isInView();
    },
  });

  return (
    <div ref={ref} id={id} className="font-favorit mt-20">
      <h3 className="text-4xl font-recoleta font-bold mb-6">
        Web & Mobile App Development
      </h3>
      <p className="text-xl font-light">
        We specialize in creating high-performance web and mobile applications. Ensuring a stable operation since day one.
      </p>
      <div className="flex flex-col sm:flex-row justify-between gap-6 mt-14">
        <div className="basis-6/12">
          <h4 className="text-xl pb-4">YOUR CHALLENGES</h4>
          <ul className="list-disc text-md text-gray-300 font-light">
            <li className="pb-2">Need robust and scalable web and mobile applications.</li>
            <li className="pb-2">Integrating secure payment systems, including crypto payments.</li>
            <li className="pb-2">Enhancing user engagement with real-time features and push notifications.</li>
            <li className="pb-2">Analyzing user behavior to optimize application funnels.</li>
          </ul>
        </div>
        <div className="basis-5/12">
          <h4 className="text-xl pb-4">OUR EXPERTISE</h4>
          <ul className="list-disc text-md text-gray-300 font-light">
            <li className="pb-2">Developed cross-platform apps for iOS, Android, and web.</li>
            <li className="pb-2">Implemented web3 applications with crypto payment integration and smart contract interactions.</li>
            <li className="pb-2">Unlocked push notifications, campaigns, and promo codes with friendly dashboards.</li>
            <li className="pb-2">Programmed complex event tracking systems for user behavior analysis.</li>
            <li className="pb-2">Integrated Chromecast and Apple AirPlay features.</li>
            <li className="pb-2">Built real-time apps that react instantly to underlying data changes.</li>
          </ul>
        </div>
      </div>
      <Button className="m-auto mt-14">🚀 Launch your app with us</Button>
      <div className="mt-14">
        <h4 className="mb-4">RECENT PROJECT</h4>
        <div className="flex gap-2 font-light">
          <Image
            src="/web_mobile_app.webp"
            alt="Project Logo"
            width={200}
            height={24}
            className="m-auto bg-white px-2 py-12 invert dark:invert-0"
          />
          <div className="flex flex-col flex-1 justify-between p-2 bg-zinc-200 dark:bg-zinc-900">
            <div>
              <p className="text-sm">APP / PUSH NOTIFICATIONS VS EMAIL CAMPAIGNS</p>
              <p className="text-lg mt-1">
              Enhanced user engagement by integrating push notifications into the app, achieving a 10% engagement rate compared to 1% with traditional email campaigns.
              </p>
              <br />
            </div>
            <div className="flex gap-2">
              <Image src="/reactIcon.svg" alt="react" width={20} height={20} className="invert dark:invert-0"/>
              <Image src="/gptIcon.svg" alt="gtp" width={20} height={20} className="invert dark:invert-0"/>
              <Image src="/typescriptIcon.svg" alt="typescript" width={20} height={20} className="invert dark:invert-0"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tab2 = ({ id, isInView }: { id: string; isInView: () => void }) => {
  const { ref } = useInView({
    threshold: 0.5,
    fallbackInView: false,
    onChange: (inView) => {
      if (inView) isInView();
    },
  });

  return (
    <div ref={ref} id={id} className="font-favorit mt-20">
      <h3 className="text-4xl font-recoleta font-bold mb-6">
        Voice AI & Custom Audio Solutions
      </h3>
      <p className="text-xl font-light">
        We have extensive experience working with both male and female voices, creating customized vocal profiles with specific names and emotional tones. Our expertise includes integrating moods into speech, as well as working with subtitles and subtitle synchronization, ensuring precise timing even with the inclusion of custom voices.
      </p>
      <div className="flex flex-col sm:flex-row justify-between gap-6 mt-14">
        <div className="basis-6/12">
          <h4 className="text-xl pb-4">YOUR CHALLENGES</h4>
          <ul className="list-disc text-md text-gray-300 font-light">
            <li className="pb-2">Creating engaging audio experiences with customized voices.</li>
            <li className="pb-2">Synchronizing audio and subtitles for accessibility.</li>
            <li className="pb-2">Incorporating emotional tones and moods into speech output.</li>
            <li className="pb-2">Adjusting timings when using custom voices.</li>
          </ul>
        </div>
        <div className="basis-5/12">
          <h4 className="text-xl pb-4">OUR EXPERTISE</h4>
          <ul className="list-disc text-md text-gray-300 font-light">
            <li className="pb-2">Development of custom male and female voice profiles.</li>
            <li className="pb-2">Integration of mood and emotional tone into speech synthesis.</li>
            <li className="pb-2">Advanced subtitle synchronization and correction.</li>
            <li className="pb-2">Experience with voice cloning and text-to-speech technologies.</li>
            <li className="pb-2">Dynamic timing adjustments for custom voices.</li>
          </ul>
        </div>
      </div>
      <Button className="m-auto mt-14">🎤 Elevate Your Audio Experience</Button>
    </div>
  );
};

const Tab3 = ({ id, isInView }: { id: string; isInView: () => void }) => {
  const { ref } = useInView({
    threshold: 0.5,
    fallbackInView: false,
    onChange: (inView) => {
      if (inView) isInView();
    },
  });

  return (
    <div ref={ref} id={id} className="font-favorit mt-20">
      <h3 className="text-4xl font-recoleta font-bold mb-6">AI Vision & Image Generation</h3>
      <p className="text-xl font-light">
        We have harnessed advanced AI vision technologies to create customizable scenes for children&apos;s stories, utilizing workflows in <span className="font-recoleta font-bold">ComfyUI</span> to perform face swaps and apply animated styles to generated images. Our expertise extends to generating themed backgrounds and executing large-scale production with over 150+ GPUs, including L40 and RTX 4090, in a distributed system managed through worldwide geo load balancing.
      </p>
      <div className="flex flex-col sm:flex-row justify-between gap-6 mt-14">
        <div className="basis-6/12">
          <h4 className="text-xl pb-4">YOUR CHALLENGES</h4>
          <ul className="list-disc text-md text-gray-300 font-light">
            <li className="pb-2">Need for high-quality, customized visual content.</li>
            <li className="pb-2">Scaling AI image generation to meet production demands.</li>
            <li className="pb-2">Implementing advanced AI vision solutions in production environments.</li>
            <li className="pb-2">Optimizing performance across GPU based distributed systems.</li>
          </ul>
        </div>
        <div className="basis-5/12">
          <h4 className="text-xl pb-4">OUR EXPERTISE</h4>
          <ul className="list-disc text-md text-gray-300 font-light">
            <li className="pb-2">Advanced workflows in ComfyUI using LoRAs for style modification and subject injection.</li>
            <li className="pb-2">Fine-tuning models with Auto1111 and Kohya for Dreambooth customization.</li>
            <li className="pb-2">Operating large-scale distributed systems with 150+ GPUs.</li>
            <li className="pb-2">Production-ready environments on Linux with CUDA optimization.</li>
            <li className="pb-2">Geo load balancing for worldwide deployment.</li>
            <li className="pb-2">Experience in Kaggle competitions (e.g., lung cancer detection, seal counting in drone photos).</li>
          </ul>
        </div>
      </div>
      <Button className="m-auto mt-14">🖼️ Transform Your Visual Content</Button>
      <div className="mt-14">
        <h4 className="mb-4">RECENT PROJECT</h4>
        <div className="flex gap-2 font-light">
          <Image
            src="/ai_vision_project.webp"
            alt="AI Vision Project"
            width={200}
            height={24}
            className="m-auto bg-white px-2 py-12 invert dark:invert-0"
          />
          <div className="flex flex-col flex-1 justify-between p-2 bg-zinc-200 dark:bg-zinc-900">
            <div>
              <p className="text-sm">AI VISION / CHILDREN&apos;S STORY SCENE GENERATION</p>
              <p className="text-lg mt-1">
                Deployed complex ComfyUI workflows at scale, utilizing over 150 GPUs to generate customizable scenes with dynamic face swaps and animated styles for children&apos;s stories.
              </p>
            </div>
            <div className="flex gap-2">
              <Image src="/reactIcon.svg" alt="react" width={20} height={20} className="invert dark:invert-0"/>
              <Image src="/gptIcon.svg" alt="gtp" width={20} height={20} className="invert dark:invert-0"/>
              <Image src="/typescriptIcon.svg" alt="typescript" width={20} height={20} className="invert dark:invert-0"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tab4 = ({ id, isInView }: { id: string; isInView: () => void }) => {
  const { ref } = useInView({
    threshold: 0.5,
    fallbackInView: false,
    onChange: (inView) => {
      if (inView) isInView();
    },
  });

  return (
    <div ref={ref} id={id} className="font-favorit mt-20">
      <h3 className="text-4xl font-recoleta font-bold mb-6">
        AI Text & Language Models
      </h3>
      <p className="text-xl font-light">
        We have extensive experience working with both third-party services and self-hosted solutions, specializing in chat and embedding-based Retrieval-Augmented Generation (RAG) systems. Our team has created multi-step LLM-enhanced systems to generate content for financial news, scientific publications, and character impersonation, delivering advanced AI text solutions.
      </p>
      <div className="flex flex-col sm:flex-row justify-between gap-6 mt-14">
        <div className="basis-6/12">
          <h4 className="text-xl pb-4">YOUR CHALLENGES</h4>
          <ul className="list-disc text-md text-gray-300 font-light">
            <li className="pb-2">Generating high-quality, domain-specific content efficiently.</li>
            <li className="pb-2">Implementing advanced AI text solutions tailored to your needs.</li>
            <li className="pb-2">Integrating AI chat systems for enhanced user interaction.</li>
            <li className="pb-2">Deploying self-hosted AI models for data privacy and control.</li>
          </ul>
        </div>
        <div className="basis-5/12">
          <h4 className="text-xl pb-4">OUR EXPERTISE</h4>
          <ul className="list-disc text-md text-gray-300 font-light">
            <li className="pb-2">Development of multi-step LLM-enhanced content generation systems.</li>
            <li className="pb-2">Experience with chat and embedding-based RAG systems.</li>
            <li className="pb-2">Creating AI-generated content for financial news and scientific materials.</li>
            <li className="pb-2">Designing character impersonation models for interactive applications.</li>
            <li className="pb-2">Deploying both third-party and self-hosted AI solutions.</li>
          </ul>
        </div>
      </div>
      <Button className="m-auto mt-14">💡 Innovate with AI Text Solutions</Button>
    </div>
  );
};

const Tab5 = ({ id, isInView }: { id: string; isInView: () => void }) => {
  const { ref } = useInView({
    threshold: 0.5,
    fallbackInView: false,
    onChange: (inView) => {
      if (inView) isInView();
    },
  });

  return (
    <div ref={ref} id={id} className="font-favorit mt-20">
      <h3 className="text-4xl font-recoleta font-bold mb-6">
        Data Visualization & Interactive Analytics
      </h3>
      <p className="text-xl font-light">
        We have worked extensively with complex data visualizations at scale, primarily for financial SaaS platforms. Our expertise includes building heatmaps with candlestick charts overlay, live order book histograms, calendars, and timelines—all with interactive options and multiple granularities. We have also developed geo-data visualizations to provide spatial insights.
      </p>
      <div className="flex flex-col sm:flex-row justify-between gap-6 mt-14">
        <div className="basis-6/12">
          <h4 className="text-xl pb-4">YOUR CHALLENGES</h4>
          <ul className="list-disc text-md text-gray-300 font-light">
            <li className="pb-2">Visualizing complex financial data intuitively.</li>
            <li className="pb-2">Requiring real-time, interactive charts and dashboards.</li>
            <li className="pb-2">Handling large datasets with high performance.</li>
            <li className="pb-2">Providing multi-granularity views for diverse user needs.</li>
          </ul>
        </div>
        <div className="basis-5/12">
          <h4 className="text-xl pb-4">OUR EXPERTISE</h4>
          <ul className="list-disc text-md text-gray-300 font-light">
            <li className="pb-2">Developed advanced heatmaps with candlestick overlays.</li>
            <li className="pb-2">Built live order book histograms for trading platforms.</li>
            <li className="pb-2">Created interactive calendars and timelines.</li>
            <li className="pb-2">Implemented geo-data visualizations for spatial analysis.</li>
            <li className="pb-2">Optimized performance for large-scale data visualization.</li>
            <li className="pb-2">Provided multi-granularity and customizable interfaces.</li>
          </ul>
        </div>
      </div>
      <Button className="m-auto mt-14">📊 Elevate Your Data Insights</Button>
      <div className="mt-14">
        <h4 className="mb-4">RECENT PROJECT</h4>
        <div className="flex gap-2 font-light">
          <Image
            src="/data_viz_project.webp"
            alt="Data Visualization Project"
            width={200}
            height={24}
            className="m-auto bg-white px-2 py-12 invert dark:invert-0"
          />
          <div className="flex flex-col flex-1 justify-between p-2 bg-zinc-200 dark:bg-zinc-900">
            <div>
              <p className="text-sm">DATA VISUALIZATION / FINANCIAL DASHBOARDS</p>
              <p className="text-lg mt-1">
                Developed an interactive financial dashboard featuring real-time heatmaps with candlestick charts.
              </p>
            </div>
            <div className="flex gap-2">
            <Image src="/reactIcon.svg" alt="react" width={20} height={20} className="invert dark:invert-0"/>
              <Image src="/gptIcon.svg" alt="gtp" width={20} height={20} className="invert dark:invert-0"/>
              <Image src="/typescriptIcon.svg" alt="typescript" width={20} height={20} className="invert dark:invert-0"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const tabsMenu = [
  {label: 'machine learning modeling', icon: "/dd-gifs/gif_0_white.gif", iconDark: "/dd-gifs/gif_0_black.gif"},
  {label: 'web + mobile apps', icon: "/dd-gifs/gif_5_white.gif", iconDark: "/dd-gifs/gif_5_black.gif"},
  {label: 'ai voice', icon: "/dd-gifs/gif_2_white.gif", iconDark: "/dd-gifs/gif_2_black.gif"},
  {label: 'ai vision', icon: "/dd-gifs/gif_3_white.gif", iconDark: "/dd-gifs/gif_3_black.gif"},
  {label: 'ai text', icon: "/dd-gifs/gif_4_white.gif", iconDark: "/dd-gifs/gif_4_black.gif"},
  {label: 'data viz', icon: "/dd-gifs/gif_6_white.gif", iconDark: "/dd-gifs/gif_6_black.gif"},
]

export default function Skills() {
  let tabTimeout: any = null

  const [activeTab, setActiveTab] = useState(0)  

  const setTab = (idx: number) => tabTimeout = setTimeout(() => setActiveTab(idx), 500)

  useEffect(()=> {
    return () => clearTimeout(tabTimeout)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Section>
      <Container className="justify-between">
          <div className="basis-4/12">
          <h3 className="text-4xl font-bold mb-6 hidden sm:block sm:invisible">invisible</h3>
          <StickyBox offsetTop={15}>
            <p className="text-xl font-favorit font-light">
              Our team connects skills that are usually compartmentalized: <span className="font-recoleta font-bold">Advanced Machine Learning</span> Modeling, <span className="font-recoleta font-bold">Web + Mobile</span> App
              Development, DevOps, <span className="font-recoleta font-bold">AI voice </span>, <span className="font-recoleta font-bold">AI vision</span>, 
              <span className="font-recoleta font-bold"> AI text processing</span> and data visualization.
              <br />
            </p>
            <ul className="flex flex-col mt-20 font-recoleta">
              {tabsMenu.map( (tab, idx) => (
                <li key={idx}>
                  <a 
                    href={`#tab${idx}`} 
                    className={clsx(
                      "flex text-2xl font-light pb-3 mb-3 pr-5 h-12 transition-all", 
                      activeTab === idx && 'h-24 font-bold',
                      idx !== tabsMenu.length - 1 && 'border-b border-gray-400'
                    )} 
                    onClick={()=> setTab(idx)}
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
                        className="invert dark:invert-0"
                      />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            </StickyBox>
          </div>
        <div className="basis-8/12 lg:max-w-[600px]">
          <Tab0 id="tab0" isInView={()=> setActiveTab(0)} />
          <Tab1 id="tab1" isInView={()=> setActiveTab(1)} />
          <Tab2 id="tab2" isInView={()=> setActiveTab(2)} />
          <Tab3 id="tab3" isInView={()=> setActiveTab(3)} />
          <Tab4 id="tab4" isInView={()=> setActiveTab(4)} />
          <Tab5 id="tab5" isInView={()=> setActiveTab(5)} />
        </div>
      </Container>
    </Section>
  );
}
