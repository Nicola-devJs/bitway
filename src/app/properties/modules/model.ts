import { createEvent, createStore } from "effector";

export const $acivePage = createStore(0);

export const changeActivePage = createEvent<number>();

$acivePage.on(changeActivePage, (_, page) => page);
