type PostProps = {
    isMainPost? : boolean,
    titulo : string,
    dataCriacao : string,
    tagPost?: "Technology" | "Security" | "Car"
} & imagemPostProps & authorPostProps

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
                
            </div>
            }  
        </>
    )
}

export default Post