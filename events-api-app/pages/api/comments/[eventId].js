import {connectDatabase, getAllDocuments, insertDocument} from '../../../helpers/db-util'

async function handler(req, res){


    const eventId = req.query.eventId;
    let client;

    try{
        client = await connectDatabase();
    }catch(error){
        res.status(500).json({message: 'Connecting to the datbase failed!'});
        return;
    }



    if(req.method==='POST'){
        const {email, name, text} = req.body;
        //add server side validation
        if(!email.includes('@')
        || !name || name.trim()===''
        ||!text||text.trim()===''){
            res.status(422).json({message:'Invalid Input.'});
            return;
        }

        console.log(email, name, text);
        const newComment = {
            id:new Date().toISOString(),
            email,
            name,
            text,
            eventId
        }
        let result;
        try{
            result = await insertDocument(client, 'comments', newComment);
        }catch(error){
            res.status(500).json({message:'Inserting comment failed!'});
            client.close();
            return;
        }
        
        newComment._id = result.insertedId;
        res.status(201).json({message:'Added comment.',comment:newComment});
    }

    if(req.method==='GET'){


        try{
            const documents = await getAllDocuments(client, 'comments', {_id:-1});
            res.status(200).json({comments:documents});
        }catch(error){
            res.status(500).json({message:'Getting comments failed.'})
            client.close();
            return;
        }
        
        
    }

    client.close();
}

export default handler;