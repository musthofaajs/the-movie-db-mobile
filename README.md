# The Movie DB Mobile

The Movie DB Mobile is a mobile application that allows users to browse and discover movies. It provides a sleek and user-friendly interface for exploring a wide range of movies, viewing details, and more.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Troubleshooting](#troubleshooting)

## Features

- Browse and discover popular, top-rated, now playing, and upcoming movies
- View movie details including title, poster, overview, and more
- Navigate between movie lists and details seamlessly
- Beautiful UI with featured movie background image

## Getting Started

### Prerequisites

- Node.js (v16.13.x or higher)
- npm or Yarn

### Installation

1. Clone the repository:

```sh
git clone https://github.com/musthofaajs/the-movie-db-mobile.git
```

2. Install dependencies:

```sh
npm install
# or
yarn 
```

## Usage

1. Run for android:

```sh
npm run android:run
#or
yarn android:run
```

2. Run for iOS:

```sh
npm run ios
#or
yarn ios
```
It is recommended to use a real mobile device for the best user experience.

## Technologies Used

- React Native
- Redux for state management
- React Navigation for navigation
- axios for making API requests
- react-native-fast-image for image loading and caching

## Troubleshooting
If you encounter issues with building the Android project, try the following steps:
1. Open a terminal and navigate to the android folder within the project directory:

```sh
cd android
```

2. Run the following command to sync the Gradle files:

```sh
cd android
```

If the issue persists, you can open the android folder in Android Studio IDE and hit 'Sync with Gradle Files'.


