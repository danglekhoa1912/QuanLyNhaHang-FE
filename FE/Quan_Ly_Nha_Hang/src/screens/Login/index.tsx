import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/color';
import Icon from 'react-native-vector-icons/AntDesign';
import {Button, Text, TextField} from '../../components';
import {useForm} from 'react-hook-form';
import {IFormLogin} from '../../type/form';

const LoginPage = () => {
  const {control, watch} = useForm<IFormLogin>({
    defaultValues: {
      email: 'dc',
      password: 'sdc',
    },
  });
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Icon size={30} name="back" color={COLORS.tertiary} />
        <Text style={styles.title} category="h1">
          Let's sign in you in.
        </Text>
        <Text>Welcome back.</Text>
        <Text>You have been missed.</Text>
      </View>
      <View style={styles.input}>
        <TextField control={control} name="email" placeholder="Email" />
        <TextField
          secureTextEntry
          control={control}
          name="password"
          placeholder="Password"
        />
      </View>
      <View>
        <View style={styles.textFooter}>
          <Text>Don't have a account?</Text>
          <TouchableOpacity>
            <Text category="h6">Register</Text>
          </TouchableOpacity>
        </View>
        <Button title="Sign In" />
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingTop: 80,
    paddingBottom: 40,
  },
  header: {
    // marginVertical: 80,
  },
  title: {
    marginVertical: 12,
  },
  input: {
    height: 180,
    justifyContent: 'space-around',
  },
  textFooter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  text: {
    color: 'white',
  },
});
