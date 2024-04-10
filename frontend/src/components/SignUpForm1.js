import { useEffect, useState, useContext } from "react"
import UserProfileContext from "../contexts/UserProfileContext";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import dribbleLogo from "../assets/dribbbleLogo.png";

function SignUpForm1() {

    const navigate = useNavigate();

    const {userProfile,setUserProfile} = useContext(UserProfileContext);

    const [isError,setIsError] = useState(false);

    const [formErrors,setFormErrors] = useState({
        fname:"",
        userName:"",
        email:"",
        password:"",
        terms:"",
    });

    const validate = (userProfile) => {
        setIsError(false);
        const errors = {};
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!userProfile.fname){
            errors.fname = "Name is required";
            setIsError(true);
        }
        if(!userProfile.userName){
            errors.userName = "Username is required";
            setIsError(true);
        }
        if(!userProfile.email){
            errors.email = "Email is required";
            setIsError(true);
        }
        else if(!regex.test(userProfile.email)){
            errors.email = "Invalid email id";
            setIsError(true);
        }
        if(userProfile.password.length<6){
            errors.password = "Password should be 6 characters or more";
            setIsError(true);
        }
        if(!userProfile.terms){
            errors.terms = "Agree to Terms of Service to continue";
            setIsError(true);
        }
        return errors
    }

    const handleChange = (e) => {
        setFormErrors(validate(userProfile));
        setUserProfile((prev) => {
            return {...prev,[e.target.name]:e.target.value}
        })
    }

    const handleTerms = (e) => {
        setFormErrors(validate(userProfile));
        setUserProfile((prev) => {
            return {...prev,[e.target.name]:e.target.checked}
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(userProfile));
        if(Object.keys(formErrors).length === 0){
            axios.post(`${process.env.REACT_APP_SERVER_API}/create-user`,{userProfile}).then((res) => {
                alert(res.data.message);
            }).then(() => navigate('/addImage'))
            .catch((err) => {
                setFormErrors(err.response.data);
                setIsError(true);
        });
        }
    }

    const printErrors = Object.values(formErrors).map((error,index) => {
                            return (
                                <li key={index} className="text-xs text-red-600">{error}</li>
                            )
                        })

    return (
        <div className="md:w-3/5 h-screen grid align-middle w-full">
            <div className="w-full grid grid-cols-4 p-4 bg-dribble-orange md:bg-white">
                <div className="col-span-2 md:hidden">
                    <img src={dribbleLogo} alt={"dribble"} className="justify-normal block md:hidden sm:w-32 h-auto w-24" />
                </div>
                <div className="col-span-2 md:col-span-4 h-full text-right">
                    <p className="sm:mt-4 text-dribbble-orange-text text-nowrap md:text-black sm:text-[16px] mt-2 text-sm">Already a member? <a className='text-indigo-500 hover:underline' href="#">Sign in</a></p>
                </div>
            </div>
            <div className="grid mx-auto">
                <h1 className="text-3xl font-bold text-left md:px-4 p-4">Sign up to Dribbble</h1>
                <div className={isError ? "p-4":"hidden"}>
                    <ul className="list-disc list-inside">
                        {printErrors}
                    </ul>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2">
                            <label className={formErrors.fname?"text-sm font-bold text-red-600":"text-sm font-bold text-black"} htmlFor="fname">Name</label><br />
                            <input className='w-full bg-input-bg-grey rounded-lg p-[10px] text-sm' type="text" name="fname" id="fname" placeholder={"e.g. John"} value={userProfile.fname} onChange={handleChange}/>
                        </div>
                        <div className="px-4 py-2">
                        <label className={formErrors.userName?"text-sm font-bold text-red-600":"text-sm font-bold text-black"} htmlFor="userName">Username</label><br />
                            <input className='w-full bg-input-bg-grey rounded-lg p-[10px] text-sm' type="text" name="userName" id="userName" placeholder={"e.g. JohnDesigns"} value={userProfile.userName} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="px-4 py-2">
                            <label className={formErrors.email?"text-sm font-bold text-red-600":"text-sm font-bold text-black"} htmlFor="email">Email</label><br />
                            <input className='w-full bg-input-bg-grey rounded-lg p-[10px] text-sm' type="email" name="email" id="email" placeholder={"e.g. johndesigns@example.com"} value={userProfile.email} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="px-4 py-2">
                            <label className={formErrors.password?"text-sm font-bold text-red-600":"text-sm font-bold text-black"} htmlFor="password">Password</label><br />
                            <input className='w-full bg-input-bg-grey rounded-lg p-[10px] text-sm' type="password" name="password" id="password" placeholder="6+ characters" value={userProfile.password} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="flex px-4 py-2">
                        <div className="p-1 scale-110">
                            <input type="checkbox" name="terms" id="terms" checked={userProfile.terms} value={userProfile.terms} onChange={handleTerms}/>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 inline">Creating an account means you're okay with our <a className="text-indigo-500 hover:underline" href="#">Terms of <br /> Service</a>,<a className='text-indigo-500 hover:underline' href="#">Privacy Policy</a>, and our default <a className='text-indigo-500 hover:underline' href="#"> <br />Notification Settings</a>.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="px-4 py-2">
                            <input className='bg-pink-500 px-9 py-2 rounded-lg text-white font-bold hover:bg-pink-600 cursor-pointer' type="submit" value="Create Account" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="px-4 py-2">
                            <p className="text-xs text-slate-500 inline">This site is protected by the reCAPTCHA and the Google <br /><a className="text-indigo-500 hover:underline" href="#">Privacy Policy</a> and <a className="text-indigo-500 hover:underline" href="#">Terms of Service</a> apply</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm1