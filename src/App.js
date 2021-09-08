import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home/Home';
import TopSingle from './component/pages/topNewsSingle/TopSingle';
import FoodNews from './component/pages/foodPage/FoodNews';
import SportsNews from './component/pages/sportsPage/SportsNews';
import NotFound from './component/pages/notFound/NotFound';
import InterNews from './component/pages/internationalN/InterNews';
import Admin from './component/pages/admin/Admin';
import Sidebar from './component/pages/admin/sidebar/Sidebar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (

     <Router> 
       <Switch>
         <Route path = '/home'><Home/></Route>
         <Route path = '/topSingle/:id'><TopSingle/></Route>
         <Route path = '/foodNews'><FoodNews/></Route>
         <Route path = '/sportsNews'><SportsNews/></Route>
         <Route path = '/interNews'><InterNews/></Route>
         <Route path = '/admin'><Admin/></Route> 
         <Route path = '/sidebar'><Sidebar/></Route>    
         <Route exact path = '/'><Home/></Route>
         <Route path = '*'><NotFound/></Route>
       </Switch>
     </Router>
    
  );
};

export default App;