import React, { useEffect, useState }  from 'react'
function useFetch(url){
    //declartion of usestate
    const [data, setData] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);
    //declaration of useEffect
    useEffect(()=>{
        //fetching data from url
        const fetchData=async()=>{
            try{
                const response=await fetch(url);
                const data=await response.json();
                setData(data);
            }
            catch(error){
            setError(error)
        }
           finally{
            setloading(false);
           }
        }
        fetchData();
    },[url])
    return{data,loading,error}
}
const Customhooks = () => {
  const url="http://jsonplaceholder.typecode.com/posts"
  const {data,loading,error}= useFetch(url)
  return (
    <div>
    <h1>Custom Hooks</h1>
    <ul>
                    {data.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
      
    </div>
  )
}

export default Customhooks
