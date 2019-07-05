import axios from "axios";

let lat = 0.00;
let long = 0.00;

window.setInterval( () => {
  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition((pos) => { 
        long = pos.coords.longitude;
        lat = pos.coords.latitude;
    },
    
    function() {

      console.log('some error');

    });

  }

  else {
    
    console.log('some error');

  }
}, 5000);

function thoughtsReducer(state = [], action) {

  switch(action.type)
  {
    case 'UP_VOTE' :
      axios.post('https://thunk-api-19.herokuapp.com/api/v1/post/likes/post/' + action.inputPostId  + '/user/1', {})
      .then( (res) => {

        console.log(res);

      }).catch( (err) => {

        console.log("There was an error");

      } );
      
      return true;
    case 'DOWN_VOTE' :
      axios.post('https://thunk-api-19.herokuapp.com/api/v1/post/dislikes/post/' + action.inputPostId  + '/user/1', {})
      .then( (res) => {

        console.log(res);

      }).catch( (err) => {

        console.log("There was an error");

      } );
        
        return true;
    case 'REPORT_THOUGHT' :
        axios.post('' + action.inputPostId, {
        
        }).then( (res) => {
  
        }).catch( (err) => {
  
        } )
        
        return true;
    case 'DELETE_THOUGHT' :
      console.log(action.inputPostId);
      axios.delete('https://thunk-api-19.herokuapp.com/api/v1/post/' + action.inputPostId)
        .then( (res) => {
          window.location.href = "/home";
        } )
        .catch( (err) => {
          console.log(err);
        });
      return true;
    case 'CREATE_THOUGHT' :
      axios.post('https://thunk-api-19.herokuapp.com/api/v1/post/', {
        text: action.inputText,
        lattitude: lat,
        longitude: long
      }).then( (res) => {
        
        console.log("Post added");
        
        let p_id = res.data.id;

        let p_arr = action.inputTags.map( (t, i) => {

          return axios({
            method: 'post',
            url: 'https://thunk-api-19.herokuapp.com/api/v1/tag/post/' + res.data.id,
            data: { tag: t }
          });
  
        });

        axios.all(p_arr).then(axios.spread((...responses) => {
          
          responses.forEach(res => console.log('Success'))
          
          console.log('submitted all axios calls');
          window.location.href = "/thoughts/" + p_id;
        }))
        .catch(error => { console.log(error) });

        return;
      } ).catch( (err) => {
        console.log(err);
      });

      return true;
    case 'GET_THOUGHTS' :
      return action.thoughts_

    default :
      return state;
  }
}

export default thoughtsReducer;
// return [...state,{text:action.inputText, mark_owner: action.inputMarkOwner}]
//export function createThought(inputPostId, inputText, inputTags)
// inputPostId,
// inputText,
// inputUpVote,
// inputDownVote,
// inputReportCount,
// inputHashTags,
// inputTimeStamp,
// "id": 0,
// "text": "Snow! ⛄️🌨❄️ #lifewithsnickers",
// "up_vote": 10,
// "down_vote": 2,
// "report_count": 0,
// "hash_tag":["snow", "daily","more", "stuff"],
// "time_stamp" : "1 min ago", //i dont need this later