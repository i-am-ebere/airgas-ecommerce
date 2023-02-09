### To Run App

```
npm install
cd ios && pod install && cd ..

# if you get the cocoapod error
rvm use ruby-2.7.6 --default
bundle install
npx pod-install

# for ios
npm run ios

# for android
npm run android
```

## Dependencies

```
//https://github.com/software-mansion/react-native-svg
$ npm install react-native-svg
$ cd ios && pod install && cd ..
```

```
 // https://github.com/kristerkari/react-native-svg-transformer
 npm i —save-dev react-native-svg-transformer
```

```
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();
```

### Using TypeScript

If you are using TypeScript, you need to add this to your declarations.d.ts file (create one if you don't have one already):

```
declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```

`.svgrrc` file and include a line for replaceAttrValues that matching a hex code to `{props.fill}`

```
{
  "replaceAttrValues": {
    "#000": "{props.fill}"
  }
}
```
