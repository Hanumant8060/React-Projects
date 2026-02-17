import { useState } from "react"

export default function UserInput({handleChange,userInput}) {
// console.log("render", userInput);

    return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) =>
                            handleChange("initialInvestment", event.target.value)
                        }
                    />
                </p>
                <p>
                    <label> Annual investment</label>
                    <input type="number" value={userInput.annualInvestment} onChange={(event) => handleChange("annualInvestment", event.target.value)} required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>expected return</label>
                    <input type="number" required value={userInput.expectedReturn} onChange={(event) => handleChange("expectedReturn", event.target.value)} />
                </p>
                <p>
                    <label> Duration</label>
                    <input type="number" required value={userInput.duration} onChange={(event) => handleChange("duration", event.target.value)} />
                </p>
            </div>

        </section>
    )
}