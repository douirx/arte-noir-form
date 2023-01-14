import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Home extends Component {
    render() {
        return (
            <div>
            <h1>Welcome to my application</h1>
        <Link href="/form1">
            <button>Start the form</button>
        </Link>
    </div>
    );
    }
}