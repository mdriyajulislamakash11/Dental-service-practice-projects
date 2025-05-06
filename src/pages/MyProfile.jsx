import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';

const MyProfile = () => {
    const { user } = useContext(AuthContext);

    // যদি ব্যবহারকারী লগইন না থাকে, তাহলে একটি বার্তা দেখাবো
    if (!user) {
        return (
            <div className="text-center p-10">
                <p className="text-lg text-red-500">Please log in to view your profile.</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex items-center space-x-4">
                {/* প্রোফাইল ছবি */}
                <img
                    src={user.photoURL || "https://via.placeholder.com/150"}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-primary"
                />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{user.displayName || "No Name"}</h1>
                    <p className="text-lg text-gray-600">{user.email || "No email available"}</p>
                    <p className="text-sm text-gray-500 mt-2">
                        Welcome to your profile! You can update your information and settings here.
                    </p>
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-700">Contact Information</h2>
                <p className="text-lg text-gray-600">Email: {user.email}</p>
            </div>
            {/* এখানে যদি আরো তথ্য থাকে, তা প্রদর্শন করা যাবে */}
        </div>
    );
};

export default MyProfile;
