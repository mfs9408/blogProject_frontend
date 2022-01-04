import React, { createContext, PropsWithChildren, useState } from 'react';
import { PostInterface } from '../../types';

type ContextProps = PropsWithChildren<{}>;

export const ContextStore = createContext<any>(null);

const CalcProvider = ({ children }: ContextProps) => {
  const [myPosts, setMyPosts] = useState<PostInterface[] | null>(null);

  return (
    <ContextStore.Provider
      value={{
        myPosts,
        setMyPosts,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};

export default CalcProvider;
