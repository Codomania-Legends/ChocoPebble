import React from 'react'
import "./aboutus.css"
import ContentAboutUS from './ContentAboutUS'

function MainContentAboutUs() {
  const Anshul = {
    name : "Anshul",
    description : `👋 Hi, I'm Anshul! A passionate Full Stack Developer 💻 with expertise in MERN stack technologies. I love solving problems, writing clean and efficient code ✨, and bringing ideas to life through impactful projects. Since starting my coding journey in 2023 🚀, I've built applications that focus on usability, scalability, and innovation. With strong problem-solving skills 🔍 and a drive for continuous learning 📚, my goal is to grow as a developer and create technology that truly makes a difference 🌟.`
  }
  const Vidhi = {
    name : "Vidhi",
    description : `👋 Hi, I'm Vidhi! A creative Frontend Developer 🎨 specializing in React.js ⚛️. I started my coding journey in 2023 🚀 and since then, I've been passionate about crafting modern, responsive, and user-friendly interfaces that bring ideas to life. I love working with clean designs, smooth interactions ✨, and building applications that give users the best experience. With continuous learning 📚 and curiosity, I aim to grow as a developer and create impactful digital solutions 🌟.`
  }
  return (
    <div className="mainAboutUsContent flex">
        <ContentAboutUS details={Anshul} />
        <ContentAboutUS details={Vidhi} />
    </div>
  )
}

export default MainContentAboutUs
