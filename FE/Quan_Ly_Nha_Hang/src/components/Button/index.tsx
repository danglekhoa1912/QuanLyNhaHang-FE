import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/color';
import {TouchableOpacityProps} from 'react-native';
import {StyleProp} from 'react-native';

interface IButton {
  title: string;
  color?: string;
  backgroundColor?: string;
  styleText?: StyleProp<TextStyle>;
}

const Button = ({
  title,
  backgroundColor = COLORS.secondary,
  color = COLORS.black,
  styleText,
  ...otherProps
}: IButton & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      {...otherProps}
      style={[styles.root, {backgroundColor: backgroundColor}]}>
      <Text style={[styleText, styles.title, {color: color}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 18,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
