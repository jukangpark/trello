import { atom } from "recoil";

export interface IToDo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: IToDo[];
}

/* export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: { to_do: ["a", "b"], doing: ["c", "d", "e"], done: ["f"] },
}); */

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": [],
    Doing: [],
    Done: [],
  },
});
// 기본 값은 객체, 객체안의 배열, 배열 안의 객체 <IToDo>

/* import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },

  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});
 */
