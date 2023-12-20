import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GiWolfHowl } from "react-icons/gi";

export default function Footer() {
    return (
        <div className="Footer w-full h-[210px] py-8 relative bg-[#242121] mt-[90px]">
            <div className="contentWrapper w-full m-0 flex items-center flex-col bg-[#242121]">
                <ul className="MenuItems text-[16px] gap-8 mb-[30px] flex justify-center items-center text-white">
                    <button className="hover:text-blue-500">
                        Terms Of Use
                    </button>
                    <button className="hover:text-blue-500">
                        Privacy-Policy
                    </button>
                    <a href="#" className="hover:text-blue-500">About</a>
                    <a href="#" className="hover:text-blue-500">Blog</a>
                    <button className="hover:text-blue-500">FAQ</button>
                </ul>

                <div className="infoText text-[#929090] text-center">Copyright© HieuLa deptraiso1 (Front-end itern)</div>

                <div className="icon flex justify-center items-center gap-2.5 mt-[20px]">
                    <button className="w-[50px] h-[50px] rounded-[50%] bg-black flex items-center justify-center "><a className="text-white hover:text-[#3E98C7]"><FaGithub /></a></button>
                    <button className="w-[50px] h-[50px] rounded-[50%] bg-black flex items-center justify-center "><a className="text-white hover:text-[#3E98C7] "><GiWolfHowl /></a></button>
                    <button className="w-[50px] h-[50px] rounded-[50%] bg-black flex items-center justify-center "><a className="text-white hover:text-[#3E98C7]"><FaInstagram /></a></button>
                    <button className="w-[50px] h-[50px] rounded-[50%] bg-black flex items-center justify-center "><a className="text-white hover:text-[#3E98C7]"><FaTwitter /></a></button>
                    <button className="w-[50px] h-[50px] rounded-[50%] bg-black flex items-center justify-center "><a className="text-white hover:text-[#3E98C7]"><FaLinkedin /></a></button>
                </div>
            </div>
        </div>

    );
}