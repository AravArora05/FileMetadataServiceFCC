import { useParams, Navigate } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import CategoryHeader from './components/CategoryHeader';
import ArticlesSection from './components/ArticlesSection';
import useFetch from './useFetch';
const CurrentSport = () => {
    const allowedSports = ["NBA", "MLB", "Soccer", "NFL"];
    const { sport } = useParams();
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/articles');
    if (!allowedSports.includes(sport)) {
        return <Navigate to="/" />;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }

    if (isPending) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <SiteHeader />
            <CategoryHeader name={sport} />
            <ArticlesSection articles={blogs.filter(article => article.sport === sport)} />
        </>
    );
};

export default CurrentSport;
