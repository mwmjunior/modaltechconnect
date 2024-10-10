import React from 'react';

function Suggestions() {
  const suggestions = [
    { imgSrc: "/path/to/profile1.jpg", username: "Usuário 1" },
    { imgSrc: "/path/to/profile2.jpg", username: "Usuário 2" },
    { imgSrc: "/path/to/profile3.jpg", username: "Usuário 3" },
  ];

  return (
    <div className="w-1/5 bg-gray-100 p-4">
      <h3 className="text-lg font-bold mb-4">Sugestões</h3>
      <ul className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="flex items-center">
            <img src={suggestion.imgSrc} alt="Sugestão" className="w-10 h-10 rounded-full mr-4" />
            <span>{suggestion.username}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Suggestions;
