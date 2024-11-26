import { View, Text, Image } from 'react-native';
import React from 'react';
import { images } from "../constants";

const Promo = () => {
    return (
        <View className="flex-1 p-4 ">
            <Image source={images.coupon} className="rounded-2xl my-1 mr-1 w-full  mb-4" />
            <View className="px-1.5">
                <Text className="text-2xl text-primary font-pmedium mb-2">Uu dai 100k</Text>
                <Text className="text-xl text-primary font-pregular">1000 diem</Text>
            </View>
        </View>
    );
};

export default Promo;
