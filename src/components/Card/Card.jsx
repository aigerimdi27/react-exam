import './Card.scss'

export const Card = ({ photo }) => {
    return (
        <>
            <div className="card" key={photo?.data?.id}>
                <div className="card__img">
                    <img src={photo?.data?.url} alt="" />
                </div>
                <p className="card__desc-tile">{photo?.data?.title}</p>
            </div>
        </>
    )
}