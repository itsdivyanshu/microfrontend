export interface UserState {
    name: string;
    email: string;
}
export declare const setUser: import("@reduxjs/toolkit").ActionCreatorWithPayload<UserState, "user/setUser">, clearUser: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"user/clearUser">;
declare const _default: import("redux").Reducer<UserState>;
export default _default;
//# sourceMappingURL=userSlice.d.ts.map