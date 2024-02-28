import { Text, View } from "react-native"
import BottomSheet from "@gorhom/bottom-sheet"
import { forwardRef } from "react"
import { FontAwesome } from "@expo/vector-icons"

import { styles } from "./styles"
import { MenuProps } from "./menu"

export const Menu = forwardRef<BottomSheet, MenuProps>(({onClose}, ref) => {
  return (
    <BottomSheet 
      ref={ref}
      index={0} 
      snapPoints={[0.01,230]}
      // snapPoints={[100,230]}
    >
      <View style={styles.content}>
        <View>  
         <FontAwesome
            name="close"
            size={24}
            onPress={onClose}
          />
        
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>       
      </View>
    </BottomSheet>
  )
})