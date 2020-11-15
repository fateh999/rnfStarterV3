import React, {useMemo} from 'react';
import {View, ViewStyle} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export type ColProps = {
  flex?: number;
  right?: boolean;
  left?: boolean;
  style?: ViewStyle;
  children?: any;
};

function Col(props: ColProps) {
  const {style, children, right, left, flex} = props;
  const styles = useMemo(
    () =>
      EStyleSheet.create({
        colStyle: {
          flex: flex ?? 1,
          alignItems: right ? 'flex-end' : left ? 'flex-start' : undefined,
        },
      }),
    [flex, left, right],
  );

  return <View style={[styles.colStyle, style]}>{children}</View>;
}

export default Col;
