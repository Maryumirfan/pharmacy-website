import React from 'react';
import './card.css';
import NavScroll from './navbar';

function C6() {
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
                    <img src="https://www.mon-pharmacien-conseil.com/15087-large_default/aspirin-of-the-rhone-500mg-50-tablets.jpg" alt="" className='medi6' />
                </div>
                <div className="info">
                    <h1 className='top1'>Aspirin</h1>
                    <p className='sec'><b>Description: </b>Aspirin is a nonsteroidal anti-inflammatory drug (NSAID) used <br /> to reduce fever and relieve mild to moderate pain from conditions <br /> such as muscle aches, toothaches, menstrual cramps, and headaches.</p>
                    <p className='third'><b>Precautions:</b>Avoid taking aspirin on an empty stomach to reduce the risk of stomach upset.</p>
                    <p className='fourth'><b>Side_Effects: </b>Upset stomach, heartburn</p>
                    <button className='btn8' onClick={handleWhatsappButtonClick}>Shop from Whatsapp</button>
                </div>
            </div>
        </div>
    );
}

export default C6;