import React from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import Drawer from './DrawerLayout/DrawerNavigation'
// import { Text } from "react-native";

const MUIHeader = () => (
  // <>
  <AppBar
      title="Title"
      color="pink"
      tintColor="red"
      leading={props => (
        <IconButton
          icon={props => <Icon name="menu" {...props} />}
          {...props}
          onPress={() => alert('hello')}
        />

      )}
      trailing={props => (
        <HStack>
          <IconButton
            icon={props => <Icon name="magnify" {...props} />}
            {...props}

          />
          <IconButton
            icon={props => <Icon name="dots-vertical" {...props} />}
            {...props}
          />
        </HStack>
      )}
    />
    
  // </>
  
 

);

export default MUIHeader;