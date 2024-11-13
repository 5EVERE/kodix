import React from 'react';
import Header from './components/Header';
import NewsSection from './components/NewsSection';
import NewPostSection from './components/NewPostSection';
import Footer from './components/Footer';
import PostInformation from './components/PostInformation';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: 'DM Sans, sans-serif',
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NewsSection></NewsSection>
              <NewPostSection></NewPostSection>
            </div>
          }
        ></Route>
        <Route path='/:id' element={<PostInformation/>}></Route>
      </Routes>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
