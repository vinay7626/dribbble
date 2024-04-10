import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dribbbleLogoLight from '../assets/dribbbleLogoLight.png';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram,faPinterest } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    const head = 'text-lg font-bold p-2';
    const sub = "text-[15px] text-slate-800 px-2 py-1 cursor-pointer hover:text-slate-500";

    return (
        <footer className="bg-my-gray w-full mx-auto pt-16">
            <div className="flex w-full flex-row  xl:flex-nowrap lg:flex-wrap pt-10 place-content-center flex-wrap pb-16 px-3">
                <div className="lg:basis-1/4 basis1/3 shrink">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 p-2">
                            <img src={dribbbleLogoLight} alt="dribbble" className='mix-blend-darken'/>
                        </div>
                        <div className="col-span-1 p-2">
                            <p className="text-sm pt-4">Dribbble is the world's leading community for creatives to share, grow, and get hired.</p>
                        </div>
                        <div className="col-span-1 p-2">
                            <FontAwesomeIcon icon={faBasketball} className='text-slate-400 p-1 hover:text-slate-500 cursor-pointer lg:text-xl text-sm' />
                            <FontAwesomeIcon icon={faTwitter} className='text-slate-400 p-1 hover:text-slate-500 cursor-pointer lg:text-xl text-sm' />
                            <FontAwesomeIcon icon={faFacebook} className='text-slate-400 p-1 hover:text-slate-500 cursor-pointer lg:text-xl text-sm' />
                            <FontAwesomeIcon icon={faInstagram} className='text-slate-400 p-1 hover:text-slate-500 cursor-pointer lg:text-xl text-sm' />
                            <FontAwesomeIcon icon={faPinterest} className='text-slate-400 p-1 hover:text-slate-500 cursor-pointer lg:text-xl text-sm' />
                        </div>
                    </div>
                </div>
                {/* <div className="col-span-3"> */}
                    {/* <div className="flex flex-row flex-wrap"> */}
                        <div className="lg:basis-1/5 sm:basis-1/3 basis-1/2 lg:shrink shrink-0">
                            <h4 className={head}>For designers</h4>
                            <p className={sub}>Go Pro!</p>
                            <p className={sub}>Explore Design work</p>
                            <p className={sub}>Design blog</p>
                            <p className={sub}>Overtime podcast</p>
                            <p className={sub}>Payoffs</p>
                            <p className={sub}>Weekly Warm-up</p>
                            <p className={sub}>Refer a friend</p>
                            <p className={sub}>Code of conduct</p>
                        </div>
                        <div className="lg:basis-1/5 sm:basis-1/3 basis-1/2 lg:shrink shrink-0">
                            <h4 className={head}>Hire designers</h4>
                            <p className={sub}>Post a job opening</p>
                            <p className={sub}>Post a freelance project</p>
                            <p className={sub}>Search for designers</p>
                            <h4 className={sub}>Brands</h4>
                            <p className={sub}>Advertise with us</p>
                        </div>
                        <div className="lg:basis-1/5 sm:basis-1/3 basis-1/2 lg:shrink shrink-0">
                            <h4 className={head}>Company</h4>
                            <p className={sub}>About</p>
                            <p className={sub}>Careers</p>
                            <p className={sub}>Support</p>
                            <p className={sub}>Media Kit</p>
                            <p className={sub}>Tetimonials</p>
                            <p className={sub}>API</p>
                            <p className={sub}>Terms of service</p>
                            <p className={sub}>Privacy Policy</p>
                            <p className={sub}>Cookie Policy</p>
                        </div>
                        <div className="lg:basis-1/5 sm:basis-1/3 basis-1/2 lg:shrink shrink-0">
                        <h4 className={head}>Directories</h4>
                        <p className={sub}>Design jobs</p>
                        <p className={sub}>Designers for hire</p>
                        <p className={sub}>Freelance designers for hire</p>
                        <p className={sub}>Tags</p>
                        <p className={sub}>Places</p>
                        <h4 className={head}>Design Assets</h4>
                        <p className={sub}>Dribbble Marketplace</p>
                        <p className={sub}>Creative Market</p>
                        <p className={sub}>Fontspring</p>
                        <p className={sub}>Font Squirrel</p>
                        </div>
                        <div className="lg:basis-1/5 sm:basis-1/3 basis-1/2 lg:shrink shrink-0">
                            <h4 className={head}>Design Resources</h4>
                            <p className={sub}>Freelancing</p>
                            <p className={sub}>Design Hiring</p>
                            <p className={sub}>Design Portfolio</p>
                            <p className={sub}>Design Education</p>
                            <p className={sub}>Creative Process</p>
                            <p className={sub}>Design Industry Trends</p>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            </div>
            <div className="w-full py-9 grid grid-cols-2 border-t-2 border-t-slate-300 border-t-solid">
                <div className="col-span-1 text-left pl-12"><p>&#169; 2023 Dribbble. All rights reserved</p></div>
                <div className="col-span-1 text-right pr-12"><p><b>20,501,853</b> shots dribbbled <FontAwesomeIcon icon={faBasketball} className='align-text-bottom text-2xl text-dribbble-orange-text'/></p></div>
            </div>
        </footer>
    )
}

export default Footer