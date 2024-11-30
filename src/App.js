import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsContent from './components/NewsContent/NewsContent'
import apiKey from './data/apiKey';
import axios from 'axios';
import Footer from './components/Footer/Footer';
function App() {

  const [category, setCategory] = useState('general')
  const [newsResults, setNewsResults] = useState()
  const [newsArray, setNewsArray] = useState([])
  const [loadMore, setLoadMore] = useState(20)


  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&category=${category}&pageSize=${loadMore}`);
      console.log(news);
      setNewsResults(news.data.totalResults);
      setNewsArray(news.data.articles)
      console.log(newsArray)
    } catch (error) {
      console.log(error);      
    }
  }

  useEffect(() => {
    newsApi();
  }, [category, newsResults, loadMore])      // gets fired when category or newsResults changes

  return (
    <div className="App">
      <Navbar setCategory={setCategory} setLoadMore = {setLoadMore} />
      <NewsContent 
      newsArray={newsArray} 
      newsResults={newsResults} 
      loadMore = {loadMore}
      setLoadMore = {setLoadMore}
      />
      <Footer />
    </div>
  );
}

export default App;

  // const newsApi = async () => {
  //   componentDidMount() {
  //     axios
  //       .get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}`)
  //       .then((news) => {
  //         const data = news.data;
  //         setNewsResults(data.totalResults);
  //         setNewsArray(data.articles);
  //       })
  //       .catch(err => {
  //         console.log('404');
  //       })
  //   }
  // }