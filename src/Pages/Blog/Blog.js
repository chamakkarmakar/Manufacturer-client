import React from 'react';

const Blog = () => {
    const quesAns = [
        {
            ques: "How will you improve the performance of a React Application?",
            ans: `There are several ways of improving the performance of Web Application. I have included some of them that can help to Optimize the performance of React Applications.
            
            1. Using the optimized images: We always need to optimize the images that we are going to use in our web application by compressing them. Due to compression, the image size will be reduced and as a result, it will not affect the performance.
            
            2. Hosting the server and client on a standard environment: The server and client end needs to be hosted on a good server. In that case, CPU of the server matters most as the Web Application will be up for all the day. Hosting the App on cloud could be a good solution.
            
            3. Props Filtering: Need to make sure that the components are only receiving necesary props. It will reduce the pressure from the CPU and performance will be increased a lot. 
            
            These are the some ways that can improve the performance of the React Application.`
        },
        {
            ques: "What are the different ways to manage a state in a React application?",
            ans: `When an application gets bigger, we need to manage the state of the application. ome ways of managing state of React Application is included below-

            1. Using React Hook: Hooks brought an state to functional component. Functional component can create and manage local states on their own. React hook can be used as primary state management tools. using the useContext API and useState hook, we can handle the global state management in react application.
            
            2. Redux: it is a react based state management library. Redux allows to manage application in a single place and keep al changes more detectable. When the local states begins to look messy, we should use the Redux state management library.
            
            3. React-Query: React query is a library that can solves several state management issues. state management like loading of the data, caching the data, showing or clearing errors etc can be handles nicely by the React-Query.`
        },
        {
            ques: "How does prototypical inheritance work?",
            ans: `Protoypical inheritance is ability to access the properties of and object from another object. It allows us to reuse the properties from a Javascript object to another through a reference pointer function. For example, mehgani is an object that inherits from wood.prototype. so on top of the chain, there will be tree.prototype. All the other objects are inherit from tree.prototype.`
        },
        {
            ques: "Why you do not set the state directly in React?",
            ans: `To ensure that a UI nrefresh occurs necesarily, we always need to update the state using the setState() method rather than by mutating the state directly. The component might not render properly if we set the state directly. Also, it will be tough t track down if any odd bugs produced due to it.`
        },
        {
            ques: "What is a unit test?Why should write unit tests?",
            ans: `Unit test is basically testing a small unit of code or function or a procedure.
            By doing Unit tests we get the clear understanding of how a function would work or how the interface will display etc. Unit test are automated tests writtent to ensure that a section of an application meets its design and behaves as intended.`
        }
    ]
    return (
        <div className='container mx-auto lg:w-1/2 w-full my-12'>
            {
                quesAns.map((qa, index) =>
                    <div key={index} tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            {qa.ques}
                        </div>
                        <div className="collapse-content">
                            <p style={{whiteSpace : 'pre-line'}}>{qa.ans}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Blog;