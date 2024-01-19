import React from 'react';
import './card.css';
import NavScroll from './navbar';

function C2() {
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
            <div className='main2'>
                <div className="img">
                    <img src="https://5.imimg.com/data5/SELLER/Default/2023/1/JR/YJ/LF/29824675/lisinopril-20-mg-tablet-500x500.jpg" alt="" className='medi2' />
                </div>
                <div className="info2">
                    <h1 className='top1'>Lisinopril</h1>
                    <p className='sec'><b>Description: </b>An ACE inhibitor used to treat high blood pressure and congestive heart failure.</p>
                    <p className='third'><b>Precautions:</b>If pregnant or breastfeeding, or if you have heart problems, kidney problems, <br /> or low blood pressure, consult your doctor before taking.</p>
                    <p className='fourth'><b>Side_Effects: </b>Low blood pressure, fluid retention, cough, shortness of breath, or fatigue.</p>
                    <button className='btn8' onClick={handleWhatsappButtonClick}>Shop from Whatsapp</button>
                </div>
            </div>
        </div>
    );
}

export default C2;