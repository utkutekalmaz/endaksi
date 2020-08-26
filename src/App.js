import React from 'react';
import './App.scss';
import MemoBlock from './components/MemoBlock';
import AddButton from './components/AddButton';

const mock = [
  {
    name: 'Ev Adres',
    val:
      'Yenişehir Mahallesi Cumhuriyet Bulvarı Garden Planet Sitesi A-Blok Daire:45',
  },
  { name: 'Gözük TC', val: '27389274518' },
  {
    name: 'İş Adres',
    val: 'Esentepe, Yakacık Yolu No:111, 34870 Kartal/Istanbul - Asya',
  },
  { name: 'IBAN İş Bankası', val: 'TR060 3330004489 12378' },
  { name: 'IBAN Garanti', val: 'TR060 3330004489 12378' },
  {
    name: 'Cover Letter Eng',
    val: 'I am utku, ich mag arbeiten für deinen kompany',
  },
  { name: 'Cover Letter Tr', val: 'Beni al şerro' },
  {
    name: 'French Letter',
    val: 'I am utku, ich mag arbeiten für deinen kompany',
  },
  { name: 'Circuit Links', val: 'Beni al şerro' },
  { name: 'Circuit Links', val: 'Beni al şerro' },
  { name: 'Circuit Links', val: 'Beni al şerro' },
  { name: 'Circuit Links', val: 'Beni al şerro' },
];

function App() {
  return (
    <div className="App">
      <>
        <h1 className="app-header">endaksi ?!</h1>
        <div className="memo-container">
          {mock.map((c) => (
            <MemoBlock name={c.name} val={c.val} />
          ))}
        </div>
        <AddButton />
      </>
    </div>
  );
}

export default App;
