import './App.css';
import Header from './MyComponents/Header';
import Dropdown from './MyComponents/Dropdown';
import Cards1 from './MyComponents/Cards1';
import {useState} from 'react';
import LoadingBar from 'react-top-loading-bar';

function App() {

  const [progress, setprogress] = useState(0);
  const [mobiles, setmobiles] = useState([]);

  const setProgress = (progress) => {
    setprogress(progress);
  }

  const setMobiles = (mobiles) => {
    setmobiles(mobiles);
  }

  return (
    <>
      <Header />
      <LoadingBar color='#f11946'
        progress={progress} />
      <div className='flex flex-col md:flex-row my-14 xl:mx-20'>
      <Dropdown setMobiles={setMobiles} progress={setProgress} />
      <Cards1 mobiles={mobiles} />
      </div>
    </>
  );
}

export default App;
