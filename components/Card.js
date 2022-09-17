import React from 'react';
import {View, Text, Image} from 'react-native';

const Card = () => {
  return (
    <View className="bg-white rounded-md p-2 w-1/2">
      <View className="flex justify-start">
        <View className="bg-gray-100 rounded-full flex justify-center items-center w-12 h-12">
          <Image
            source={require('../images/cashIn.png')}
            className=" w-8 h-8 opacity-60"></Image>
        </View>
      </View>
      <View className="flex justify-end">
        <Text className="flex justift-end">Cash In</Text>
      </View>
    </View>
  );
};

export default Card;
