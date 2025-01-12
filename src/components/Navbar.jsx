import myPic from '../assets/My-Pic.jpg';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from 'react';
import { Button, Modal } from 'antd';
import ContactMe from '../Misc/ContactMe';



const Navbar = () => {
  const [showModel, setShowModel] = useState(false);

  const handleModel = () => {
    setShowModel(true);
  };

  const handleOk = () => {
    setShowModel(false);
  };

  const handleCancel = () => {
    setShowModel(false);
  };

  return (
    <nav className="mb-20 flex flex-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <div className="w-[85px] h-[85px] border-2 border-gray-100 rounded-full p-[8px]">
          <div
            className="flex items-center justify-center w-[65px] h-[65px] rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url(${myPic})` }}
          ></div>
        </div>
      </div>
      <div className="m-8 gap-8 flex justify-center items-center text-2xl">
        <a href="https://www.linkedin.com/in/manikandan-durairaj-281b1b180" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>   
        <a href="https://github.com/Manikandan-code-source?tab=repositories" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        </a>          
        <Button onClick={handleModel} className='text-white bg-transparent border-none'>Mail Me</Button>
        <Button href='https://drive.google.com/file/d/1s08VFDf99B6cH0jFPIy-hR2IcNd91aAK/view?usp=sharing' target='_blank' className='text-white bg-transparent border-none'>My Resume</Button>
        <Modal width={'1000px'} open={showModel} onOk={handleOk} onCancel={handleCancel} footer={null}>
          <ContactMe />
        </Modal>
      </div>
    </nav>
  );
};

export default Navbar;
