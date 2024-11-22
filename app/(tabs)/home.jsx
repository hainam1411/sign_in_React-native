import {View, Text, FlatList, Image, RefreshControl} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import {Link} from "expo-router";

const Home = () => {
    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = async () => {
        setRefreshing(true);
        //refresh page if have a new video
        setRefreshing(false)
    }
    return (<SafeAreaView className="bg-primary h-full">
            <FlatList data={[]}
                //data={[{id: 1}, {id: 2}, {id: 3}]}
                      keyExtractor={(item) => item.$id}
                      renderItem={({item}) => (<Text className="text-3xl text-white">{item.id}</Text>)}
                      ListHeaderComponent={() => (<View className="my-6 px-4 space-y-6">
                              <View className="justify-between items-start flex-row mb-6">
                                  <View>
                                      <Text className="font-pmedium  text-sm text-gray-100">
                                          Welcome back
                                      </Text>
                                      <Text className="font-psemibold  text-2xl text-gray-100">
                                          Yami
                                      </Text>
                                  </View>

                                  <View className="mt-1.5">
                                      <Image source={images.logoSmall} className="w-9 h-10" resizeMode="contain"/>
                                  </View>
                              </View>
                              <SearchInput/>

                              <View classname="w-full flex-1 pt-5 pb-8">
                                  <Text className="text-gray-100 text-lg font-pregular mb-3">
                                      Lastest videos
                                  </Text>
                                  <Trending posts={[{id: 1}, {id: 2}, {id: 3}] ?? []}/>
                              </View>
                          </View>)}
                      ListEmptyComponent={() => (
                          <Text className="text-white">Empty</Text>
                      )}
                      ListEmptyComponent={()=> (
                          <EmptyState title="No videos found"
                                       subtitle="No videos created yet"/>
                          )}

                      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
            />
        <Link href="/sign-up" className="text-orange-400 font-psemibold text-lg ml-1">Sign up</Link>


        </SafeAreaView>)
}
export default Home
