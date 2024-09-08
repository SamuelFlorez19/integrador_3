import './Card.scss'

const Card = () => {
    return (
        <div className="card">
        <article className="card__article">
            <div className="img card__image-container">
            <img
                src="img/necklace-1.jpg"
                alt="Neacklace-1"
                className="img card__image"
            />
            </div>
            <div className="card__content">
            <h2 className="card__heading">Neacklace-1</h2>
            <div className="card__description">
                <p>Collar dorado con un diseño elegante y colgante distintivo.</p>
            </div>
            <div className="card__footer">
                <span className="card__heading">99.99</span>
            </div>
            </div>
        </article>
        </div>
    );
};

export default Card;
