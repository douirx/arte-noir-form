import {createContext, useEffect, useState} from "preact/hooks";

export default function Parent () {


const FormDataContext = createContext();
const [formData, setFormData] = useState({});
const [step, setStep] = useState(1);

useEffect(() => {
    if (step === 2 && Object.keys(formData).length === 0) {
        setStep(1);
    }
}, [formData, step]);

return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
        <div>
            {step === 1 && <FirstForm setStep={setStep} />}
            {step === 2 && <SecondForm formData={formData} />}
        </div>
    </FormDataContext.Provider>
);
}