import React from 'react';

const Blog = () => {
    const quesAns = [
        { ques: "Question-1", ans: "Answer-1" },
        { ques: "Question-2", ans: "Answer-2" },
        { ques: "Question-3", ans: "Answer-3" },
        { ques: "Question-4", ans: "Answer-4" },
        { ques: "Question-5", ans: "Answer-5" }
    ]
    return (
        <div className='container mx-auto lg:w-1/2 w-full my-12'>
            {
                quesAns.map((qa,index) =>
                    <div key={index} tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            {qa.ques}
                        </div>
                        <div className="collapse-content">
                            <p>{qa.ans}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Blog;