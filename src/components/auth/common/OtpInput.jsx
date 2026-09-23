function OtpInput({ otp, isComplete, handleChange, handleKeyDown, handlePaste, setRef, error }) {
  return (
    <div className="auth-otp" onPaste={handlePaste} role="group" aria-label="Code de v\u00e9rification">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => setRef(index, el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className={`auth-otp-input${digit ? ' auth-otp-input--filled' : ''}${error ? ' auth-otp-input--error' : ''}`}
          aria-label={`Chiffre ${index + 1}`}
          autoComplete="one-time-code"
          autoFocus={index === 0}
        />
      ))}
    </div>
  );
}

export default OtpInput;
