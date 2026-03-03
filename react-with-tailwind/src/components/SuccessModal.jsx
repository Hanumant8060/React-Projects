import React from 'react';


export default function SuccessModal({message, onClose}) {
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-amber-500 p-6 rounded-lg shadow-lg max-w-md w-full">
                <p className="text-lg text-center">{message}</p>
                <div className="mt-4 flex justify-center">
                    <button onClick={onClose} className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}