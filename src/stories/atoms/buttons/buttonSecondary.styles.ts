import { StyleSheet } from 'react-native';
import theme from '@/themes/theme';

export const buttonSecondaryStyles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 'auto',
    padding: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0.5,
    borderRadius: 0.25,
    borderWidth: 1,
    borderColor: theme.secondaryColorLighter,
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    fontFamily: theme.textFontFamily,
    color: theme.primaryColor,
    textAlign: 'center',
    fontSize: 14, // Corresponds to 0.875rem in CSS
    fontWeight: '500',
    lineHeight: 18, // Corresponds to 1.25rem in CSS
    letterSpacing: 0.00625 * 14, // Corresponds to 0.00625rem in CSS and 14 font size
  },
  hover: {
    borderColor: theme.primaryColor,
    borderWidth: 2,
  },
  pressed: {
    backgroundColor: theme.primaryColorLighter,
    borderColor: theme.primaryColorDarker,
    borderWidth: 2,
    color: theme.primaryColor,
  },
  medium: {
    height: 30, // Corresponds to 1.875rem in CSS
  },
  large: {
    width: 145, // Corresponds to 9.0625rem in CSS
    height: 40, // Corresponds to 2.5rem in CSS
    fontSize: 16, // Corresponds to 1rem in CSS
  },
  small: {
    width: 180, // Corresponds to 7.0625rem in CSS
    height: 24, // Corresponds to 1.5rem in CSS
    paddingHorizontal: 16, // Corresponds to 1rem in CSS
    borderRadius: 2, // Corresponds to 0.125rem in CSS
    fontSize: 12, // Corresponds to 0.75rem in CSS
  },
});
