import React, { useState } from 'react';
import { TouchableOpacity, Text, Image, ViewStyle } from 'react-native';
import { buttonTertiaryStyles as styles } from './buttonTertiary.styles';
import GoogleIcon from '../icons/GoogleIcon';

export interface ButtonTertiaryProps {
  id: string;
  label: string;
  type: string;
  loading?: boolean;
  fullwidth?: boolean;
  onPress?: () => void;
}

export const ButtonTertiary = ({
  loading = false,
  fullwidth = true,
  label,
  onPress,
  ...props
}: ButtonTertiaryProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const buttonStyle: ViewStyle = {
    ...styles.container,
    ...(isPressed && styles.pressed),
    ...(fullwidth && styles.fullwidth),
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={buttonStyle}
      disabled={loading}
    >
      <GoogleIcon />
      <Text style={{ fontFamily: `${styles.label.fontFamily}` }}>{label}</Text>
    </TouchableOpacity>
  );
};
