import { axios } from 'axios';

let url = 'http://api.dailysportboss.com/lobby/contests';

console.log(url);

class ContestAPI {

  static getContest() {
    console.log('test')
    return (
      <div>Response</div>
    )
  }


  // static getContest() {
  //   return (
  //     // axios({
  //     //   method:'get',
  //     //   url:'http://api.dailysportboss.com/lobby/contests/',
  //     // })
  //     //   .then(function(response) {
  //     //     console.log(response);
  //     // })

  //     fetch(url)
  //     .then((response) => {
  //         if (!response.ok) {
  //             throw Error(response.statusText);
  //         }

  //         dispatch(contestsIsLoading(false));

  //         return response;
  //     })
  //     .then((response) => response.json())
  //     .then((contests) => {
  //       console.log(contests);
  //     })


  //   );
  // }
  
}

 
 export default ContestAPI;
 