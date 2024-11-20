"use client";

import React, { useState, FC } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from '@/components/WorkSliderBtns';

interface Stack {
    name: string;
}

interface Project {
    num: string;
    category: string;
    title: string;
    description: string;
    stack: Stack[];
    image: string;
    live: string;
    github: string;
}

const projects: Project[] = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description: "Tristique neque suscipit quam molestie venenatis curabitur ornare nunc. Eu nibh massa; nisi commodo purus litora proin nam. In per felis urna taciti mi in curabitur aliquam. Urna curabitur aliquam ultricies porttitor aptent curabitur bibendum arcu quis. Sem feugiat orci fringilla montes posuere donec quam. Hac montes sociosqu nibh mattis penatibus, vehicula lacinia. Torquent ipsum eget elit sit nec. Aenean placerat tellus blandit placerat, vestibulum in nostra.",
        stack: [
            { name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }
        ],
        image: "/assets/web-example-01.png",
        live: "",
        github: ""
    },{
        num: "02",
        category: "fullstack",
        title: "project 2",
        description: "Sed ac platea per venenatis dolor consectetur velit felis facilisis. Consequat aenean senectus felis quisque in convallis nullam amet. Placerat dis aenean proin fermentum rutrum nunc elementum himenaeos. Facilisis risus tempor odio aptent tellus. Ad facilisi tempus augue semper quis fringilla sollicitudin ac. Ullamcorper libero fusce quisque at interdum eleifend dictum nulla.",
        stack: [
            { name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }
        ],
        image: "/assets/web-example-02.png",
        live: "",
        github: ""
    },{
        num: "03",
        category: "frontend",
        title: "project 3",
        description: "At nisi est ipsum eros nibh magnis penatibus. Class dui donec praesent semper; justo erat. Tortor adipiscing nisi quam mattis hendrerit mi fames natoque. Aptent ligula hendrerit habitant enim quis venenatis! Fringilla luctus amet nisi sagittis elementum conubia. Eu diam id ipsum commodo aliquet congue et nascetur praesent. Ullamcorper ridiculus nullam a class dignissim egestas dolor.",
        stack: [
            { name: "Next.js" }, { name: "Tailwind.css" }
        ],
        image: "/assets/web-example-03.png",
        live: "",
        github: ""
    },
]

const Work: FC = () => {
    const [project, setProject] = useState(projects[0]);
    
    const handleSlideChange = (swiper: { activeIndex: number }): void => {
        const currentIndex: number = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
                <div className="container mx-auto">
                    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                            <div className="flex flex-col gap-[30px]">
                                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                    { project.num }
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                    { project.category } project
                                </h2>
                                <p className="text-white/60">{ project.description }</p>
                                <ul className="flex gap-4">
                                    {
                                        project.stack.map(( item, index ) => {
                                            return (
                                                <li key={index} className="text-xl text-accent">
                                                    {item.name}
                                                    {index !== project.stack.length - 1 && ","}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="border border-white/20"/>
                                <div className="flex items-center gap-4">
                                    <Link href={project.live}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                    <Link href={project.github}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Github repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full xl:w-[50%]">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                className="xl:h-[520px] mb-12"
                                onSlideChange={handleSlideChange}>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />
                                                    <Image
                                                        src={project.image}
                                                        fill
                                                        className="object-cover"
                                                        alt='' />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                                <WorkSliderBtns
                                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                    btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                    iconsStyles=""/>
                            </Swiper>
                        </div>
                    </div>
                </div>
        </motion.section>
    );
}
export default Work;