import { useParams } from "react-router-dom"
import "./manage_merch.css"

export default function ManageMerch () {
    let { merchId } = useParams()

    return (
        <div className="manage-merch">
            {merchId}
        </div>
    )
}