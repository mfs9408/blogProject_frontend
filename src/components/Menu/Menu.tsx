import React, { useState } from 'react';
import RegistrationComponent from '../RegistrationComponent';
import AuthorizationComponent from '../AuthorizationComponent';
import { useSelector } from '../../store';
import UserMenu from '../UserManu';

const Menu = () => {
  const [isRegistration, setIsRegistration] = useState<boolean>(false);
  const userData = useSelector((state) => state.user);

  if (userData.user !== null && userData.accessToken !== null)
  return <UserMenu />;

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
