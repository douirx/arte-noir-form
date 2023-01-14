import { useState, useContext } from 'preact/hooks';
import { navigate } from 'preact-router';
import { FormDataContext } from './parent';

export default function Form2 (){
    const { formData, setFormData } = useContext(FormDataContext);
    const [telephone, setTelephone] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [city, setCity] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, telephone, zipcode, city });
    console.log(formData)
    navigate('/confirmation');
};
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="tel"
                value={telephone}
                placeholder="Enter your telephone number"
                onChange={(e) => setTelephone(e.target.value)}
            />
            <input
                type="text"
                value={zipcode}
                placeholder="Enter your zipcode"
                onChange={(e) => setZipcode(e.target.value)}
            />
            <input
                type="text"
                value={city}
                placeholder="Enter your city"
                onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}