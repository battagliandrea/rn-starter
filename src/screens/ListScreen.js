import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: "Friend #1", age: "20" },
        { name: "Friend #2", age: "45"  },
        { name: "Friend #3", age: "32"  },
        { name: "Friend #4", age: "54"  },
        { name: "Friend #5", age: "13"  },
        { name: "Friend #6", age: "39"  },
        { name: "Friend #7", age: "65"  },
        { name: "Friend #8", age: "34"  },
        { name: "Friend #9", age: "22"  },
    ]

    return (
        <FlatList 
            keyExtractor= {friends => friends.name}
            data={friends} 
            renderItem={({item}) => {
                return <Text style={style.textStyle}>{item.name} - Age: {item.age}</Text>;
            }}
        />
    );
};

const style = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;