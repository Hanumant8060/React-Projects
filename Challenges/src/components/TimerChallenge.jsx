import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
    const [timeStarted, setTimeStarted] = useState(false);
    const [timeExpired, setTimeExpired] = useState(false);
    const [remaining, setRemaining] = useState(targetTime);

    const timerId = useRef(null);
    const intervalId = useRef(null);
    const startTime = useRef(null);
    const dialog = useRef(null);

    function handleStart() {
        startTime.current = Date.now();
        setRemaining(targetTime);

        // update remaining every 100ms so we can show it in modal later
        intervalId.current = setInterval(() => {
            const elapsed = (Date.now() - startTime.current) / 1000;
            setRemaining(Math.max(0, Math.ceil(targetTime - elapsed)));
        }, 100);

        timerId.current = setTimeout(() => {
            clearInterval(intervalId.current);
            setRemaining(0);
            setTimeExpired(true);
            dialog.current.showModal();
        }, targetTime * 1000);

        setTimeStarted(true);
    }

    function handleStop() {
        clearTimeout(timerId.current);
        clearInterval(intervalId.current);

        const elapsed = (Date.now() - startTime.current) / 1000;
        setRemaining(Math.max(0, Math.ceil(targetTime - elapsed)));

        dialog.current.showModal();
        setTimeStarted(false);
        setTimeExpired(true);
    }

    return (
        <>
            <ResultModal
                ref={dialog}
                title={title}
                time={`${targetTime} second${targetTime > 1 ? "s" : ""}`}
                targetTime={targetTime}              // numeric value for score math
                remaining={remaining}
                onClose={() => setTimeExpired(false)}
            />
            <section className="challenge">
                <h2>{title}</h2>
                {timeExpired && <p>Challenge Expired!</p>}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""} to complete
                </p>
                <p>
                    <button
                        onClick={timeStarted ? handleStop : handleStart}
                    >
                        {timeStarted ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timeStarted ? "active" : "not-running"}>
                    {timeStarted ? "Time is Running..." : "Timer is not running!"}
                </p>
            </section>
        </>
    );
}