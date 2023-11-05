import { useState } from 'react';
import './modal.css';

const Modal = ({ onSetModalIsOn, onSetContacts,contacts, person, addRefactorState}) => {

  const [userInput, setUserInput] = useState({ name: '', phoneNumber: '' });

  const createNewContact = (e) => {

    const { value, name } = e.target
    setUserInput((userInput) => ({ id: Date.now(), ...userInput, [name]: value }));
  }

  const addNewContactToList = () => {
    onSetContacts((previousContacts) => {
      previousContacts.push(userInput);
      localStorage.setItem("contacts", JSON.stringify(previousContacts));
      return previousContacts;
    })
    onSetModalIsOn(false);
  }
  const changePerson = (contacts,person) => {
    let personID = person.id
    for (let i = 0;i<contacts.length;i++) {
      if (contacts[i].id ==personID) {
        onSetContacts((previousContacts) => {
          previousContacts[i].name = userInput.name;
          previousContacts[i].phoneNumber = userInput.phoneNumber;
          console.log(previousContacts[i].name)
          localStorage.setItem("contacts", JSON.stringify(previousContacts));
          return previousContacts;
        })
      }


    }
    onSetModalIsOn(false);

  }


  return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => onSetModalIsOn(false)}>&times;</span>
          <h2 style={{ textAlign: "center" }} >{addRefactorState?'Add New':'change'} Contact</h2>
          <div className='userInputWrapper'>
            <input type='text' name='name' placeholder='Name' onInput={createNewContact} />
          </div>
          <div className='userInputWrapper'>
            <input type='text' name="phoneNumber" placeholder='Phone number' onInput={createNewContact} />
          </div>
          <div className='userInputWrapper'><button onClick={addRefactorState?addNewContactToList:()=>changePerson(contacts,person)}>{addRefactorState?'Add':'change'}</button></div>
        </div>
      </div>
  )
}

export default Modal;