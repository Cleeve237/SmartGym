import { useState, useEffect, useCallback, useRef } from 'react';

export default function useCountdown(initialSeconds = 60) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const clear = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    clear();
    setSeconds(initialSeconds);
    setIsRunning(true);
  }, [clear, initialSeconds]);

  const stop = useCallback(() => {
    clear();
    setIsRunning(false);
  }, [clear]);

  const reset = useCallback(() => {
    clear();
    setSeconds(initialSeconds);
    setIsRunning(false);
  }, [clear, initialSeconds]);

  useEffect(() => {
    if (!isRunning) return;
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clear();
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return clear;
  }, [isRunning, clear]);

  useEffect(() => {
    return clear;
  }, [clear]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formatted = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  return { seconds, isRunning, formatted, start, stop, reset };
}
