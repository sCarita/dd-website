import Image from "next/image";
import Section from "./components/section";
import Container from "./components/container";
import Button from "./components/button";

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

      {/* SKILLS */}
      <Section>
        <Container className="justify-between">
          <div className="basis-4/12">
            <h3 className="text-4xl font-bold mb-6 hidden sm:block sm:invisible">invisible</h3>
            <p className="text-xl font-light">
              Our team connects skills that are usually compartmentalized: <strong>data prototyping</strong>, 
              complex information design, processing of large datasets, creative coding, data journalism, 
              <strong>distributed system</strong>.
            </p>
            <p className="text-xl font-light mt-6">Our team connects skills that are usually compartmentalized:</p>
            <ul className="flex flex-col mt-20">
              <li className="text-2xl font-light border-b border-gray-400 pb-3 mb-3 pr-5"><a href="#">data collection</a></li>
              <li className="text-2xl font-light border-b border-gray-400 pb-3 mb-3 pr-5"><a href="#">prototyping</a></li>
              <li className="text-2xl font-light border-b border-gray-400 pb-3 mb-3 pr-5"><a href="#">crypto</a></li>
              <li className="text-2xl font-light border-b border-gray-400 pb-3 mb-3 pr-5"><a href="#">data visualization</a></li>
              <li className="text-2xl font-light"><a href="#">ai voice</a></li>
            </ul>
          </div>
          <div className="basis-8/12 lg:max-w-[600px]">
            <h3 className="text-4xl font-bold mb-6">prototyping</h3>
            <p className="text-xl font-light">
              Our team connects skills that are usually compartmentalized: <strong>data prototyping</strong>, 
              complex information design, processing of large datasets, creative coding, data journalism, 
              <strong>distributed system</strong>.
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
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_88_711)">
                      <path d="M10.1619 8.42503C10.46 8.42505 10.7514 8.51604 10.9995 8.68655C11.2476 8.85705 11.4412 9.09946 11.556 9.38323C11.6708 9.66701 11.7016 9.97948 11.6446 10.2813C11.5876 10.5831 11.4454 10.8608 11.2357 11.0794C11.026 11.298 10.7584 11.4477 10.4664 11.5097C10.1744 11.5717 9.87122 11.5432 9.59491 11.4278C9.31861 11.3124 9.08157 11.1153 8.91365 10.8612C8.74573 10.6071 8.65443 10.3075 8.65124 10C8.65018 9.7943 8.68841 9.59036 8.76375 9.39986C8.83909 9.20936 8.95007 9.03604 9.09035 8.88979C9.23063 8.74353 9.39747 8.62722 9.58133 8.54747C9.76518 8.46773 9.96247 8.42613 10.1619 8.42503ZM6.42158 16.6667C6.93052 16.9834 8.03727 16.5 9.32983 15.25C8.89782 14.7436 8.49069 14.2152 8.10998 13.6667C7.45839 13.5914 6.81118 13.4802 6.17114 13.3334C5.75914 15.1167 5.91263 16.3417 6.42158 16.6667ZM6.99515 11.8834L6.76087 11.4584C6.66955 11.6924 6.59133 11.9317 6.5266 12.175C6.74472 12.225 6.98707 12.2667 7.2375 12.3084L6.99515 11.8834ZM12.2785 11.25L12.9328 10L12.2785 8.75003C12.0361 8.30837 11.7776 7.9167 11.5433 7.52503C11.1071 7.50003 10.6466 7.50003 10.1619 7.50003C9.67721 7.50003 9.21673 7.50003 8.7805 7.50003C8.54622 7.8917 8.28771 8.28337 8.04535 8.72503L7.39099 10L8.04535 11.25C8.28771 11.6917 8.54622 12.0834 8.7805 12.475C9.21673 12.475 9.67721 12.475 10.1619 12.475C10.6466 12.475 11.1071 12.475 11.5433 12.475C11.7776 12.0834 12.0361 11.6917 12.2785 11.25ZM10.1619 5.65003C10.0084 5.83337 9.84686 6.02503 9.68529 6.25003H10.6385C10.477 6.02503 10.3154 5.83337 10.1619 5.65003ZM10.1619 14.35C10.3154 14.1667 10.477 13.975 10.6385 13.75H9.68529C9.84686 13.975 10.0084 14.1667 10.1619 14.35ZM13.8942 3.33337C13.3933 3.0167 12.2785 3.50003 10.994 4.75003C11.426 5.25645 11.8331 5.78489 12.2139 6.33337C12.8649 6.39763 13.5121 6.49778 14.1527 6.63337C14.5647 4.85003 14.4112 3.62503 13.8942 3.30003M13.3287 8.08337L13.563 8.50837C13.6543 8.2743 13.7325 8.03502 13.7972 7.7917C13.5791 7.7417 13.3368 7.70003 13.0863 7.65837L13.3287 8.08337ZM14.5001 2.25003C15.6876 2.95003 15.8169 4.7917 15.3079 6.9417C17.3599 7.5667 18.8382 8.60837 18.8382 10.0084C18.8382 11.4084 17.3599 12.45 15.3079 13.075C15.8088 15.225 15.6795 17.0667 14.5001 17.7667C13.3206 18.4667 11.713 17.6667 10.1619 16.1417C8.61085 17.6667 7.00323 18.4667 5.81569 17.7667C4.62815 17.0667 4.50697 15.2667 5.00784 13.075C2.9559 12.45 1.47754 11.4084 1.47754 10.0084C1.47754 8.60837 2.9559 7.55837 5.00784 6.93337C4.50697 4.78337 4.63623 2.9417 5.81569 2.2417C6.99515 1.5417 8.61085 2.3417 10.1619 3.8667C11.713 2.3417 13.3206 1.5417 14.5001 2.2417M14.2658 10C14.5464 10.6135 14.7945 11.2422 15.009 11.8834C16.7055 11.3584 17.6588 10.6084 17.6588 10C17.6588 9.3917 16.6813 8.6417 15.009 8.1167C14.7945 8.75788 14.5464 9.38658 14.2658 10ZM6.05804 10C5.77748 9.38658 5.52937 8.75788 5.31482 8.1167C3.61834 8.6417 2.66508 9.3917 2.66508 10C2.66508 10.6084 3.64257 11.3584 5.31482 11.8834C5.52937 11.2422 5.77748 10.6135 6.05804 10ZM13.3287 11.8834L13.0863 12.3084C13.3368 12.3084 13.5791 12.225 13.7972 12.175C13.7325 11.9317 13.6543 11.6924 13.563 11.4584L13.3287 11.8834ZM10.9698 15.25C12.2542 16.5 13.3933 16.9834 13.8699 16.6667C14.3466 16.35 14.5405 15.15 14.1285 13.3334C13.4878 13.469 12.8406 13.5691 12.1896 13.6334C11.8098 14.1932 11.4027 14.7328 10.9698 15.25ZM6.99515 8.1167L7.2375 7.6917C6.98707 7.6917 6.74472 7.77503 6.5266 7.82503C6.59133 8.06835 6.66955 8.30763 6.76087 8.5417L6.99515 8.1167ZM9.35407 4.75003C8.04535 3.50003 6.93052 3.0167 6.42158 3.33337C5.91263 3.65003 5.75914 4.85003 6.17114 6.6667C6.81177 6.53111 7.45898 6.43097 8.10998 6.3667C8.49767 5.80628 8.91291 5.26668 9.35407 4.75003Z" fill="#F8F8F0"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_88_711">
                      <rect width="19.3884" height="20" fill="white" transform="translate(0.467773)"/>
                      </clipPath>
                      </defs>
                    </svg>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_88_702)">
                      <path d="M9.56496 2.48637C7.96942 2.48637 6.55195 3.54456 6.05797 5.10732L5.87988 6.18047V9.73741C5.87988 9.9153 5.96852 10.0732 6.1168 10.1647L8.8929 11.8148V6.92693H8.8937V6.69501L11.7036 5.02087C11.9753 4.8586 12.2713 4.74774 12.5777 4.68979L12.3072 3.74323C11.6094 2.93857 10.6109 2.48138 9.56496 2.48637ZM9.56496 3.46309L9.56013 3.46808C10.2024 3.46808 10.8196 3.69668 11.3136 4.11978C11.2935 4.12976 11.254 4.15553 11.225 4.17049L8.31995 5.89618C8.17168 5.98263 8.08303 6.14555 8.08303 6.32344V10.3741L6.83319 9.63101V6.28271C6.83238 4.72744 8.05484 3.46559 9.56496 3.46309Z" fill="white"/>
                      <path d="M16.2585 5.55403C15.4608 4.12866 13.8636 3.39146 12.3046 3.73155L11.3146 4.10903L8.32843 5.8875C8.17909 5.97645 8.09081 6.13461 8.08818 6.31278L8.09085 9.61788L12.1945 7.17393L12.1949 7.17465L12.3896 7.05869L15.2 8.73186C15.4721 8.89344 15.7132 9.10239 15.915 9.34719L16.5745 8.63224C16.9011 7.60649 16.7857 6.48595 16.2585 5.55403ZM15.4385 6.04239L15.4319 6.04057C15.753 6.61431 15.8698 7.28005 15.7615 7.9329C15.7431 7.91989 15.7017 7.8975 15.6746 7.87906L12.7733 6.14671C12.6266 6.05748 12.4455 6.05975 12.2962 6.14869L8.89544 8.17405L8.89441 6.68593L11.7054 5.01178C13.0108 4.23343 14.6814 4.69458 15.4385 6.04239Z" fill="white"/>
                      <path d="M17.0297 13.0679C17.8275 11.6425 17.6479 9.84715 16.5828 8.62448L15.7709 7.92881L12.7847 6.15034C12.6354 6.06139 12.4585 6.06161 12.3076 6.14835L9.53413 7.80328L13.6377 10.2472L13.6373 10.248L13.832 10.3639L13.8326 13.7112C13.833 14.0351 13.7781 14.3549 13.6735 14.6576L14.6034 14.8893C15.6279 14.6682 16.5109 14.0048 17.0297 13.0679ZM16.2097 12.5795L16.208 12.5727C15.8868 13.1465 15.3863 13.5836 14.7841 13.8134C14.7858 13.7904 14.7839 13.7422 14.7858 13.7088L14.7896 10.2508C14.7911 10.0751 14.6987 9.91444 14.5493 9.8255L11.1486 7.80014L12.3974 7.05517L15.2084 8.72931C16.5146 9.50623 16.9627 11.2292 16.2097 12.5795Z" fill="white"/>
                      <path d="M11.1074 17.5136C12.7029 17.5136 14.1204 16.4554 14.6144 14.8927L14.7925 13.8195V10.2626C14.7925 10.0847 14.7038 9.92677 14.5556 9.83533L11.7795 8.18516V13.0731H11.7787V13.305L8.96871 14.9791C8.69703 15.1414 8.40108 15.2523 8.09462 15.3102L8.36514 16.2568C9.063 17.0614 10.0614 17.5186 11.1074 17.5136ZM11.1074 16.5369L11.1122 16.5319C10.47 16.5319 9.85271 16.3033 9.35874 15.8802C9.37888 15.8702 9.41837 15.8445 9.44738 15.8295L12.3524 14.1038C12.5007 14.0174 12.5893 13.8544 12.5893 13.6766V9.62585L13.8392 10.369V13.7173C13.84 15.2726 12.6175 16.5344 11.1074 16.5369Z" fill="white"/>
                      <path d="M4.41384 14.4457C5.21161 15.8711 6.80874 16.6083 8.36773 16.2682L9.35773 15.8907L12.3439 14.1123C12.4933 14.0233 12.5815 13.8652 12.5842 13.687L12.5815 10.3819L8.47791 12.8258L8.47751 12.8251L8.2828 12.9411L5.47231 11.2679C5.20025 11.1063 4.9592 10.8974 4.75732 10.6526L4.0979 11.3675C3.77128 12.3933 3.88667 13.5138 4.41384 14.4457ZM5.23384 13.9574L5.24045 13.9592C4.91933 13.3854 4.8026 12.7197 4.91083 12.0669C4.92928 12.0799 4.97066 12.1023 4.99772 12.1207L7.89902 13.853C8.04574 13.9423 8.22684 13.94 8.37619 13.8511L11.7769 11.8257L11.778 13.3138L8.96692 14.988C7.66161 15.7663 5.991 15.3052 5.23384 13.9574Z" fill="white"/>
                      <path d="M3.64262 6.93185C2.84485 8.35722 3.02451 10.1526 4.08952 11.3753L4.90143 12.0709L7.88763 13.8494C8.03698 13.9384 8.21389 13.9381 8.3648 13.8514L11.1382 12.1965L7.03463 9.75252L7.03503 9.7518L6.84033 9.63584L6.83978 6.28851C6.8394 5.96467 6.8943 5.64486 6.99888 5.34211L6.06894 5.1105C5.04447 5.33159 4.16142 5.99494 3.64262 6.93185ZM4.46262 7.42021L4.46439 7.42702C4.78552 6.85328 5.28607 6.41614 5.88828 6.1864C5.88658 6.20938 5.88847 6.25754 5.88652 6.29094L5.88279 9.74898C5.88123 9.92467 5.9737 10.0853 6.12304 10.1743L9.52378 12.1996L8.27495 12.9446L5.46392 11.2704C4.1578 10.4935 3.70966 8.77052 4.46262 7.42021Z" fill="white"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_88_702">
                      <rect width="19.3884" height="20" fill="white" transform="translate(0.64209)"/>
                      </clipPath>
                      </defs>
                    </svg>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.27075 2.5H17.812V17.5H3.27075V2.5ZM11.9228 14.8833C12.16 15.3462 12.5218 15.7285 12.9646 15.9843C13.4075 16.2401 13.9126 16.3584 14.4191 16.325C15.7116 16.325 16.681 15.6333 16.681 14.3583C16.681 13.0833 16.0267 12.6917 14.8634 12.1417L14.5241 11.9917C13.9344 11.7333 13.7162 11.5583 13.7162 11.1583C13.717 11.0729 13.7349 10.9886 13.7689 10.9107C13.803 10.8328 13.8523 10.763 13.9138 10.7058C13.9753 10.6486 14.0477 10.6052 14.1263 10.5784C14.205 10.5516 14.2881 10.5419 14.3706 10.55C14.5597 10.5479 14.7451 10.6049 14.9022 10.7134C15.0594 10.822 15.181 10.9771 15.2512 11.1583L16.3094 10.4333C16.1262 10.0737 15.8451 9.77718 15.5006 9.58026C15.1561 9.38334 14.7633 9.29461 14.3706 9.325C14.1184 9.29954 13.8637 9.32853 13.623 9.41013C13.3822 9.49173 13.1605 9.62414 12.9721 9.79895C12.7836 9.97375 12.6325 10.1871 12.5283 10.4255C12.4242 10.6638 12.3693 10.9219 12.3671 11.1833C12.3671 12.3333 13.0215 12.85 13.9828 13.3083L14.3221 13.4583C14.9523 13.7417 15.3239 13.9167 15.3239 14.4C15.3239 14.8833 14.9603 15.0917 14.3948 15.0917C14.1167 15.0978 13.8426 15.0228 13.604 14.8754C13.3653 14.728 13.1718 14.5141 13.0457 14.2583L11.9309 14.925M11.3492 9.375H7.31V10.625H8.52177V16.6667H9.93551V10.625H11.3492V9.375Z" fill="#F8F8F0"/>
                    </svg>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

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
            
            <Image src="/next.svg" alt="Logo" width={100} height={24} className="m-auto mt-10 bg-white px-2 py-10"/>
          </div>
        </Container>
      </Section>

      {/* FOOTER */}
      <Section className="mb-0">
        <Container>
          <div className="flex flex-col flex-1 justify-between">
            <div>
              <Image src="/next.svg" alt="Logo" width={200} height={24} className="bg-white px-2 py-10 mb-14"/>
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
