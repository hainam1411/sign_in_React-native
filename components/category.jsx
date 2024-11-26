import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
    return (
        <TouchableOpacity onPress={() => setSelectedCategory(item)}>
            <Text className={`text-2xl font-bold px-4 mx-2 py-2 rounded-xl min-h-[62px] justify-center text-center bg-[#F4F4F4] text-[#858587] ${
                selectedCategory == item ? 'bg-[#FFF5F3] text-[#DF7B64]' : ''
            }`}>
                {item}
            </Text>
        </TouchableOpacity>
    );
};

export default Category;
