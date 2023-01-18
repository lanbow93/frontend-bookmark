import { Link, useLoaderData} from 'react-router-dom'
import NewForm from '../components/Form'
import Delete from '../components/Delete'
function Index(props){
const bookmarks=useLoaderData()

    return (
        <div className='wholePage'>
            <div className="newForm">
                <NewForm/>
            </div>
            <h1>Bookmarks</h1>
            <div className="bookmarkHolder">
                {bookmarks.map((bookmark, index)=>(
                    <div key={bookmark._id} className="bookmarkDiv">
                        <a href={bookmark.url} target="_blank">
                            <h2>{bookmark.title}</h2>
                        </a>
                        <Delete id={bookmark._id} />
                        <Link to={`/${bookmark._id}/edit?title=${bookmark.title}&url=${bookmark.url}`}><button className='update'>Update</button></Link>
                    </div>
                ))}
            </div>    
        </div>
    )
}

export default Index