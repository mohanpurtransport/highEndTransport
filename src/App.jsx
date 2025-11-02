import { Fragment, useLayoutEffect } from "react"
import { ThemeProvider } from 'styled-components';
import { Theme } from './utils/ThemeContext';
import { GlobalStyle } from './utils/globalStyle';
import ViewportWidthProvider from './utils/getViewport';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from "./utils/scrolltotop";

import Nav from './Components/nav/nav';
import Home from './pages/home/home';
import ContactUs from './pages/contact-us/contact-us'
import About from './pages/About/about'
import Services from './pages/Services/services'
import Fleet from "./pages/Fleet/fleet";

// const Fleet = () => {
//   return (
//     <Fragment>
//      <h1>
//       Under Construction
//      </h1>
//     </Fragment>
//   )
// }

function App() {

  return (
    <Fragment>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <ViewportWidthProvider>
          <ScrollToTop />
          <Routes>
            <Route exact path='/' element={<Nav/>}>
              <Route index element={<Home />} />
              <Route exact path='/home' element={<Home />} />
              <Route exact path='/about/*' element={<About />} />
              <Route path='/services/*' element={<Services />} />
              <Route path='/contact' element={<ContactUs />} />
              <Route path='/fleet/*' element={<Fleet />} />
            </Route>
          </Routes>
        </ViewportWidthProvider>
      </ThemeProvider>
    </Fragment>
  )
}

export default App;
