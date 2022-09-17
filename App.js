import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';

const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#F3F5FF]">
      <View className="flex  flex-row justify-between p-[16px]">
        <View className="flex flex-row">
          <Image
            source={require('./images/profile.png')}
            className="w-10 h-10 mr-3"></Image>
          <View className="flex flex-col">
            <Text className="opacity-40 text-[14px]">Welcome Back,</Text>
            <Text className="font-bold text-[24px]">U Ba</Text>
          </View>
        </View>
        <View className="flex justify-center items-center">
          <Image
            source={require('./images/bell.png')}
            className="w-4 h-4"></Image>
        </View>
      </View>

      <View className="mx-4 gap-y-2">
        <View className="bg-white rounded-md divide-y divide-gray-100">
          <View className="px-4 py-2 flex flex-col gap-2">
            <Text className="text-[18px] opacity-30">Total Amount</Text>
            <Text className="text-[28px] font-bold color-[#47980E]">
              250,000 MMK
            </Text>
          </View>
          <View className="flex flex-row justify-between px-4 py-2">
            <View className="flex flex-col gap-2">
              <Text className="text-[18px] opacity-30">e-Pension</Text>
              <Text className="text-[20px] font-bold">09421768835</Text>
            </View>
            <View className="flex flex-col gap-2">
              <Text className="text-[18px] opacity-30">MMK</Text>
              <Text className="text-[20px] font-bold color-[#47980E]">
                250,000
              </Text>
            </View>
          </View>
        </View>
        <View className="flex flex-row gap-x-2">
          <View className="bg-white p-2 rounded-md flex-1">
            <View className="flex flex-row justify-start">
              <View className="bg-gray-100 rounded-full flex justify-center items-center w-12 h-12">
                <Image
                  source={require('./images/cashIn.png')}
                  className=" w-8 h-8"></Image>
              </View>
            </View>
            <View className="flex flex-row justify-end">
              <Text className="flex justift-end font-bold text-lg">
                Cash In
              </Text>
            </View>
          </View>
          <View className="bg-white p-2 rounded-md flex-1">
            <View className="flex flex-row justify-start">
              <View className="bg-gray-100 rounded-full flex justify-center items-center w-12 h-12">
                <Image
                  source={require('./images/cashIn.png')}
                  className=" w-8 h-8"></Image>
              </View>
            </View>
            <View className="flex flex-row justify-end">
              <Text className="flex justift-end font-bold text-lg">
                Cash Out
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="flex-1 justify-end ">
        <View className="bg-white">
          <Image
            source={require('./images/scan.png')}
            className="w-[26px] h-[26px]"></Image>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
