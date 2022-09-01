import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import Sonnet from './Sonnet';
import DevInfo from './DevInfo';


const Footer = () => {
  const [show, setShow] = useState(true);

  return (
    <>
    <div className='Footer'>
      <Alert show={show} variant="success">
        <Alert.Heading>Ini Footer</Alert.Heading>
            <Sonnet />
            <Button href='#' variant="outline-secondary">Kunjungi Website HNI HPAI</Button>{' '}
            <Button href='#' variant="outline-success">Lihat Album Testimoni</Button>{' '}
            <Button href='#' variant="outline-light">Hayolo Ngapain</Button>{' '}
            <DevInfo />
           {/* <Sonnet />*/}
        <hr />
        <p className='text-footer'>@My Web Allrights Reserved 2022</p>
        {/*<div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success" disabled>
            MyWeb All Rights Reserved 2022
          </Button>
        </div>*/}
      </Alert>
      {/*!show && <Button onClick={() => setShow(true)}>Show Alert</Button>*/}
      </div>
    </>
  );
}

export default Footer;