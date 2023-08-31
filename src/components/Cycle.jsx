
export const Cycle = ({tittle, text}) => {
  return (
    <article className="h-[140px] border-t-2 py-7 first:border-none mb-12">
        <h2 className="cursor-pointer hover:text-LiteBlue text-[20px] mb-3">{tittle}</h2>
        <p>{text}</p>
    </article>
  )
}
