import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import MainPage from './components/MainPage';
import QuizRoutes from './routes/QuizRoutes';
import Yang from './components/yang/Yang';
import AboutUs from './components/aboutUs/AboutUs';
import UsefulResources from './components/UsefulResources';
import KanjiQuizPage from './components/quiz/KanjiQuizPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1f883d',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/Japanese-Learning">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/quiz/*" element={<QuizRoutes />} />
          <Route path="/kanji-quiz" element={<KanjiQuizPage />} />
          <Route path="/xiaoJieYang" element={<Yang />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/resources" element={<UsefulResources />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
