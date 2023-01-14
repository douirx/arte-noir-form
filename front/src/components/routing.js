import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Home from './home'
import Form1 from './form/form1'
import Form2 from './form/form2'
import Success from './success'


export default class Routing extends Component {

    render() {
        return (
                <Router>
                    <Home path="/" />
                    <Form1 path="/form1" />
                    <Form2 path="/form2" />
                    <Success path="/confirmation" />
                </Router>
        );
    }
}
