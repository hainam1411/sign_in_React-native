import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import Category from "../../components/category";
import Promo from "../../components/promo";
import { promos } from "../../constants/promos";
import { used } from "../../constants/used";
import History from "../../components/history";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const navigation = useNavigation();
    const [selectedCategory, setSelectedCategory] = useState("Ưu đãi");

    const data = {
        "Ưu đãi": promos,
        "Lịch sử": used
    };

    return (
        <ScrollView className="flex-1">
            <LinearGradient colors={['#FFEFE0', '#FFFFFF']}
                           className="flex-1">
                <View className="relative flex-row items-center justify-between px-8 pb-10 pt-16">
                    <TouchableOpacity onPress={() => navigation.navigate('home')} className="w-14 h-14">
                        <Image source={icons.leftArrow} className="w-14 h-14" resizeMode="center" />
                    </TouchableOpacity>
                    <Text className="absolute left-[50%] transform -translate-x-1/2 translate-y-4 text-2xl font-semibold">Điểm thưởng</Text>
                </View>

                <View className="flex-row items-center bg-white mx-4 rounded-3xl py-1 px-4 shadow-lg mb-4 min-h-[90px]">
                    <Image source={icons.star} className="mr-4" />
                    <View>
                        <Text className="text-lg text-gray-800">Số Egg Points hiện tại của bạn</Text>
                        <Text className="text-orange-400">100</Text>
                    </View>
                </View>

                <View className="flex-row justify-evenly py-3">
                    <TouchableOpacity onPress={() => setSelectedCategory("Ưu đãi")} className="w-[48%]">
                        <Category item="Ưu đãi" selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedCategory("Lịch sử")} className="w-[48%] ">
                        <Category item="Lịch sử" selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                    </TouchableOpacity>
                </View>

                {selectedCategory === "Ưu đãi" && (
                    <View className="px-4 py-2 flex-row flex-wrap justify-between">
                        {data["Ưu đãi"].map((promo) => (
                            <View key={promo.id} className="w-[48%] mb-4">
                                <Promo title={promo.name} points={promo.point} />
                            </View>
                        ))}
                    </View>
                )}

                {selectedCategory === "Lịch sử" && (
                    <View className="px-4 py-2 flex-row flex-wrap justify-between">
                        {data["Lịch sử"].map((history) => (
                            <View key={history.id} className="w-[48%] mb-4">
                                <History title={history.name} points={history.date} />
                            </View>
                        ))}
                    </View>
                )}
            </LinearGradient>
        </ScrollView>
    );
};

export default Profile;
