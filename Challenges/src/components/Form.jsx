import { useRef, forwardRef, useImperativeHandle } from "react";

// this component needs to forward its inner form element so a
// parent can call methods on it (e.g. clear/reset)
const Form = forwardRef(function Form(props, ref) {
    const form = useRef(null);

    // expose a `clear` method to whoever holds the ref
    useImperativeHandle(ref, () => ({
        clear() {
            // native form reset resets inputs to initial values
            form.current?.reset();
        }
    }));

    return (
        <form ref={form}>
            <p>
                <label>Name</label>
                <input type="text" />
            </p>

            <p>
                <label>Email</label>
                <input type="email" />
            </p>
            <p id="actions">
                <button>Save</button>
            </p>
        </form>
    );
});

export default Form;