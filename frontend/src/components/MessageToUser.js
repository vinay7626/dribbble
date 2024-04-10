import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import UserProfileContext from '../contexts/UserProfileContext';

function MessageToUser() {

    const {userProfile,setUserProfile} = useContext(UserProfileContext);

    return (
        <div className="xl:w-1/2 md:w-3/4 sm:w-full mx-auto place-content-center text-center pb-16">
            <h1 className="text-4xl font-bold pt-24">Please verify your email...</h1>
            <FontAwesomeIcon icon={faEnvelopeCircleCheck} style={{color:"#b1b2b4"}} className='sm:text-9xl text-8xl pt-4' />
            <p className='text-lg p-5'>Please verify your email address. We have sent an email to:</p>
            <p className='text-lg font-bold p-5'>{userProfile.email}</p>
            <p className='text-lg p-5'>Didn't receive the email? Check your spam folder, it may have been caught by a filter. If <br /> you still dont see it, you can  
            <button className='text-pink-400 font-bold text-lg'> &nbsp;resend the confirmation email.</button></p>
        </div>
    )
}

export default MessageToUser