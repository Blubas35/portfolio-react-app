import React, { useEffect } from "react";

function Modal({ isOpen, closeModal, titleText, bodyText }) {
    const modalClasses = isOpen
        ? "fixed inset-0 z-50 overflow-auto bg-opacity-50 bg-black transition-opacity duration-500"
        : "fixed inset-0 z-50 overflow-auto bg-opacity-0 pointer-events-none transition-opacity duration-500";
  

    const modalContentClasses = isOpen
        ? "relative w-auto max-w-3xl mx-auto my-24 opacity-100 transition-opacity duration-500"
        : "relative w-auto max-w-3xl mx-auto my-24 opacity-0 pointer-events-none transition-opacity duration-500"


    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.keyCode === 27) {
                closeModal();
            }
        };
        document.addEventListener('keydown', handleEscapeKey);
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [closeModal]);

    return (
        <div className={modalClasses} onClick={closeModal}>
            <div className={modalContentClasses} onClick={(e) => e.stopPropagation()}>
                <div className="bg-white rounded shadow-lg">
                    <div className="px-4 py-2 text-lg text-black font-bold border-b-4 border-orange">
                    {titleText}
                    </div>
                    <div className="p-4 text-black">
                        <p>{bodyText}</p>
                    </div>
                    <div className="px-4 py-2 text-right">
                        <button
                            className="bg-gray-500 text-white py-2 px-4 rounded"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;