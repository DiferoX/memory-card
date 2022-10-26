import logo from '../images/Logo.png';
import '../styles/Header.css';

function Header(props) 
{
  return (
    <header className="App-header">
      <p>Best Score <strong>{props.objectData.bestScore}</strong></p>
      <img src={logo} className="App-logo" alt="logo" />
      <p><strong>{props.objectData.currentScore}</strong> Current Score</p>
    </header>
  );
}

export default Header;
