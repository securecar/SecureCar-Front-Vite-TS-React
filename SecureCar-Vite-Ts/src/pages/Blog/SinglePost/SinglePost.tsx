import {PostProps } from "../Post/Post";
import TagPost from "../Post/TagPost/TagPost";
import DOMPurify from "dompurify";

// import DOMPurify from 'dompurify'; // Remove the unused import statement

// Run the following command in the terminal to install the type declaration file for dompurify
// npm i --save-dev @types/dompurify

type SinglePost = {
  descricao: string;
  conteudo: string;
} & PostProps;
const SinglePost = ({
  imagem,
  descImagem,
  titulo,
  descricao,
  dataCriacao,
  autor,
  autorImagem,
  tagPost,
  conteudo,
}: SinglePost) => {
  const sanitizedContent = DOMPurify.sanitize(conteudo);
  return (
    <div className="max-w-screen-lg flex flex-col gap-5">
      <img
        className="w-full object-cover h-1/4"
        src={imagem}
        alt={descImagem}
      />
      <TagPost tagPost={tagPost} />
      <h1 className="text-4xl font-bold">{titulo}</h1>
      <h4 className="text-lg font-light">{descricao}</h4>
      <div className="w-1/6 flex gap-3 justify-start items-center">
        <img className="size-10 rounded-full" src={autorImagem} alt={autor} />
        <p className="text-sm font-semibold text-gray-500">{autor}</p>
        <p className="text-sm font-semibold text-gray-500">{dataCriacao}</p>
      </div>
      <div className="text-black text-lg leading-snug gap-4" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    </div>
  );
};

export default SinglePost;
