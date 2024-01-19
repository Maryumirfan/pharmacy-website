import React from 'react';
import './card.css';
import NavScroll from './navbar';

function C8() {
    const handleWhatsappButtonClick = () => {
        // Replace the phone number with the desired WhatsApp phone number
        const phoneNumber = '03287388110';

        // Create the WhatsApp link
        const whatsappLink = `https://wa.me/${phoneNumber}`;

        // Open the link in a new tab/window
        window.open(whatsappLink, '_blank');
    };

    return (
        <div className='w'>
            <NavScroll />
            <div className='main'>
                <div className="img">
                    <img src="https://www.typharm.com/wp-content/uploads/2020/07/Paracetamol-500mg-Suppositories.png" alt="" className='medi8' />
                </div>
                <div className="info">
                    <h1 className='top1'>Paracetamol</h1>
                    <p className='sec'><b>Description: </b>Paracetamol is a common pain reliever and fever reducer. <br />It is often  used to alleviate mild to moderate pain from conditions such as <br />muscle aches, headaches, and toothaches.</p>
                    <p className='third'><b>Precautions:</b>Do not exceed the recommended dosage to avoid potential <br />liver damage.</p>
                    <p className='fourth'><b>Side_Effects: </b>Rare, but may cause skin rash</p>
                    <button className='btn8' onClick={handleWhatsappButtonClick}>Shop from Whatsapp</button>
                </div>
            </div>
        </div>
    );
}

export default C8;