const axios = require('axios')
export default async function abc(req,res){
    try {
        console.log(req.body.text);
        const {data} = await axios.get('https://vercel-food-api-rho.vercel.app/query/'+req.body.text)
        // const data2 = await res2.json()
        // console.log(data)
        res.send(data)
      } catch (error) {
        // console.log(error)          
        res.send(error.message)
      }

}