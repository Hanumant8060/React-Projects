import Input from "./Input";
import { useRef } from 'react';
import Modal from "./Modal";
export default function NewProject({ onAddProject, onCancelProject, ...props }) {

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    const modal = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "") {
            modal.current.open();
            return;
        }

        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        })

    }

    return (
        <>
            <Modal ref={modal} className="bg-stone-700 text-stone-50 rounded-md p-4 backdrop-blur-md">
                <h2 className="text-stone-50 text-lg">Opps...</h2>
                <p className="text-stone-50 text-lg">Please fill in all fields.</p>
            </Modal>
            <div className="d-block p-4 mt-8 w-[32rem]">
                <menu className="flex gap-4 justify-end items-center">
                    <button className="text-stone-600 uppercase text-base"
                        onClick={onCancelProject}>
                        Cancel
                    </button>
                    <button className="text-stone-100 bg-stone-900 px-4 py-2 rounded-md uppercase text-base"
                        onClick={handleSave}>Save
                    </button>
                </menu>
                <div className="flex flex-col">
                    <Input ref={titleRef} label="Title" />
                    <Input ref={descriptionRef} label="Description" textarea />
                    <Input ref={dueDateRef} label="Due Date" type="date" />
                </div>
            </div>
        </>
    )
}