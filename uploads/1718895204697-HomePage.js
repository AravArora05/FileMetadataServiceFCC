
import useFetch from './useFetch';
import FeaturedArticle from './components/FeaturedArticle';
import SiteHeader from './components/SiteHeader';
import {useState} from 'react';
import ArticlesSection from './components/ArticlesSection';


const HomePage = ()=> {
    /**
     * You can individuall set the ID here!!!!
     */
    const {error, isPending, data} = useFetch("http://localhost:8000/articles");
    const id = 1;
    if (error) {
        return <div className="notWorking">{error}</div>
    }
    if (isPending) {
        return <div className="loading">loadingg......</div>
    }
    /**
     * const sortedArray = data.map((article) => {
        let currentData = article.date;
        let newDate = currentData.replace(/(\d+)(st|nd|rd|th)/, '$1');
        let date = new Date(newDate);
        return date;
    }).sort((a, b) => {
        a - b
    }).reverse();
     */

    return (
        <>
       <SiteHeader></SiteHeader>
       <FeaturedArticle article ={data[id - 1]}></FeaturedArticle>
       <div class="latest-information">
                <h2>LATEST STORIES</h2>
                <hr class="divider"></hr>
        </div>
       <ArticlesSection articles={
        data.sort((a, b) => {
            let firstDate = a.date;
            let secondDate = b.date;
            let newFirstDate = firstDate.replace(/(\d+)(st|nd|rd|th)/, '$1');
            let newSecondDate = secondDate.replace(/(\d+)(st|nd|rd|th)/, '$1');
            let date1 = new Date(newFirstDate);
            let date2 = new Date(newSecondDate);
            return date1 - date2;
        }).reverse().filter((article) => Number(article.id) !== Number(id))
       }></ArticlesSection>
       </>
    );

}

export default HomePage;