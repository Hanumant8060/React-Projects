import { useImperativeHandle, useRef, forwardRef } from "react";
import Form from "./Form";

const ResetForm = forwardRef(function ResetForm(props, ref) {
    const form = useRef(null);
    useImperativeHandle(ref, () => ({
        handleClear()
         {
            form.current?.clear();
        }
    }));
    
    function handleClear() {
        form.current?.clear();
    };

    return (
        <>
            <button onClick={handleClear}>Reset</button>
            <Form ref={form} />
        </>
    )
});

export default ResetForm;