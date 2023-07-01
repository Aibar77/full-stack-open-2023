import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phoneService from "../services/phones";
import Notification from "./components/Notification";
const PhoneBook = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({
    name: "",
    number: "",
  });
  const [searchValue, setSearchValue] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    phoneService.getAll().then((numbers) => setPersons(numbers));
  }, []);
  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      phoneService
        .deleteNumber(person.id)
        .then(() =>
          setPersons(persons.filter((persona) => persona.id !== person.id))
        );
    }
  };
  const addPerson = (e) => {
    e.preventDefault();
    const index = persons.findIndex(
      (person) => person.name.toLowerCase() === newPerson.name.toLowerCase()
    );
    if (index !== -1) {
      if (
        window.confirm(
          `${newPerson.name} is already added to phonebook, replace the old number?`
        )
      ) {
        phoneService
          .updateNumber(persons[index].id, newPerson)
          .then((res) => {
            setPersons(
              persons.map((p) => (p.id !== persons[index].id ? p : res.data))
            );
            setMessage(`${newPerson.name} number is changed`);
            setTimeout(() => {
              setMessage(null);
            }, 4000);
          })
          .catch((err) => {
            setMessage(`${newPerson.name} was already deleted from server`);
            setTimeout(() => {
              setMessage(null);
            }, 4000);
            setPersons(persons.filter((p) => p.id !== persons[index].id));
            console.error(err);
          });
      }
    } else {
      phoneService.addNumber(newPerson).then((person) => {
        setPersons([...persons, person]);
        setMessage(`Added ${person.name}`);
        setTimeout(() => {
          setMessage(null);
        }, 4000);
      });
    }
    setNewPerson({
      name: "",
      number: "",
    });
  };
  const filteredPersons =
    searchValue === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(searchValue.toLowerCase())
        );
  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Notification message={message} type="msg" />
      <Filter searchValue={searchValue} setSearchValue={setSearchValue} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newPerson={newPerson}
        setNewPerson={setNewPerson}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default PhoneBook;
