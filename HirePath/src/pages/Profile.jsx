import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./Profile.css";

const Profile = () => {

    const { user } = useContext(UserContext);

    return (
        <div className="profile-container">

            <div className="profile-card">

                <h1 className="profile-title">
                    My Profile
                </h1>

                <div className="profile-details">

                    <p>
                        <strong>Full Name :</strong> {user?.fullName || "Guest User"}
                    </p>

                    <p>
                        <strong>Email :</strong> {user?.email || "Not Available"}
                    </p>

                    <p>
                        <strong>Phone :</strong> {user?.phoneNumber || "Not Available"}
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Profile;