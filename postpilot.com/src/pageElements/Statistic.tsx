import React from 'react'
import DirectImg from '../assets/images/directmail.png'
type Props = {}

export default function Statistic({}: Props) {
  return (
    <div className="statistic">
        <div className="container">
            <h2>Why use direct mail? <br/> It <span>works</span> like crazy.</h2>
            <div className="statsItems">
                <div className="statItem">
                    <h3>28X</h3>
                    <span>Higher response rate than email & digital</span>
                </div>
                <div className="statItem">
                    <img src={DirectImg} alt="" />
                    <span>Higher response rate than <br/> email & digital</span>
                </div>
                <div className="statItem">
                    <h3>17 Days</h3>
                    <span>Lifespan of a postcard vs.<br/> seconds for email or SMS</span>
                </div>
            </div>
        </div>
    </div>
  )
}
