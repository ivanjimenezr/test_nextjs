// import useSWR from 'swr'

// const fetcher = (...args) => fetch(...args).then((res) => res.json())

// export default function Profile() {
//   const { data, error } = useSWR('/api/getposts', fetcher)

//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>
// //   data=data.results
// console.log('data: ', data)
//   return (
//     <div>
//       <h1>
//      hola
//       </h1>
//     </div>
//   )
// }

import axios from 'axios';
import Link from 'next/link';

const Home = ({ restaurants, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <><Link href="/"><a>Home</a></Link>

    <ul>
      {restaurants.result.map(restaurant => (
        <li key={restaurant.id}>{restaurant.id} - {restaurant.content}</li>
      ))}
    </ul>
    </>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:3000/api/getposts');
    const restaurants = res.data;
    console.log('restaurants: ', restaurants)
    return { restaurants };
  } catch (error) {
    return { error };
  }
};

export default Home;