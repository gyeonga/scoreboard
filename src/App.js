import React from 'react';
import logo from './logo.svg';
import './App.css';

// function component 만드는 법
// 1. 첫글자가 대문자
// 2. React Element를 리턴

const Header = (props) => {
  console.log(props);
  return (
    <header className="header">
      <h1 className="h1">{props.title}</h1>
      <span className="status">Players: {props.totalPlayer}</span>
    </header>
  )
};

// 클래스 컴포넌트
// 1. React.Component 상속, 2. render 오버라이딩해서 React Element를 리턴
class Counter extends React.Component {
  state = {
    score: 30,
    num: 1
  }

  increment() {
    console.log('increment');
    //this.state.score += 1; //
    // 1. 반드시 setState로 상태 변경
    // 2. 비동기로 동작하므로 콜백 펑션으로 상태 변경을 하라
    // 3. 머지된다. (오버라이트 된다.)
    this.setState(score: (prevState) => ({
      score: prevState.score + 1
    }));
  }

  // 리액트 이벤트 : 선언형 스타일: 함수 선언문을 우측에 배치
  render() {
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{this.state.score}</span>
      <button className="counter-action increment" onClick={this.increment.bind(this)}> + </button>
    </div>
  }
}

// 자식 -> 부모에게 통신
// 1. 부모에 콜백펑션 정의
// 2. props로 콜백 펑션을 전달
// 3. 자식 : 콜백펑션 호출 (함수선언문 형식으로)

const Player = (props) => {
  return (
    <div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={props.removePlayer}> X </button>
        {props.name}
			</span>
      <Counter score={props.score}/>
    </div>
  );
}

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4}
    ]
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={props.initialPlayers.length}/>

        {
          this.state.players.map((player) => {
            return (
              <Player name={player.name} score={player.score} key={player.id}
                      removePlayer={this.handleRemovePlayer}/>
            )
          })
        }
      </div>
    );
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }
}

export default App;
