/* eslint-disable react/prop-types */

const PersonForm = ({ addPerson, newPerson, setNewPerson }) => {
  return (
    <form className="addpersonForm" onSubmit={addPerson}>
      <div>
        name:{" "}
        <input
          type="text"
          required
          value={newPerson.name}
          onChange={(e) =>
            setNewPerson({
              ...newPerson,
              name: e.target.value,
            })
          }
        />
      </div>
      <div>
        number:{" "}
        <input
          required
          type="text"
          value={newPerson.number}
          onChange={(e) => {
            setNewPerson({
              ...newPerson,
              number: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
