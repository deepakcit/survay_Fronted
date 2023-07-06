import './App.css';
import Sign_in from './components/Signin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from './components/Register';
import Surveylist from './components/Surveylist';
import SurveyPage from './components/SurveyPage';
import QuestionPage from './components/CreateQuestion';
import Preview from './components/Preview';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Sign_in />} />
           <Route path={"/Register"} element={<Register />} /> 
           <Route path={"/Surveylist"} element={<Surveylist />} />
           <Route path={"/Surveypage"} element={<SurveyPage />} />
           <Route path={"/Questions"} element={<QuestionPage />} />
           <Route path={"/Preview"} element={<Preview />} />

      
        </Routes>
      </Router>


    </div>
  );
}

export default App;
