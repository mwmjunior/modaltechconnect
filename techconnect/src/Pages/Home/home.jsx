import React from 'react';
import Header from '../../Components/Header/header';
import Sidebar from '../../Components/Sidebar/sidebar';
import Post from '../../Components/Post/post';
import Suggestions from '../../Components/Suggestions/suggestions';

const posts = [
    { 
      id: 1, 
      user: "Aline Soares", 
      content: "Lorem ipsum dolor sit amet...", 
      hashtags: "#hashtags", 
      postImage: "/path/to/post-image1.jpg",
      profileImage: "/path/to/profile1.jpg"
    },
    { 
      id: 2, 
      user: "Outro Usuário", 
      content: "Conteúdo de exemplo...", 
      hashtags: "#exemplo", 
      postImage: "/Image/golden-retriever-1.png",
      profileImage: "/Image/golden-retriever-1.png"
    },
    {
      id: 3,
      user: "Maria Oliveira",
      content: "Adoro aprender novas tecnologias!",
      hashtags: "#tecnologia #aprendizado",
      postImage: "/path/to/post-image3.jpg",
      profileImage: "/path/to/profile3.jpg"
    },
  ];
  

  function Home() {
    return (
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-4 overflow-y-auto">
            {posts.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </div>
          <Suggestions />
        </div>
      </div>
    );
  }
  
  export default Home;