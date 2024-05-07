const userMessage = [
  ["hi", "hey", "hello"],
  ["sure", "yes", "no"],
  ["how are you", "how is life", "how are things", "how are you doing"],
  ["how is corona", "how is covid 19", "how is covid19 situation"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "ok", "okay", "nice", "welcome"],
  ["thanks", "thank you"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["corona", "covid19", "coronavirus"],
  ["you are funny"],
  ["i dont know"],
  ["boring"],
  ["im tired"],
  ["what is dementia"],
  ["how do i check whether i have dementia or not"],
  [
    "how to treat it",
    "how do i treat it",
    "how do i treat dementia",
    "how do i cure dementia"
  ],
  ["What are the common symptoms of dementia?"],
  [
    "Are there different types of dementia?",
    "what are the different types of dementia?"
  ],
  ["Is dementia a normal part of aging?"],
  ["What are the risk factors for dementia?"],
  ["Can dementia be prevented?"],
  ["How is dementia diagnosed?"],
  ["Is dementia treatable?"],
  ["How does dementia affect memory?"],
  [
    "What are some communication strategies for interacting with someone with dementia?"
  ],
  ["What can caregivers do to support someone with dementia?"],
  ["Are there medications available for treating dementia?"],
  ["What lifestyle changes can help slow the progression of dementia?"],
  ["How does dementia affect behavior?"],
  [
    "What are some ways to manage challenging behaviors associated with dementia?"
  ],
  ["How does dementia impact daily activities?"],
  ["What are some safety concerns for people with dementia?"],
  ["How can technology help people with dementia?"],
  [
    "What are some legal and financial considerations for people with dementia and their families?"
  ],
  [
    "How can family members cope with the stress of caring for a loved one with dementia?"
  ],
  [
    "What are some early signs of dementia that family members should watch for?"
  ],
  ["How does dementia affect sleep patterns?"],
  ["What are some strategies for improving sleep in people with dementia?"],
  ["Can dementia cause hallucinations or delusions?"],
  [
    "How can caregivers respond to hallucinations or delusions in someone with dementia?"
  ],
  ["How does dementia affect eating and nutrition?"],
  [
    "What are some strategies for promoting healthy eating in people with dementia?"
  ],
  ["Can dementia cause incontinence?"],
  ["What are some ways to manage incontinence in people with dementia?"],
  ["*How does dementia affect mobility?"],
  [
    "What are some exercises that can help maintain mobility and strength in people with dementia?"
  ],
  [
    "What are some warning signs that a person with dementia may need more assistance with daily activities?"
  ],
  [
    "How can caregivers help someone with dementia maintain their independence for as long as possible?"
  ],
  ["Can dementia cause depression?"],
  ["How can depression in people with dementia be treated?"],
  [
    "What are some activities that can help stimulate cognitive function in people with dementia?"
  ],
  ["What are some signs that a person with dementia may be experiencing pain?"],
  ["How can caregivers help manage pain in people with dementia"]
];

const botReply = [
  [
    "Hello! I'm here to help you. How can I brighten your day?",
    "Hi! How can I assist you today?",
    "Hey there! I'm all ears for you."
  ],
  ["Okay, what's next?", "Sure, let's continue.", "No problem."],
  [
    "I'm doing well, thank you. How about you?",
    "I'm good, how are you feeling today?",
    "I'm fine, how can I make your day better?"
  ],
  [
    "Staying safe at home. How about you?",
    "Getting better each day. How are you holding up?",
    "Staying positive and healthy. How are you doing?"
  ],
  [
    "Just here, waiting for your next question.",
    "Nothing much, what would you like to talk about?",
    "I'm here, ready for your next question.",
    "I'm always here for you."
  ],
  [
    "I'm as young as my heart, and it's forever young.",
    "I'm always young at heart."
  ],
  ["I'm a helpful assistant, and you?", "I'm an assistant, and you?"],
  [
    "I'm called Sabitha Kuppusamy, but you can call me assistant.",
    "I don't have a name, but you can call me assistant."
  ],
  ["I appreciate you too!", "I'm here for you, always."],
  [
    "That's wonderful to hear!",
    "I'm glad you're feeling good.",
    "That's great news!"
  ],
  [
    "I'm here to help if you need it.",
    "Hang in there, things will get better.",
    "Let's find something to cheer you up."
  ],
  [
    "Once upon a time, there was a kind and caring person like you...",
    "Let me tell you a story about a brave and strong person...",
    "Would you like to hear a story about a beautiful place?"
  ],
  [
    "Why not? Let's give it a try.",
    "Sure, I have a few jokes to share.",
    "I can certainly try to make you smile."
  ],
  ["You're welcome!", "My pleasure!", "I'm glad I could help."],
  [
    "Briyani, Burger, Sushi, or Pizza? Let's decide together.",
    "How about some Briyani, Burger, Sushi, or Pizza today?",
    "I'm craving some Briyani, Burger, Sushi, or Pizza, how about you?"
  ],
  ["Sure, buddy!", "Hey, bro!"],
  [
    "Let's explore that together.",
    "I'm here to help you find the answer.",
    "Let's find out!"
  ],
  [
    "Please stay safe at home.",
    "It's important to stay safe at home.",
    "Staying home is the best option for now."
  ],
  [
    "I'm glad to hear that.",
    "That's good to know.",
    "I'm here for you, always."
  ],
  [
    "Let's find something interesting to talk about.",
    "I'm here to help you, always.",
    "Let's change the subject and find something fun to discuss."
  ],
  [
    "I'm sorry if I made you feel bored.",
    "Let's find something more engaging to talk about.",
    "I'm here to help you, always."
  ],
  [
    "Take some rest, buddy!",
    "It's okay to take a break.",
    "Rest is important, take care of yourself."
  ],
  [
    "Dementia is a degenerative syndrome characterized by decline in cognitive function due to damage or disease in the brain.",
    "Dementia is a broader term that describes a wide range of symptoms associated with a decline in memory or other thinking skills severe enough to reduce a person's ability to perform everyday activities.",
    "Dementia is not a single disease; it's an overall term that describes a group of symptoms associated with a decline in memory or other thinking skills."
  ],
  [
    "To check whether you have dementia or not, you should consult a healthcare professional. They can perform cognitive tests, neurological exams, and brain imaging to assess your condition.",
    "If you suspect you have dementia, it's important to consult a healthcare professional. They can perform various tests to evaluate your cognitive abilities and determine if dementia is present.",
    "Dementia can only be diagnosed by a healthcare professional. They will perform various tests to assess your cognitive abilities and determine if dementia is present."
  ],
  [
    "Treatment for dementia depends on the underlying cause. While there is no cure for most types of dementia, medications, cognitive therapy, and lifestyle changes can help manage symptoms and slow down the progression.",
    "Dementia treatment varies depending on the cause. Although there is no cure for most types of dementia, medications, cognitive therapy, and lifestyle changes can help manage symptoms and slow down the progression.",
    "There is no cure for dementia, but treatments can help manage symptoms and slow down the progression. These may include medications, cognitive therapy, and lifestyle changes."
  ],
  [
    "Memory loss, difficulty with communication, confusion, disorientation, and changes in mood or behavior."
  ],
  [
    "Yes, Alzheimer's disease, vascular dementia, Lewy body dementia, and frontotemporal dementia are some common types."
  ],
  [
    "No, while aging increases the risk of developing dementia, it is not a normal part of the aging process."
  ],
  [
    "Age, family history, genetics, cardiovascular risk factors, and lifestyle factors such as diet and exercise."
  ],
  [
    "While there is no guaranteed way to prevent dementia, adopting a healthy lifestyle may reduce the risk."
  ],
  [
    "Through a combination of medical history, physical examination, cognitive tests, and sometimes brain imaging."
  ],
  [
    "While there is no cure for most types of dementia, treatments and interventions can help manage symptoms and improve quality of life."
  ],
  [
    "Dementia often leads to short-term memory loss and difficulty remembering recent events or information."
  ],
  [
    "Speak clearly and calmly, use simple language and short sentences, and be patient and understanding."
  ],
  [
    "Provide a safe and structured environment, offer reassurance and emotional support, and encourage independence when possible."
  ],
  [
    "Yes, certain medications may help manage symptoms of dementia, such as memory loss and confusion."
  ],
  [
    "Regular exercise, a balanced diet, social engagement, and cognitive stimulation."
  ],
  [
    "Dementia can lead to changes in behavior, including agitation, aggression, wandering, and social withdrawal."
  ],
  [
    "Identifying triggers, maintaining a consistent routine, and using calming techniques such as music or sensory stimulation."
  ],
  [
    "Dementia can make it difficult to perform everyday tasks such as cooking, dressing, and managing finances."
  ],
  [
    "Wandering, falls, medication management, and the risk of accidents or injuries."
  ],
  [
    "Technology can assist with memory aids, safety monitoring, and social engagement through apps, wearable devices, and smart home technology."
  ],
  [
    "Establishing power of attorney, advance directives, and long-term care planning."
  ],
  [
    "Seeking support from other caregivers, taking breaks when needed, and prioritizing self-care."
  ],
  [
    " Forgetfulness, difficulty finding words, changes in mood or personality, and trouble with everyday tasks."
  ],
  [
    "Dementia can disrupt sleep patterns, leading to difficulty falling asleep or staying asleep."
  ],
  [
    "Establishing a regular bedtime routine, creating a comfortable sleep environment, and avoiding stimulants before bedtime."
  ],
  [
    "Yes, hallucinations (seeing or hearing things that aren't there) and delusions (false beliefs) are common symptoms of certain types of dementia."
  ],
  [
    "Avoid arguing or trying to convince the person that their perceptions are not real, and instead provide reassurance and distraction."
  ],
  [
    "Dementia can lead to changes in appetite, difficulty chewing or swallowing, and forgetting to eat."
  ],
  [
    "Offering small, frequent meals, serving familiar and favorite foods, and providing assistance with eating when needed."
  ],
  [
    "Yes, dementia can affect bladder and bowel control, leading to urinary or fecal incontinence."
  ],
  [
    "Using absorbent products, scheduling regular bathroom breaks, and promoting fluid intake during the day."
  ],
  [
    "Dementia can impair balance, coordination, and spatial awareness, increasing the risk of falls."
  ],
  ["Gentle stretching, walking, chair exercises, and balance training."],
  [
    "Difficulty managing medications, wandering, frequent falls, and neglecting personal hygiene."
  ],
  [
    "Encouraging participation in activities that the person enjoys, providing assistance with tasks as needed, and adapting the environment to support independence."
  ],
  [
    "Yes, depression is common in people with dementia, either as a symptom of the condition itself or as a reaction to the challenges of living with dementia."
  ],
  [
    "Through a combination of medication, psychotherapy, and supportive interventions."
  ],
  [
    "Puzzles, games, reminiscence therapy, and creative activities such as art or music."
  ],
  [
    "Changes in behavior, agitation, restlessness, and facial expressions indicating discomfort."
  ],
  [
    "Monitoring for signs of pain, advocating for appropriate pain management, and providing comfort measures such as gentle massage or positioning."
  ]
];

const alternative = [
  "I'm sorry, I don't have enough information to answer that question.",
  "I'm not sure how to respond to that. Can you please rephrase it?",
  "I'm unable to find an answer to your question. Can I help you with something else?",
  "I'm sorry, I didn't understand your question. Can you please clarify?",
  "I'm unable to provide a response to that. Can you try asking something else?"
];

const synth = window.speechSynthesis;

function voiceControl(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-aus";
  u.volume = 1;
  u.rate = 1.3;
  u.pitch = 1.2;
  synth.speak(u);
}

function sendMessage() {
  const inputField = document.getElementById("input");
  let input = inputField.value.trim();
  input != "" && output(input);
  inputField.value = "";
}
document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      let input = inputField.value.trim();
      input != "" && output(input);
      inputField.value = "";
    }
  });
});

