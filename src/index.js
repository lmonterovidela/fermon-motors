import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'material-responsive-grid';
import Home from "./Components/home";
import Header from "./Components/header";

const AppRouter = () => {
    return (
        <MuiThemeProvider>
            <BrowserRouter
                basename={'/'}>
                
                                <Switch>
                                    <Route exact path="/home" component={Home} />
                                    <Route exact path="/" component={Home} />
                                </Switch>
                            
        </BrowserRouter>
    </MuiThemeProvider>)
}

ReactDOM.render(<AppRouter/>, document.getElementById('root'));
registerServiceWorker();
