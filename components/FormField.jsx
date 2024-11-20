import {View, Text, TextInput, TouchableOpacity, Image, Platform, KeyboardAvoidingView} from 'react-native'
import React, {useState} from 'react'
import {icons, images} from "../constants";

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassWord, setShowPassWord] = useState(false);
    return (
        <View className={`space-y-2 ${otherStyles}`}>
        <Text className="text-base text-gray-100 font-medium">
            {title}
        </Text>
        <View className=" w-full h-16 px-4 bg-black-100 border-2 border-black-200
         rounded-2xl focus:border-orange-400 flex-row items-center">
            <TextInput className=" flex-1 text-left text-white font-psemibold text-base"
                       value={value}
                       placeholder={placeholder}
                       placeholderTextColor='#7b7b8b'
                       onChangeText={handleChangeText}
                       secureTextEntry={title === 'Password' && !showPassWord}/>

            {title === 'Password' && (
                <TouchableOpacity onPress={() => setShowPassWord(!showPassWord)}>
                    <Image source={!showPassWord  ? icons.eye: icons.eyeHide} className="w-6 h-6" resizeMode='contain'/>
                </TouchableOpacity>
            )}

        </View>
    </View>
    )
}
export default FormField
