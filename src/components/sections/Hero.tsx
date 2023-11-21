import { FC } from "react";
import Intro from "./hero/Intro";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
    return (
        <section className="flex mt-10">
            <Intro />
        </section>
    );
};

export default Hero;
