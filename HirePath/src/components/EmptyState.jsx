import "./EmptyState.css";

const EmptyState = ({ message }) => {

    return (

        <div className="empty-state">

            <h2>

                {message}

            </h2>

        </div>

    );

};

export default EmptyState;