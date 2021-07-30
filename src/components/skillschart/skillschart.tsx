import React from 'react';
import Logo from '../assets/logo-edited.png';
import './skillschart.scss'

type Props = {
  children?: any;
}

export default function SkillsChart(props: Props) {
  return (
    <>
        <div className="skills ">
            <div className="charts">
                <div className="chart chart--dev">
                <span className="chart__title">High Risk Indicators				
            </span>
                <ul className="chart--horiz">
                    <li className="chart__bar" style={{width: '98%'}}>
                    <span className="chart__label">
                    History of family violence
                    </span>
                    </li>
                    <li className="chart__bar" style={{width: '58%'}}>
                    <span className="chart__label">
                    Imminence
                    </span>
                    </li>
                    
                </ul>
                </div>
                

            </div>
        </div>
        {props.children}
        
        
      
    </>
  )
}