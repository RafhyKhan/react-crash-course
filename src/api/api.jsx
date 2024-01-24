import { useState } from "react";


function dataArrayReturn () {

    let blankData = 
        {
        "posts":[
            {
                "page":"Page 1",
                "pageDetails":"Basic Information\n",
                "page1question1":"",
                "page1question2":"",
                "page1question3":"",
                "id":"1"
            },
            {
                "page":"Page 2",
                "pageDetails":"Data Entry 1\n",
                "page2question1":"",
                "page2question2":"",
                "page2question3":"",
                "id":"2"
            },
            {
                "page":"Page 3",
                "pageDetails":"Data Entry 2\n",
                "page3question 1":"",
                "page3question 2":"",
                "page3question 3":"",
                "id":"3"
            },
            {
                "page":"Page 4",
                "pageDetails":"Data Entry 3\n",
                "page4question 1":"",
                "page4question 2":"",
                "page4question 3":"",
                "id":"4"
            },
            {
                "page":"Page 5",
                "pageDetails":"Data Entry 4\n",
                "page5question 1":"",
                "page5question 2":"",
                "page5question 3":"",
                "id":"5"
            },
            {
                "page":"Page 6",
                "pageDetails":"Data Entry 5\n",
                "page6question 1":"",
                "page6question 2":"",
                "page6question 3":"",
                "id":"6"
            },
            {
                "page":"Page 7",
                "pageDetails":"Data Entry 6\n",
                "page7question 1":"",
                "page7question 2":"",
                "page7question 3":"",
                "id":"7"
            },
            {
                "page":"Page 8",
                "pageDetails":"Data Entry 7\n",
                "page8question 1":"",
                "page8question 2":"",
                "page8question 3":"",
                "id":"8"
            },            {
                "page":"Page 9",
                "pageDetails":"Final Data\n",
                "page9question 1":"",
                "page9question 2":"",
                "page9question 3":"",
                "id":"9"
            }
    ]}

    return blankData;
}



export default function useApiCall() {

    let data = dataArrayReturn();

    return data;
}


export function updateDatabase(pageNum, pageAnswersArray) {


    //const [data, updateData] = useState(dataArrayReturn());



    //Make a state, current state is data array of objects
    //Update state function changes a selected "page" of values of the data object.

    //go to page number in data array, than rewrite all the property values
    //with new ones in given array

    let data = dataArrayReturn();

    //pageAnswersArray.push("")


    //Get page questions for specific page
    let posts = data.posts;
    let post = posts[pageNum]; 

    console.log(pageAnswersArray.page1question1);

    console.log(post);
    console.log(data.posts[pageNum].page);


    for (const [property, propertyValue] of Object.entries(post)) { 
        for (const [propertyAns, propertyAnsValue] of Object.entries(pageAnswersArray)) { 
            if (property == propertyAns) {
                console.log(property + " == " + propertyAns)
                data.posts[pageNum].property == propertyAnsValue;
            }
        }
    }

    
    console.log("IT WORKED!!!!");
    console.log(data);

    getAllQuotes();

}




async function getAllQuotes() {


    const FIREBASE_DOMAIN = 'https://react-http-57c1f-default-rtdb.firebaseio.com';

    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch quotes.');
    }
  
    const transformedQuotes = [];
  
    for (const key in data) {
      const quoteObj = {
        id: key,
        ...data[key],
      };
  
      transformedQuotes.push(quoteObj);
    }
  
    console.log(transformedQuotes);

  }