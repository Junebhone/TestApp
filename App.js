import React from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import Card from './components/Card';

const DATA = [
  {
    id: '1',
    title: 'Cash In',
    image: require('./images/cashIn.png'),
  },
  {
    id: '2',
    title: 'Cash Out',
    image: require('./images/cashOut.png'),
  },
];

const otherFunctions = [
  {
    id: '1',
    title: 'Bill Payment',
    image: require('./images/bill.png'),
  },
  {
    id: '2',
    title: 'Transfer',
    image: require('./images/transfer.png'),
  },
  {
    id: '3',
    title: 'History',
    image: require('./images/history.png'),
  },
  {
    id: '4',
    title: 'Account Opening',
    image: require('./images/accountOpening.png'),
  },
];

const App = () => {
  return (
    <View className="flex-1 bg-[#F3F5FF] ">
      <SafeAreaView className="bg-[#F3F5ff]"></SafeAreaView>
      <SafeAreaView className="bg-white"></SafeAreaView>
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
      <ScrollView className="flex-grow">
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
                <Text className="text-xl font-bold color-[#47980E]">
                  250,000
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="mx-[12px]">
          <View className="flex flex-row">
            {DATA.map(item => {
              return (
                <Card
                  key={item.id}
                  title={item.title}
                  image={item.image}></Card>
              );
            })}
          </View>
        </View>
        <View className="mx-[12px]">
          <Text className="font-bold text-xl">Other Functions</Text>
          <View className="flex flex-row flex-wrap ">
            {otherFunctions.map(item => {
              return (
                <Card
                  key={item.id}
                  title={item.title}
                  image={item.image}></Card>
              );
            })}
          </View>
        </View>
        <View className="mx-[16px] mb-5">
          <Text className="font-bold text-xl mb-4">News</Text>
          <View className="flex flex-row bg-white rounded-md justify-center items-center px-4 py-2 gap-2">
            <View className="">
              <Image
                source={require('./images/news.png')}
                className="w-[60px] h-[60px]"></Image>
            </View>
            <View className="flex flex-col flex-wrap">
              <Text>Invitation For Bids</Text>
              <Text className="flex-wrap w-[280px]">
                The Ministry of Planning, Finance and Industry invites bids for
                Upgrading Mini...
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="flex-1 flex-row justify-center  items-center gap-x-12 p-5 bg-white">
        <View className="flex flex-col  items-center">
          <Image
            resizeMode="contain"
            source={require('./images/scan.png')}
            className="w-[26px] h-[26px]"></Image>
          <Text>Scan</Text>
        </View>
        <View className="flex flex-col  items-center ">
          <Image
            resizeMode="contain"
            source={require('./images/qr.png')}
            className="w-[26px] h-[26px]"></Image>
          <Text>QR</Text>
        </View>
        <View className="flex flex-col  items-center ">
          <Image
            resizeMode="contain"
            source={require('./images/topUp.png')}
            className="w-[26px] h-[26px]"></Image>
          <Text>Top</Text>
        </View>
        <View className="flex flex-col  items-center ">
          <Image
            resizeMode="contain"
            source={require('./images/menu.png')}
            className="w-[26px] h-[26px]"></Image>
          <Text>Scan</Text>
        </View>
      </View>
    </View>
    // </SafeAreaView>
  );
};

export default App;
