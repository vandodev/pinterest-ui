import {View, StyleSheet} from "react-native";
import { theme } from "../../theme";
import { Filters } from "@/components/Filters";

export default function Home(){
    return(
        <View style={styles.container}>
            {/* <Filter filter="Todos" selected /> */}
            <Filters />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.black,
        padding: 12,
        paddingTop: 52
    },
    text:{
        fontSize:22,
        color: theme.colors.white,
        fontFamily: theme.fontFamily.bold

    }
})