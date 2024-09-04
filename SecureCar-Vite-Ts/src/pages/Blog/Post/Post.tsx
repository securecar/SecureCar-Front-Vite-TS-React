import TagPost, { tagPostProps } from "./TagPost/TagPost"

export type PostProps = {
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
            <div className="w-full bg-white">
                <img className="w-full h-[600px] object-cover rounded-xl m-auto " src={imagem} alt={descImagem}/>
                <div className="relative bg-white p-10 flex flex-col w-2/5 justify-start -mt-60 ml-24 h-max rounded-xl shadow-md mb-4 hover:cursor-pointer hover:scale-105 transition-all duration-500">
                    <TagPost tagPost={tagPost} />
                    <h2 className="text-black text-4xl font-semibold py-4">{titulo}</h2>
                    <div className="post-details flex gap-3 justify-start py-4 items-center w-full">
                        <div className="flex gap-2 items-center">
                            <img className="size-9 rounded-full object-cover object-top" src={autorImagem} alt={autor} />
                            <p className="text-[16px] font-semibold text-gray-500">{autor}</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="text-[14px] font-medium text-gray-400">{dataCriacao}</p>
                        </div>
                    </div>
                </div>
            </div> 
            : 
            <div className="bg-white border border-[#c5c5c6] p-4 rounded-xl min-h-96 max-w-[400px] m-auto flex flex-col justify-center items-center hover:scale-105 hover:cursor-pointer transition-all duration-500">
                <img className="h-[240px] w-[360px] rounded object-cover my-2 object-top" src={imagem} alt={descImagem} />
                <TagPost tagPost={tagPost} />
                <h3 className="text-black text-2xl font-semibold py-4">{titulo}</h3>
                <div className="post-details flex gap-3 justify-between py-4 items-center w-full">
                    <div className="flex gap-2 items-center">
                        <img className="size-9 rounded-full object-cover object-top" src={autorImagem} alt={autor} />
                        <p className="text-[16px] font-semibold text-gray-500">{autor}</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-[14px] font-medium text-gray-400">{dataCriacao}</p>
                    </div>
                </div>
            </div>
            }  
        </>
    )
}

export default Post