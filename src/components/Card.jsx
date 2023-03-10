import React from 'react';
import Atropos from 'atropos/react';
import Style from './Card.module.css'
import {AiFillGithub, AiOutlineLinkedin} from 'react-icons/Ai';


const Card = ({nome, idade, foto, github, linkedin}) => {
    return (
        <Atropos className="my_atropos">
            <div className={Style.cardProfile}>
                <div className={Style.cardImg}>
                    <img src={foto} alt={nome} data-atropos-offset="-5"/>
                </div>
                <div className={Style.cardInfo}>
                    <div className={Style.cardText}>
                    <h1 data-atropos-offset="0"> {nome}</h1>
                    <h2 data-atropos-offset="0">{idade} </h2>
                </div>
                    <div className={Style.cardIcon}>
                        <a data-atropos-offset="3" href={github}><AiFillGithub/></a>
                        <a data-atropos-offset="-3%" href={linkedin}><AiOutlineLinkedin/>
                        </a>
                    </div>
                </div>
            </div>
        </Atropos>
    );
};

export default Card;
