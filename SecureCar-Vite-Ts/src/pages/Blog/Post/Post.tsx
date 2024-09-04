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
                <h3 className="text-black text-2xl font-medium">{titulo}</h3>
                <div className="post-details flex gap-3 justify-between">
                    <div className="flex gap-2">
                        <img src={autorImagem} alt={autor} />
                        <p>{autor}</p>
                    </div>
                    <div className="flex gap-2">
                        <p>{dataCriacao}</p>
                    </div>
                </div>
            </div>
            }  
        </>
    )
}

export default Post