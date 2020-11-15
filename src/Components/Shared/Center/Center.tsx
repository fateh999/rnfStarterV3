import React, {useMemo} from 'react';
import {View, ViewStyle} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export type CenterProps = {
  children?: React.ReactNode;
  allAxis?: boolean;
  vertical?: boolean;
  flex?: number;
  style?: ViewStyle;
};

function Center(props: CenterProps) {
  const {children, allAxis, vertical, flex, style} = props;
  const styles = useMemo(
    () =>
      EStyleSheet.create({
        containerStyle: {
          flex: flex ?? 1,
        },
        horizontalStyle: {
          alignItems: 'center',
        },
        verticalStyle: {
          justifyContent: 'center',
        },
      }),
    [flex],
  );

  return (
    <View
      style={
        allAxis
          ? [
              style,
              styles.containerStyle,
              styles.horizontalStyle,
              styles.verticalStyle,
            ]
          : [
              style,
              styles.containerStyle,
              vertical ? styles.verticalStyle : styles.horizontalStyle,
            ]
      }>
      {children}
    </View>
  );
}

export default Center;
