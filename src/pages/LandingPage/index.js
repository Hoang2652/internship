import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function landingPage() {
   const [openHeader, setOpenHeader] = useState(false);
   const handleOpenHeader = (isOpen) => {
      if (isOpen) {
         setOpenHeader(true);
      } else {
         setOpenHeader(false);
      }
   };
   return (
      <React.Fragment>
         <Header changeOpacity={handleOpenHeader} />
         <Body open={openHeader} />
         <Footer />
      </React.Fragment>
   );
}

export default landingPage;
