import { ReactNode } from 'react';

export default function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: ReactNode }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded">
                {children}
                <button onClick={onClose} className="mt-4 p-2 bg-red-500 text-white rounded">Fermer</button>
            </div>
        </div>
    );
}
