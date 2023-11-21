import Image from "next/image";
import { FC } from "react";

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = ({}) => {
    return (
        <div className="">
            <Image
                alt="Abhinav Anand"
                src="/images/profilePic.jpg"
                height={150}
                width={150}
                className="object-cover border-4 border-white rounded-full shadow-md transition duration-1000 ease-in-out transform-gpu hover:scale-100 lg:hover:scale-125 ml-3 lg:ml-0"
            />
        </div>
    );
};

export default ProfilePic;
