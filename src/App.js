import logo from './logo.svg';
import './App.css';
import Search from './Component/Search';
import DiaryContextProvider from './Context/DiaryContext';
import Diary from './Component/Diary';

function App() {
  return (
    <div className="container">
      <DiaryContextProvider>
    <div className="row">
      <div className="col-lg-12 mb-3">
      <Search/>
     </div>
     <div style={{marginTop:100}}><Diary/></div>
    </div>
    </DiaryContextProvider>
  </div> 
  );
}

export default App;
