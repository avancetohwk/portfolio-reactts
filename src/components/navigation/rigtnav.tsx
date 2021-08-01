import React from 'react'
import * as S from './styles';

import Logo from '../../assets/logo-edited.png';
// import IconReact from '../../assets/react.svg';
// import IconMegamen from '../../assets/megamen.png';
// import IconMario from '../../assets/mario.png';
// import IconTurtle from '../../assets/turtle.png';

import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import About from '../../pages/about';
import Work from '../../pages/work';
import Contact from '../../pages/contact';
import Admin from '../../pages/admin';

type Props = {
  open: boolean;
}

function RightNav(props: Props) {

  return (
    <Router>
      <S.Ul open={props.open}>
        <S.LogoUl src={Logo} alt={'Gustavo Scarpim'} />
            <NavLink to="/about"
            activeStyle={{
                fontWeight: "bold",
                color: "#0DADEA"
            }}
            >
            <li>About</li>
            </NavLink>
            <NavLink to="/work"
            activeStyle={{
                fontWeight: "bold",
                color: "#0DADEA"
            }}
            >
            <li>Work</li>
            </NavLink>
            <NavLink to="/contact"
            activeStyle={{
                fontWeight: "bold",
                color: "#0DADEA"
            }}
            >
            <li>Contact</li>
            </NavLink>
        
            <NavLink to="/admin"
            activeStyle={{
                fontWeight: "bold",
                color: "#0DADEA"
            }}
            >
            <li>Admin</li>
            </NavLink>
      </S.Ul>


      <Switch>
        <Route exact path="/about" component={About}>
        </Route>
        <Route exact path="/work" component={Work}>
        </Route>
        <Route exact path="/contact" component={Contact}>
        </Route>
        <Route exact path="/admin" component={Admin}>
        </Route>
   

        <Redirect to='/about' />
      </Switch>
    </Router >
  )
}

export default RightNav