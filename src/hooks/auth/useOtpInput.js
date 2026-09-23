import { useState, useCallback, useRef } from 'react';

const OTP_LENGTH = 6;

export default function useOtpInput() {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
  const inputRefs = useRef([]);

  const handleChange = useCallback((index, value) => {
    if (!/^\d?$/.test(value)) return;
    setOtp((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }, []);

  const handleKeyDown = useCallback((index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowRight' && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }, [otp]);

  const handlePaste = useCallback((e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').replace(/\D/g, '').slice(0, OTP_LENGTH);
    if (!pastedData) return;
    setOtp((prev) => {
      const next = [...prev];
      for (let i = 0; i < pastedData.length; i++) {
        next[i] = pastedData[i];
      }
      return next;
    });
    const focusIndex = Math.min(pastedData.length, OTP_LENGTH - 1);
    inputRefs.current[focusIndex]?.focus();
  }, []);

  const code = otp.join('');
  const isComplete = code.length === OTP_LENGTH;

  const reset = useCallback(() => {
    setOtp(Array(OTP_LENGTH).fill(''));
    inputRefs.current[0]?.focus();
  }, []);

  const setRef = useCallback((index, el) => {
    inputRefs.current[index] = el;
  }, []);

  return { otp, code, isComplete, handleChange, handleKeyDown, handlePaste, reset, setRef, inputRefs };
}
