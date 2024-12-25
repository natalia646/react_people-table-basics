import React from 'react';
import cn from 'classnames';
import { Person } from '../../../types';
import { Link, useParams } from 'react-router-dom';

type Props = {
  person: Person;
};

export const PersonLink: React.FC<Props> = props => {
  const { slagId } = useParams();

  const { person } = props;
  const {
    name,
    sex,
    born,
    died,
    slug,
    fatherName,
    motherName,
    mother,
    father,
  } = person;

  return (
    <tr
      data-cy="person"
      className={cn({ 'has-background-warning': slagId === slug })}
    >
      <td>
        <Link
          className={cn({ 'has-text-danger': sex === 'f' })}
          to={`../${slug}`}
        >
          {name}
        </Link>
      </td>

      <td>{sex}</td>
      <td>{born}</td>
      <td>{died}</td>

      <td>
        {mother ? (
          <Link className="has-text-danger" to={`../${mother.slug}`}>
            {mother.name}
          </Link>
        ) : (
          motherName || '-'
        )}
      </td>

      <td>
        {father ? (
          <Link to={`../${father.slug}`}>{father.name}</Link>
        ) : (
          fatherName || '-'
        )}
      </td>
    </tr>
  );
};
