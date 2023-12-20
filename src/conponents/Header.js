
import { ImPlay2 } from "react-icons/im";
import { IoSearchOutline, IoReorderThreeOutline } from "react-icons/io5";
import './style/Header.css'
export default function Header() {
    return (
        <div className='content h-[50px] flex items-center justify-between scroll-mx-36 '>
            
                <div className='Logo ml-[100px] '>
                    <ImPlay2 size={40} style={{color:"green"}}/>                   
                </div>


                <div className='Menu mr-[40px]'>
                    <ul className='flex'>
                        <li>Movies</li>
                        <li>TV Shows</li>
                        <li><IoSearchOutline size={30}/></li>
                        <li>Login</li>
                    </ul>
                </div>

                <div className="Menuchoice flex hidden">
                    <IoSearchOutline/>
                    <IoReorderThreeOutline/>
                </div>
        </div>

    );
}