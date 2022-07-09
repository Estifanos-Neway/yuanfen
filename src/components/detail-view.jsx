import { Link } from 'react-router-dom'
import { LandingImage } from './'

export default function DetailView({ _id, imageUrls }) {
    return (
        <div>
            {imageUrls.map((url, index) => <LandingImage key={index} url={url} />)}
            <Link to={`/order/${_id}`} >Order this</Link>
        </div>
    )
}
