import Submit from "./components/notes_form";
import Submit_1 from "./components/submit_1";
import{ getClient }from "./lib/mongodb";


export default async function Home() {
  const client = getClient();
  const data = await client.db('testing').collection<{note:string}>('dataBase').find().limit(50).toArray();
  return (<>
  <Submit_1/>
  {data.map((i)=><Submit key={i.note} note={i.note}/>)}
  </>
  );
}
