import React from 'react';
import QRCode from 'qrcode.react'; // Rename the imported component or rename the functional component
import './QRCode.css';

const MyQRCodeComponent = () => { // Rename the functional component
  return (
    <div className="qr-code-container">
      <QRCode value="https://github.com/ShadyTarek10/Graduation_Project" size={200}/>
    </div>
  );
}

export default MyQRCodeComponent;
