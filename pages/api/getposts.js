import excuteQuery from '../../lib/db'

export default async (req, res) => {
    try {
        console.log("req nom", req.body)
        const result = await excuteQuery({
            
          query: 'SELECT id, content FROM post',
          values: [req.body.content],
      });
      console.log( "ttt",result );
      res.status(200).json({ result })
  } catch ( error ) {
      console.log( error );
  }
  
  
  };