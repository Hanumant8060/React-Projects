import React, { forwardRef } from "react";

// forwardRef is required because the parent passes a ref so it
// can call `showModal`/`close` directly. The regular `ref` prop
// is not forwarded to the DOM element unless we wrap the component.
const ResultModal = forwardRef(({ title, time, targetTime, remaining, onClose }, ref) => {
    // called when the user clicks the close button inside the dialog
    function handleButtonClick() {
        // first close the native dialog if we have a ref
        if (ref && ref.current && typeof ref.current.close === "function") {
            ref.current.close();
        }
        // then notify the parent so it can update any state
        onClose && onClose();
    }

    return (
        <dialog ref={ref} className="result-modal">
            <h2>you {remaining === 0 ? "failed" : "succeeded"} the challenge!</h2>
            {/* compute score with numeric targetTime; guard against division by zero */}
            <h2>
                your score : {
                    typeof remaining === 'number' && targetTime > 0
                        ? `${Math.round((1 - remaining / targetTime) * 100)}%`
                        : "N/A"
                }
            </h2>
            <p>your target time was {time}</p>            {typeof remaining === "number" && (
                <p>remaining time: {remaining} second{remaining !== 1 ? "s" : ""}</p>
            )}
            <button onClick={handleButtonClick}>Close</button>
        </dialog>
    );
});

export default ResultModal;