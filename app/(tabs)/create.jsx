import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';


const RewardsScreen = () => {
    const rewards = [
        { points: 100, value: '10K', image: '/api/placeholder/150/150' },
        { points: 200, value: '20K', image: '/api/placeholder/150/150' },
        { points: 500, value: '50K', image: '/api/placeholder/150/150' },
        { points: 1000, value: '100K', image: '/api/placeholder/150/150' },
        { points: 2000, value: '200K', image: '/api/placeholder/150/150' },
        { points: 5000, value: '500K', image: '/api/placeholder/150/150' },
    ];

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
            <View className="flex-row items-center px-4 py-3 border-b border-gray-100">
                <TouchableOpacity>
                    {/*<ChevronLeft className="h-6 w-6 text-gray-800" />*/}
                </TouchableOpacity>
                <Text className="text-lg font-semibold ml-4">Điểm thưởng</Text>
            </View>

            <ScrollView className="flex-1">
                {/* Points Display */}
                <View className="bg-white m-4 rounded-xl p-4 shadow-sm">
                    <View className="flex-row items-center">
                        <Image
                            source={{ uri: '/api/placeholder/40/40' }}
                            className="w-10 h-10 mr-2"
                        />
                        <View>
                            <Text className="text-gray-600">Số Egg Points hiện tại của bạn</Text>
                            <Text className="text-yellow-500 text-xl font-bold">100</Text>
                        </View>
                    </View>
                </View>

                {/* Tab Buttons */}
                <View className="flex-row px-4 mb-4">
                    <TouchableOpacity className="bg-red-50 rounded-full px-6 py-2 mr-2">
                        <Text className="text-red-500">Ưu đãi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-gray-100 rounded-full px-6 py-2">
                        <Text className="text-gray-500">Lịch sử</Text>
                    </TouchableOpacity>
                </View>

                {/* Rewards Grid */}
                <View className="flex-row flex-wrap px-2">
                    {rewards.map((reward, index) => (
                        <View key={index} className="w-1/2 p-2">
                            <View className="bg-white rounded-xl overflow-hidden">
                                <Image
                                    source={{ uri: reward.image }}
                                    className="w-full h-32"
                                    resizeMode="cover"
                                />
                                <View className="p-3">
                                    <Text className="text-gray-800 font-medium">Ưu đãi {reward.value}</Text>
                                    <Text className="text-gray-500">{reward.points} điểm</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default RewardsScreen;
