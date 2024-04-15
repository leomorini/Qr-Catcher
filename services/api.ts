import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinkInterface } from "@/services/interfaces";

/** Default key for save */
const key: string = "@morinistudios.qrbarreader:";

/** Save data saved in local storage */
export async function _storeData(name: string, value: any) {
  try {
    await AsyncStorage.setItem(`${key}${name}`, JSON.stringify(value));
  } catch (error) {
    console.error("Erro ao salvar os dados:", error);
  }
}

/** Load data saved in local storage */
export async function _loadData(name: string) {
  try {
    const jsonValue = await AsyncStorage.getItem(`${key}${name}`);
    if (jsonValue !== null) {
      // We have data!!
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    }
  } catch (error) {
    console.error("Erro ao recuperar os dados:", error);
    return null;
  }
}

/** Custom functions */
export async function _saveHistory(history: LinkInterface[]) {
  try {
    await _storeData('history', history);
  } catch (error) {
    console.error("Error in saving history: ", error);
    return null;
  }
}