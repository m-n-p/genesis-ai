/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SlideComp from "../../../components/SlideComp";
import MainComp from "../../../components/MainComp";
import GridComp from "../../../components/GridComp";
import Header from "../../../components/Header";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-image relative">
        <div className="bg-opacity-30 h-screen bg-[#000D2DCF] ">
          <Header />
          <div
            style={{
              zIndex: 20,
            }}
            className="paddingx paddingy "
          >
            <div className="flex flex-col space-y-6 text-center text-white">
              <div className="text-[80px] font-[500] font-acme">
                <span className="text-[#FF1D6E]">Navigating</span>{" "}
                {`Tomorrow's`}
                Markets <span className="text-[#FF1D6E]">Today</span>
              </div>
              <div className="w-[80%] mx-auto desctext1">
                Empower your strategic decisions with actionable intelligence
                from Market <span className="text-[#FF1D6E]">Universe™</span>
              </div>
            </div>
            <div className="paddingdiv text-center text-white flex flex-col space-y-6">
              <div className="w-[60%] mx-auto desctext2">
                Join the vanguard of industry leaders who choose Market Universe
                to illuminate the path to business excellence. With daily
                updated insights and tailored strategy advisories, make every
                decision count
              </div>
              <button className="bg-[#FF1D6E] w-fit mx-auto py-3 px-6 rounded-full text-sm font-[600]">
                Experience Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="  paddingx">
        <div className="flex flex-col space-y-6 text-center text-white paddingdiv">
          <div className="title1 font-[500] font-acme text-[#15254C]">
            Step Into the Universe of
            <span className="text-[#FF1D6E]"> Strategic Mastery </span>{" "}
          </div>
          <div className="w-[80%] mx-auto desctext2 text-[#15254C]">
            Instantly navigate the potential of{" "}
            <span className="text-[#FF1D6E]">Market Universe.</span>
          </div>
          <div className="w-full mx-auto">
            <img className="mx-auto w-[90%]" src="/video.png" />
          </div>
          <div className="mx-auto w-[90%] text-sm text-[#15254C]">
            {`Click 'Experience Now' to dive into an interactive demo. Witness
            firsthand how our engines equip you with unparalleled market
            insights and strategic foresight, tailored for the innovators and
            pioneers of industry.`}
          </div>
          <button className="bg-[#FF1D6E] w-fit mx-auto py-3 px-6 rounded-full text-sm font-[600]">
            Experience Now
          </button>
        </div>
      </div>
      <div className="  paddingx">
        <div className="flex flex-col space-y-6 text-center text-white ">
          <div className="title1 font-[500] font-acme text-[#15254C]">
            <span className="text-[#FF1D6E]"> Industries and</span> Applications
          </div>
          <div className=" mx-auto desctext2 text-[#15254C]">
            From the ground up in AgriTech to the soaring aspirations of
            Aerospace, Market Universe provides the strategic compass for
            diverse industries to navigate their unique market landscapes.
          </div>
          <div className="w-full">
            <MainComp
              text="HealthTech Advancements"
              imgsrc="/s0.png"
              des="Empower healthcare innovation with data-centric market intelligence. Enhance HealthTech Strategy"
            />
          </div>

          <div>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              className="mySwiper"
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              // modules={[Autoplay]}
            >
              <SwiperSlide>
                <SlideComp text="AgriTech Innovations" imgsrc="/s1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <SlideComp text="Semiconductor Strategies" imgsrc="/s2.png" />
              </SwiperSlide>
              <SwiperSlide>
                <SlideComp text="Pet Care Market Pulse" imgsrc="/s3.png" />
              </SwiperSlide>
              <SwiperSlide>
                <SlideComp text="Aerospace Ascent" imgsrc="/s4.png" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="paddingdiv  paddingx">
        <div className="flex flex-col space-y-6 text-center text-white ">
          <div className="title1 font-[500] font-acme text-[#15254C]">
            Market Universe
            <span className="text-[#FF1D6E]"> Advantage</span>
          </div>
          <div className=" mx-auto desctext2 text-[#15254C]">
            {`Market Universe isn't just a tool; it's your strategic partner,
            intelligence advisor, and the compass guiding your business towards
            sustainable growth and scalability.`}
          </div>
          <div className="grid grid-cols-3 gap-10">
            <GridComp
              imgsrc="/g1.png"
              title="Sales Strategy"
              desc="Empower your team with strategies that boost marketing and sales performance"
            />
            <GridComp
              imgsrc="/g2.png"
              title="Strategic Advisor"
              desc="Leverage our AI-driven insights to craft market strategies that win"
            />
            <GridComp
              imgsrc="/g3.png"
              title="Market Intelligence"
              desc="Access daily updated market intelligence tailored to niche industries"
            />
            <GridComp
              imgsrc="/g4.png"
              title="Investment Guidance"
              desc="Identify investment sweet spots with data-backed recommendations"
            />
            <GridComp
              imgsrc="/g5.png"
              title="Competitive Analysis"
              desc="Gain a competitive edge with in-depth analysis of market rivals"
            />
            <div className="flex items-center justify-center title1 font-[500] font-acme text-[#15254C]">
              7 Niche Verticals 100+ Markets
            </div>
          </div>
        </div>
      </div>
      <div className="  paddingx">
        <div className="flex flex-col space-y-6 text-center text-white ">
          <div className="title1 font-[500] font-acme text-[#15254C]">
            Endorsed by
            <span className="text-[#FF1D6E]">Industry Leaders</span>
          </div>
          <div className=" mx-auto desctext2 text-[#15254C]">
            Real Success Stories from Global Pioneers
          </div>

          <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-[#15254C]">
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-[#15254C] border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e ">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Very easy this was to integrate
                </h3>
                <p class="my-4">
                  If you care for your time, I hands down would go with this.
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center ">
                <img
                  class="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Bonnie Green</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400 ">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-[#15254C] border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Solid foundation for any project
                </h3>
                <p class="my-4">
                  Designing with Figma components that can be easily translated
                  to the utility classes of Tailwind CSS is a huge timesaver!
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center ">
                <img
                  class="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Roberta Casas</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    Lead designer at Dropbox
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-[#15254C] border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e ">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Mindblowing workflow
                </h3>
                <p class="my-4">
                  Aesthetically, the well designed components are beautiful and
                  will undoubtedly level up your next application.
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center ">
                <img
                  class="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Jese Leos</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    Software Engineer at Facebook
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-[#15254C] border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e ">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Efficient Collaborating
                </h3>
                <p class="my-4">
                  You have many examples that can be used to create a fast
                  prototype for your team.
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center ">
                <img
                  class="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Joseph McFall</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    CTO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="  paddingx">
        <div className="flex flex-col space-y-6 text-center text-white paddingdiv">
          <div className="title1 font-[500] font-acme text-[#15254C]">
            Your Market Strategy
            <span className="text-[#FF1D6E]"> , Transformed </span>{" "}
          </div>
          <div className="w-[80%] mx-auto desctext2 text-[#15254C]">
            Join the elite circle of Market Universe strategists
          </div>

          <div className="mx-auto w-[90%] desctext1 text-[#15254C]">
            {`Embrace the comprehensive, data-driven decision-making that Market
            Universe offers. Click below to schedule your personalized
            demonstration, and let's chart the course to your market leadership
            together`}
          </div>
          <button className="bg-[#FF1D6E] w-fit mx-auto py-3 px-6 rounded-full text-sm font-[600]">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
}
