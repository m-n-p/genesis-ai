/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";

//
import Header from "../../../components/Header";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import SlideComp from "../../../components/SlideComp";
import MainComp from "../../../components/MainComp";
import GridComp from "../../../components/GridComp";
import Footer from "../../../components/Footer";

import { useWindowDimensions } from "../../../components/useWindowDimension";
import Link from "next/link";

export default function Home() {
  const { width } = useWindowDimensions();
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, [hasWindow]);

  const getSlides = () => {
    if (width > 1115) {
      return 3;
    } else if (width > 674) {
      return 2;
    } else {
      return 1;
    }
  };

  return (
    hasWindow && (
      <div>
        <div className=" bg-image ">
          <div className="bg-opacity-80  bg-black ">
            <Header />
            <div
              style={{
                zIndex: 20,
              }}
              className="paddingx pt-12 pb-44 flex flex-col space-y-12"
            >
              <div className="flex flex-col space-y-8 text-center text-white">
                <div
                  className="text-[50px] lg:text-[70px] font-[600] tracking-wider  modernefont"
                  id="quote"
                >
                  Navigating
                  <span className="application_blue"> Tomorrows</span>
                  <span> Markets </span>
                  <span className="application_blue">Today</span>
                </div>
                <p className="w-[80%] mx-auto text-3xl font-light">
                  Empower your strategic decisions with actionable intelligence
                  from{" "}
                  <span className="application_blue block">
                    Market Universe™
                  </span>
                </p>
              </div>
              <div className=" text-center text-white flex flex-col space-y-8 text-xl">
                <div className="md:w-[80%] lg:w-[60%] mx-auto font-extralight">
                  Join the vanguard of industry leaders who choose Market
                  Universe to illuminate the path to business excellence. With
                  daily updated insights and tailored strategy advisories, make
                  every decision count
                </div>
                <Link
                  href={"https://calendly.com/partners-mandp/30min"}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 w-fit mx-auto py-4 px-10 text-xl rounded-full  font-semibold"
                >
                  Get a ticket <span className="text-2xl">🎫</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-44 paddingx">
          <div className="flex flex-col space-y-8 text-center text-black ">
            <div className=" font-[500]  desctext1 modernefont tracking-wide">
              Step Into the Universe of{"  "}
              <span className="application_blue font-bold underline underline-offset-4">
                Strategic Mastery
              </span>{" "}
            </div>
            <div className="w-[80%] mx-auto  desctext2">
              Instantly navigate the potential of{" "}
              <span className="application_blue">Market Universe.</span>
            </div>
            <div className="w-full mx-auto">
              <img
                className="mx-auto rounded-xl w-[80%]"
                src="/app.png "
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" pb-44 ">
          <div className="flex flex-col space-y-8 text-center text-black ">
            <div className="paddingx desctext1 font-[500] modernefont tracking-wide">
              <span className="application_blue font-bold underline underline-offset-4">
                Industries
              </span>{" "}
              and{" "}
              <span className="application_blue font-bold underline underline-offset-4">
                Applications
              </span>
            </div>
            <div className="paddingx  mx-auto desctext2 ">
              From the ground up in AgriTech to the soaring aspirations of
              Aerospace, Market Universe provides the strategic compass for
              diverse industries to navigate their unique market landscapes.
            </div>
            <div className="w-full !mt-16">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: true,
                }}
                modules={[Autoplay, EffectCoverflow]}
                className="swiper_container"
              >
                <SwiperSlide className="border rounded-md">
                  <MainComp
                    text="Aerospace Ascent"
                    imgsrc="/Aerospace.png"
                    des="Empower Aerospace innovation with data-centric market intelligence. Enhance Aerospace Strategy"
                  />
                </SwiperSlide>
                <SwiperSlide className="border rounded-md">
                  <MainComp
                    text="AgriTech Innovations"
                    imgsrc="/AgriTech.png"
                    des="Empower AgriTech innovation with data-centric market intelligence. Enhance AgriTech Strategy"
                  />
                </SwiperSlide>
                <SwiperSlide className="border rounded-md">
                  <MainComp
                    text="EV"
                    imgsrc="/EV.png"
                    des="Empower EV innovation with data-centric market intelligence. Enhance EV Strategy"
                  />
                </SwiperSlide>

                <SwiperSlide className="border rounded-md">
                  <MainComp
                    text="FoodTech"
                    imgsrc="/FoodTech.png"
                    des="Empower FoodTech innovation with data-centric market intelligence. Enhance FoodTech Strategy"
                  />
                </SwiperSlide>
                <SwiperSlide className="border rounded-md">
                  <MainComp
                    text="HealthTech"
                    imgsrc="/HealthTech.png"
                    des="Empower HealthTech innovation with data-centric market intelligence. Enhance FoodTech Strategy"
                  />
                </SwiperSlide>
                <SwiperSlide className="border rounded-md">
                  <MainComp
                    text="Semiconductor Strategies"
                    imgsrc="/Semiconductor.png"
                    des="Empower Semiconductor innovation with data-centric market intelligence. Enhance Semiconductor Strategy"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="pb-44  ">
          <div className="flex flex-col space-y-8 text-center text-black ">
            <div className="paddingx desctext1 font-[500] modernefont tracking-wide">
              Market Universe{" "}
              <span className="application_blue font-bold underline underline-offset-4">
                Advantage
              </span>
            </div>
            <div className="paddingx mx-auto desctext2 ">
              Market Universe isnt just a tool; its your strategic partner,
              intelligence advisor, and the compass guiding your business
              towards sustainable growth and scalability.
            </div>
            <div className="xl:w-4/5 mx-auto 	 sm:w-10/12 w-11/12 grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
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
              <div className="flex items-center border border-gray-200 rounded-lg  justify-center desctext1 font-extralight  ">
                <sapn className="application_blue mx-2 font-semibold">7</sapn>
                {"  "} Niche Verticals
                {"  "}
                <sapn className="application_blue mx-2 font-semibold">
                  100+ Markets
                </sapn>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-44  paddingx">
          <div className="flex flex-col space-y-8 text-center text-black ">
            <div className="desctext1 font-[500]  modernefont tracking-wide">
              Your Market Strategy{" "}
              <span className="application_blue font-bold underline underline-offset-4">
                Transformed
              </span>
            </div>
            <div className="mx-auto w-[90%]  desctext2">
              Embrace the comprehensive, data-driven decision-making that Market
              Universe offers. Click below to schedule your personalized
              demonstration, and lets chart the course to your market leadership
              together
            </div>
            <div className="flex flex-col space-y-4">
              <div className="w-[80%] mx-auto desctext2 font-extralight ">
                Join the elite circle of Market Universe strategists
              </div>

              <Link
                href={"https://calendly.com/partners-mandp/30min"}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-500 w-fit mx-auto py-4 px-10 text-xl text-white rounded-full  font-semibold"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
        <div className="  ">
          <Footer />
        </div>
      </div>
    )
  );
}
