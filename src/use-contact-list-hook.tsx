import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

interface IContact {
  title: string;
  data: string[];
}

interface ContactListType {
  contacts: IContact[];
  setContacts: (value: {title: string; fullName: string}) => void;
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

  function sortAndAdd(contactToAdd: {title: string; fullName: string}) {
    const indexOfFirstChar = contacts.findIndex(
      contact => contact.title === contactToAdd.title,
    );

    const tempCopy = [...contacts];
    if (indexOfFirstChar > -1) {
      tempCopy[indexOfFirstChar].data.push(contactToAdd.fullName);
    } else {
      tempCopy.push({title: contactToAdd.title, data: [contactToAdd.fullName]});
    }

    tempCopy.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
    setContacts(tempCopy);
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
