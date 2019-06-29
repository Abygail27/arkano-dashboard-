import React, { Component } from 'react'; 
import Navbar from '../layout/Navbar';
import SideDrawer from  './sideDrawer';
import DashboardSide from './dashboardSide';
import MainDashboard from './mainDashboard';

import './container.css';

class Dashboard extends Component {

    render(){

        return(

<div className="wrapper">
        <header className="main-head">The header</header>
        <Navbar/>
        <SideDrawer/>
        
        <div className="content">
        <MainDashboard/> 
        </div> 

        <aside className="side">
        <DashboardSide/>
    
        </aside>
     
</div>
  
 


      

          );
    };

};
            export default Dashboard;