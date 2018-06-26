import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import QRScanner from './containers/QRScanner/QRScanner';
import StartPage from './components/StartPage';
import Q1 from './components/Questions/Question1';
import Q2 from './components/Questions/Q2';
import Q3 from './components/Questions/Q3';
import Q4 from './components/Questions/Q4';
import Q5 from './components/Questions/Q5';
import Final from './components/Questions/Final';
import Video from './components/Questions/Video';

class App extends Component {
  render() {
    let routes = ( 
      <Switch>                              
            <Route path="/qr" exact component={QRScanner} />
            <Route path="/q1" exact component={Q1} />
            <Route path="/q2" exact component={Q2} />
            <Route path="/q3" exact component={Q3} />
            <Route path="/q4" exact component={Q4} />
            <Route path="/q5" exact component={Q5} />
            <Route path="/final" exact component={Final} /> 
            <Route path="/video" exact component={Video} /> 
            <Route path="/" exact component={StartPage} />            
            <Redirect to="/" />
      </Switch>
    );
    return (
      <div className="APP">
        <Layout>
            {routes}
        </Layout>
      </div>
    );
  }
}

export default App;

