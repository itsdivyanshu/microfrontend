declare module 'shared-app' {
    import { Store } from '@reduxjs/toolkit';
    import { Persistor } from 'redux-persist';
    import React from 'react';
  
    export const store: Store;
    export const persistor: Persistor;
    export const Sidebar: React.FC;
  
    export interface RootState {
      counter: { value: number };
      user: { name: string; email: string };
    }
  
    export function increment(): { type: string };
    export function decrement(): { type: string };
    export function setUser(user: { name: string; email: string }): { type: string; payload: { name: string; email: string } };
    export function clearUser(): { type: string };
  }