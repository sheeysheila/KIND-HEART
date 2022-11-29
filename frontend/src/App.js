
import './App.css';
import Banner from './Component/banner'
import Navbar from './Component/navbar'
import Nonprofit from './Component/nonprofit';
import Charity from './Component/charity'
import Story from './Component/story';
import Chan from './Component/chan';
import Impact from './Component/impact';
import User from './Component/user';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Navbar/>
      <Nonprofit/>
      <Charity/>
      <Story/>
      <Chan/>
      <Impact/>
      <User/>
      
    </div>
  );
}

export default App;
