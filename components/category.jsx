import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
    return (
        <TouchableOpacity onPress={() => setSelectedCategory(item)} className="flex-1 mx-2">
            <Text className={`text-2xl font-bold px-4 py-2 rounded-3xl min-h-[62px] bg-[#F4F4F4] text-[#858587] text-center ${
                selectedCategory == item ? 'bg-[#FFF5F3] text-[#DF7B64]' : ''
            }`}>
                {item}
            </Text>
        </TouchableOpacity>
    );
};

export default Category;