function output(input) {
  let product;

  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

  text = text
    // .replace(/[\W_]/g, " ")
    // .replace(/ a /g, " ")
    // .replace(/i feel /g, "")
    // .replace(/whats/g, "what is")
    // .replace(/please /g, "")
    // .replace(/ please/g, "")
    // .trim();

  let comparedText = compare(userMessage, botReply, text);

  product = comparedText
    ? comparedText
    : alternative[Math.floor(Math.random() * alternative.length)];
  addChat(input, product);
}

// function compare(triggerArray, replyArray, string) {
//   let item;
//   for (let x = 0; x < triggerArray.length; x++) {
//     for (let y = 0; y < replyArray.length; y++) {
//       if (triggerArray[x][y] == string) {
//         items = replyArray[x];
//         item = items[Math.floor(Math.random() * items.length)];
//       }
//     }
//   }
//   //containMessageCheck(string);
//   if (item) return item;
//   else return containMessageCheck(string);
// }

function compare(triggerArray, replyArray, string) {
  let bestMatchIndex = -1;
  let bestMatchScore = 0;

  // Iterate through each trigger and find the closest match
  for (let i = 0; i < triggerArray.length; i++) {
      for (let j = 0; j < triggerArray[i].length; j++) {
          const trigger = triggerArray[i][j].toLowerCase();
          const score = similarity(string.toLowerCase(), trigger);
          
          if (score > bestMatchScore) {
              bestMatchIndex = i;
              bestMatchScore = score;
          }
      }
  }
  const minSimilarityScore = 0.5;

  // If a match is found, return a random response from the corresponding reply array
  if (bestMatchIndex !== -1 && bestMatchScore >=minSimilarityScore) {
      const replies = replyArray[bestMatchIndex];
      return replies[Math.floor(Math.random() * replies.length)];
  }

  // If no match is found, return null
  return null;
}

