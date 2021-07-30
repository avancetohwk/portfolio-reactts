import React from 'react';
import * as S from './styles';

import Logo from '../../assets/logo-edited.png';
import Burger from './burger';

type Props = {
  children?: any;
}

export default function Navbar(props: Props) {
  return (
    <>
        <div style={{height:'100vh'}}>
            <S.Nav>
                <S.Logo src={Logo} alt={'Gustavo Scarpim'} />
            </S.Nav>
            <Burger />
        </div>
        {props.children}
        
        
      
    </>
  )
}