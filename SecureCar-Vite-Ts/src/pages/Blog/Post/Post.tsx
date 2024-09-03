import TagPost, { tagPostProps } from "./TagPost/TagPost"

type PostProps = {
    isMainPost? : boolean,
    titulo : string,
    dataCriacao : string,
} & imagemPostProps & authorPostProps & tagPostProps

type imagemPostProps = {
    imagem : string,
    descImagem? : string,
}



type authorPostProps = {
    autor : string,
    autorImagem : string
}

const Post = ({isMainPost, imagem, titulo, autorImagem, autor, dataCriacao, descImagem, tagPost} : PostProps) => {
    return(
        <>  
            {isMainPost 
            ? 
            'ba' 
            : 
            <div>
                <img src={imagem} alt={descImagem ? descImagem : ''} />
                <TagPost tagPost={tagPost} />
                
            </div>
            }  
        </>
    )
}

export default Post