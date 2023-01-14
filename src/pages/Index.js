import { Link, useLoaderData} from 'react-router-dom'
import NewForm from '../components/Form'

function Index(props){
    const bookmarks=useLoaderData()
    return (
        <div>
            <h2>Add a new bookmark</h2>
            <NewForm/>
            <h2>Bookmarks</h2>
                {bookmarks.map((bookmark)=>(
                    <div className="bookmark-div">
                        <a href={bookmark.url} target="_blank">
                            <h1>{bookmark.title}</h1>
                        
                        </a>
                    </div>
                ))}    
        </div>
    )
}

export default Index