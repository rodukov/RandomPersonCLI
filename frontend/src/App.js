// import { Generate } from './components/generate'
import './styles/App.css'
import { Generate } from './components/generate'
function App() {
  document.title = "Generated 6 peoples"
  return (
    <div className="App">
        {Generate(6).map(human => {
          return <div className="FakeHuman">
            <img src="https://thispersondoesnotexist.com/image" className="person_image" alt="this_is_human_do_not_exists"></img>
            <div className="data">
              {human.map(dataitem => <p className="paragraph">{dataitem}</p> )}
            </div>
          </div>
        })}
    </div>
  );
}

export default App;
