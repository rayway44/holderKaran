
import './App.css';
import TeacherDashboard from './Pages/TeacherDashboard'


function App() {
  
  const textHolder = 'THIS IS A TEXT TEST - TEST'
  const black = `{{display:'inline'}}`

  return (
    <div>
      THIS IS APP
      <TeacherDashboard name={textHolder} check={black} />
      
    </div>
  );
}

export default App;
