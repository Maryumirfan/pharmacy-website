import React from 'react';
import './card.css';
import NavScroll from './navbar';

function C10() {
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
                    <img src="https://www.postmymeds.co.uk/wp-content/uploads/2017/12/Omeprazole-20mg-Capsules.jpg" alt="" className='medi10' />
                </div>
                <div className="info">
                    <h1 className='top1'>Omeprazole</h1>
                    <p className='sec'><b>Description: </b>Omeprazole is a proton pump inhibitor used to reduce stomach acid. It is commonly prescribed to treat conditions such as gastroesophageal reflux disease (GERD) and stomach ulcers.</p>
                    <p className='third'><b>Precautions:</b>Take omeprazole before meals for optimal effectiveness <br /> and inform your doctor of any persistent side effects</p>
                    <p className='fourth'><b>Side_Effects: </b>Headache, nausea, diarrhea</p>
                    <button className='btn8' onClick={handleWhatsappButtonClick}>Shop from Whatsapp</button>
                </div>
            </div>
        </div>
    );
}

export default C10;