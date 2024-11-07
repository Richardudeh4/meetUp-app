import  Feather  from "@expo/vector-icons/Feather";
import { Image, Text, View } from "react-native";

interface EventListItemProps{
    id:string;
    title:string;
    description:string;
    dateTime:string;
    location:string;
    image:string;
}
export const EventListItem = ({id, title,description, dateTime, location,image}: EventListItemProps) => {
    return(
        <View className='mx-2'>
        <View className='flex-row'>
    {/* date */}
    <View className='flex-1'>
  
    <Text className='text-lg font-semibold uppercase text-amber-800'>{dateTime}</Text>
        {/* title */}
        <Text className='font-bold text-xl ' numberOfLines={2}>{title}</Text>
        {/* location */}
        <Text className='text-gray-700 '>{location}</Text>
         {/* Event image on the right hand side */}
    </View>
    
         
         <Image
        source={{uri:image}} 
       className='aspect-video w-2/5 rounded-xl'
      /> 
        </View>
        {/* footer  */}
        <View className='flex-row  gap-3 my-3'>
        <Text className='mr-auto text-gray-700 truncate'>16 going</Text> 
        <Feather name='share' color="gray" size={24}/>
        <Feather name='bookmark' color="black" size={24}/>
        </View>
        </View>
    )
}