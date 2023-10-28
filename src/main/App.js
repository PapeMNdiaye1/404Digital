import './Style/Style.css';
import React, { useState, Suspense, Fragment } from 'react';
import { Routes, BrowserRouter, Route, } from "react-router-dom";

import { Accueil } from './Pages/Accueil';
import { TheFooter } from './Pages/Accueil';
import Articles from './Pages/Articles';
import Service from './Pages/Service';
import Travaux from './Pages/Travaux';

const TopBare = React.lazy(() => import('./TopBare'));
const Contact = React.lazy(() => import('./Pages/Contact'));

//!###############################################################
function TheLoader() {
  return (
    <Fragment>
      <div className='before-loader'>
        <div className='hover_loader'>
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
      </div>
      <div className='hover_loader_container'>
        <div className='hover_loader'>
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
      </div>
    </Fragment>
  );
}
//!###############################################################

const Interior1 = React.lazy(() => import('./Pages/Projects/Interior_Design'));
const SmallHouse1 = React.lazy(() => import('./Pages/Projects/Small_House_1'));
const Hangar1 = React.lazy(() => import('./Pages/Projects/Hangar_1'));

const Touba = React.lazy(() => import('./Pages/Projects/Touba'));
const ProduitsA = React.lazy(() => import('./Pages/Projects/ProduitsA'));
const ProduitsB = React.lazy(() => import('./Pages/Projects/ProduitsB'));
const Articles_1 = React.lazy(() => import('./Pages/Projects/Articles_1'));
const Articles_2 = React.lazy(() => import('./Pages/Projects/Articles_2'));
const Articles_3 = React.lazy(() => import('./Pages/Projects/Articles_3'));
const Articles_4 = React.lazy(() => import('./Pages/Projects/Articles_4'));
const Articles_5 = React.lazy(() => import('./Pages/Projects/Articles_5'));
const City1 = React.lazy(() => import('./Pages/Projects/Cité'));
// const MSAD = React.lazy(() => import('./Pages/Projects/MSAD'));
const Villa_Saly = React.lazy(() => import('./Pages/Projects/Villa_B'));
const VillaTerangaAlAmin = React.lazy(() => import('./Pages/Projects/Villa_Teranga_Al_Amin'));

//!###############################################################
function App() {

  const [TheImage, setTheImage] = useState('');
  const [TheTitle, setTheTitle] = useState('');
  const [TheDate, setTheDate] = useState('');
  const [TheLink, setTheLink] = useState('/');

  const changeTab = (newTab, link) => {
    console.log(newTab, link);
    let TheFooter = document.querySelector(".the_footer")
    // TheFooter.style.opacity = '0';
  }

  const GetImage = (theimage, title, date, link) => {
    setTheImage(theimage);
    setTheTitle(title);
    setTheDate(date);
    setTheLink(link);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <TopBare onChangeTab={changeTab} />
        <div className='App_container'>
          <div className='hover_loader_container'>
            <div className='hover_loader'>
              <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
          </div>
          <div className='before-loader'>
          </div>
          <TheLoader />
          <Routes>
            <Route exact path="/"
              element={<Accueil GetImageToApp={GetImage} />}
            />
            <Route exact path="/Travaux" element={<Travaux />} />
            <Route exact path="/Services" element={<Service />} />
            <Route exact path="/Contact" element={<Suspense fallback={<TheLoader />}><Contact /></Suspense>} />
            <Route exact path="/ARTICLES" element={<Articles
            />} />
            {/* !############################################## */}
            <Route exact path="/Interior1" element={<Suspense fallback={<TheLoader />}><Interior1 /></Suspense>} />
            <Route exact path="/SmallHouse1" element={<Suspense fallback={<TheLoader />}><SmallHouse1 /></Suspense>} />
            <Route exact path="/Hangar1" element={<Suspense fallback={<TheLoader />}><Hangar1 /></Suspense>} />
            <Route exact path="/Touba" element={<Suspense fallback={<TheLoader />}><Touba /></Suspense>} />
            <Route exact path="/ProduitsA" element={<Suspense fallback={<TheLoader />}><ProduitsA /></Suspense>} />
            <Route exact path="/ProduitsB" element={<Suspense fallback={<TheLoader />}><ProduitsB /></Suspense>} />
            <Route exact path="/FORAFRICC_2023" element={<Suspense fallback={<TheLoader />}><Articles_1 /></Suspense>} />
            <Route exact path="/MSDAD-de-THIES" element={<Suspense fallback={<TheLoader />}><Articles_2 /></Suspense>} />
            <Route exact path="/Articles_3" element={<Suspense fallback={<TheLoader />}><Articles_3 /></Suspense>} />
            <Route exact path="/Articles_4" element={<Suspense fallback={<TheLoader />}><Articles_4 /></Suspense>} />
            <Route exact path="/CZECH_IT_OUT" element={<Suspense fallback={<TheLoader />}><Articles_5 /></Suspense>} />
            <Route exact path="/City1" element={<Suspense fallback={<TheLoader />}><City1 /></Suspense>} />
            {/* <Route exact path="/MSAD" element={<Suspense fallback={<TheLoader />}><MSAD /></Suspense>} /> */}
            <Route exact path="/Villa-Saly" element={<Suspense fallback={<TheLoader />}><Villa_Saly /></Suspense>} />
            <Route exact path="/VillaTerangaAlAmin" element={<Suspense fallback={<TheLoader />}><VillaTerangaAlAmin /></Suspense>} />

          </Routes>
          <TheFooter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
