import React from 'react';
import {ScrollView, View} from 'react-native';

const Container = ({children, style}) => {
  function findEvenIndex(strarr, k) {
    let length = [];

    let conc = [];
    for (let i = 0; i < strarr.length; i++) {
    
       
    }

    return length;

    // let long = '';
    // let max = 0;
    // for (let i = 0; i < length.length; i++) {
    //   if (length[i].length > max) {
    //     long = length[i];
    //     max = length[i].length;
    //   }
    // }

    // return long;
  }

  console.log(
    findEvenIndex(
      [
        'ejjjjmmtthh',
        'zxxuueeg',
        'aanlljrrrxx',
        'dqqqaaabbb',
        'oocccffuucccjjjkkkjyyyeehh',
      ],
      1,
    ),
  );

  // const arr = word.split('');

  // let wordarr = [];

  // for (let i = 0; i < arr.length; i++) {
  //   const find = arr.filter(item => item.lowerCase() === arr[i]);
  //   console.log(find);
  //   if (find.length == 1) {
  //     wordarr.push('(');
  //   }
  //   if (find.length >= 2) {
  //     wordarr.push(')');
  //   }
  // }

  // return wordarr.join('');

  return (
    <ScrollView style={style}>
      <View style={{padding: 20}}>{children}</View>
    </ScrollView>
  );
};

export default Container;
