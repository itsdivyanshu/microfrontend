export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    counter: import("..").CounterState;
    user: import("..").UserState;
} & import("redux-persist/es/persistReducer").PersistPartial, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        counter: import("..").CounterState;
        user: import("..").UserState;
    } & import("redux-persist/es/persistReducer").PersistPartial, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export declare const persistor: import("redux-persist").Persistor;
//# sourceMappingURL=store.d.ts.map