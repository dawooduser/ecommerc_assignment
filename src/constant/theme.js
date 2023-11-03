import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#c3dc0f",
    secondary: "#ffffff",
    lightPrimaryColor: '#daf6ff',
    primaryHard: "#daf6ff",
    // colors
    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    lightGray5: "#e1e1e5",
    lightGray6: "#e0e0e0",
    lightGray7: "#cccccc",
    transparent: "transparent",
    darkgray: '#898C95',
    backdrop: 'rgba(0, 0, 0, 0.4)',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontSize: SIZES.largeTitle, fontFamily: 'Roboto-Bold' },
    h1: { fontSize: SIZES.h1, fontFamily: 'Roboto-Bold' },
    h2: {  fontSize: SIZES.h2, fontFamily: 'Roboto-Bold' },
    h3: {  fontSize: SIZES.h3, fontFamily: 'Roboto-Regular' },
    h4: {  fontSize: SIZES.h4, fontFamily: 'Roboto-Regular' },
    body1: {  fontSize: SIZES.body1, fontFamily: 'Roboto-Regular' },
    body2: {  fontSize: SIZES.body2, fontFamily: 'Roboto-Regular' },
    body3: {  fontSize: SIZES.body3, fontFamily: 'Roboto-Regular' },
    body4: {  fontSize: SIZES.body4, fontFamily: 'Roboto-Regular' },
    body5: {  fontSize: SIZES.body5, fontFamily: 'Roboto-Regular' },
};
export const commonStyles = StyleSheet.create({
    fillFullScreen: { flex: 1 },
    rowDirection: { flexDirection: 'row' },
    rowDirectionCenter: { flexDirection: 'row', alignItems: 'center' },
    center: { justifyContent: 'center', alignItems: 'center' },
    fullWidth: { width: '100%' },
    spaceBetween: { justifyContent: 'space-between' },
    columnTag: { paddingHorizontal: 15, paddingVertical: 5, backgroundColor: COLORS.secondary, borderRadius: 10 },
    columnItemTag: { justifyContent: 'space-between', backgroundColor: COLORS.secondary, paddingVertical: 10, paddingHorizontal: 5 },
    shadow: {
        shadowColor: 'rgba(0,0,0,0.4)',
        shadowOffset: {
          width: 1,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
      }
})


const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;