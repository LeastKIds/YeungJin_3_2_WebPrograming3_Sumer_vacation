// import logo from './logo.svg';
import './App.css';
import Table from './component/Table'
import Title from './component/Title'
import Footer from './component/Footer'
import Input from './component/Input'

function App() {
  return (
    <div className="App" class="h-screen dark:bg-gray-800 overflow-auto">
        <Title/>
        <Table/>
        <Input/>
        <Footer/>
    </div>
  );
}

export default App;
