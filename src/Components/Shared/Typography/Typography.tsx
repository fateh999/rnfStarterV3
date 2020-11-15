import React, {useMemo} from 'react';
import {TextProps} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text, useTheme} from 'react-native-paper';

export interface TypographyProps extends TextProps {
  children?: any;
  textAlign?: 'left' | 'center' | 'right';
  fontSize?: number;
  variant?:
    | 'primary'
    | 'background'
    | 'surface'
    | 'accent'
    | 'error'
    | 'text'
    | 'onSurface'
    | 'onBackground'
    | 'disabled'
    | 'placeholder'
    | 'backdrop'
    | 'notification';
  color?: string;
  type?: 'light' | 'medium' | 'regular' | 'thin';
  textTransform?: 'capitalize' | 'none' | 'uppercase' | 'lowercase';
}

function Typography(props: TypographyProps) {
  const {
    textAlign,
    style,
    fontSize,
    color,
    type,
    variant,
    textTransform,
  } = props;
  const theme = useTheme();
  const {fontFamily, fontWeight} = theme.fonts[type ?? 'light'];

  const styles = useMemo(
    () =>
      EStyleSheet.create({
        typographyStyle: {
          textAlign,
          fontSize,
          color: color ? color : variant ? theme.colors[variant] : undefined,
          fontFamily,
          fontWeight,
          textTransform,
        },
      }),
    [
      color,
      fontFamily,
      fontSize,
      fontWeight,
      textAlign,
      textTransform,
      theme.colors,
      variant,
    ],
  );

  return <Text style={[styles.typographyStyle, style]} {...props} />;
}

export default Typography;
