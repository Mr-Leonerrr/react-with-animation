import { firebase } from '../firebase';

export const getRecentSearches = async () => {
    const recentSearches = [];

    try {
        const db = firebase.firestore();
        const searches = await db.collection('searchResults').get();
        const recentSearchesArray = searches.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data().data
            }
        });
        recentSearchesArray.forEach(search => {
            recentSearches.push(search);
        });
    } catch (error) {
        console.log(error);
    }

    return recentSearches;
};