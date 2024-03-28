const axios = require('axios')
export default async function abc(req,res){
    try {
        const {data} = await axios.get('https://vercel-food-api-rho.vercel.app/sweet')
        // const data2 = await res2.json()
        // console.log(data)
        res.send(data)
      } catch (error) {
        // console.log(error)          
        res.send(error.message)
      }

}