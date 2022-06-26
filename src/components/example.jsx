import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../containers/Home';
import { Checkout } from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import '../styles/components/App.css';
import Layout from '../components/Layout';
import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function App() {
  const initialState = useInitialState();
  return (
    <PayPalScriptProvider options={{"client-id": "AQ348XIPD92Fd586HLuYrTc1tqaYZHEpZIeT3rlMH04KUQBjZSZ0G2H4m4vsIhXs2-j3tSjtBbpcW-Ma"}}>
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route
                exact
                path="/checkout/information"
                element={<Information />}
              />
              <Route exact path="/checkout/payment" element={<Payment />} />
              <Route exact path="/checkout/success" element={<Success />} />
              <Route element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>
    </PayPalScriptProvider>
  );
}

export default App;



// import React, { useContext , useState} from 'react';
// import AppContext from '../context/AppContext';
// import { Link, useNavigate } from 'react-router-dom';
// import '../styles/components/Payment.css';
// import { handleSumTotal } from '../utils';
// import { PayPalButtons } from '@paypal/react-paypal-js';
// const Payment = () => {
//   const {
//     state: { cart },
//   } = useContext(AppContext);
//   const [paidFor , setPaidFor] = useState(false)

//   const handleApprove = (orderID) => {
//     setPaidFor(true)
//   }

//   const history = useNavigate()
//   if(paidFor)
//   {
//     history('/checkout/success')
//   }
//   return (
//     <div className="Payment">
//       <div className="Payment-content">
//         <h3>Resumen del pedido:</h3>
//         {cart.map((product, index) => (
//           <div key={index} className="Payment-item">
//             <div className="Payment-element">
//               <h4>{product.title}</h4>
//               <span>{product.price}</span>
//             </div>
//           </div>
//         ))}
//         {cart.length > 0 ? (
//             <h3>{`Total: ${handleSumTotal(cart)}`}</h3>
//           ) : <></> }
//         <div className="Payment-button" id="payment-button-container">
//           <PayPalButtons
//                 createOrder={(data, actions) => {
//                     return actions.order.create({
//                         purchase_units: [
//                             {
//                                 amount: {
//                                     value: handleSumTotal(cart),
//                                 },
//                             },
//                         ],
//                     });
//                 }}
//                 onApprove={(data, actions) => {
//                     return actions.order.capture().then((details) => {
//                         const name = details.payer.name.given_name;
//                         handleApprove(data.orderID)
//                     });
//                 }}
//             />
//         </div>
//       </div>
//       <div />
//     </div>
//   );
// };

// export default Payment;