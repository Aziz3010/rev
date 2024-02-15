import axios from "axios";

const BASEURL = process.env.DASHBOARD_DOMAIN;
const ACTIONS = {
    'getPhotos': { method: 'get', trail: '/photos'},
    'getPosts': { method: 'get', trail: '/posts'},
    'getComments': { method: 'get', trail: '/comments'},
};

export async function MakeARequest({action, payload, userData}) {
    let req = {
        method: ACTIONS[action].method,
        url: BASEURL + ACTIONS[action].trail,
        headers:{
            // shortToken: userData?.shortToken
        },
    }

    // if(ACTIONS[action].method.toLowerCase() == "get"){
    //     req.params = payload;
    // } else {
    //     req.data = payload;
    // }

    try {
        let res = await axios(req);
  
        if(res.status == 200){
            if(res.data.length){
                return res.data;
            } else {
                throw new Error(res.statusText);
            }
        } else {
            throw new Error(res.statusText);
        }
        
    } catch (error) {
        throw new Error(error);
    }


};