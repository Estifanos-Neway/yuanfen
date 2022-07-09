export default function Category({name, imageUrl}) {
  return (
    <div>
        <img src={imageUrl}/>
        {name}
    </div>
  )
}
