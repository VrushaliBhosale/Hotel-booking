import React from 'react';
import './App.css';
import GetStarted from './components/getstarted';
import PhoneVerification from './components/phoneverification';
import Homepage from './components/homepage';
import HotelList from './components/hotel-list';
import Filter from './components/filter';
import HotelDetails from './components/hotel-details';
import Payment from './components/payment';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

let installPrompt = null;

function App() {
  const [installbtn, setInstallButton] = React.useState(false);

  React.useEffect(() => {
    console.log("Listening for Install prompt");
    return () => {
      window.addEventListener('beforeinstallprompt', e => {
        // For older browsers
        e.preventDefault();
        console.log("Install Prompt fired");
        installPrompt = e;
        // See if the app is already installed, in that case, do nothing
        if ((window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true) {
          console.log('Already installed');
          return false;
        }
        // Set the state variable to make button visible
        setInstallButton(true);
      })
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={GetStarted} />
        <Route exact path='/getstarted' component={GetStarted} />
        <Route path='/getstarted/phoneverification' component={PhoneVerification} />
        <Route path='/homepage' component={Homepage} />
        <Route path='/hotel-list' component={HotelList} />
        <Route path='/filter' component={Filter} />
        <Route path='/hotel-details' component={HotelDetails} />
        <Route path='/payment' component={Payment} />
      </Router>

    </div>
  );
}

export default App;

