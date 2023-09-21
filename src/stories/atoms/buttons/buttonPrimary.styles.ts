import { StyleSheet } from 'react-native';
import theme from '@/themes/theme';

export const buttonPrimaryStyles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 'auto',
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0.5,
    borderRadius: 0.25,
    backgroundColor: theme.primaryColor,
    borderWidth: 0,
    fontFamily: theme.textFontFamily,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14, // Corresponds to 0.875rem in CSS
    fontWeight: '500',
    lineHeight: 18, // Corresponds to 1.25rem in CSS
    letterSpacing: 0.00625 * 14, // Corresponds to 0.00625rem in CSS and 14 font size
  },
  pressed: {
    backgroundColor: theme.primaryColorDarker,
    color: theme.primaryColorLighter, 
    shadowColor: theme.primaryColorDarker,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1, // Adjust to achieve the desired shadow effect
    shadowRadius: 2, // Adjust to achieve the desired shadow effect
    elevation: 2, // Android elevation for shadow effect
  },
  medium: {
    height: 30, // Corresponds to 1.875rem in CSS
  },
  large: {
    height: 40, // Corresponds to 2.5rem in CSS
    fontSize: 16, // Corresponds to 1rem in CSS
  },
  small: {
    height: 24, // Corresponds to 1.5rem in CSS
    paddingHorizontal: 16, // Corresponds to 1rem in CSS
    borderRadius: 2, // Corresponds to 0.125rem in CSS
    fontSize: 12, // Corresponds to 0.75rem in CSS
  },
  disabled: {
    backgroundColor: '#B6B8BB',
    color: '#E4E6E6',
  },
  fullwidth: {
    width: '100%',
  },
});
