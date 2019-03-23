# React Native Authentication App

![overview](https://user-images.githubusercontent.com/26605247/54226053-e23f0280-44f4-11e9-9289-8cff19a18850.png)

Complete user authentication flow for mobile applications with React Native, Expo, AWS Amplify, react-navigation, and native-base.

## Overview

The technologies used in this app are the following:

* Navigation is done with: [react-navigation](https://reactnavigation.org/).

* Front end: [Expo](https://docs.expo.io/versions/latest/workflow/expo-cli/).

* Layout: [native-base](https://docs.nativebase.io/).

* Back end: [AWS Amplify](https://aws-amplify.github.io/).

## Authentication flow

* Users are taken to the welcome screen.

* Users can sign up, sign in, request a password change, navigate between screens.

* International phone input is included in the sign up screen.

* Users are redirected to the home screen after log in. 

* Users can navigate between screens using the bottom tab navigator or the drawer navigator.

* Users are kept logged in until they sign out from the app.

## Prerequisites

* [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/)
  * `npm install -g expo-cli`
  
* [AWS account](https://aws.amazon.com/amplify/)

* [Node JS](https://nodejs.org/en/download/) with [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

* [AWS Amplify CLI](https://aws-amplify.github.io/)
  * `npm install -g @aws-amplify/cli`
  * `amplify configure` ([link](https://www.youtube.com/watch?v=fWbM5DLh25U) for a step by step video).

## Configuring the project

1. Clone this repo to your local machine.

```
git clone https://github.com/jtaylor1989/ReactNativeAuth.git

cd ReactNativeAuth
```

2. Add AWS Amplify dependencies to your project.

```
yarn add aws-amplify aws-amplify-react-native

# or

npm install aws-amplify aws-amplify-react-native
```

3. Initialise the AWS Amplify project.

```
amplify init
```

Follow the same instructions as below.

<img width="725" alt="init" src="https://user-images.githubusercontent.com/26605247/54290045-2f2ce280-45a2-11e9-9fe2-3e77b0a29977.png">

4. Configure an Amazon Cognito User Pool to store users credentials.

```
amplify add auth

# When prompt, choose: Yes, use the default configuration.
```

5. Time to deploy your project to AWS.

```
amplify push

Are you sure you want to continue? Yes
```

After few minutes of automated operations, the Amplify CLI will create an Amazon Cognito User Pool and Identity Pool to store users crendentials.

## Running the application

1. Install client dependencies.

```
yarn

# or

npm install
```

2. Launch the React Native app in your simulator under your project directory.

```
expo start --ios

# or

expo start --android
```

## Step by step tutorial

* A full series of articles detailing the building process of this app can be found [here.](https://bit.ly/2RTv0ok)

* A demo video of the authentication flow is found [here.](https://bit.ly/2ubL8Et)

