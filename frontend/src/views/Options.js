import dribbleLogoLight from '../assets/dribbbleLogoLight.png';
import artist from '../assets/artist.png';
import designer from '../assets/designer.png';
import employer from '../assets/employer.png';
import { useState,useContext } from 'react';
import UserProfileContext from '../contexts/UserProfileContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Options() {

    const {userProfile,setUserProfile} = useContext(UserProfileContext);
    const navigate = useNavigate();
    const [checkedArtist,setCheckedArtist] = useState(false);
    const [checkedDesigner,setCheckedDesigner] = useState(false);
    const [checkedEmployer,setCheckedEmployer] = useState(false);

    const imgStyleBefore = "p-3";
    const imgStyleAfter = "p-3 -translate-y-24";

    const textStyleBefore = "lg:text-2xl text-lg font-semibold";
    const textStyleAfter = "lg:text-2xl text-lg font-semibold -translate-y-24";

    const divStyleBefore = "md:basis-1/3 sm:basis-1/2 basis-auto flex-none w-60 border-2 border-solid border-slate-300 p-4 text-center rounded-xl grid grid-col-1";
    const divStyleAfter = "md:basis-1/3 sm:basis-1/2 basis-auto flex-none w-60 border-2 border-solid border-pink-500 p-4 text-center rounded-xl max-h-80 grid grid-col-1";

    const hiddenTextBefore = "hidden";
    const hiddenTextAfter = "block lg:text-sm text-xs p-3 text-slate-500 -translate-y-24";

    const inputBefore = "form-checkbox focus:ring-0 active:ring-0 rounded-full accent-transparent size-6 mt-4 text-pink-500";
    const inputAfter = "form-checkbox focus:ring-0 active:ring-0 rounded-full accent-transparent size-6 mt-4 text-pink-500 -translate-y-24";

    const handleSubmit = (e) => {
        e.preventDefault();
        if(checkedArtist||checkedDesigner||checkedEmployer){
            axios.put("http://localhost:5000/update-user",{userProfile})
            .then((res) => console.log(res))
            .then(() => navigate('/done'))
            .catch((err) => console.log(err));
        }else{
            return
        }
        
    }

    return (
        <div className="w-full grid grid-cols-1">
            <div className="col-span-1 grid grid-cols-6">
                <div className="col-span-1">
                    <img className='md:p-6 md:w-40 sm:w-64 w-80 p-3' src={dribbleLogoLight} alt="logo" />
                </div>
                <div className="col-span-1 place-content-center">
                    <button type="button" className='lg:size-10 md:size-8 md:text-sm sm:size-6 size-4 text-xs bg-slate-300 rounded-md text-slate-500 font-extrabold hover:bg-slate-400'
                    onClick={() => navigate(-1)}>&lt;</button>
                </div>
            </div>
            <div className="col-span-1 text-center">
                <h2 className='text-4xl p-5 font-bold'>What brings you to Dribbble?</h2>
                <p className='text-slate-500'>Select the options that best describe you. Don't worry, you can explore other options later.</p>
            </div>
            <div className="col-span-1 place-content-center pt-20">
                <form onSubmit={handleSubmit} className="grid grid-cols-3 xl:w-2/3 md:w-5/6 w-full mx-auto xl:gap-10 gap-2">
                    <div className="col-span-3 flex flex-row md:gap-6 flex-wrap md:flex-nowrap justify-center sm:gap-10 gap-20">
                        <div className={checkedDesigner?divStyleAfter:divStyleBefore}>
                            <div className="col-span-1">
                                <img className={checkedDesigner?imgStyleAfter:imgStyleBefore} src={designer} alt="designer" />
                            </div>
                            <div className="col-span-1">
                                <h4 className={checkedDesigner?textStyleAfter:textStyleBefore}>I'm a designer looking to share my work</h4>
                            </div>
                            <div className="col-span-1">
                                <p className={checkedDesigner?hiddenTextAfter:hiddenTextBefore}>Consectetur adipisicing elit. At similique quisquam ipsum, praesentium beatae quam mollitia. Inventore temporibus nostrum sint?</p>
                            </div>
                            <div className="col-span-1">
                                <input type="checkbox" name="userType" id="" checked={checkedDesigner} 
                                onChange={(e) => {
                                    setCheckedDesigner(!checkedDesigner)
                                    setUserProfile((prev) => {
                                        return {...prev,designer:e.target.checked}
                                    })
                                }} 
                                className={checkedDesigner?inputAfter:inputBefore} />
                            </div>
                        </div>
                        <div className={checkedEmployer?divStyleAfter:divStyleBefore}>
                            <div className="col-span-1">
                                <img className={checkedEmployer?imgStyleAfter:imgStyleBefore} src={employer} alt="employer" />
                            </div>
                            <div className="col-span-1">
                                <h4 className={checkedEmployer?textStyleAfter:textStyleBefore}>I'm looking to hire a designer</h4>
                            </div>
                            <div className="col-span-1">
                                <p className={checkedEmployer?hiddenTextAfter:hiddenTextBefore}>Lorem sit amet dolr consectetur, adipisicing elit. Quaerat labore odit iure quibusdam saepe praesentium ut blanditiis natus aut amet.</p>
                            </div>
                            <div className="col-span-1">
                                <input type="checkbox" name="userType" id="" checked={checkedEmployer} 
                                onChange={(e) => {
                                    setCheckedEmployer(!checkedEmployer);
                                    setUserProfile((prev) => {
                                        return {...prev,employer:e.target.checked}
                                    });
                                }} 
                                className={checkedEmployer?inputAfter:inputBefore} />
                            </div>
                        </div>
                        <div className={checkedArtist?divStyleAfter:divStyleBefore}>
                            <div className="col-span-1">
                                <img className={checkedArtist?imgStyleAfter:imgStyleBefore} src={artist} alt="artist" />
                            </div>
                            <div className="col-span-1">
                                <h4 className={checkedArtist?textStyleAfter:textStyleBefore}>I'm looking for design inspiration</h4>
                            </div>
                            <div className="col-span-1">
                                <p className={checkedArtist?hiddenTextAfter:hiddenTextBefore}>Consectetur adipisicing elit. Earum numquam recusandae omnis facere, minima consequuntur perspiciatis sunt similique reiciendis debitis.</p>
                            </div>
                            <div className="col-span-1">
                                <input type="checkbox" name="userType" id="" checked={checkedArtist} 
                                onChange={(e) => {
                                    setCheckedArtist(!checkedArtist);
                                    setUserProfile((prev) => {
                                        return {...prev,artist:e.target.checked}
                                    })
                                }} 
                                className={checkedArtist?inputAfter:inputBefore} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 text-center">
                        <h5 className={(checkedArtist||checkedDesigner||checkedEmployer)?"block text-lg font-semibold py-4":"hidden"}>Anything else? You can select multiple</h5>
                        <input type="submit" value="Finish" className={(checkedArtist||checkedDesigner||checkedEmployer)?"px-20 py-2 bg-pink-500 mb-4 text-white rounded-lg font-semibold cursor-pointer":"px-20 py-2 bg-pink-300 mb-4 text-white rounded-lg font-semibold cursor-not-allowed"}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Options