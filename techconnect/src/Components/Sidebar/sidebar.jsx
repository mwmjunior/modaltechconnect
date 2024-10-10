import React from 'react';

function Sidebar() {
  const menuItems = [
    { icon: "🏠", label: "Home" },
    { icon: "👤", label: "Meu Perfil" },
    { icon: "🎨", label: "Tema" },
  ];

  return (
    <aside className="w-1/5 bg-gray-100 p-4">
      <div className="mb-8">
        <img 
          src="/path/to/profile.jpg" 
          alt="User Profile" 
          className="w-16 h-16 rounded-full mb-2"
        />
        <span>@github</span>
      </div>
      <nav className="space-y-4">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
      <div className="mt-10">
        <button className="text-purple-600">⚙ Configurações</button>
      </div>
    </aside>
  );
}

export default Sidebar;
