import { createPortal } from "react-dom";

export default function  Modal({onClose, open}){
   
    return createPortal(
        <div className="modal-wrapper" style={overlayStyle} onClick={onClose}>
            {open ? 
            <div className="modal-body" style={contentStyle} onClick={(e) => e.stopPropagation()}>
                Some random text
                <br/>
                <button onClick={onClose}>
                    Close
                </button>
            </div>
            : null}
        </div>,
        document.getElementById('modal-root')
    )
}

const overlayStyle = { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'grid', placeItems: 'center', zIndex: 9999 };
const contentStyle = { background: 'white', padding: '20px', borderRadius: '8px', minWidth: '300px' };