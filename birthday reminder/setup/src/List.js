import React  from 'react';
import Person from './Person';
const List = (props) => {
  console.log(props)
  return (

      <ul>
        {props.people.map(person => {
          return (
            <Person
              key={person.id}
              person = {person}
            ></Person>
          )
        })}
      </ul>
  );
};

export default List;
