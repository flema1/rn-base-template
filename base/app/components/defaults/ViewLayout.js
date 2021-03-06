import React, {Component} from 'react';
import {
    Text, 
    View, 
    Button,
    StyleSheet,
} from 'react-native';

type Props = {};

class ViewLayout extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

export default ViewLayout;




