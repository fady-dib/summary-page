import React, { useState } from 'react';
import './payment.css';
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
                        <div className='radio radio-1'>
                            <FormControlLabel value="duo" control={<CustomRadio />} label="" sx={{ padding: 0, margin: 0 }} />
                            <div className='label'>
                                <div className='label-1'>Duo coaching 1h</div>
                                <div className='label-2'>Duo coaching - how to generally play the game in every situation (builds/ru... <span>+more</span></div>
                            </div>
                            <p>$12.71</p>
                        </div>
                        <div className='radio'>
                            <FormControlLabel value="master" control={<CustomRadio />} label="" sx={{ padding: 0, margin: 0 }}/>
                            <div className='label'>
                                <div className='label-1'>MASTER SUPPORT 4h</div>
                                <div className='label-2'>4h of pre-game discussion (w/ opgg) ,skill,desired rank, Live game commenta... <span>+more</span></div>
                            </div>
                            <p>$45.54</p>
                        </div>
                    </RadioGroup>
                    <button className='buy' type="submit">BUY</button>
                </div>
                <div className='div-3'>
                    <div className='protection'>
                    For your own protection and for Challengermode to assist in any potential disputes, it's important that you never make any payments outside of the platform.
                    </div>
                    <div className='security'>
                        <img  src="/security.png"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;