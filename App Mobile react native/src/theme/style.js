import { StyleSheet, Dimensions } from "react-native";
import { theme } from '../theme/theme'
import { Colors } from "./color";
import themeContext from "./themeContex";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default StyleSheet.create({
    area: {
        flex: 1,
    },
    main: {
        flex: 1,
        marginHorizontal: 20,

    },
    title: {
        fontSize: 28,
        color: Colors.active,
        fontFamily: 'PlusJakartaSans-Bold'
    },
    txt: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: 'PlusJakartaSans-Regular',


    },
    btn: {
        backgroundColor: Colors.nbMessage,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 25,

    },
    btntxt: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: 'PlusJakartaSans-Regular'
    },
    indicator: {
        borderColor: '#BDBDBD',
        borderWidth: 1,
        padding: 4,
        borderRadius: 20,
        backgroundColor: '#BDBDBD',
        marginHorizontal: 5
    },
    logintitle: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: 'PlusJakartaSans-Bold'

    },
    txt1: {
        fontSize: 16,
        color: Colors.disable,
        fontFamily: 'PlusJakartaSans-Regular'

    },
    txtinput: {
        // backgroundColor:'white',
        // borderWidth:1,
        borderRadius: 10,
        paddingHorizontal: 20,
        borderColor: Colors.bord,
        color: Colors.disable,
        height: 50
    },

    radio: {
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: Colors.bord,
        color: Colors.disable,
    },

    divider: {
        height: 1,
        backgroundColor: Colors.border,
        flex: 1,
    },

    divider1: {
        height: 1,
        backgroundColor: Colors.border,
        marginTop: 20,
        marginBottom: 25
    },

    dividertxt: {
        color: Colors.disable,
        fontFamily: 'PlusJakartaSans-Regular'
    },

    btn1: {

        alignItems: 'center',
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 60

    },
    btnoutline: {
        borderColor: Colors.border,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 55,
        width: width / 4.5,
    },
    btntxt1: {
        fontSize: 16,
        color: Colors.active,
        paddingLeft: 15,
        fontFamily: 'PlusJakartaSans-Regular'
    },
    title1: {
        fontSize: 30,
        fontFamily: 'PlusJakartaSans-Bold'
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'PlusJakartaSans-Bold'
    },
    subtxt: {
        fontSize: 14,
        color: Colors.disable,
        lineHeight: 20,
        fontFamily: 'PlusJakartaSans-Regular'
    },
    favorite:{
        height:30,
        width:30,
        backgroundColor:Colors.secondary,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        marginRight:10
      },
    categoryTextSelected: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        // borderRadius:20,
        borderWidth: 2,
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        color: Colors.secondary,
    },
    categoryText: {
        fontSize: 14,
        color: Colors.primary,
        borderWidth: 2,
        borderColor: Colors.bord,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        fontFamily: 'PlusJakartaSans-Bold'
    },
    category: {
        color: Colors.primary,
        borderWidth: 2,
        borderColor: Colors.primary,
        // borderRadius:20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        backgroundColor: Colors.secondary
    },
    ctext: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.primary,
    },
    cts: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        color: Colors.secondary,
    },
    categorycontainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 30,
        justifyContent: 'space-between',
    },

    inputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 0,
        borderColor: Colors.border,
        flex:1,
        marginTop: 10,
        borderRadius: 35,
        paddingHorizontal: 10,
        height: 55
    },
    btn3: {
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: '#227C70',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 10,
        // paddingHorizontal:10
    },
    verticaldivider: {
        height: '40%',
        width: 1,
    },
    modalcontainer: {
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical: 140,
        paddingTop: 20,
        marginHorizontal: -10,
        alignSelf: 'center',
    },
    favorite1:{
        height:50,
        width:50,
        backgroundColor:Colors.secondary,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        marginRight:10
      },

}
);