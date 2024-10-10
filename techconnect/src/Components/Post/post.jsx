import React, { useState } from 'react';
import curtir from '../../Image/curtir.png'; 
import comentar from '../../Image/comentar.png';
import compartilhar from '../../Image/compartilhar.png';
import './postStyles.css'; 
import SentIcon from '../../Icons/SentIcon.svg'; 

function Post({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
      {/* Conteúdo do Post */}
      <div className="flex items-center mb-4">
        <img src={post.profileImage} alt={post.user} className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <span className="font-semibold">{post.user}</span>
          <span className="text-gray-600">@{post.user.toLowerCase().replace(" ", "")}</span>
        </div>
      </div>
      <div>
        <img src={post.postImage} alt="Post content" className="w-full rounded-lg mb-4" />
        <p>{post.content}</p>
      </div>
      <div className="mt-4 text-blue-500">{post.hashtags}</div>
      <div className="flex justify-end mt-4">
        <button className="mr-2">
          <img src={curtir} alt="Curtir" className="w-6 h-6" />
        </button>
        <button className="mr-2">
          <img src={comentar} alt="Comentar" className="w-6 h-6" />
        </button>
        <button>
          <img src={compartilhar} alt="Compartilhar" className="w-6 h-6" />
        </button>
      </div>

      {/* Botão Postar */}
      <div className="mt-4">
        <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded">
          Postar
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* Botão de Fechar */}
            <button className="close-button" onClick={closeModal}>×</button>

            {/* Foto de perfil e nome do usuário */}
            <div className="profile-info">
              <img src={post.profileImage} alt={post.user} className="profile-image" />
              <span className="profile-name">{post.user}</span>
            </div>

            {/* Área de mensagens mockada */}
            <div className="message-area">
              {/* Mensagens mockadas */}
              <div className="message other-user">
                <p>Olá, como você está?</p>
              </div>
              <div className="message current-user">
                <p>Estou bem, e você?</p>
              </div>
              <div className="message other-user">
                <p>Tudo ótimo! Tem planos para hoje?</p>
              </div>
              <div className="message current-user">
                <p>Sim, vou trabalhar em um projeto.</p>
              </div>
            </div>

            {/* Container para alinhar o input e o botão de enviar */}
            <div className="input-container">
              <input
                type="text"
                placeholder="Digite sua mensagem"
                className="message-input"
              />
              <button onClick={closeModal} className="sent-button">
                <img src={SentIcon} alt="Enviar" style={{ width: '60%', height: '60%' }} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
