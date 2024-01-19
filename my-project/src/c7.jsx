import React from 'react';
import './card.css';
import NavScroll from './navbar';

function C7() {
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
                    <img src="https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F04499.JPG&w=1920&q=50" alt="" className='medi7' />
                </div>
                <div className="info">
                    <h1 className='top1'>Valium (Diazepam)</h1>
                    <p className='sec'><b>Description: </b>Diazepam is a benzodiazepine used to treat anxiety, muscle <br /> spasms, and seizures. It works by calming the brain and nerves.</p>
                    <p className='third'><b>Precautions:</b>Avoid alcohol and operate machinery cautiously while taking <br /> diazepam, as it may cause drowsiness.</p>
                    <p className='fourth'><b>Side_Effects: </b>Drowsiness, dizziness</p>
                    <button className='btn8' onClick={handleWhatsappButtonClick}>Shop from Whatsapp</button>
                </div>
            </div>
        </div>
    );
}

export default C7;