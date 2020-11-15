import React, {useMemo} from 'react';
import {ScrollView, ScrollViewProps} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

interface BodyProps extends ScrollViewProps {
  backgroundColor?: string;
  children?: any;
}

function Body(props: BodyProps) {
  const {style, backgroundColor} = props;

  const styles = useMemo(
    () =>
      EStyleSheet.create({
        containerStyle: {flex: 1, backgroundColor},
      }),
    [backgroundColor],
  );

  return (
    <ScrollView
      contentContainerStyle={[styles.containerStyle, style]}
      {...props}
    />
  );
}

export default Body;
