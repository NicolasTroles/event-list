import { createSelector } from '@reduxjs/toolkit';

export const baseSelector = ({ events }) => events;

export const eventsSelector = createSelector(baseSelector, (events) => events);
