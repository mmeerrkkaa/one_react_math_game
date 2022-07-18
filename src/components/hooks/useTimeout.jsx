import { useEffect, useRef } from 'react';

export function useTimeout(callback, delay) {
  // Запомнить переданную функцию обратного вызова
  const savedCallback = useRef(callback);

  // переопределять callback при необходимости
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Запустить таймер
  useEffect(() => {
    // или не запустить когда не задано время задержки
    if (delay === null) return;

    const timerId = setTimeout(() => savedCallback.current(), delay);
    return () => clearTimeout(timerId);
  }, [delay])
}

export default useTimeout;