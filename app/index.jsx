import {Image, ScrollView, Text, View} from 'react-native';
import "../global.css";
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from "../constants";
import CustomButton from "../components/CustomButton";
import {StatusBar} from "expo-status-bar";
import {router} from "expo-router";

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{height: "100%"}}>
                <View className="w-full justify-start items-center min-h-[85vh] px-2">
                    <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain"/>
                    <Image source={images.cards} className="w-[380px] h-[300px]" resizeMode="contain"/>

                    <View className="realtive mt-5">
                        <Text className="text-3xl text-white font-bold text-center">
                            Discover Endless Possibilities with {' '}
                            <Text className="text-orange-400">Aora</Text>
                        </Text>
                        <Image source={images.path} className="w-[136px] h-[15px] absolute -bottom-2 left-1/2 -translate-x-1/2"
                               resizeMode="contain"/>
                    </View>
                    <Text className="text-gray-100 text-sm font-pregular text-center mt-7">
                        Where creativity meets innovation: embark on a journey of limitless exploration with Aora.
                    </Text>
                    <CustomButton title="Continue with email"
                    handlePress={() =>router.push('/sign-in')}
                    containerStyles="w-full mt-7"/>


                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light'/>

        </SafeAreaView>
    );
}



