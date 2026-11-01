import { useState } from 'react';
import './Tweetlist.css';

function Tweetlist({ tweetlist, handleedit, editid ,handleSave,fdelete}){

const[edit,setedit]=useState(false);
const [edittext,settexittext]=useState('');
  const list = tweetlist.map(function (element){
    return (
      <div className="list-wrapper" key={element.id}>
        <li className="class-list-wrapper">
          {(editid === element.id &&  edit==false )? (
            <>
              <input
                type="text"
                defaultValue={element.content}
                onChange={(e)=>{
                    console.log(e.target.value);
                   settexittext(e.target.value);
                }}
              />
            <button onClick={() => handleSave(element.id, edittext)}>
  Save
</button>
            </>
          ) : (
            <>
              Tweet: {element.content}
              <br />
              <div className="like-wrapper">
                <span>Likes: {element.like}</span>
                <div>
                  Createdat: {element.createdAt.toLocaleString()}
                </div>
              </div>
              <button
                onClick={() => handleedit(element.id)}
                className="edit-button-wrapper"
              >
                Edit button
              </button>
              <button  className="delete-btn" onClick={()=>fdelete(element.id)}>Delete Tweet</button>
            </>
          )}
        </li>
      </div>
    );
  });

  return <ul>{list}</ul>;
}

export default Tweetlist;