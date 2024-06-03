import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from './Page1'
import Page2 from './Page2'
import Layout from './Layout'
import NoPage from './NoPage';

export default function App() {
 

  return (
    // <div className='main-buuton'>

    //   <button className='open-button' onClick={openPopup}>Open</button>
    //   {isPopupOpen && <Popup onClose={closePopup}/>}
    // </div>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="/" element={<Page1 />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
