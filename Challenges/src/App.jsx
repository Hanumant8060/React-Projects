import Player from './components/Player.jsx';
import ResetForm from './components/ResetForm.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
import Course from './components/Course.jsx';

function App() {


  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title='easy' targetTime={1} />
        <TimerChallenge title='medium' targetTime={3} />
        <TimerChallenge title='hard' targetTime={5} />
        <TimerChallenge title='expert' targetTime={10} />
        {/* <ResetForm /> */}
        {/* <Course /> */}
      </div>
    </>
  );
}

export default App;
