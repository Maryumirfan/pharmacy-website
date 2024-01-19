import React from 'react';
import './card.css';
import NavScroll from './navbar';

function C3() {
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
                    <img src="https://www.assetpharmacy.com/wp-content/uploads/2017/09/Metformin-500mg-Tablets-100-Tablets.jpg" alt="" className='medi' />
                </div>
                <div className="info">
                    <h1 className='top1'>Metformin</h1>
                    <p className='sec'><b>Description: </b>An oral medication used to treat type 2 diabetes.</p>
                    <p className='third'><b>Precautions:</b>Do not take with glipizide or glimepiride, if you have a heart condition, kidney problems, or diabetic ketoacidosis, or if you are pregnant or breastfeeding</p>
                    <p className='fourth'><b>Side_Effects: </b>Low blood sugar, numbness, or tingling, blurred vision, or unpleasant taste.</p>
                    <button className='btn8' onClick={handleWhatsappButtonClick}>Shop from Whatsapp</button>
                </div>
            </div>
        </div>
    );
}

export default C3;