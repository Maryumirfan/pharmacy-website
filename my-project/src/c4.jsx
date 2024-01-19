import React from 'react';
import './card.css';
import NavScroll from './navbar';

function C4() {
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
                    <img src="https://1family1health.com/wp-content/uploads/2021/05/albuterol-inhaler-2.jpg" alt="" className='medi4' />
                </div>
                <div className="info">
                    <h1 className='top1'>Albuterol</h1>
                    <p className='sec'><b>Description: </b>A short-acting bronchodilator used to treat asthma and open the <br /> airways for better breathing.</p>
                    <p className='third'><b>Precautions:</b>Do not take if you have narrow-angle glaucoma, cardiac <br /> arrhythmias, or blood pressure problems.</p>
                    <p className='fourth'><b>Side_Effects: </b>Nausea, dizziness, fast heartbeat, chest tightness, or shortness of <br /> breath.</p>
                    <button className='btn8' onClick={handleWhatsappButtonClick}>Shop from Whatsapp</button>
                </div>
            </div>
        </div>
    );
}

export default C4;