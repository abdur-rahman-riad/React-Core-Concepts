import logo from './logo.svg';
import './App.css';

// Default Function
function App() {

  const persionInfo = [
    { name: 'Mohammad', profession: 'Web Developer' },
    { name: 'Abdur', profession: 'Computer Engineer' },
    { name: 'Rahman', profession: 'Software Engineer' },
    { name: 'Riad', profession: 'Data Analyst' }
  ];

  return (
    <div className="App">
      <HelloReact></HelloReact>
      <Persion name="Riad" profession="Computer Engineer"></Persion>
      <Persion name="Rahman" profession="Software Engineer"></Persion>
      {
        persionInfo.map(persion => <CSE name={persion.name} profession={persion.profession}></CSE>)
      }
    </div>
  );
}

//Custom Function
function CSE(props) {
  return (
    <div className="bg-design">
      <h2>Name: {props.name}</h2>
      <h3>Profession: {props.profession}</h3>
    </div>
  );
}

// Custom Function
function HelloReact() {
  return <h3>Hello React.</h3>
}

// Custom Function
function Persion(props) {
  const persionStyle = {
    width: "50%",
    margin: "15px auto",
    color: "white",
    backgroundColor: "crimson",
    padding: "5px 25px",
    borderRadius: "5px"
  }

  return (
    <div style={persionStyle}>
      <h3>Name: {props.name}</h3>
      <h4>Profession: {props.profession}</h4>
    </div>
  );
}

export default App;
