import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import SignUp from './views/SignUp';
import UserProfileContextProvider from './contexts/UserProfileContextProvider';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp2 from './views/SignUp2';
import Options from './views/Options';
import ConfirmEmail from './views/ConfirmEmail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProfileContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp /> } index/>
          <Route path='/addImage' element={<SignUp2 />} />
          <Route path='/chooseOption' element={<Options />} />
          <Route path='/done' element={<ConfirmEmail />} />
        </Routes>
      </BrowserRouter>
    </UserProfileContextProvider>
  </React.StrictMode>
);