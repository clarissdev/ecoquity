import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./index.module.scss";
import { httpGet$GetPosts } from "@/modules/commands/GetPosts/fetcher";
import Navbar from "../_containers/Navbar";
import Footer from "../_containers/Footer";
import Posts from "../_containers/Posts";


interface Post {
  id: number
  title: string
  description: string
  imageUrl: string
  tags: string[]
}

const dummyPosts: Post[] = [
  {
    id: 1,
    title: "Cans or bottles? Plastics or papers Both aluminum cans and plastic bottles aren't as eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle",
    description: "Both aluminum cans and plastic bottles aren't as eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle",
    imageUrl: "https://scontent.fhan1-1.fna.fbcdn.net/v/t39.30808-6/468330941_122123781890513949_235746272338835208_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFLmMvpW9BmME6xqLKVoSWNxeJ7QtiP6XjF4ntC2I_peD6j4v3EhctfnaKF6rFldbtN22TCeTWZ3nNMgD6okY4O&_nc_ohc=1Hyh7hZPGKkQ7kNvgGYgNyZ&_nc_zt=23&_nc_ht=scontent.fhan1-1.fna&_nc_gid=AEOnoxUJaL_8ZvEnJRmkM3a&oh=00_AYAE5q40OuXa0GsnYcvfPAZT6eD5l16-54hak_6eqay6cg&oe=6756486B",
    tags: ["Recycling", "Sustainability", "Environment"]
  },
  {
    id: 2,
    title: "The impact of fast fashion on the environment",
    description: "Fast fashion has become increasingly popular, but at what cost to our planet? Learn about the environmental impact of this industry trend...",
    imageUrl: "https://scontent.fhan1-1.fna.fbcdn.net/v/t39.30808-6/468330941_122123781890513949_235746272338835208_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFLmMvpW9BmME6xqLKVoSWNxeJ7QtiP6XjF4ntC2I_peD6j4v3EhctfnaKF6rFldbtN22TCeTWZ3nNMgD6okY4O&_nc_ohc=1Hyh7hZPGKkQ7kNvgGYgNyZ&_nc_zt=23&_nc_ht=scontent.fhan1-1.fna&_nc_gid=AEOnoxUJaL_8ZvEnJRmkM3a&oh=00_AYAE5q40OuXa0GsnYcvfPAZT6eD5l16-54hak_6eqay6cg&oe=6756486B",
    tags: ["Fashion", "Environment", "Sustainability"]
  },
  {
    id: 3,
    title: "Renewable energy: The future of power generation",
    description: "Explore the various forms of renewable energy and how they're shaping the future of power generation. From solar to wind, discover the potential...",
    imageUrl: "https://scontent.fhan1-1.fna.fbcdn.net/v/t39.30808-6/468330941_122123781890513949_235746272338835208_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFLmMvpW9BmME6xqLKVoSWNxeJ7QtiP6XjF4ntC2I_peD6j4v3EhctfnaKF6rFldbtN22TCeTWZ3nNMgD6okY4O&_nc_ohc=1Hyh7hZPGKkQ7kNvgGYgNyZ&_nc_zt=23&_nc_ht=scontent.fhan1-1.fna&_nc_gid=AEOnoxUJaL_8ZvEnJRmkM3a&oh=00_AYAE5q40OuXa0GsnYcvfPAZT6eD5l16-54hak_6eqay6cg&oe=6756486B",
    tags: ["Energy", "Sustainability", "Technology"]
  }
]


export default async function Page() {
  // const data = await httpGet$GetPosts(`/posts`, {}).catch((error) => {
  //   console.log(error);
  // });
  // if (!data) {
  //   notFound();
  // }
  return (
    <div className={styles.container}>
      <Navbar />
      <Posts posts = {dummyPosts}/>
      <Footer />
    </div>
  );
}
