
import Post from "../Post/Post"
import { ListaPostsBlog } from "./lista_posts_blog"

const PostLista = () => {
  return (
    <div className="grid col-auto grid-cols-3 gap-5 w-full p-4">
        {ListaPostsBlog.map((post, index) => (
          index == 0 ? '' :
          <Post key={index} {...post}/>
        ))}
    </div>
  )
}

export default PostLista