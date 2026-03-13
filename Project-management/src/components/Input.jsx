import { forwardRef } from "react"

const Input = forwardRef( function Input({label,textarea,...props},ref){

    const classes = "bg-stone-600 text-stone-50 focus:border-none focus:ring-0 focus:outline-none rounded-md px-3 py-2"

    return(
        <p className="flex flex-col gap-3 mb-3">
            <label className="uppercase text-stone-500">{label}</label>
            {textarea ? <textarea ref={ref} className={classes} {...props} /> :<input ref={ref} className={classes} {...props} />}
        </p>
    )
})

export default Input;