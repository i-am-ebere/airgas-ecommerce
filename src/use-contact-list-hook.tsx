import {useState} from 'react';

export function useContactListHook() {
  const [contacts, setContacts] = useState([
    {
      title: 'A',
      data: ['Alyssa Lukens'],
    },
    {
      title: 'D',
      data: ['David Fasciano', 'Diana Margulis'],
    },
    {
      title: 'H',
      data: ['Harry ZdZairski'],
    },
    {
      title: 'J',
      data: ['John Gilman'],
    },
  ]);
  return {
    contacts: contacts,
    setContacts: setContacts,
  };
}
