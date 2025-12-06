import React from "react";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
type Props = {};

export default function Header({}: Props) {
    return (
        <div className="header">
            <div className="container">
                <div className="headerLeft">
                    <MdOutlineLocalPostOffice className="logo" />
                    <span>PostPilot</span>
                </div>
                <div className="headerRight">
                    <nav>
                        <button className="navButton">
                            Resources
                            <IoIosArrowDown/>
                        </button>
                        <a href="" className="navLink">Success stories</a>
                        <button className="navButton">
                            Company
                            <IoIosArrowDown/>
                        </button>
                        <a href="" className="navLink">Pricing</a>
                    </nav>
                    <div className="headerButtons">
                        <button className="login">
                            Login
                        </button>
                        <button className="createAccount">
                            Create free acount
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
