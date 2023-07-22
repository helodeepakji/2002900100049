import {BrowserRouter,Routes,Route}from 'react-router-dom'
import './App.css';
import TrainSchedule from './Trainschedule';
import Train from './Train';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<TrainSchedule></TrainSchedule>}></Route>
        <Route path="/:train_no" element={<Train />} />
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
