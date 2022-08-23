import { View, TextInput, Image } from 'react-native';
import { COLORS, SIZES, assets } from '../constants';
const InputArea = ({ onSearch }) => {
  return (
    <View style={{ marginTop: SIZES.font }}>
      <View
        style={{
          width: '100%',
          borderRadius: SIZES.font,
          backgroundColor: COLORS.gray,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2,
        }}
      >
        <Image source={assets.search} resizeMode="contain" style={{ width: 20, height: 20, marginRight: SIZES.base }} />
        <TextInput
          placeholder="Search NFTs"
          style={{ flex: 1, height: '100%' }}
          placeholderTextColor={COLORS.white}
          onChangeText={onSearch}
        />
      </View>
    </View>
  );
};

export default InputArea;
