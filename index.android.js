/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from './Button'


export default class NativeUiCall extends Component {

  componentWillMount() {
    this.setState({
      count : 0
    })
  }
  onButtonTap = () => {
    let count = this.state.count;
    this.setState({ count: count + 1 })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button style={{ height: 40,width:300 }} buttonText="TextGoingToNative" onTap={this.onButtonTap} />
        <Text>Button Pressed count : {this.state.count}</Text>
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

AppRegistry.registerComponent('NativeUiCall', () => NativeUiCall);
