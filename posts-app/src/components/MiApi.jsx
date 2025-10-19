import React, { useState, useEffect } from 'react';
import Buscador from './Buscador';

const MiApi = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) throw new Error('Error al obtener posts');
                const data = await response.json();
                setPosts(data); // Array de 100 posts
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) return <div className="text-center"><p>Cargando posts...</p></div>;
    if (error) return <div className="alert alert-danger">Error: {error}</div>;

    return (
        <div>
            <h2>Lista de Posts ({posts.length})</h2>
            <Buscador data={posts} />
        </div>
    );
};

export default MiApi;