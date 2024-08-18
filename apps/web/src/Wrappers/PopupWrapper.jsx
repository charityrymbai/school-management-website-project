const PopupWrapper = ({ show, onClose, children }) => {
     if (!show) return null;

     return (
          <div className="fixed inset-0 flex items-center justify-center z-50">
               <div
                    className="absolute inset-0 bg-black opacity-50"
                    onClick={onClose}
               ></div>
               <div className="bg-white p-6 rounded shadow-lg z-10">
                    {children}
                    <button
                         onClick={onClose}
                         className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                         Close
                    </button>
               </div>
          </div>
     );
};

export default PopupWrapper;
