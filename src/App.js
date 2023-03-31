import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Card from './components/Card';
import data from './data';
export default function App() {

  const card = data.map((item)=> {
                return (
                  <Card
                      item = {item}
  />
                )
  })
  return (
    <>
  <Navbar/>
   {card}
  <Main/>
   </>
  );
}
