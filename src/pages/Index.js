import { Link, useLoaderData} from 'react-router-dom'
import NewForm from '../components/Form'
import Delete from '../components/Delete'
function Index(props){
const bookmarks=useLoaderData()

    return (
        <div>
            <h2>Add a new bookmark</h2>
            <NewForm/>
            <h2>Bookmarks</h2>
                {bookmarks.map((bookmark)=>(

                    <div key={bookmark._id} className="bookmarkDiv">
                        <a href={bookmark.url} target="_blank">
                            <h1>{bookmark.title}</h1>
                        </a>
                        <Delete id={bookmark._id} />
                        <Link to={`/${bookmark._id}/edit?title=${bookmark.title}&url=${bookmark.url}`}><button >Update</button></Link>
                    </div>
                ))}    
        </div>
    )
}

export default Index