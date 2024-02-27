import { FlatList } from "react-native"

import { styles } from "./styles"
import {FILTERS} from "@/utils/filters"

import { Filter } from "@/components/Filter"

export function Filters() {
  return (
    <FlatList
      data={FILTERS}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected
        />
      )}
      horizontal
      style={styles.list}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  )
}
