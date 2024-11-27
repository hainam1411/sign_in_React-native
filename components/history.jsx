import { View, Text, Image } from 'react-native';
import React from 'react';
import { images } from "../constants";

const Promo = ({title, points}) => {
    return (
        <View className="bg-white rounded-2xl shadow-lg flex-1 mx-2 my-2 overflow-hidden">
            <Image source={images.coupon} className="w-full h-24" />
            <View className="p-4">
                <Text className="text-2xl font-bold text-[#DF7B64] mb-2">{title}</Text>
                <Text className="text-lg text-[#858587]">{points} </Text>
            </View>
        </View>
    );
};

export default Promo;
