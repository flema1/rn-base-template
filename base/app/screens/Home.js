import React, {Component} from 'react';
import {
    Text, 
    View, 
    Button,
    StyleSheet,
} from 'react-native';

import ViewLayout from "../components/defaults/ViewLayout.js";

import { Navigation } from "react-native-navigation";

type Props = {};

class Home extends Component<Props> {
    constructor(props) {
        super(props);
        this.handleViewPush = this.handleViewPush.bind(this);
      }

      handleViewPush(){
        Navigation.push(this.props.componentId, {
            component: {
                name: 'App.ScreenOne',
                options: {
                    topBar: {
                        title: {
                            text: 'ScreenOne'
                        }
                    }
                }
            }
        });
    };

    render() {
        return (
            <ViewLayout>
                <Button
                    onPress={this.handleViewPush}
                    title={"Push something"}
                />
            </ViewLayout>
        );
    }
}

export default Home;

