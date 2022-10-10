import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 100,
        marginLeft: 10,
        marginRight: 10,
      },
      topic: {
        fontWeight: "bold",
        marginTop: 30,
        marginBottom: 10,
        fontSize: 20,
      },
      headline: {
        color: 'blue',
        fontWeight: "bold",
        fontSize: 50,
        textAlign: "center"
      },
      textInPut: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
      },
      picker: {
        width: 300,
        padding: 10,
        borderWidth: 1,
        borderColor: "#666",
      },
      result: {
        fontSize: 60,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
      }
})