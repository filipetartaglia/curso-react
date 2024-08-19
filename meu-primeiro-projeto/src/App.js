import './App.css';

function App() {
  const name = 'Filipe'
  const newName = name.toUpperCase()

  function sum(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Alternando o JSX</h1>
      <p>Ola, {newName}</p>
      <p>Soma: {sum(2, 2)}</p>
      <img src={url} alt="Minha imagem"></img>
    </div>
  );
}

export default App;