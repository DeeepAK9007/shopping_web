import "./merch_card.css"

export default function MerchCard ({ merch }) {
    let sizes = ""
    if (merch) {
        let labels = Object.keys(merch.sizes)
        labels.sort()
        for (let i of labels) {
            sizes += i + ": " + merch.sizes[i] + " | "
        }
        sizes = sizes.slice(0, -3)
    }

    return (
        <div className="merch-card">
            <img src={merch.photo[0]} alt="" />
            <div className="content">
                <h2>{merch.name}</h2>
                <h3>{merch.club} | {merch.type}</h3>
                <p>Price: {merch.price}</p>
                <p>Sizes: {sizes}</p>
        </div>
    </div>
    )
}