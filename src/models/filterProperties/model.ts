import { createEffect, createEvent, createStore } from "effector";
import { mainFilter } from "@/common/constants/mockMainFilter";

export const $location = createStore(mainFilter.location.value);
export const $priceRange = createStore(mainFilter.price.value);
export const $typeProperty = createStore(mainFilter.typeProperty.value);
export const $categoryProperty = createStore("");
export const $room = createStore(0);

export const locationChanged = createEvent<string>();
export const priceRangeChanged = createEvent<string>();
export const typePropertyChanged = createEvent<string>();
export const categoryPropertyChanged = createEvent();
export const roomChanged = createEvent();

export const searchSubmitted = createEvent();

$location.on(locationChanged, (_, value) => value);
$priceRange.on(priceRangeChanged, (_, value) => value);
$typeProperty.on(typePropertyChanged, (_, value) => value);
