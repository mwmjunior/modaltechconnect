import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <div className="flex items-center">
        <img src="/Frame.png" alt="Tech Connect" className="w-20" />
      </div>
      <div className="flex items-center space-x-2">
        <input 
          type="text" 
          placeholder="Pesquisar usuário" 
          className="border rounded-lg p-2"
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">🔍</button>
      </div>
      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
        Postar
      </button>
    </header>
  );
}

export default Header;
