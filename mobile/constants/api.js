import Constants from "expo-constants";
import { Platform } from "react-native";

// Set EXPO_PUBLIC_API_URL in mobile/.env to point to your own backend,
// e.g. EXPO_PUBLIC_API_URL=http://192.168.1.10:3000/api
const envApiUrl = process.env.EXPO_PUBLIC_API_URL;
const expoHost = Constants.expoConfig?.hostUri?.split(":")?.[0];

const defaultHost = expoHost || (Platform.OS === "android" ? "10.0.2.2" : "localhost");

export const API_URL = envApiUrl || `http://${defaultHost}:3000/api`;