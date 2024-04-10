import dribbbleLogoLight from "../assets/dribbbleLogoLight.png";
import addImage from '../assets/addImage.png';
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import UserProfileContext from "../contexts/UserProfileContext";


function SignUp2() {
    const {userProfile,setUserProfile} = useContext(UserProfileContext);
    const navigate = useNavigate();
    const defaultImg1 = "https://res.cloudinary.com/dpaqsb9t0/image/upload/v1712613627/profilePics/default3_eytgve.jpg";
    const defaultImg2 = "https://res.cloudinary.com/dpaqsb9t0/image/upload/v1712613661/profilePics/default1_tgc2ex.jpg";
    const defaultImg3 = "https://res.cloudinary.com/dpaqsb9t0/image/upload/v1712613673/profilePics/default-2_aqjg0q.jpg";

    const [locationSet,setLocationSet] = useState(userProfile.location!="");
    const [showImages,setShowImages] = useState(false);
    const showImagesStyles = (showImages?"absolute -left-20 border-solid border-slate--300 border-2 flex justify-around gap-5 p-4 rounded-lg bg-slate-200"
                                            :"hidden");
    const [imgSet,setImgSet] = useState(userProfile.image!="");
    const mainImageStyle = "mx-auto aspect-auto object-scale-down";
    const mainImgBorderStyle = (imgSet?"col-span-1 size-28 sm:size-36 md:size-40 rounded-full place-content-center overflow-hidden place-self-center":"col-span-1 size-28 sm:size-36 md:size-40 rounded-full border-dashed border-4 border-slate-300 place-content-center overflow-hidden place-self-center")
    const submitBtnStyle = (imgSet&&locationSet?"cursor-pointer bg-rose-400 py-2 px-20 text-white text-lg font-semibold rounded-lg ":
                                                "cursor-not-allowed bg-red-200 py-2 px-20 text-white text-lg font-semibold rounded-lg ")

    const handleImageClick = (data) => {
        setImgSet(true);
        setUserProfile((prev) => {
            return {...prev,image:data}
        })
        setShowImages(!showImages);
    }

    const uploadImage = (data) => {
        const formData = new FormData();
        formData.append("file", data);
        formData.append("upload_preset","dribbble");
        axios.post("https://api.cloudinary.com/v1_1/dpaqsb9t0/image/upload",formData)
        .then((res) => {
            setImgSet(true);
            setUserProfile((prev) => {
                return {...prev,image:res.data.url}
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if(!imgSet&&!locationSet){
            return
        }
        navigate('/chooseOption');
    }

    return (
        <div className="">
            <div className="w-full">
                <img className="md:p-6 md:w-40 w-32 p-3" src={dribbbleLogoLight} alt={"Dribbble"} />
            </div>
            <div className="md:w-2/3 md:mx-auto sm:w-full">
                    <form onSubmit={formSubmit} className="grid grid-cols-3 gap-4">
                        <div className="col-span-3">
                            <h3 className="text-4xl font-bold p-3">Welcome! Let's create your profile</h3>
                            <p className="px-3 text-slate-400">Let others get to know you better! You can do these later</p>
                        </div>
                        <div className="col-span-3">
                            <h4 className="text-xl font-bold p-3">Add an Avatar</h4>
                        </div>
                    
                        <div className={mainImgBorderStyle}>
                            <img className={mainImageStyle} src={userProfile.image||addImage} alt={"profile picture"} />
                        </div>
                        <div className="col-span-2 h-full place-content-center grid grid-cols-1 gap-5">
                            <div className="col-span-1">
                                <label htmlFor="image" className="text-nowrap my-auto px-4 py-2 border-slate-300 border-solid border-2 font-semibold rounded-md hover:bg-slate-200 cursor-pointer">Choose image</label>
                                <input onChange={(e) => {
                                    uploadImage(e.target.files[0]);
                                }} className="hidden" type="file" name={"image"} id={"image"} />
                            </div>

                            <div className="relative">
                                <a className="text-slate-400 cursor-pointer" onClick={() => setShowImages(!showImages)} >&gt; Or choose one or our defaults</a>
                                <div className={showImagesStyles}>
                                    <div className="col-span-1 size-20 sm:size-28 md:size-36 overflow-hidden py-2 px-1">
                                        <img className="size-20 sm:size-28 md:size-36 object-cover cursor-pointer" src={defaultImg1} alt={"default img"} onClick={() => handleImageClick(defaultImg1)}/>
                                    </div>
                                    <div className="col-span-1 size-20 sm:size-28 md:size-36 overflow-hidden py-2 px-1">
                                    <img className="size-20 sm:size-28 md:size-36 object-cover cursor-pointer" src={defaultImg2} alt={"default img"} onClick={() => handleImageClick(defaultImg2)}/>
                                        </div>
                                    <div className="col-span-1  size-20 sm:size-28 md:size-36 overflow-hidden py-2 px-1">
                                        <img className="size-20 sm:size-28 md:size-36 object-cover cursor-pointer" src={defaultImg3} alt={"default img"}  onClick={() => handleImageClick(defaultImg3)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <label htmlFor="location"><h4 className="text-xl font-bold pl-3 pr-3 pb-1 pt-10">Add your Location</h4></label>
                        </div>
                        <div className="col-span-3 p-3">
                            <input type="text" name="location" id="location" placeholder="Enter a location" value={userProfile.location} className="border-b-2 border-b-slate-300 border-b-solid p-1 text-lg font-semibold w-full caret-pink-500" onChange={(e) => {
                                setUserProfile((prev) => {
                                    return {...prev,location:e.target.value}
                                })
                                if(e.target.value !== ""){
                                    setLocationSet(true);
                                }else{
                                    setLocationSet(false);
                                }
                            }}/>
                        </div>
                        <div className="col-span-3 px-3 pt-6 mb-6 text-center md:text-left">
                            <input type="submit" value="Next" className={submitBtnStyle}/>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default SignUp2