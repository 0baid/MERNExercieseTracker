import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ExercisesList from './components/ExercisList';
import CreateExercise from './components/CreateExercise';
import EditExercise from './components/EditExercise';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar/>
          <Route path="/" exact component = {ExercisesList}/>
          <Route path="/edit/:id" exact component = {EditExercise}/>
          <Route path="/create" exact component = {CreateExercise}/>
          <Route path="/user" exact component = {CreateUser}/>
        </div>
      </Router>
    </>
  );
}

export default App;
