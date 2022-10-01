import React from 'react';
import { TextInput, withTheme } from 'react-native-paper';

const Input = props => {
  const { colors } = props.theme;

  return (
    <TextInput
      {...props}
      mode="outlined"
      outlineColor={colors.darkGrey}
      activeOutlineColor={colors.primary}
    />
  );
};

export default withTheme(Input);
