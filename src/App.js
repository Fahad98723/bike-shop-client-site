import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import AddBikes from './Pages/AddBikes/AddBikes';
import Footer from './Pages/Shared/Footer/Footer';
import AllBikes from './Pages/AllBikes/AllBikes';
import Register from './Pages/LogIn/Register/Register';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import Purchase from './Pages/Purchase/Purchase';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="body">
        <AuthProvider>
        <Router>
          <Header/>
           <Switch>
             <Route exact path = '/'>
               <Home></Home>
             </Route>
             <Route  path = '/home'>
               <Home></Home>
             </Route>
             <Route  path = '/addBikes'>
               <AddBikes></AddBikes>
             </Route>
             <Route  path = '/allBikes'>
               <AllBikes></AllBikes>
             </Route>
             <Route  path = '/register'>
               <Register></Register>
             </Route>
             <Route  path = '/login'>
               <LogIn></LogIn>
             </Route>
             <PrivateRoute  path = '/dashboard'>
               <DashBoard></DashBoard>
             </PrivateRoute>
             <PrivateRoute  path = '/purchase/:id'>
               <Purchase></Purchase>
             </PrivateRoute>
           </Switch>
           <Footer></Footer>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
