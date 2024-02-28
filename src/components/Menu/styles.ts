import { theme } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
   
  },
  content: {
    height: 300,
    width:"100%",
    backgroundColor: "white"
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.white,
    flex: 1,
    textAlign: "center",
    marginRight: 24,
  },
})