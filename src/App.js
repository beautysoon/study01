import React,{Component} from 'react';
import './css/Welcome.css';
import {BrowserRouter, Route} from "react-router-dom";
import StuLogin from "./component/stu/StuLogin";
import TeaLogin from "./component/tea/TeaLogin";
import AdmLogin from "./component/adm/AdmLogin"
import Welcome from "./component/Welcome";
import AdmIndex from './component/adm/AdmIndex';
import StuManage from './component/adm/StuManage';
import AddCourse from "./component/tea/AddCourse";

class App extends Component{
    constructor(){
        super()
        this.state = {users: []};
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/" exact component={Welcome}/>
                    <Route path="/StuLogin" component={StuLogin}/>
                    <Route path="/TeaLogin" component={TeaLogin}/>
                    <Route path="/AdmLogin" component={AdmLogin}/>
                    <Route path="/AdmIndex" component={AdmIndex}/>
                    <Route path="/StuManage" component={StuManage}/>
                    <Route path="/AddCourse" component={AddCourse}/>
                </BrowserRouter>
                {/*<div className="App">*/}
                    {/*{this.state.users.map((user, index) => {*/}
                        {/*return (<h1 key={index}>{user.name}</h1>)*/}
                    {/*})}*/}
                {/*</div>*/}
            </div>
        )
    }
}
export default App;


