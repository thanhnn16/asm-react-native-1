import AsyncStorage from '@react-native-async-storage/async-storage';

export const addProductToFavorites = async (productId: string) => {
  try {
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesList = favorites ? JSON.parse(favorites) : [];
    favoritesList.push(productId);
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesList));
  } catch (error) {
    console.error(error);
  }
};

export const getFavoriteProducts = async () => {
  try {
    const favorites = await AsyncStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error(error);
  }
};

export const removeProductFromFavorites = async (productId: number) => {
  try {
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesList = favorites ? JSON.parse(favorites) : [];

    favoritesList = favoritesList.filter(id => id !== productId);

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesList));
  } catch (error) {
    console.error(error);
  }
};
