import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home/Home';
import TopSingle from './component/pages/topNewsSingle/TopSingle';
import FoodNews from './component/pages/foodPage/FoodNews';
import SportsNews from './component/pages/sportsPage/SportsNews';
import NotFound from './component/pages/notFound/NotFound';
import InterNews from './component/pages/internationalN/InterNews';
import Admin from './component/pages/admin/Admin';
import TechNews from './component/pages/technology/TechNews';
import Login from './component/pages/loginPage/Login';
import {

  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './component/PrivateRoute/PrivateRoute';



export const UserContext = createContext()

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <Router> 
       <Switch>
         <Route path = '/home'><Home/></Route>
         <Route path = '/topSingle/:newsId'><TopSingle/></Route>
         <Route path = '/foodNews'><FoodNews/></Route>
         <PrivateRoute path = '/sportsNews'><SportsNews/></PrivateRoute>
         <PrivateRoute path = '/interNews'><InterNews/></PrivateRoute>
         <Route path = '/admin'><Admin/></Route> 
         <Route path = '/technology'><TechNews/></Route>    
         <Route path = '/login'><Login/></Route>    
         <Route exact path = '/'><Home/></Route>
         <Route path = '*'><NotFound/></Route>
       </Switch>
     </Router>
     </UserContext.Provider>
    
  );
};

export default App;