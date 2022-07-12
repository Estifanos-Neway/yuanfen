import { Retry } from "./"

export default function Category({ name, imageUrl }) {
  try {
    return (
      <div>
        <img src={imageUrl} />
        {name}
      </div>
    )
  } catch (error) {
    console.error("error");
            console.dir(error,{depth:null});
    return <Retry />
  }

}
