"use client";
import Image from "next/image";
import { FC } from "react";
import Profile from "@/../public/images/heroProfile.jpg";
import { TypeAnimation } from "react-type-animation";

interface IntroProps {}

const Intro: FC<IntroProps> = ({}) => {
    return (
        <div className="flex flex-1 flex-col md:flex-row gap-7 mt-3">
            <div className="flex flex-1">
                <Image
                    src={Profile}
                    alt=""
                    className=" rounded-xl  w-[90%] mx-auto lg:h-full lg:w-full border-2 shadow-md border-white"
                />
            </div>
            <div className="flex flex-col justify-between flex-1 p-5 md:p-0 lg:ml-2">
                <div className="flex flex-col gap-4 ">
                    <div className="text-3xl text-highlight font-semibold text-center">
                        Introduction
                    </div>
                    <div className="text-secondary text-lg mt-2 md:mt-0  max-w-[400px]">
                        <TypeAnimation
                            sequence={["", 600,
                                " I love to break boundaries and I always come with a 'can do' attitude with a strong sense of responsibility looking forward to working with a team that enjoys challenging projects and has an innovative outlook. I'm also open to tips on interview preparation, building a personal brand, launching a start-up, and he really really needs productivity tips. I always open to new opportunities and would love to have a chat over coffee. He is always open to new opportunities and would love to have a chat over coffee.",
                                1000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            speed={70}
                            repeat={0}
                            className=""
                        />
                    </div>
                    {/* <div className="text-secondary text-base mt-2 md:mt-0  max-w-[400px]">
                        I love to break boundaries and I always come with a
                        &apos;can do&apos; attitude with a strong sense of
                        responsibility looking forward to working with a team
                        that enjoys challenging projects and has an innovative
                        outlook. I&apos;m also open to tips on interview
                        preparation, building a personal brand, launching a
                        start-up, and he really really needs productivity tips.
                        I always open to new opportunities and would love to
                        have a chat over coffee. He is always open to new
                        opportunities and would love to have a chat over coffee.
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Intro;
