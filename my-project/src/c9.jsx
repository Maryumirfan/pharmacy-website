import React from 'react';
import './card.css';
import NavScroll from './navbar';

function C9() {
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
                    <img src="https://www.bloompharmacy.com/cdn/shop/products/ciprofloxacin-500-mg-10-tablets-518338.jpg?v=1687635258" alt="" className='medi9' />
                </div>
                <div className="info">
                    <h1 className='top1'>Ciprofloxacin</h1>
                    <p className='sec'><b>Description: </b>Ciprofloxacin is an antibiotic used to treat various bacterial <br /> infections, including urinary tract infections and respiratory tract infections.</p>
                    <p className='third'><b>Precautions:</b>Avoid taking ciprofloxacin with dairy products or calcium-fortified juices, and stay hydrated while using this medication.</p>
                    <p className='fourth'><b>Side_Effects: </b>Nausea, diarrhea, tendon rupture (rare)</p>
                    <button className='btn8' onClick={handleWhatsappButtonClick}>Shop from Whatsapp</button>
                </div>
            </div>
        </div>
    );
}

export default C9;