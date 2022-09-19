import React from 'react';
import {View, Text, Image} from 'react-native';


const Card = ({title, image}) => (
  <View className=" bg-white p-2 m-[4px] rounded-md flex-1 w-[45%]">
    <View className="flex flex-row justify-start">
      <View className="bg-gray-100 rounded-full flex justify-center items-center w-12 h-12">
        <Image source={image} className=" w-8 h-8"></Image>
      </View>
    </View>
    <View className="flex flex-row justify-end">
      <Text className="flex justift-end font-bold text-lg">{title}</Text>
    </View>
  </View>
);
export default Card;
