import { useState } from "react";
import ContactList from "../ContactList";
import Modal from '../Modal';
import './index.css';

const App = () => {
    const [modalIsOn, setModalIsOn] = useState(false);
    const contactsDefaultState = localStorage.getItem("contacts") ? JSON.parse(localStorage.getItem("contacts")) : [];
    const [contacts, setContacts] = useState(contactsDefaultState);
    const [personn,setPerson] = useState();
    const [addRefactorState, setAddRefactorState] = useState(true);


    return (
        <>
            <button onClick={() => {setAddRefactorState(true);setModalIsOn(true);}} id="add-new-contact">Add Contact</button>
            <ContactList contacts={contacts} setAddRefactorState={setAddRefactorState} onSetContacts={setContacts} mod={setModalIsOn} setPerson={setPerson}/>
            {modalIsOn && <Modal contacts={contacts} addRefactorState={addRefactorState} onSetModalIsOn={setModalIsOn} onSetContacts={setContacts} person={personn}/>}
        </>

    )
}

export default App;