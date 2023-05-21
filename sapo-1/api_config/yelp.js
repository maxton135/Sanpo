import axios from "axios";
import { YELP_APIKEY } from "@env";

const yelp_search = async (location, food_type, limit) => {
  const config = {
    headers: {
      Authorization: "Bearer " + YELP_APIKEY,
    },
    params: {
      latitude: location.lat,
      longitude: location.lng,
      term: food_type,
      categories: food_type,
      sort_by: "best_match",
      limit: limit,
    },
  };
  axios
    .get(
      //"https://api.yelp.com/v3/businesses/search?location=Santa%20Cruz&term=restaurants&radius=10000&price=1&price=2&sort_by=best_match&limit=20",
      "https://api.yelp.com/v3/businesses/search?",
      config
    )
    .then((response) => {
      //console.log(response.data); //These are the results sent back from the API!
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default yelp_search;
