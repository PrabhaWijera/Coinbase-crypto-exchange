import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Hero.css';

const Hero = () => {
    const [cryptoLogos, setCryptoLogos] = useState([]);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 10,
                page: 1,
                sparkline: false,
            },
        })
            .then(response => {
                setCryptoLogos(response.data);
            })
            .catch(error => {
                console.error('Error fetching crypto logos:', error);
            });
    }, []);

    return (
        <div className="hero">
            <div className="hero-content">
                <h1 className="hero-title"> Your Gateway To Digital Prosperity</h1>
                <p className="hero-description">
                    Unlocking the Future of Financial Independence through Secure and Seamless Cryptocurrency Solutions.
                </p>
            </div>

            <div className="crypto-slider">
                {cryptoLogos.map((crypto, index) => (
                    <div key={index} className="crypto-logo">
                        <img src={crypto.image} alt={crypto.name} className="logo-image" />
                        <p className="logo-details">{crypto.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
