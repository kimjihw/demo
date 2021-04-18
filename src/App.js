import React from 'react';
import AppRouter from './component/route/RouterComponent';
import NavBar from "./component/route/NavBar";
import Container from '@material-ui/core/Container';
import Login from "./component/login/Login";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import AddUserComponent from "./component/user/AddUserComponent";
function App(){
    return(
    <div>
        <NavBar/>
        <div className="App">
            <Router>
                <div className='NavbarItems'>
                    <ul className="nav-links">
                        <Link to='/' className="nav-logo"><li>로고</li></Link>
                        <Link to='/post'  className="nav-items"><li>자유게시판</li></Link>
                        <Link to='/Login' className="nav-items" ><li>로그인</li></Link>
                        <Link to ='/AddUserComponent' className = "nav-items"><li>회원가입</li></Link>
                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route path='/Login' component={Login} />
                        <Route path='/AddUserComponent' component={AddUserComponent}/>


                    </Switch>
                </div>
            </Router>
        </div>
    </div>
    );
}

export default App;