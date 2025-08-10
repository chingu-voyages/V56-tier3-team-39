// reducer.ts
export type Action = { type: "SEND_MESSAGE"; payload: string };
export interface State { messages: string[]; }
export const initialState: State = { messages: [] };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SEND_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
}