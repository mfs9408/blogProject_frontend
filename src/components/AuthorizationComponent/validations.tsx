import { ChangeEvent, useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import isEqual from 'lodash.isequal';

interface ValidationsInterface {
  [key: string]: number | boolean | string;
}

const useValidation = (value: string, validations: ValidationsInterface) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [isMinLength, setIsMinLength] = useState<boolean>(false);
  const [isMaxLength, setIsMaxLength] = useState<boolean>(false);
  const [isEmailCorrect, setIsEmailCorrect] = useState<boolean>(false);
  const [isPasswordConfirmed, setIsPasswordConfirmed] =
    useState<boolean>(false);
  const [isDataValid, setIsDataValid] = useState<boolean>(false);

  useEffect(() => {
    for (const validationKey in validations) {
      switch (validationKey) {
        case 'minLength':
          value.length < validations[validationKey]
            ? setIsMinLength(true)
            : setIsMinLength(false);
          break;

        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;

        case 'maxLength':
          value.length < validations[validationKey]
            ? setIsMaxLength(true)
            : setIsMaxLength(false);
          break;

        case 'equalPassword':
          !isEqual(value, validations[validationKey])
            ? setIsPasswordConfirmed(true)
            : setIsPasswordConfirmed(false);
          break;

        case 'isEmail':
          const re = /\S+@\S+\.\S+/;
          re.test(String(value).toLowerCase())
            ? setIsEmailCorrect(false)
            : setIsEmailCorrect(true);
          break;
      }
    }
  }, [validations, value]);

  useEffect(() => {
    if (
      isEmpty ||
      isMinLength ||
      isMaxLength ||
      isEmailCorrect ||
      isPasswordConfirmed
    ) {
      setIsDataValid(false);
    } else {
      setIsDataValid(true);
    }
  }, [isMinLength, isMaxLength, isEmailCorrect, isPasswordConfirmed, isEmpty]);

  return {
    isEmpty,
    isMinLength,
    isMaxLength,
    isEmailCorrect,
    isPasswordConfirmed,
    isDataValid,
  };
};

const useInput = (initialValue: string, validations: ValidationsInterface) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setValue(event.target.value);
  const onBlur = () => setIsDirty(true);

  return {
    value,
    onBlur,
    onChange,
    isDirty,
    ...valid,
  };
};

const validateHelper = (validationDescription: string, minLength?: number) => {
  switch (validationDescription) {
    case 'emptyEmail':
      return <Typography color="error">Email must not be empty.</Typography>;
    case 'emptyNickname':
      return <Typography color="error">Nickname must not be empty.</Typography>;
    case 'incorrectEmail':
      return <Typography color="error">Incorrect email.</Typography>;
    case 'emptyPassword':
      return <Typography color="error">Password must not be empty.</Typography>;
    case 'equalPassword':
      return <Typography color="error">Passwords are not equal.</Typography>;
    case 'minLength':
      return (
        <Typography color="error">Minimal length is {minLength}.</Typography>
      );
  }
};

export { useInput, validateHelper };
