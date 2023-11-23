"use client";
import React, { useState } from 'react';
import PopUp from './components/mensagemPopUp/PopUp.jsx';

export default function Home() {
 const [showPopup, setShowPopup] = useState(false);
 const [popupMessage, setPopupMessage] = useState('');
 const [popupType, setPopupType] = useState('');

 function handleShowPopup(message, type, time) {
    setPopupMessage(message);
    setPopupType(type);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, time);
 }

 return (
    <div>
      <button onClick={() => handleShowPopup('Error', 'error', 4000)}>
        Show Error MSG
      </button>
      <button onClick={() => handleShowPopup('Success', 'success', 4000)}>
        Show success MSG
      </button>
      {showPopup && (
        <PopUp message={popupMessage} typeColor={popupType}></PopUp>
      )}
    </div>
 );
}
