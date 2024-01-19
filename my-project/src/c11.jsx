import React from 'react';
import './card.css';
import NavScroll from './navbar';

function C11() {
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
                    <img src="https://www.1800petmeds.com/dw/image/v2/BDKX_PRD/on/demandware.static/-/Sites-main/default/dwccbbcb9b/images/large/11163_420.jpg?sw=1000&sh=1000&q=40" alt="" className='medi11' />
                </div>
                <div className="info">
                    <h1 className='top1'>Amlodipine</h1>
                    <p className='sec'><b>Description: </b>Amlodipine is a calcium channel blocker used to treat high <br /> blood pressure and chest pain (angina). It works by relaxing blood vessels, allowing blood to flow more smoothly.</p>
                    <p className='third'><b>Precautions:</b>Notify your doctor if you experience severe swelling, lightheadedness, or rapid weight gain.</p>
                    <p className='fourth'><b>Side_Effects: </b>Swelling of ankles or feet, dizziness</p>
                    <button className='btn8' onClick={handleWhatsappButtonClick}>Shop from Whatsapp</button>
                </div>
            </div>
        </div>
    );
}

export default C11;