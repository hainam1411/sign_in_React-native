import { View, Text, Image } from 'react-native';
import React from 'react';
import { images } from "../constants";

const Promo = () => {
    return (
        <View className="bg-white rounded-2xl shadow-lg flex-1 mx-2 my-2 overflow-hidden">
            <Image source={images.coupon} className="w-full h-24" />
            <View className="p-4">
                <Text className="text-2xl font-bold text-[#DF7B64] mb-2">Ưu đãi 100K</Text>
                <Text className="text-lg text-[#858587]">1000 điểm</Text>
            </View>
        </View>
    );
};

export default Promo;
