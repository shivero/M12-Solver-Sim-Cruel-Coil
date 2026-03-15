import type { SolverTurn } from "./solverdata.types";

const SolverData: SolverTurn[] = [
  {
    turn: 1,
    solver: {
      participants: ["A1", "B1", "A3"],
      actions: [
        { role: "A1", mechanicType: "tether out through coil opening" },
        { role: "B1", mechanicType: "tether in opposite of coil opening" },
        { role: "A3", mechanicType: "static tower 1 (in)" },
        { role: "B3", mechanicType: "dynamic tower 1" },
      ],
    },
  },
  {
    turn: 2,
    solver: {
      participants: ["A2", "B2", "A4", "B3"],
      actions: [
        { role: "A2", mechanicType: "tether out through coil opening" },
        { role: "B2", mechanicType: "tether in opposite of coil opening" },
        { role: "A4", mechanicType: "static tower 2 (in)" },
        { role: "B4", mechanicType: "dynamic tower 2" },
      ],
    },
  },
  {
    turn: 3,
    solver: {
      participants: ["A3", "B3", "A1", "B1"],
      actions: [
        { role: "A3", mechanicType: "tether out through coil opening" },
        { role: "B3", mechanicType: "tether in opposite of coil opening" },
        { role: "A1", mechanicType: "static tower 3 (out)" },
        { role: "B1", mechanicType: "dynamic tower 3" },
      ],
    },
  },
  {
    turn: 4,
    solver: {
      participants: ["A4", "B4", "B2"],
      actions: [
        { role: "A4", mechanicType: "tether out through coil opening" },
        { role: "B4", mechanicType: "tether in opposite of coil opening" },
        { role: "B2", mechanicType: "dynamic tower 4" },
      ],
    },
  },
  {
    turn: 5,
    solver: {
      participants: ["B1", "B2", "B3", "B4", "A2"],
      actions: [
        { role: "B1", mechanicType: "move out of the coil avoiding squish" },
        { role: "B2", mechanicType: "move out of the coil avoiding squish" },
        { role: "B3", mechanicType: "move out of the coil avoiding squish" },
        { role: "B4", mechanicType: "move out of the coil avoiding squish" },
        { role: "B2", mechanicType: "dynamic tower 4" },
        { role: "A2", mechanicType: "static tower 4 (out)" },
      ],
    },
  },
];
export { SolverData };
