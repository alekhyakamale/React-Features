import { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import useLocalStorage from "../Hooks/useLocalStorage";


export default function DogPhoto(){
  const dogPhoto = useFetch('https://dog.ceo/api/breeds/image/random');
  const [value, setValue] = useLocalStorage('dog-favourites', []);

  const handleClick = () => {
    setValue([...value, dogPhoto.data?.message])
  }

  return (
    <div>
      <button onClick={handleClick}>heart</button>
      <img src={dogPhoto.data?.message} alt="dog photo"></img>
      {value.map((liked) => {
        return <p>{liked}</p>
      })}
    </div>
  )
}