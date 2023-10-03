import React, { useState } from 'react'
import "./form.css"

const Form = ({onFormSubmit}) =>{
    const [cardHolderName, setCardHolderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');
    const [cvv, setCVV] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            cardHolderName.length === 0 ||
            cardNumber.length === 0 ||
            expMonth.length === 0 ||
            expYear.length === 0 ||
            cvv.length === 0
        ) {
            setError(true);
            onFormSubmit(null);
        } else {
            setError(false);
            onFormSubmit({
                cardHolderName,
                cardNumber,
                expMonth,
                expYear,
                cvv,
            });
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className='boxes'>
                    <h5>CARDHOLDER NAME</h5>
                    <input type='text' value={cardHolderName} placeholder='e.g. Jane Appleseed' onChange={e => setCardHolderName(e.target.value)} />
                    {error && cardHolderName.length <= 0 ?
                        <label>Cardholder name required</label> : ""}
                </div>

                <div className='boxes'>
                    <h5>CARD NUMBER</h5>
                    <input type='number' value={cardNumber} placeholder='e.g. 1234 5678 9123 0000' onChange={e => setCardNumber(e.target.value)} />
                    {error &&  cardNumber.length <= 0 ?
                        <label>Card number required</label> : ""}
                </div>

                <div className='info boxes'>
                    <div className='date-div'>
                        <h5>EXP. DATE (MM/YY)</h5>
                        <div className='date-div-1'>
                            <input type='number' value={expMonth} placeholder='MM' className='month-input box' onChange={e => setExpMonth(e.target.value)} />
                            <input type='number' value={expYear} placeholder='YY' className='year-input box' onChange={e => setExpYear(e.target.value)} />
                        </div>
                        {error && (expMonth.length <= 0 || expYear.length <= 0) ?
                            <label>Expiry date required</label> : ""}

                    </div>

                    <div className='cvv-div'>
                        <h5>CVC</h5>

                        <input type='number' value={cvv} placeholder='e.g. 123' className='cvv-input' onChange={e => setCVV(e.target.value)} />
                        {error && cvv.length <= 0 ?
                            <label>CVC must be numeric</label> : ""}
                    </div>

                </div>
                <div className='boxes'>
                    <button>Confirm</button>
                </div>

            </form>
        </>
    );
}

export default Form;
