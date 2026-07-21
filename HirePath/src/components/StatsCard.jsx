import "./StatsCard.css";

const StatsCard = ({ title, value, color }) => {

    return (

        <div className="stats-card" style={{ backgroundColor: color }}>

            <h3>{title}</h3>

            <h1>{value}</h1>

        </div>

    );

};

export default StatsCard;