import PIXI from "expo-pixi";
import { GLView } from "expo-gl";
import { View, Text } from "react-native";

import React from "react";

export default function App() {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text> working here </Text>
      <GLView
        style={{ flex: 1, width: 300, height: 300 }}
        onContextCreate={async (context) => {
          const app = new PIXI.Application({ context });
          console.log(context);

          const sprite = await PIXI.Sprite.fromExpoAsync(
            "http://i.imgur.com/uwrbErh.png"
          );
          app.stage.addChild(sprite);
          sprite.anchor.set(0.5);

          sprite.x = app.screen.width / 2;
          sprite.y = app.screen.height / 2;
        }}
      />
    </View>
  );
}
