import React from 'react';
import {Control, Controller, FieldValues, Path} from 'react-hook-form';
import {
  Datepicker,
  DatepickerProps,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Entypo';

interface IDatePicker<T extends FieldValues> {
  control: Control<T>;
  name: string;
}

function DatePicker<T extends FieldValues>(
  props: IDatePicker<T> & DatepickerProps,
) {
  const {control, name, ...otherProps} = props;
  const styles = useStyleSheet(themedStyles);
  return (
    <Controller
      control={control}
      name={name as Path<T>}
      render={({field: {value, onChange}}) => (
        <Datepicker
          controlStyle={styles.field}
          date={value}
          onSelect={onChange}
          accessoryRight={<Icon color="white" size={24} name="calendar" />}
          {...otherProps}
        />
      )}
    />
  );
}

export default DatePicker;

const themedStyles = StyleService.create({
  field: {
    borderRadius: 18,
    backgroundColor: 'color-primary-400',
    paddingVertical: 14,
  },
});
