import { useState, useContext } from 'preact/hooks';
import { navigate } from 'preact-router';
import { FormDataContext } from './parent';

export default function Form1 () {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const { setFormData } = useContext(FormDataContext);

const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ firstName, lastName, email });
    navigate('/form2');
};

    return (
        <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                value={firstName}
                placeholder="Enter your first name"
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                value={lastName}
                placeholder="Enter your last name"
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Next</button>
        </form>
    );
}