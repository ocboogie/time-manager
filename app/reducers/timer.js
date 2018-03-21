// @flow
import type { Action } from "../types/Action";
import type { Timer } from "../types/Timer";

export type TimerState = { [string]: Timer };

export default function(state: TimerState = {}, action: Action): TimerState {
  switch (action.type) {
    case "TIMER_ADD":
      return { ...state, [action.payload.timer.id]: action.payload.timer };
    case "TIMER_PERM_REMOVE": {
      const { id } = action.payload;
      const editedState = { ...state };
      delete editedState[id];
      return editedState;
    }
    case "TIMER_TICK": {
      const { id } = action.payload;
      const tickedState = { ...state };
      const timer = tickedState[id];
      if (timer) {
        timer.time += 1;
      }
      // Once I can use optional chaining:
      // tickedState[id]?.time += 1;
      return tickedState;
    }
    case "TIMER_EDIT": {
      const { id, modification } = action.payload;
      const editedState = { ...state };
      const timer = editedState[id];
      if (timer) {
        Object.assign(timer, modification);
      }
      return editedState;
    }
    case "TIMER_START": {
      const { id } = action.payload;
      const editedState = { ...state };
      if (Object.prototype.hasOwnProperty.call(editedState, id)) {
        editedState[id].paused = false;
      }
      return editedState;
    }
    case "TIMER_STOP": {
      const { id } = action.payload;
      const editedState = { ...state };
      if (Object.prototype.hasOwnProperty.call(editedState, id)) {
        editedState[id].paused = true;
      }
      return editedState;
    }
    default:
      return state;
  }
}
