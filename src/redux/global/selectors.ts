import { createSelector } from '@reduxjs/toolkit';

export const baseSelector = ({ global }) => global;

export const globalSelector = createSelector(baseSelector, (global) => global);
