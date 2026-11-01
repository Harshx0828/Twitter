import { useState } from 'react'
import './App.css'
import Tweet from './components/Tweet'
import Addtweet from './components/Addtweet.jsx/Addtweet'
import Tweetlist from './components/Tweetlist'
function App() {

const dummylist=[{ id:0 ,content:"this is my home",like:12,createdAt:new Date()},{ id:1,content:"this is my home",like:22,createdAt:new Date()}]
const [tweet,settweet]=useState(dummylist);
function handleSave(id, newcontent){
  settweet(prev =>
    prev.map(element =>
      element.id === id
        ? { ...element, content: newcontent }
        : element
    )
  );

  seteditid(null);
}
const handleaddtweet=(text)=>{
  console.log(text);
  let idx=tweet.length+1;
settweet([...tweet,{
  id:idx,
  content:text.text,
  like:Math.floor(Math.random()*10),
  createdAt: new Date()
}])
}
const [editid, seteditid] = useState(null);
function handleedit(id){
 seteditid(id);
  }
  function handleSave(id, newcontent) {
  settweet(prev =>
    prev.map(element =>
      element.id === id
        ? { ...element, content: newcontent }
        : element
    )
  );

  seteditid(null);
}
function sorting(){
  console.log("sorting");
  settweet(
    [...tweet].sort((a, b) => b.createdAt - a.createdAt)
  );
}
function fdelete(id){
let newtweets=tweet.filter(t=>t.id!=id);
settweet(newtweets);

}

  return (
 <>
 <Addtweet handleaddtweet={handleaddtweet} sorting={sorting}/>
 <Tweetlist tweetlist={tweet}handleedit={handleedit} editid={editid} handleSave={handleSave} fdelete ={fdelete} />
 </>
  )
}
export default App
