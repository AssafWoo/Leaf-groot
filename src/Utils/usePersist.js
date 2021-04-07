import { useEffect } from "react";

export function usePersistedContext(context, key = "state") {
  const persistedContext = localStorage.getItem(key);
  return persistedContext ? JSON.parse(persistedContext) : context;
}

export function usePersistedToken(){
  const demoToken = '23123412432534645grvgdfgeg234cvdfsbdhdsty'
  const persistedToken = localStorage.setItem('id', demoToken);
  return JSON.parse(persistedToken);
}

export function useGetPersistedToken(key) {
  const persistedExisitingToken = localStorage.getItem(key);
  return persistedExisitingToken ? true : false  ;
}

export function usePersistedReducer([state, dispatch], key = "state") {
  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [state]);
  return [state, dispatch];
}
