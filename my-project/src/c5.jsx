import React from 'react';
import './card.css';
import NavScroll from './navbar';

function C5() {
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
                    <img src="https://www.net32.com/media/shared/common/mp/house-brand/house-brand/media/generic-amoxicillin-500mg-100caps.jpg" alt="" className='medi5' />
                </div>
                <div className="info">
                    <h1 className='top1'>Amoxicillin</h1>
                    <p className='sec'><b>Description: </b>An antibiotic used to treat a variety of bacterial infections.</p>
                    <p className='third'><b>Precautions:</b>Do not take if you are allergic to penicillin, if you have a stomach ulcer, <br /> kidney disease, or severe skin rash.</p>
                    <p className='fourth'><b>Side_Effects: </b>Diarrhea, upset stomach, sore throat, or change in taste or smell</p>
                    <button className='btn8' onClick={handleWhatsappButtonClick}>Shop from Whatsapp</button>
                </div>
            </div>
        </div>
    );
}

export default C5;