import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Form from './Form'
import Card1 from './Card1'
import Card2 from './Card2'

function App() {

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '0000 0000 0000 0000',
    cardHolderName: 'JANE APPLESEED',
    expMonth: '00',
    expYear: '00',
    cvv: '000',
  });

  const handleFormSubmit = (newCardDetails) => {
    setCardDetails(newCardDetails);

    toast.success('Success', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="App ">
      <div className='left-div split'></div>
      <div className='right-div split'>
        <Form onFormSubmit={handleFormSubmit} />
      </div>
      <div className='card1 card '>
        <div className='card1-logo'>
          <div className='img1'></div>
          <div className='img2'></div>
        </div>
        <Card1 {...cardDetails} />
      </div>

      <div className='card2 card'>
        <div className='black-line'></div>
        <div className='cvv-div2'>
          <Card2 {...cardDetails} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
