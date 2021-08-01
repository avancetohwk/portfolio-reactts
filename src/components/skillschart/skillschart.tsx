import React, { Component } from 'react';
import { isPropertySignature, skipPartiallyEmittedExpressions } from 'typescript';
import Logo from '../assets/logo-edited.png';
import './skillschart.scss'

type Props = {
  children?: any;
}

type State = {
  skills: any[]
}

export default class SkillsChart extends Component<Props,State> {
  
  constructor(props:Props){
    super(props);
    this.state = {
      skills: []
    }
  }

  componentDidMount(){
    let skillsData = [
      {name: "Adobe Skills", percentage: "75%"},
      {name: "Animation", percentage: "65%"},
      {name: "Sketching", percentage: "98%"},
      {name: "Character Drawing", percentage: "87%"},
      {name: "Composition", percentage: "92%"},
    ]

    this.setState({skills: skillsData});
  }


  render(){
    const {skills} = this.state;

    return (
      <>
          <div className="skills ">
              <div className="charts">
                  <div className="chart chart--dev">
                  {/* <span className="chart__title">High Risk Indicators</span> */}
              <ul className="chart--horiz">
                {
                  skills.map(s=>{
                    return (
                        <li className="chart__bar" style={{width: s.percentage}}>
                          <span className="chart__label">
                            {s.name}
                          </span>
                        </li>
                    )
                  })
                }
                  {/* <ul className="chart--horiz">
                      <li className="chart__bar" style={{width: '98%'}}>
                      <span className="chart__label">
                      History of family violence
                      </span>
                      </li>
                      <li className="chart__bar" style={{width: '58%'}}>
                      <span className="chart__label">
                      Imminence
                      </span>
                      </li> */}
                      
                  </ul>
                  </div>
                  
  
              </div>
          </div>
          
          
        
      </>
    )
  }
  
}