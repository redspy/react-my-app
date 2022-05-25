import logo from './logo.svg';
import './App.css';
import Test from './Test'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test />
        <img src={require('./resource/20220523_091053.jpg')} width="530" height="400" />
        <div>
          오늘 소을이는 빨강색 줄무늬 옷을 입었어요
        </div>
        <div>
          청 반바지도 입었답니다 하하하
        </div>
        <div>
          코딩 재밌다사랑
        </div>
        <hr></hr>
        <img src={require('./resource/20220522_171022.jpg')} width="530" height="400" />
        <div>어제는 자전거도 탔지요</div>
        <img src={require('./resource/img_20220513162100239.jpg')} width="530" height="400" />
        <div>지원이랑 소을이 사진</div>
        <img src={require('./resource/20220514_002551.jpg')} width="530" height="400" />
        <div>그리고 엄마랑 소을이가 자는 모습</div>
      </header>
    </div>
  );
}

export default App;
