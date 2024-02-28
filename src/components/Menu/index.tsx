import { Text, View } from "react-native"
import BottomSheet from "@gorhom/bottom-sheet"
import { forwardRef } from "react"

import { styles } from "./styles"

export const Menu = forwardRef<BottomSheet>(({}, ref) => {
  return (
    <BottomSheet 
      ref={ref}
      index={0} 
      snapPoints={[0.01,230]}
      // snapPoints={[100,230]}
    >
      <View style={styles.content}>
        <View>          
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>       
      </View>
    </BottomSheet>
  )
})