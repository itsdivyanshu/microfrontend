export declare const rootReducer: import("redux").Reducer<{
    counter: import("./slices/counterSlice").CounterState;
    user: import("./slices/userSlice").UserState;
}, import("redux").UnknownAction, Partial<{
    counter: import("./slices/counterSlice").CounterState | undefined;
    user: import("./slices/userSlice").UserState | undefined;
}>>;
export type RootState = ReturnType<typeof rootReducer>;
//# sourceMappingURL=rootReducer.d.ts.map