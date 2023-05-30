import React, { useState } from 'react';
import '../payment/payment.css';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { RadioGroup, FormControlLabel, Radio, RadioGroupProps } from '@mui/material';


const CustomRadio = styled(Radio)({
    color: 'rgba(54, 66, 89, 0.25)',
    border: '2px solid #364259',
    width: '24px',
    height: '24px',
    '.MuiSvgIcon-root': {
        visibility: 'hidden',
        boxShadow: 'inset 0'
    },
    '&.Mui-checked': {
        color: '#00F9FF',
        backgroundColor: "#00F9FF",
        border: '2px solid #16B2CA',
    },
    '&.Mui-checked:after': {
        content: 'url(/check.png)',
        color: 'black',
        backgroundColor: "#00F9FF",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '8px',
        lineHeight: '8px',
    },
});


const Payment: React.FC = () => {

    const [selectedService, setSelectedService] = useState("vod");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedService(event.target.value);
    };

    return (
        <div className='payment-container'>
            <div className='div-container'>
                <div className='div-1'>
                    <div className='header'>
                        <div className='coaching'>
                            <div className='coaching-text'>Coaching</div>
                        </div>
                        <div>
                            <img src="/Vector.png"></img>
                        </div>
                    </div>
                    <div>
                        <p className='master'>| Master+ League of Legends coaching | All roles |</p>
                    </div>
                    <div>
                        <p className='plan'>My coaching: macro - wave management - meta discussions - vods - decision making in game - vision - positioning - best picks - match-up and worse lanes - build decisions - In-game settings</p>
                    </div>
                </div>
                <div className='div-2'>
                    <RadioGroup aria-label="services" name="services" value={selectedService} onChange={handleChange}>
                        <div className='radio'>
                            <FormControlLabel value="vod" control={<CustomRadio />} label="" sx={{ padding: 0, margin: 0 }} />
                            <div className='label'>
                                <div className='label-1'>VOD Review 30m</div>
                                <div className='label-2'>VOD review of one of your games and I will point out the mistakes you made ... <span>+more</span></div>
                            </div>
                            <p>$6.35</p>
                        </div>
                        <div className='radio'>
                            <FormControlLabel value="duo" control={<CustomRadio />} label="Duo coaching 1h - $12.71" />
                        </div>
                        <div className='radio'>
                            <FormControlLabel value="master" control={<CustomRadio />} label="MASTER SUPPORT 4h - $45.54" />
                        </div>
                    </RadioGroup>
                </div>
            </div>
        </div>
    );
}

export default Payment;