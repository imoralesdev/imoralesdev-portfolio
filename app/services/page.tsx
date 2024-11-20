"use client";

import React, { FC } from 'react';
import { BsArrowDownRight } from "react-icons/bs";
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum facilisi phasellus nec penatibus sollicitudin mollis. Auctor a aliquet penatibus lorem, efficitur dignissim finibus. Aliquet aliquam tempus hac efficitur enim. Donec curae sem adipiscing rutrum sollicitudin sociosqu mauris senectus. Phasellus mollis pharetra nisi rhoncus duis. Dictum dis ex ad phasellus dictum. Ex vestibulum morbi mollis gravida pharetra nisi sociosqu.",
        href: ""
    },{
        num: "02",
        title: "UI/UX Design",
        description: "Vivamus condimentum nisi donec phasellus nulla suspendisse odio. Eros nibh ad sodales adipiscing malesuada. Rutrum aptent suspendisse lacinia fringilla eget arcu pretium ac. Sed commodo ultrices sed arcu faucibus duis, in egestas. Commodo nibh felis quam aenean feugiat, nec elit fusce. Porttitor massa aliquet tortor luctus, quis a justo. Suspendisse nascetur per rutrum ad cras ultricies.",
        href: ""
    },{
        num: "03",
        title: "Logo Design",
        description: "Vehicula nunc neque potenti litora tincidunt massa pretium mattis. Fermentum tempor vestibulum tincidunt tempus; suscipit diam pellentesque egestas. Rutrum molestie ornare eleifend class auctor. Litora montes tempor tempus nunc per netus metus mauris. Cras fames diam ligula adipiscing maecenas scelerisque natoque. Justo et congue ultrices torquent scelerisque ex habitant dui.",
        href: ""
    },{
        num: "04",
        title: "SEO",
        description: "Laoreet posuere porta consectetur curabitur dapibus iaculis mus. Fames suscipit fermentum hac sed dapibus vitae. Molestie penatibus senectus vel massa tincidunt ultrices vehicula. Commodo molestie dignissim quisque laoreet enim pretium. Consectetur dictumst vulputate dolor donec urna eleifend montes dictumst. At nisl litora a consequat enim eu posuere.",
        href: ""
    },
]

const Services: FC = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: "easeIn"
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                    >
                        {
                            services.map((service, index) => {
                                return (
                                    <div 
                                        key={index}
                                        className="flex-1 flex flex-col justify-center gap-6 group"
                                        >
                                        <div className="w-full flex justify-between items-center">
                                            <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                            <Link 
                                                href={service.href}
                                                className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                                <BsArrowDownRight className="text-primary text-3xl"/>
                                            </Link>
                                        </div>
                                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                        <p className="text-white/60">{service.description}</p>
                                        <div className="border-b border-white/20 w-full"></div>
                                    </div>
                                )
                            })
                        }
                    </motion.div>
            </div>
        </section>
    );
}

export default Services;