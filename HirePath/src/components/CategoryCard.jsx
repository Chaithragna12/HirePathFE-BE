import "./CategoryCard.css";

const CategoryCard = ({ title, jobs }) => {
    return (
        <div className="category-card">

            <h2 className="category-title">
                {title}
            </h2>

            <p className="category-jobs">
                {jobs}+ Jobs Available
            </p>

        </div>
    );
};

export default CategoryCard;