import React, {useMemo} from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export type SpacerProps = {
  size?: number;
  horizontal?: boolean;
  backgroundColor?: string;
};

function Spacer(props: SpacerProps) {
  const {size, horizontal, backgroundColor} = props;

  const styles = useMemo(
    () =>
      EStyleSheet.create({
        spacerStyle: {
          [horizontal ? 'width' : 'height']: size ?? 10,
          backgroundColor,
        },
      }),
    [backgroundColor, horizontal, size],
  );

  return <View style={styles.spacerStyle} />;
}

export default Spacer;
