import { Image, ImageProps} from "react-native"
import { AvatarProps } from "./avatar"


import { styles } from "./styles"

export function Avatar({selected, ...rest} : AvatarProps & ImageProps) {
  return <Image style={styles.image} {...rest} />
}