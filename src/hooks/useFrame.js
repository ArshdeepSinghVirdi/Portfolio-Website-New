/* eslint-disable import/prefer-default-export, consistent-return */
import { useEffect } from 'react';
import Tempus from 'tempus';

export function useFrame(callback, priority = 0) {
  useEffect(() => {
    if (callback) {
      const unsubscribe = Tempus.add(
        (state) => {
          callback(state.time, state.deltaTime);
        },
        { priority },
      );

      return () => {
        if (unsubscribe) unsubscribe();
      };
    }
    return undefined;
  }, [callback, priority]);
}
