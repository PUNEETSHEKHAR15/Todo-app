
function Modal(props) {
    function cancel() {
        props.onCancel();
    }
    function Confirm() {
        props.onConfirm();
    }
    return (
        <div className="modal">
            <p>Are you sure ?</p>
            <button className="btn btn--alt" onClick={cancel} >Cancel</button>
            <button className="btn" onClick={Confirm}>Confirm</button>

        </div>
    )
}

export default Modal
