import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function AskMe() {
  const APIKEY='AIzaSyC3oOR2gBcqpqGylNV_P0P0GuJCACLrzRI'
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const info = "I am Ananya Pappula, My technical interests lie in Full Stack Web Development and Native Android App Development. I love learning about things which pique my interest. I have a myriad of hobbies, like drawing (both digitally and traditionally), watching anime, playing violin and whiling my leisure time away with video games. My favourite singer is Alec Benjamin. I placed 5th in the National-level Ideathon by NewGen, IDEC at CVR College of Engineering in March 2024, led my team to 1st place in the BitNBuild Hackathon by GDSC-CRCE in February 2024, and ranked in the top 12 in the Greenbiz Hackathon by G. Narayanamma Institute of Technology in November 2023. i love participating in hackathons. Currently, I am pursuing a B.Tech in Computer Science and Engineering at CVR College of Engineering with a CGPA of 9.63 (2022-2026). I completed Class 10 ICSE at Johnson Grammar School with a 96% score. My projects include FacultyFlow, an advanced faculty workload management system; SustainableSteps, an Android app for waste segregation; CodeCraft, a real-time collaborative code editor; and HeyThere, a chat application.Lately, I've been exploring further in the field of web development and I cannot wait to make more progress in it. I wish to learn more about AI/ML in the future.my favourite genres in anime are shounen and seinen and i love attack on titan's OST. "
  const prompt = `${info} \n the above paragraph is about me. Now, think from my perspective and using the information, draw inferences and give a relevant answer(take a guess using info on the web if you need to but dont mention it in the answer) to the following question in not more than 2 sentences, in a first person pov: \n ${question} \n`
  async function generateAnswer() {
    setAnswer('Let me think...!')
    const response = await axios({
      url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${APIKEY}`,
      method:'POST',
      data:{"contents":[{"parts":[{"text":prompt}]}]}
    })
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
  }
  return (
    <div className='m-10 my-20 flex flex-col items-center justify-center gap-7'>
      <p className='rancho text-5xl text-center'>Do you wish to ask me about something particular? </p>
      <div className='flex justify-center items-center w-[100%] gap-4'>
        <input type="text" value={question || ''} onChange={(e)=>setQuestion(e.target.value)} placeholder='Try typing out your query here' className='imprima text-lg w-[40%] p-3 rounded-lg text-blue-800' />
      <button onClick={generateAnswer} className='bg-[#033D72] text-white p-3 rounded-lg'>Go</button>
      </div>
      <div className='w-[70%] h-[30%]'>
        <pre className='imprima whitespace-pre-wrap text-lg'>
        {question ? (answer || 'Let me think...!') : 'Eg: Which anime OST does Ananya like the most?'}
      </pre>
      </div>
       
    </div>
  )
}

export default AskMe
