import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import { Link } from "expo-router";
import Category from "../../components/category";

const categories = ["Uu dai", "Lich su"];
const Profile = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <SafeAreaView className="flex-1 bg-[#FFEFE0]">
            <View className="relative flex-row items-center justify-between px-8 pb-10 pt-16">
                <TouchableOpacity href="/home" className="w-10 h-10 items-center">
                    <Image source={icons.leftArrow} className="w-10 h-10" resizeMode='center' />
                </TouchableOpacity>
                <View>
                    <Text className="font-psemibold text-2xl">Điểm thưởng</Text>
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

            <View className="items-center">
                <FlatList
                    data={categories}
                    renderItem={({ item }) => (
                        <Category
                            item={item}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                    )}
                    keyExtractor={(item) => item}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ justifyContent: 'space-evenly', flexGrow: 1 }}
                    style={{ width: '100%' }}
                />
            </View>
        </SafeAreaView>
    );
};

export default Profile;
