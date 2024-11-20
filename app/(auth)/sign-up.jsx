import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import {Link} from "expo-router";
import {createUser} from "../../lib/appwrite";

const SignUp = () => {
    const [form, setForm] = useState({
        userName: '', email: '', password: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false)
    const submit = () => {
        createUser();


    }
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center min-h-[75vh] px-4 my-6">
                    <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]"/>
                    <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
                        Sign up to Aora
                    </Text>
                    <FormField title="User name"
                               value={form.userName}
                               handleChangeText={(e) => setForm({...form, userName: e})}
                               otherStyles="mt-7"/>
                    <FormField title="email"
                               value={form.email}
                               handleChangeText={(e) => setForm({...form, email: e})}
                               otherStyles="mt-7"
                               keyboardType="email-address"/>

                    <FormField title="Password"
                               value={form.password}
                               handleChangeText={(e) => setForm({...form, password: e})}
                               otherStyles="mt-7"
                    />
                    <CustomButton title="Sign up"
                                  handlePress={submit}
                                  containerStyles="mt-7"
                                  isLoading={isSubmitting}/>
                    <View className="flex-row justify-center items-center mt-2">
                        <Text className="text-lg text-gray-100 font-pregular">Already have an account?</Text>
                        <Link href="/sign-in" className="text-orange-400 font-psemibold text-lg ml-1">Sign in</Link>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>)
}
export default SignUp
