import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import {View} from 'react-native';
import {defaultStyles} from '../assets/styles';

interface IContact {
  title: string;
  data: string[];
}

interface ContactListType {
  contacts: IContact[];
  setContacts: (value: IContact[]) => void;
}

const ContactListContext = createContext<ContactListType | undefined>(
  undefined,
);

export function useContactListHook() {
  const context = useContext(ContactListContext);
  if (context === undefined) {
    throw new Error('use context is undefined');
  }
  return context;
}

type IContactListProviderProps = PropsWithChildren<any>;

export function ContactListProvider(props: IContactListProviderProps) {
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

  function sortAndAdd(value: IContact[]) {
    setContacts(value);
  }

  const value = {
    contacts: contacts,
    setContacts: sortAndAdd,
  };
  return (
    <ContactListContext.Provider value={value}>
      {props.children}
    </ContactListContext.Provider>
  );
}
