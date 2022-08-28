import './App.css';
import City from './components/City';

function App() {
  return(
    <div className="App">
      <City/>
      <City city="Pokhara" features="fantastic"/>
      <City city="ktm" features="Majestic"/>
      <City city="Dhading" features="marvelous"/>
      <City city="london City" features="beautiful"/>

      {/* <p>Hello,i am in london City. it is beautiful</p>
      <p>Hello,i am in pokhara. it is fantastic</p>
      <p>Hello,i am in ktm. it is Majestic</p>
      <p>Hello,i am in Dhading. it is marvelous</p> */}
    </div>
);
  }
export default App;
