import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer ApEAHfkfpEa01mVw6NpOppEAxFZuac26Kb9PicjffCzbKY__6qaOLoHMx5wN-JZsL_Pcr17_BUBXgeXnyByQ_NYGWg3mC1Fx4-KHgI0IuSLsQlTF86FWnME20OVmXnYx'
  }
})
