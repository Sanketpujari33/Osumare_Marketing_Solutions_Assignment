import React, { useState } from 'react';
import styled from 'styled-components';

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  max-height: 1719px;
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: 50px;
  padding: 0 20px 0 30px;
`;
const TextContainer = styled.div`
  text-align: center;
`;
const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #555;
`;
const FaqHeader = styled.h2`
 font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const FaqItem = styled.div`

`;

const FaqQuestion = styled.div`
display: flex;
  justify-content: space-between;
font-size: 18px; 
  font-weight: 500;
  padding: 30px;
  margin-bottom: 2px;
background: #FFFFFF;
box-shadow: 0px 10px 15px rgba(0, 120, 255, 0.35);
border-radius: 0px;
&.active {
    background-color: #0078FF;
    color: white;
  }
`
const FaqAnswer = styled.div`
  display: none;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-top: 10px;
  transition: all 0.3s ease-in-out;

  &.active {
    display: block;
  }
`;

const FaqIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
  &.open {
    transform: rotate(180deg);
    background-color: white;
    border-radius: 35px;
  }

`;

const Faq = () => {
    const [questions, setQuestions] = useState([
        {
            question: 'How does Osumare measure campaign success?',
            answer:
                'We believe in measurable results. Our data-driven approach means that every campaign\'s performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.',
            isOpen: false,
        },
        {
            question: 'How does Osumare measure campaign success?',
            answer:
                'We believe in measurable results. Our data-driven approach means that every campaign\'s performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.',
            isOpen: false,
        },
        {
            question: 'How does Osumare measure campaign success?',
            answer:
                'We believe in measurable results. Our data-driven approach means that every campaign\'s performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.',
            isOpen: false,
        },
    ]);

    const toggleAnswer = (index) => {
        setQuestions(
            questions.map((q, i) => {
                if (i === index) {
                    return { ...q, isOpen: !q.isOpen };
                }
                return q;
            })
        );
    };

    return (
        <FaqContainer>
            <TextContainer>
                <FaqHeader>Frequently Asked Questions</FaqHeader>
                <Paragraph>Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand.</Paragraph>
            </TextContainer>
            {questions.map((question, index) => (
                <span key={index}>
                    <FaqItem key={index} onClick={() => toggleAnswer(index)}>
                        <FaqQuestion className={question.isOpen ? 'active' : ''}>{question.question}
                            <FaqIcon className={question.isOpen ? 'open' : ''}>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 8L8 15L15 8"
                                        stroke="#000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </FaqIcon>
                        </FaqQuestion>
                    </FaqItem>
                    <FaqAnswer key={index} className={question.isOpen ? 'active' : ''}>
                        {question.answer}
                    </FaqAnswer>
                </span>
            ))}
        </FaqContainer>
    );
};

export default Faq;