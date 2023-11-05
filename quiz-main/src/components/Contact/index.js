const Contact = ({ contactData, checkedIds, onToggleContactFromList,mod, setPerson, onsetContacts, setAddRefactorState }) => {

    return (
        <tr>
            <td>
                <input type="checkbox" onChange={(e) => onToggleContactFromList(e, contactData.id)} checked={checkedIds.includes(contactData.id)} />
            </td>
            <td><i className="fa fa-trash-o" onClick={() => {
                onsetContacts((contacts) => {
                    const filteredList = contacts.filter(contact => contact.id != contactData.id);
                    localStorage.setItem("contacts", JSON.stringify(filteredList));
                    return filteredList;
                })
            }} /></td>
            <td><i className="fa fa-pencil" onClick={()=>{setPerson(contactData);setAddRefactorState(false); mod(true);}}></i></td>
            <td>{contactData.name}</td>
            <td>{contactData.phoneNumber}</td>
        </tr>
    )
}

export default Contact