// import { Generate } from './components/generate'
import './styles/App.css'
import { Generate } from './components/generate'
function App() {

  return (
    <div className="App">
      {Generate().map(item => {
        <div className="FakeHuman">
          <img src="https://thispersondoesnotexist.com/image" class="person_image" alt="this_is_human_do_not_exists"></img>
          <div className="data">
            <p className="paragraph email">Myra Von</p>
            <p className="paragraph email">eefe@yahoo.com</p>
            <p className="paragraph address">8387 Kailee Camp</p>
          </div>
        </div>
      })}
    </div>
  );
}

export default App;
