import React from 'react';
import { Person } from '../../../types';
import { PersonLink } from './PersonLink';

type Props = {
  people: Person[];
};

export const PeopleTable: React.FC<Props> = props => {
  const { people } = props;

  const peopleWithParents = people.map(person => {
    const mother = people.find(m => person.motherName === m.name);
    const father = people.find(f => person.fatherName === f.name);

    return {
      ...person,
      mother,
      father,
    };
  });

  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {peopleWithParents.map(person => (
          <PersonLink key={person.slug} person={person} />
        ))}
      </tbody>
    </table>
  );
};
