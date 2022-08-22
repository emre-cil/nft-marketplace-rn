import React, { useMemo } from 'react';
import { View } from 'react-native';
import { COLORS, SIZES } from '../constants';
import InputArea from './InputArea';
import HeaderDetails from './HeaderDetails';

const HomeHeader = ({ onSearch }) => {
  const headerDetails = useMemo(() => <HeaderDetails />, []);
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      {headerDetails}
      <InputArea onSearch={onSearch} />
    </View>
  );
};

export default HomeHeader;
