// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function CreateCard() {
  const [name, setName]= useState('');
  const [description, setDescription]= useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTwitter] = useState('');
  const [interests, setInterests] = useState([]);

  async function clickhandler(){
    try {
      const response = await fetch('http://localhost:3000/card/add', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          description: description,
          interests: interests,
          linkedin: linkedin,
          twitter: twitter
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to add card');
      }
      else{
        setName('')
        setDescription('')
        setInterests([])
        setLinkedin('')
        setTwitter('')
      }

    } catch (error) {
      console.error('Error adding card:', error.message);
    }
  }

  return (
    <div className="w-full flex flex-col gap-6 p-10 bg-[#201E1F] m-10">
      <input className="h-12 text-lg px-3 rounded" type="text" placeholder="Name" value={name} onChange={(e)=>{
        setName(e.target.value);
      }} />
      <input className="h-12 text-lg px-3 rounded" type="text" placeholder="Description" value={description} onChange={(e)=>{
        setDescription(e.target.value);
      }}/>
      <input className="text-lg p-3 rounded" type="text" placeholder="Interests" value={interests} onChange={(e)=>{
        setInterests(e.target.value.split(','));
      }}/>
      <input className="h-12 text-lg px-3 rounded" type="text" placeholder="Linkdin" value={linkedin} onChange={(e)=>{
        setLinkedin(e.target.value);
      }}/>
      <input className="h-12 text-lg px-3 rounded" type="text" placeholder="Twitter" value={twitter} onChange={(e)=>{
        setTwitter(e.target.value);
      }}/>

      <button className="w-[20%] bg-[#59CD90] hover:bg-[#7cf6b5] text-xl text-white font-bold py-2 px-4 rounded" onClick={clickhandler}>
  Add
</button>
    </div>
  );
}
