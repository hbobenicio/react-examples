import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from './Layout'
import Navbar from './Navbar'
import Toolbar from './Toolbar'
import HomePage from './Home/HomePage'
import UserPage from './User/UserPage'

class App extends Component {
  render() {
    const navbar = <Navbar />;
    const toolbar = <Toolbar />;

    return (
      <div id="App" className="App">
        <BrowserRouter>
          <Layout
            domToolbar={toolbar}
            domNavbar={navbar}>

            <Switch>
              <Route path="/users"  component={UserPage} />
              <Route path="/" exact component={HomePage} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
