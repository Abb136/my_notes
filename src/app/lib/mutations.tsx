'use server'
import { redirect } from 'next/navigation';
import{ getClient }from "./mongodb";

const client = getClient();
const data = client.db('testing').collection<{note:string}>('dataBase');

export const handelNote = async(form:FormData)=>{
  const firstNote = form.get('firstNote') as string;
  const action = form.get('action') as string | null;
  const oldNote = form.get('oldNote') as string | null;
  const newNote = form.get('note') as string | null;

  if(action === 'add'){
    if(firstNote){
    await data.insertOne({note:`${firstNote}`})
    }
    await data.updateOne({note:`${oldNote}`},{$set:{note:`${newNote}`}});
  }
  else if(action === 'delete')
    await data.deleteOne({note:`${newNote}`});
  redirect('/');
}

