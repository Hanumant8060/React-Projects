import React, { useRef }  from 'react';
import {forwardRef,useImperativeHandle} from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef( function Modal({children}, ref){
    const dialogRef = useRef();

    useImperativeHandle(ref,() =>{
        return{
            open(){
                dialogRef.current.showModal();
            }
        }
    })
    return(
    createPortal(
        <dialog ref={dialogRef} className='bg-stone-700 text-stone-50 rounded-md p-4'>
            {children}
        </dialog>,
        document.getElementById('modal-root')
    ))
})

export default Modal;