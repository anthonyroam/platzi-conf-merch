import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../containers/Home';
import { Checkout } from '../containers/Checkout';
import { Information } from '../containers/Information';
import { Payment } from '../containers/Payment';
import { Success } from '../containers/Success';
import { NotFound } from '../containers/NotFound';
import { Layout } from '../components/Layout';
import '../main.css';
import { AppProvider } from '../context/AppContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const App = () => {
  return (
    <PayPalScriptProvider
      options={{
        'client-id':
          'AeuMgN8KZ5QuBSvcOrcfWIsMPjeaSi5_srYgux1X09kvnHFJ4QzeSHq1b6TSxDtSbDxfKTS9oPdJIgho',
      }}
    >
      <AppProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout/information" element={<Information />} />
              <Route path="/checkout/payment" element={<Payment />} />
              <Route path="/checkout/success" element={<Success />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AppProvider>
    </PayPalScriptProvider>
  );
};

export { App };
