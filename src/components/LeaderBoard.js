import React from "react";
export default function LeaderBoard(props) {
  console.log(props);
  const mappedPlayers = props.players.map(player => {
    return (
      <Player
        key={player.id}
        player={player}
        updatePlayerRatio={props.updatePlayerRatio}
      />
    );
  });
  return <div>{mappedPlayers}</div>;
}

function Player(props) {
  return (
    <div>
      <div>{props.player.name}</div>
      <div>{props.player.campus}</div>
      <div>{props.player.role}</div>
      <div>{props.player.wins}</div>
      <div>{props.player.losses}</div>
      <button onClick={() => props.updatePlayerRatio(props.player.id, true)}>
        Add Win
      </button>
      <button onClick={() => props.updatePlayerRatio(props.player.id, false)}>
        Add Loss
      </button>
    </div>
  );
}
