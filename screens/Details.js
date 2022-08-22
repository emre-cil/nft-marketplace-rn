import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { COLORS, SIZES, SHADOWS, FONTS } from '../constants';
import { DetailsHeader, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from '../components';

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      <View
        style={{
          zIndex: 1,
          bottom: 0,
          width: '100%',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: SIZES.font,
          backgroundColor: 'rgba(255,255,255,0.5)',
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
