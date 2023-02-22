import instance from "./config"

const getFavourites = () => {
    return instance.get("/favourites");
}
const getFavourite = (id) => {
    return instance.get(`/favourites/${id}`);
};

const addFavourite = (favourite) => {
    return instance.post(`/favourites`, favourite);
}

const updateFavourite = (favourite) => {
    return instance.put(`/favourites/${favourite.id}`, favourite);
}

const deleteFavourite = (id) => {
    return instance.delete(`/favourites/${id}`);
}

export { getFavourites, getFavourite, addFavourite, updateFavourite, deleteFavourite } 