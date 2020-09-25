import React, { useState } from "react";
import Action from "./game/Action";
import Header from "./game/Header";
import GameBody from "./game/GameBody";
import { initialState } from "./game/state";
import Result from "./game/Result";

export default function GameContainer() {
  const [gameState, setData] = useState(initialState);
  //Start game
  const startGame = (e) => {
    e.preventDefault();
    gameState.show = false;
    gameState.turns = [];
    setData({
      ...initialState,
      turns: gameState.turns,
      show: gameState.show,
    });
  };
  //Attack Handler
  const attackHandler = (e) => {
    e.preventDefault();
    const playerDamage = calculateDamage(10, 3);
    const monsterDamage = calculateDamage(10, 3);
    gameState.player = gameState.player - playerDamage;
    gameState.turns.unshift({
      isplayer: true,
      text: "Monster hits player for " + playerDamage,
    });
    gameState.monster = gameState.monster - monsterDamage;
    gameState.turns.unshift({
      isplayer: false,
      text: "Player hits monster for " + monsterDamage,
    });
    setData({
      ...gameState,
      player: gameState.player,
      monster: gameState.monster,
      turns: gameState.turns,
    });
    result();
  };
  //DoubleAttack handler
  const doubleAttackHandler = (e) => {
    e.preventDefault();
    const playerDamage = calculateDamage(10, 3);
    const monsterDamage = calculateDamage(20, 10);
    gameState.player = gameState.player - playerDamage;
    gameState.turns.unshift({
      isplayer: true,
      text: "Monster hits player for " + playerDamage,
    });
    gameState.monster = gameState.monster - monsterDamage;
    gameState.turns.unshift({
      isplayer: false,
      text: "Player hard hits for " + monsterDamage,
    });
    setData({
      ...gameState,
      player: gameState.player,
      monster: gameState.monster,
      turns: gameState.turns,
    });
    result();
  };
  //heal tab
  const healTabHandler = (e) => {
    e.preventDefault();
    if (gameState.player < 90) {
      gameState.player = gameState.player + 10;
      gameState.turns.unshift({
        isplayer: false,
        text: "Player heals with 10",
      });
    } else {
      gameState.turns.unshift({
        isplayer: false,
        text: "Player heals with " + (100 - gameState.player),
      });
      gameState.player = 100;
    }
    const playerDamage = calculateDamage(10, 3);
    gameState.player = gameState.player - playerDamage;
    gameState.turns.unshift({
      isplayer: true,
      text: "Monster hits player for " + playerDamage,
    });
    setData({
      ...gameState,
      healTab: true,
      player: gameState.player,
      turns: gameState.turns,
    });
    result();
  };
  //giveup handler
  const giveUpHandler = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    if (confirm("You Lost !")) {
      gameState.show = true;
      setData({ ...initialState, show: gameState.show });
    }
  };
  //calculate damage
  const calculateDamage = (max, min) => {
    return Math.max(Math.floor(Math.random() * max) + 1, min);
  };

  //checkResult
  const result = () => {
    if (gameState.player < 0) {
      // eslint-disable-next-line no-restricted-globals
      if (confirm("You Lost !")) {
        gameState.show = true;
        setData({ ...initialState, show: gameState.show });
      }
    }
    if (gameState.monster < 0) {
      // eslint-disable-next-line no-restricted-globals
      if (confirm("You Win !")) {
        gameState.show = true;
        setData({ ...initialState, show: gameState.show });
      }
    }
  };
  return (
    <>
      <Header />
      <GameBody player={gameState.player} monster={gameState.monster} />
      <Action
        show={gameState.show}
        startGame={startGame}
        attackHandler={attackHandler}
        healTabHandler={healTabHandler}
        doubleAttackHandler={doubleAttackHandler}
        giveUpHandler={giveUpHandler}
      />
      {gameState.show ? <p></p> : <Result turns={gameState.turns} />}
    </>
  );
}
