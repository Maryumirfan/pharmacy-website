import React from 'react';
import './card.css';
import NavScroll from './navbar';

function C1() {
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
                    <img src="https://www.schoolnursesupplyinc.com/cdn-cgi/image/quality%3D85/assets/images/18065.jpg" alt="" className='medi' />
                </div>
                <div className="info">
                    <h1 className='top1'>Ibuprofen</h1>
                    <p className='sec'><b>Description: </b>A non-steroidal anti-inflammatory drug used to reduce pain and <br /> inflammation.</p>
                    <p className='third'><b>Precautions:</b>Do not take with naproxen or aspirin, if pregnant or breastfeeding,or if you have a heart condition.</p>
                    <p className='fourth'><b>Side_Effects: </b>Headache, upset stomach, skin rash, or increased sensitivity to the sun</p>
                    <button className='btn8' onClick={handleWhatsappButtonClick}>Shop from Whatsapp</button>
                </div>
            </div>
        </div>
    );
}

export default C1;
