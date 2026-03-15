const AvailableMechanics = [
  "tether out through coil opening",
  "tether in opposite of coil opening",
  "static tower 1 (in)",
  "static tower 2 (in)",
  "static tower 3 (out)",
  "static tower 4 (out)",
  "dynamic tower 1",
  "dynamic tower 2",
  "dynamic tower 3",
  "dynamic tower 4",
  "move out of the coil avoiding squish",
  "nothing",
] as const;
type MechanicType = (typeof AvailableMechanics)[number];

type Roles = "A1" | "A2" | "A3" | "A4" | "B1" | "B2" | "B3" | "B4";

interface SolverTurn {
  solver: SolverRow;
  turn: number;
}
interface SolverRow {
  participants: Roles[];
  actions: PlayerAction[];
}

interface PlayerAction {
  role: Roles;
  mechanicType: MechanicType;
}

export {
  AvailableMechanics,
  type MechanicType,
  type Roles,
  type SolverTurn,
  type SolverRow,
  type PlayerAction,
};
