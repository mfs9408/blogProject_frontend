import React, { useState } from 'react';
import RegistrationComponent from '../RegistrationComponent';
import AuthorizationComponent from '../AuthorizationComponent';

const Menu = () => {
  const [isRegistration, setIsRegistration] = useState<boolean>(false);
  const isAuthorized = false;

  if (isAuthorized) return <>Menu</>;

  return (
    <>
      {isRegistration ? (
        <RegistrationComponent
          setIsRegistration={setIsRegistration}
          isRegistration={isRegistration}
        />
      ) : (
        <AuthorizationComponent
          setIsRegistration={setIsRegistration}
          isRegistration={isRegistration}
        />
      )}
    </>
  );
};

export default Menu;
