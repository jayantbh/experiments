import { DependencyList, useEffect } from 'react';

export const useInterval = (task: () => void, interval: number, deps: DependencyList) => {
  useEffect(() => {
    const timer = setInterval(task, interval);
    return () => clearInterval(timer);
  }, deps);
};
