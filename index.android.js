/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import FileUploadComponent from './app/components/FileUploadComponent/FileUploadComponent';
import HomeComponent from './app/components/HomeComponent/HomeComponent';
import { StackNavigator } from 'react-navigation';

import {
  AppRegistry
} from 'react-native';

const Navigation = StackNavigator({
  HomeComponent: { screen: HomeComponent},
  FileUploadComponent: { screen: FileUploadComponent}
});

AppRegistry.registerComponent('PicUploadProject', () => Navigation);
