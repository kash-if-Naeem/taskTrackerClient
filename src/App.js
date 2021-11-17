import './App.css';
import ActivityForm from './components/ActivityForm';
import Dashboard from './components/Dashboard';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Route, Switch } from 'react-router';
import EditActivity from './components/EditActivity';


function App() {

  return (
    <div className="App">
      {/* <ActivityForm/> */}
     
      <ToastContainer/>
       
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/" component={ActivityForm}/>
        <Route path="/edit/:id" component={EditActivity}/>
      </Switch>
    </div>
  );
}

export default App;
