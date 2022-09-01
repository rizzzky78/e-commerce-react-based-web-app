import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import '../Main.css';
import Sonnet from './Sonnet';

const MyTabs = () => {
  const [key, setKey] = useState('home');

  return (
    <div className='Tabs'>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Tentang Saya">
        <Sonnet />
      </Tab>
      <Tab eventKey="profile" title="Alasan kenapa HNI HPAI">
        <Sonnet />
      </Tab>
      <Tab eventKey="contact" title="Minat Join HNI HPAI">
        <Sonnet />
      </Tab>
    </Tabs>
    </div>
  );
}

export default MyTabs;