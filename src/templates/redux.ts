export function renderStore() {
    return (
`import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
`);
}

export function renderUseAppDispatch() {
    return (
`import { useDispatch } from 'react-redux'; // eslint-disable-line @typescript-eslint/no-restricted-imports
import type { AppDispatch } from '@/app/store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
`);
}

export function renderUseAppSelector() {
    return (
`import { useSelector } from 'react-redux'; // eslint-disable-line @typescript-eslint/no-restricted-imports
import type { RootState } from '@/app/store';

export const useAppSelector = useSelector.withTypes<RootState>();
`);
}