export type SingleConversaProps = {
    TituloConversa : string
}
const SingleConversa = ({TituloConversa} : SingleConversaProps) => {
  return (
    <div className="bg-primary border-none border-b-2 border-t-2 border-[#366ba9] w-20 flex justify-center items-center">
        <p className="text-white py-4 w-max">{TituloConversa}</p>
    </div>
  )
}

export default SingleConversa