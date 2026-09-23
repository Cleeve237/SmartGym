export default function TimeSlotSelector({ slots, selectedTime, onSelect }) {
  return (
    <div className="bk-slots">
      {slots.map((slot) => {
        const disabled = slot.disabled;
        const selected = selectedTime === slot.time;
        return (
          <div
            key={slot.time}
            className={[
              "bk-slot",
              selected ? "bk-slot--selected" : "",
              disabled ? "bk-slot--disabled" : "",
            ].filter(Boolean).join(" ")}
            onClick={() => !disabled && onSelect(slot.time)}
            role="button"
            tabIndex={disabled ? -1 : 0}
            onKeyDown={(e) => e.key === "Enter" && !disabled && onSelect(slot.time)}
          >
            <div className="bk-slot-time">{slot.time}</div>
            <div className="bk-slot-label">{slot.label}</div>
          </div>
        );
      })}
    </div>
  );
}
