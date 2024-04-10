import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dribbbleLogoDark from '../assets/dribbbleLogoDark.png';
import { faMagnifyingGlass,faBriefcase } from '@fortawesome/free-solid-svg-icons';
import UserProfileContext from '../contexts/UserProfileContext';
import { useContext, useState } from 'react';
import { faBars } from '@fortawesome/fontawesome-free-solid';

function Navbar(){
    const {userProfile,setUserProfile} = useContext(UserProfileContext);
    const [showNav,setShowNav] = useState(true);

    return (
        <header>
            <nav className='flex flex-row h-20 w-full mx-auto border-b-2 border-b-slate-300 border-b-solid'>
                <div className='lg:hidden'>
                    <button onClick={() => {
                        console.log(showNav);
                        setShowNav(!showNav);
                        }}><FontAwesomeIcon icon={faBars} className='py-7 px-2 sm:text-3xl text-lg' /></button>
                </div>
                <div className='flex-none place-content-center'>
                    
                    <img src={dribbbleLogoDark} alt="logo" className='p-2 sm:w-32 w-20 flex-none'/>
                </div>
                <div className={showNav?"flex-1 place-content-center lg:visible":"hidden lg:visible"}>
                    <ul className='lg:flex lg:flex-row lg:gap-10 lg:justify-evenly lg:static lg:border-none flex-col absolute place-self-center gap-y-20 left-0 top-20 bg-white divide-y max-lg:border-slate-300 max-lg:border-2 px-8'>
                        <li>
                            <p className='cursor-pointer max-lg:p-4 max-lg:text-xl'>Inspiration</p>
                        </li>
                        <li>
                            <p className='cursor-pointer max-lg:p-4 max-lg:text-xl'>Find Work</p>
                        </li>
                        <li>
                            <p className='cursor-pointer max-lg:p-4 max-lg:text-xl'>Learn Design</p>
                        </li>
                        <li>
                            <p className='cursor-pointer max-lg:p-4 max-lg:text-xl'>Go Pro</p>
                        </li>
                        <li>
                            <p className='cursor-pointer max-lg:p-4 max-lg:text-xl'>Hire Designers</p>
                        </li>
                    </ul>
                </div>
                <div className='relative place-content-center grow lg:grow-0'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-slate-300 sm:text-xl text-lg absolute top-7 left-1' />
                    <input type="search" name="search" placeholder='Search' id="search" className='bg-input-bg-grey border-none sm:w-36 w-24 rounded-lg active:border-none sm:py-2 py-1 pl-8'/>
                </div>
                <div className='flex flex-row-reverse place-content-center '>
                    <div className="p-3">
                        <button className='sm:py-3 sm:px-6 py-1 px-1 mt-3 sm:mt-0 bg-pink-400 rounded-lg text-white font-bold place-self-center'>Upload</button>
                    </div>
                    <div className="place-content-center">
                        <img className="sm:size-16 size-14 p-1 rounded-full overflow-hidden min-w-14" src={userProfile.image} alt="profile" />
                    </div>
                    <div className="place-content-center p-2">
                        <FontAwesomeIcon icon={faBriefcase} className='sm:text-3xl text-xl p-1 text-slate-300' />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
