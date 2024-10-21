import { ReactNode } from 'react';

export default function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: ReactNode }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-custom-gradient p-8 rounded shadow-md">
                {children}
                <div className='flex justify-end mt-4'>
                    <button onClick={onClose} className="mt-4 p-2 bg-customClairP text-white rounded hover:bg-customDarkP transition duration-300">Fermer</button>
                </div>
            </div>
        </div>
    );
}

