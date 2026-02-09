import axios from "axios";

const authEndpoint="https://accounts.spotify.com/authorize";
const clientId="d9c8e1a0b2e04c7f8a9b4c5e1f2a3b4";//remember to change this
const redirectUri="http://localhost:3000/";//remember to change this
const scopes=[
    "user-library-read",
    "playlist-read-private"];



export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient=axios.create({
    baseURL:"https://api.spotify.com/v1",
});

 export const setClientToken=(token)=>{
    apiClient.interceptors.request.use(async function(config){
     config.headers.Authorization=`Bearer ${token}`;
        return config;
    });
};

export default apiClient;