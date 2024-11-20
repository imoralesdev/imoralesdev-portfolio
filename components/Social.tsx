import React, { FC } from 'react';
import Link from "next/link";
import {
    FaGithub,
    FaLinkedinIn,
    FaYoutube
} from "react-icons/fa";

interface SocialProps {
    containerStyles: string;
    iconStyles: string;
}

const socials: { icons: JSX.Element; path: string }[] = [
    { icons: <FaGithub />, path: "" },
    { icons: <FaLinkedinIn />, path: "" },
    { icons: <FaYoutube />, path: "" },
]

const Social: FC<SocialProps> = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {
                socials.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            href={item.path}
                            className={iconStyles}>
                                {item.icons}
                            </Link>
                    )
                })
            }
        </div>
    )
}

export default Social;