import React, {Component} from 'react';
import {
    Text, 
    View, 
    Button,
    StyleSheet,
} from 'react-native';

import ViewLayout from "../components/defaults/ViewLayout.js";

type Props = {};

class ScreenOne extends Component<Props> {
    constructor(props) {
        super(props);
      }

    render() {
        return (
          <ViewLayout>
             <Text>ScreenOne</Text>
          </ViewLayout>
        );
    }
}

export default ScreenOne;

