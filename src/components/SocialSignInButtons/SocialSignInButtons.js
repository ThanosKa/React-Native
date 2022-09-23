import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';

const onSignInFacebook = () => {
  console.warn('Facebook');
};
const onSignInGoogle = () => {
  console.warn('Google');
};
const onSignInApple = () => {
  console.warn('Apple');
};

const SocialSignInButtons = () => {
  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#4267B2"
        fgColor="white"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#DB4437"
        fgColor="white"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="black"
        fgColor="white"
      />
    </>
  );
};

export default SocialSignInButtons;
