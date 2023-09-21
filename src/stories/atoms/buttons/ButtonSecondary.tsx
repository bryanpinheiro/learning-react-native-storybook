import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonSecondaryStyles as styles } from './buttonSecondary.styles';

export interface ButtonSecondaryProps {
  id: string;
  label: string;
  type: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  onPress?: () => void;
}

export const ButtonSecondary = ({
  disabled = false,
  size = 'medium',
  label,
  onPress,
}: ButtonSecondaryProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const buttonStyle = {
    ...styles.container,
    ...(isPressed && styles.pressed),
    ...(size === 'medium' && styles.medium),
    ...(size === 'large' && styles.large),
    ...(size === 'small' && styles.small),
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={buttonStyle}
      disabled={disabled}
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};
