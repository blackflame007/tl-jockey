/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import { ReactComponent as UserIcon } from '../../icons/user.svg';
import Loading from '../Loading/Loading';
import { QuestionMessage } from '../../types/messageTypes';

interface UserResponseProps {
  message: string;
  isUserMessage: boolean;
  statusMessages: string[]
  loading: boolean; 
  lastElement: boolean
}
const UserResponse: React.FC<UserResponseProps> = ({ message, isUserMessage, statusMessages, loading, lastElement }) => {
    return (
    <div className={'ml-7'}>
        <div className={'flex flex-row gap-2 items-center'}>
             <div className={'w-7 h-7 bg-[#EDF6F1] rounded-2xl flex items-center justify-center'}>
                <UserIcon/>
              </div>
              <div className={'font-aeonikBold'}>
                { isUserMessage && 'You'  }
              </div>
        </div>
        <div className={`ml-7 whitespace-pre-line mr-[10px] ${isUserMessage ? 'userBubble' : 'aiBubble'}`}>
               {message}
         </div>
         <div className={`flex flex-row gap-2 items-center mt-3 `}>
            { lastElement && loading &&
              <Loading/>
            }
            { lastElement && statusMessages.map((statusMessage, index) => (
              <p key={index} className={'text-[#6F706D] font-aeonik text-[12px]'}>
                {statusMessage}
              </p>
            ))}
         </div>
      </div>)
};

export default UserResponse;