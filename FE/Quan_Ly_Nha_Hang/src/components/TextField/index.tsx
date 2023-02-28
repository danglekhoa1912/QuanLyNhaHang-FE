import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../utils/color';
import {
  Input,
  InputProps,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import {Control, Controller, FieldValues, Path} from 'react-hook-form';
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';
import Icon from 'react-native-vector-icons/Entypo';
interface ITextField<T extends FieldValues> {
  control: Control<T>;
  name: string;
  secureTextEntry?: boolean;
}

function TextField<T extends FieldValues>(props: ITextField<T> & InputProps) {
  const {control, secureTextEntry = false, name, ...otherProps} = props;
  const [isSecurity, setIsSecurity] = useState(secureTextEntry);
  const styles = useStyleSheet(themedStyles);
  const toggleSecureEntry = () => {
    setIsSecurity(!isSecurity);
  };

  const renderIcon = () =>
    secureTextEntry ? (
      <TouchableWithoutFeedback onPress={toggleSecureEntry}>
        <Icon size={24} name={isSecurity ? 'eye-with-line' : 'eye'} />
      </TouchableWithoutFeedback>
    ) : (
      <></>
    );
  return (
    <Controller
      control={control}
      name={name as Path<T>}
      render={({field: {value, onChange}}) => (
        <Input
          placeholderTextColor={'white'}
          textStyle={styles.input}
          style={styles.container}
          value={value}
          accessoryRight={renderIcon}
          secureTextEntry={isSecurity}
          onChangeText={onChange}
          {...otherProps}
        />
      )}
    />
  );
}

export default TextField;

const themedStyles = StyleService.create({
  container: {
    borderRadius: 18,
    backgroundColor: 'color-primary-400',
  },
  input: {
    paddingVertical: 8,
  },
});
