import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from './Filter/Filter';
import { ContactList } from "./ContactList/ContactList";

export const App = () => {

  const [contacts, setContacts] = useState([
    {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
    { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
    { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
    { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
  ]);
  // console.log(contacts);

  const [filter, setFilter] = useState("");
  // console.log(filter);

  const isFirstRender = useRef(true);


  // Saving contacts to local storage
  useEffect(() => {
    if (!isFirstRender.current) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
      // console.log(contacts);
    }
    isFirstRender.current = false;
  }, [contacts]);


  // Getting contacts to local storage
  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    // console.log(parsedContacts);
    if (parsedContacts.length) {
      setContacts([...parsedContacts]);
    }
  }, []);

  const addContact = (arrayData)=>{
    let nameArray = contacts.map((elemCurrent)=> elemCurrent.name);
    if(!nameArray.includes(arrayData.name)){
        let arrayCont = [];
        arrayCont = [...contacts,
        {
          id: nanoid(), 
          name: arrayData.name,
          number: arrayData.number
        }
      ];
      console.log(arrayCont);
      return setContacts(arrayCont);
    }else {
      alert(`${arrayData.name} is already in contacts`);
    }
  };

  const formSubmitHandler = (data) => {
    addContact(data);
  };



  const setFilterToState = (filterData)=>{
    setFilter(`${filterData}`);
  }

  const filterArray = (arrayData) => {
    const newArry = arrayData.filter((valArray) =>valArray.name.toUpperCase().includes(filter))
    return newArry;    
  }

  const elementDelete = (arrayData, idContact) => {
    let newArray = arrayData.filter((elemValue) => elemValue.id !== idContact);
      return newArray;
    };
  
  const deleteContactFromContactList = (idContact) => {
    let newArrayDel = elementDelete(contacts, idContact);
    setContacts([...newArrayDel]);
  }




  return (
    <div>
      <Section title={'Phonebook'}></Section>
      <ContactForm onSubmitData= {formSubmitHandler}></ContactForm>
      <Section title={'Contacts'}></Section>
      <Filter setFilterToState={setFilterToState}/>
      <ContactList 
      contacts= {filterArray(contacts)}
      del= {deleteContactFromContactList}
      
      />
      
    </div>
  );
};
