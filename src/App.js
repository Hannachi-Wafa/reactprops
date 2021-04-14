import './App.css';
import Profile from './Profile/Profile';
import image from "./Profile/image.jpg";
function App() {
  const fullName="Wafa Hannachi";
  const bio="je me présente wafa hannachi j'ai 28 ans, je suis ingénieur en informatique industriel,maintenant je suis aucour de formation en Full-Stack en gomycode.";
  const profession="ingenieur en informatique industriel";
  const handleName=()=> {
    alert('Wafa Hannachi')
  }
  return (
    <div className="App">
    <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName}><img style={{borderColor:"black",borderStyle:"solid"}} width={150} height={150} src={image}></img></Profile>
  </div>
  );
}

export default App;
