import { createContext } from 'react';

import Todo from './pages/Todo';
import Traning from './pages/Traning';

const profileInfo = {
  name: 'Yoshinaga Keisuke',
};

const ProfileContext = createContext(profileInfo);

function App() {
  return (
    <ProfileContext.Provider value={profileInfo}>
      <div className="App container mx-auto px-8">
        <Traning />
        <Todo />
      </div>
    </ProfileContext.Provider>
  );
}

export { App, ProfileContext };
