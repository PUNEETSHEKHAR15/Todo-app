import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
function Todo(props) {
    const [modalIsOpen, setModalToOpen] = useState(false);
    function deleteHandler() {
        console.log("Clicked!")
        console.log(props.title)
        setModalToOpen(true);

    }
    function CloseModalHandler() {
        setModalToOpen(false);
    }

    return (
        <div className="card">
            <h1>
                {props.title}
            </h1>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete </button>
            </div>
            {modalIsOpen && <Modal onCancel={CloseModalHandler} />}
            {modalIsOpen && <Backdrop onCancel={CloseModalHandler} />}
        </div>
    )
}
export default Todo;  