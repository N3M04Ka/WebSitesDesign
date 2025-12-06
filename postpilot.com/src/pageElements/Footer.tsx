import React from 'react'
import { MdOutlineLocalPostOffice } from "react-icons/md";
import ecoImg from '../assets/images/eco.png'
import { BiEnvelope } from "react-icons/bi";
type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="footer">
        <div className="container">
            <div className="topFooter">
                <div>
                    <img src={ecoImg} alt="" />
                    <p>Our paper is sourced from FSC-certified mills. We plant enough trees to more than double our paper usage.</p>
                </div>
                <div>
                    <a href="#">COMPANY</a>
                    <a href="#">About us</a>
                    <a href="#">Partner program</a>
                    <a href="#">Career</a>
                    <a href="#">Contact us</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div>
                    <a href="#">Pricing</a>
                    <a href="#">Reviews</a>
                    <a href="#">Direct Mail Academy</a>
                    <a href="#">Success stories</a>
                    <a href="#">Terms & conditions</a>
                </div>
                <div>
                    <a href="#">CONTACT</a>
                    <div className="mail">
                        <BiEnvelope className='envelop'/>
                        <p>support@postpilot.com</p>
                    </div>
                    <p>Printed with <span>❤</span> at our facility in South <br/>Carolina.</p>
                </div>
            </div>
            <div className="bottomFooter">
                <div className="logoBlock">
                    <div className="logo">
                        <MdOutlineLocalPostOffice className='logoImg'/>
                        <p>PostOffice</p>
                    </div>
                    <p>© 2022 PostPilot, Inc. All rights reserved.</p>
                </div>
                <div className="buttons">
                    <button>Login</button>
                    <button>Try it for free</button>
                </div>
            </div>
        </div>
    </div>
  )
}
