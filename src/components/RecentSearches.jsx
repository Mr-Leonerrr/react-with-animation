import React from 'react';
import { firebase } from '../firebase';
import { useGetRecentSearches } from '../hooks/useGetRecentSearches'


const RecentSearches = () => {
    const recentSearches = useGetRecentSearches();

    const handleDelete = async (id) => {
        try {
            const db = firebase.firestore();
            await db.collection('searchResults').doc(id).delete();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {recentSearches.length > 0 && <div>Recent Searches</div>}
            <div className="recent-searches">
                <div className="table-responsive">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                recentSearches.map(search => (
                                    <tr key={search.id} className="odd:bg-white even:bg-slate-100">
                                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                                            {search.title}
                                        </td>
                                        <td>
                                            <button
                                                className="px-4 py-2 text-sm leading-5 bg-red-600 text-white font-medium rounded-md shadow-sm focus:outline-none focus:shadow-outline hover:bg-red-700 hover:fw-"
                                                onClick={() => handleDelete(search.id)}
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className="px-4 py-2 text-sm leading-5 bg-green-600 text-white font-medium rounded-md shadow-sm focus:outline-none focus:shadow-outline hover:bg-green-700 hover:fw-"

                                            >
                                                Search
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default RecentSearches;