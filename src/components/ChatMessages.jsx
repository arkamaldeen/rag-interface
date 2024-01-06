import React from 'react';
import Help from '../images/help.svg'

const ChatMessages = ({ text, isUser }) => {
  const messageStyle = isUser
    ? 'flex gap-3 justify-end  text-left'
    : 'flex  gap-3 justify-start text-left ';

  const formattedText = text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {index > 0 && <br />} {/* Add <br> after the first line */}
      {line}
    </React.Fragment>
  ));

  return (
    <div className='w-full'>
      <div className={messageStyle}>
        {!isUser && <div className="flex-none w-[5px] h-100 bg-green-500 rounded-full ml-2 "></div>}
        <div className='p-4 max-w-[750px] bg-[#2525259c] text-white rounded-lg'>
          <div className={`mb-2 ${isUser ? "text-secondary" : "text-green-500"}`}>
            {isUser ? `User:` : `Tutor:`}
          </div>
          {formattedText}
        </div>
        {!isUser && 
        <div className="flex flex-col justify-end flex-shrink-0">
        <button className='reasoning bg-[#2525259c] p-2 rounded-lg' onClick={() => console.log("Reasoning clicked!")}>
          <img src={Help} alt='reasoning ' className='h-[20px]'/>
        </button>
        </div> }
        {isUser && <div className="flex-none w-[5px] h-100 bg-secondary rounded-full mr-2"></div>}
      </div>
    </div>
  );
};

export default ChatMessages;
