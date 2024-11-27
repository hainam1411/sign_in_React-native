import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import Category from "../../components/category";
import Promo from "../../components/promo";
import {LinearGradient} from "expo-linear-gradient";

const categories = ["Ưu đãi", "Lịch sử"];
const Profile = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (

        <SafeAreaView className=" bg-[#FFEFE0]">
            <View className="relative flex-row items-center justify-between px-8 pb-10 pt-16">
                <TouchableOpacity href="/home" className=" w-10 h-10 items-center">
                    <Image source={icons.leftArrow} className="w-10 h-10" resizeMode='center' />
                </TouchableOpacity>
                <View className="absolute left-1/2 transform -translate-x-1/2">
                    <Text className=" font-psemibold text-2xl">Điểm thưởng</Text>
                </View>
            </View>

            <View className="flex-row items-center bg-white mx-4 rounded-3xl py-1 px-4 shadow-lg mb-4 min-h-[90px]">
                <Image source={icons.star} className="mr-4" />
                <View>
                    <Text className="text-lg text-gray-800">
                        Số Egg Points hiện tại của bạn
                    </Text>
                    <Text className="text-orange-400">100</Text>
                </View>
            </View>

            <View className="flex-row justify-evenly py-3">
                <Category item="Ưu đãi" selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Category item="Lịch sử" selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </View>

            <View className="flex-row justify-between py-4">
                <Promo/>
                <Promo/>
            </View>

            <View className="flex-row justify-between bg-gray-100 item items-center py-3">
                <Promo/>
                <Promo/>
            </View>
        </SafeAreaView>

    );
};

export default Profile;
