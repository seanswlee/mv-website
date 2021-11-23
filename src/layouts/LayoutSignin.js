import React from 'react';
import Header from '../components/layout/Header02';

const LayoutDefault = ({ children }) => (
  <React.Fragment>
    <Header navPosition="right" hideNav />
    <main className="site-content">
      {children}
    </main>
  </React.Fragment>
);

export default LayoutDefault;  