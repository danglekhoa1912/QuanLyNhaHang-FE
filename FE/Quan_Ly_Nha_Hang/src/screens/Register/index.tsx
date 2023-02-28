import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {StyleService, useStyleSheet, useTheme} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/AntDesign';
import {Button, Text, TextField} from '../../components';
import {useForm} from 'react-hook-form';
import {IFormRegister} from '../../type/form';
import DatePicker from '../../components/DatePicker';

const Register = () => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const {control} = useForm<IFormRegister>({
    defaultValues: {
      email: '',
      name: '',
      mobile: '',
      birthday: new Date(),
      avatar: '',
      password: '',
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.root}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View>
            <Icon size={30} name="back" color={theme['color-primary-100']} />
            <Text style={styles.title} category="h1">
              Create Account.
            </Text>
          </View>
          <View style={styles.input}>
            <TextField control={control} name="email" placeholder="Email" />
            <TextField control={control} name="name" placeholder="Name" />
            <TextField control={control} name="mobile" placeholder="Mobile" />
            <DatePicker control={control} name="birthday" />
            <TextField control={control} name="email" placeholder="Email" />
            <TextField
              secureTextEntry
              control={control}
              name="password"
              placeholder="Password"
            />
          </View>
          <View>
            <Button title="Register" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;

const themedStyles = StyleService.create({
  root: {
    flex: 1,
    backgroundColor: 'color-primary-default',
    paddingTop: 40,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    marginVertical: 12,
  },
  input: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
