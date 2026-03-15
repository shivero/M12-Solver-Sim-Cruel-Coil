import { useState } from "react";
import { SolverData } from "./solverdata";
import {
  type MechanicType,
  AvailableMechanics,
  type Roles as Role,
} from "./solverdata.types";
export const Solver = () => {
  const [turn, setTurn] = useState<number>(0);
  const [mechanicResult, setMechanicPassed] = useState<boolean>(false);
  const [selectedMechanic, setSelectedMechanic] = useState<string>();
  const [playerRole, setRole] = useState<Role | null>(() => getRandomRole());
  const buttonState = turn >= 5 ? "Reset" : "Next Turn";

  const handleChangeTurn = () => {
    if (turn >= 5) {
      setTurn(0);
      setRole(() => getRandomRole());
      return;
    }
    setTurn((prev) => prev + 1);
    setSelectedMechanic("");
  };
  const currentTurn = SolverData.find((w) => w.turn === turn);
  const pickOption = (selectedOption: MechanicType) => {
    console.log("picked", selectedOption);
    setSelectedMechanic(selectedOption);
    if (playerRole) {
      const playerParticipateInCurrentTurn =
        currentTurn?.solver.participants.includes(playerRole);
      console.log(playerParticipateInCurrentTurn);
      const nothingIsSelected = selectedOption === "nothing";
      if (!playerParticipateInCurrentTurn && nothingIsSelected) {
        setMechanicPassed(true);
        return;
      }
      if (playerParticipateInCurrentTurn) {
        const mechanicForPlayer = currentTurn?.solver.actions.find(
          (action) => action.role === playerRole,
        );
        console.log("playerParticipateInThisTurn", mechanicForPlayer);
        if (playerParticipateInCurrentTurn && nothingIsSelected) {
          setMechanicPassed(false);
        }
        if (mechanicForPlayer) {
          const isCorrect = mechanicForPlayer.mechanicType === selectedOption;
          setMechanicPassed(isCorrect);
        }
      }
    }
    return;
  };
  const participants = currentTurn ? currentTurn.solver.participants : [];
  const actionsToTake = AvailableMechanics;
  return (
    <div>
      <h2>M12S - coils solver</h2>
      <h3>Current turn: {turn}</h3>
      <button onClick={handleChangeTurn}>{buttonState}</button>
      <h3>Assigned role: {playerRole} </h3>
      {turn > 0 ? (
        <div>
          <div>Participants: {participants.join(", ")} </div>
          {selectedMechanic ? (
            mechanicResult ? (
              <div>✅ Great job</div>
            ) : (
              <div>❌ Wrong</div>
            )
          ) : null}
          <strong>Actions:</strong>
          {actionsToTake.map((w) => (
            <div key={w} className="options" onClick={() => pickOption(w)}>
              {w}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const getRandomRole = () => {
  const randomRoleNum = Math.floor(Math.random() * (4 - 1 + 1) + 1);
  const randomRoleSymbol = Math.floor(Math.random() * (2 - 1 + 1) + 1);
  const symbol = randomRoleSymbol > 1 ? "A" : "B";
  return `${symbol}${randomRoleNum}` as Role;
};
