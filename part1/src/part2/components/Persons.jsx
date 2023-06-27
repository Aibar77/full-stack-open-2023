/* eslint-disable react/prop-types */

const Persons = ({ filteredPersons, deletePerson }) => {
  return (
    <div className="numbers">
      {filteredPersons.map((person) => (
        <h3 className="persona" key={person.id}>
          <span className="personName">{person.name}</span>{" "}
          <span className="personNumber">{person.number}</span>
          <button onClick={() => deletePerson(person)}>delete</button>
        </h3>
      ))}
    </div>
  );
};

export default Persons;
