export default {
    genres: [
        {
            'id': 0,
            'name': 'Trending',
            'url': `/trending/movie/week?api_key=${process.env.API_KEY}&language=en-US`
        },
        {
            'id': 1,
            'name': 'Top Rated',
            'url': `/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
        },
        {
            "id": 28,
            "name": "Action",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=28`
        },
        {
            "id": 12,
            "name": "Adventure",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=12`
        },
        {
            "id": 16,
            "name": "Animation",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=16`
        },
        {
            "id": 35,
            "name": "Comedy",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=35`
        },
        {
            "id": 80,
            "name": "Crime",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=80`
        },
        {
            "id": 99,
            "name": "Documentary",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=99`
        },
        {
            "id": 18,
            "name": "Drama",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=18`
        },
        {
            "id": 10751,
            "name": "Family",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=10751`
        },
        {
            "id": 14,
            "name": "Fantasy",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=14`
        },
        {
            "id": 36,
            "name": "History",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=36`
        },
        {
            "id": 27,
            "name": "Horror",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=27`
        },
        {
            "id": 10402,
            "name": "Music",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=10402`
        },
        {
            "id": 9648,
            "name": "Mystery",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=9648`
        },
        {
            "id": 10749,
            "name": "Romance",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=10749`
        },
        {
            "id": 878,
            "name": "Science Fiction",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=878`
        },
        {
            "id": 10770,
            "name": "TV Movie",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=10770`
        },
        {
            "id": 53,
            "name": "Thriller",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=53`
        },
        {
            "id": 10752,
            "name": "War",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=10752`
        },
        {
            "id": 37,
            "name": "Western",
            "url": `/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=37`
        }
    ]
}