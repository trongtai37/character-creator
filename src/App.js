import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import Ground from './components/Ground';

function App() {
  return (
    <>
      <Ground />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
