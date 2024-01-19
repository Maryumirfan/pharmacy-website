import React from 'react';
import './card.css';
import NavScroll from './navbar';

function C12() {
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
                    <img src="https://k2pharmacy.ph/cdn/shop/products/ZantricidRanitidine25mg_mL_50mg_2mL_SterileSolutionforInjection1.jpg?v=1671095430" alt="" className='medi12' />
                </div>
                <div className="info">
                    <h1 className='top1'>Ranitidine</h1>
                    <p className='sec'><b>Description: </b> Ranitidine reduces the amount of acid your stomach produces.</p>
                    <p className='third'><b>Precautions:</b>Disclose allergies, especially to ranitidine. Report kidney or liver issues. Discuss all medications to avoid interactions. </p>
                    <p className='fourth'><b>Side_Effects: </b>Common side effects include headache, nausea, fatigue, constipation or diarrhea, dizziness, and muscle pain.</p>
                    <button className='btn8' onClick={handleWhatsappButtonClick}>Shop from Whatsapp</button>
                </div>
            </div>
        </div>
    );
}

export default C12;