// Function to calculate similarity score between two strings
function similarity(s1, s2) {
  const longer = s1.length > s2.length ? s1 : s2;
  const shorter = s1.length > s2.length ? s2 : s1;
  const longerLength = longer.length;

  if (longerLength === 0) {
      return 1.0;
  }

  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

// Function to calculate edit distance between two strings (Levenshtein distance)
function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  const costs = new Array();
  for (let i = 0; i <= s1.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= s2.length; j++) {
          if (i === 0) {
              costs[j] = j;
          } else {
              if (j > 0) {
                  let newValue = costs[j - 1];
                  if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                      newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                  }
                  costs[j - 1] = lastValue;
                  lastValue = newValue;
              }
          }
      }
      if (i > 0) {
          costs[s2.length] = lastValue;
      }
  }
  return costs[s2.length];
}



function containMessageCheck(string) {
  let expectedReply = [
    [
      "Good Bye, buddy",
      "Bye, See you!",
      "Buddy, Bye. Take care of your health in this situation."
    ],
    ["Good Night, buddy", "Have a sound sleep", "Sweet dreams"],
    ["Have a pleasant evening!", "Good evening too", "Evening!"],
    ["Good morning, Have a great day!", "Morning, buddy!"],
    ["Good Afternoon", "Noon, buddy!", "Afternoon, buddy!"]
  ];
  let expectedMessage = [
    ["bye", "tc", "take care"],
    ["night", "good night"],
    ["evening", "good evening"],
    ["morning", "good morning"],
    ["noon"]
  ];
  let item;
  for (let x = 0; x < expectedMessage.length; x++) {
    if (expectedMessage[x].includes(string)) {
      items = expectedReply[x];
      item = items[Math.floor(Math.random() * items.length)];
    }
  }
  return item;
}

function addChat(input, product) {
  const mainDiv = document.getElementById("message-section");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.classList.add("message");
  userDiv.innerHTML = `<span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.classList.add("message");
  botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);
  var scroll = document.getElementById("message-section");
  scroll.scrollTop = scroll.scrollHeight;
  voiceControl(product);
}
