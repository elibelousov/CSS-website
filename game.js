const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
   text: "You wake up at 5:02 am on a warm Saturday morning to birds chirping outside the window. It's strange you think, you were just having the most amazing dream and now it's gone. The dream was of you playing a curious strategy game you recently bought called Victoria 3. You then think to yourself wow, it was so much funner in the dream than in real life. If only someone had put a little bit of effort into making a few changes it could turn into something magical.\n\nJust then, a burst of energy surrounds you and you suddenly get a compelling sensation, to modify the game and make it as fun as it was in your dream. Why can't you do it? You're smart, hard-working, creative, this can be good for you! No, no, no this will be good for you! And not just for you, for everyone once they play your masterpiece. As you imagine the possibilities, you realize you're still in bed and can't do anything from there.\n\nYou quietly slump out of bed, tip toe towards your home workstation and with your laptop at hand head to the kitchen for a quick snack before snuggling into your favourite chair. The glee from your smile is mesmerizing or at least it would be you think if there was anyone else around. What about if you look in the mirror, can one's own smile mesmerize one's own self? And if so, how would one get out of it?\n\nThese philosophical thoughts are too deep for a Saturday morning brain you think and it's better to get back to the task at hand which is... wait... You then freeze. Uh no... you forgot the idea for the mod you wanted to make. It's the whole reason you got up early. Frustration sets in and you start panicking. What a giant waste of time... you could've slept in today. Maybe it's best to just go back to bed. Then it hits you... The big idea! The reason you got up this morning! That which makes it all worth while! Your idea is...",
    options: [
      {
        text: 'To change one or two small aspects of it',
        setState: {easydifficulty: true},
        nextText: 12
      },
      {
        text: 'To revamp one country',
        setState: {mediumdifficulty: true},
        nextText: 13
      },
      {
        text: 'To revamp the whole game!',
        setState: {harddifficulty: true},
        nextText: 14
      }
    ]
  },
 {
    id: 12,
    text: "You decide to change the game's loading screens i.e the pictures that show up at the start of the game. It's easy, fun and can give someone with little experience in modding that much needed encouragment by showing them that anybody can make a change. Also, who can be content to seeing the same pictures over and over again. 'Boooring', you mutter to yourself quietly, while thinking about possible replacements. Hmm, what to choose what to choose. You know what you need? Some direction.\n\nHow about the theme of your new loading screens?",
    options: [
      {
        text: "Let's stick to what the game is about and find something historical.",
        setState: {historicalloadingscreens: true},
        nextText: 15
      },
      {
        text: "Let's make this mod personal.",
        setState: {personalloadingscreens: true},
        nextText: 15
      },
      {
        text: "My friend told me about this new AI art generator...",
        setState: {ahistoricalloadingscreens: true},
        nextText: 15
      }
    ]
  },
 {
    id: 13,
    text: "You decide to revamp one of the game's countries. This will involve a good amount of knowledge and dedication but it can definitely be done without too much headache. This is also something that you're confident people from the country you're revamping are sure to appreciate. Assuming of course you do a good job of it... Who are you kidding, you know you'll do a good job of it although it will take some time and can't be rushed.\n\nTo start off how about choosing which country you'd like to revamp?",
    options: [
      {
        text: "I want to revamp the Ottoman Empire as the states in the game do not match up with the way they were historically.",
        setState: {ottomanrevamp: true},
        nextText: 15
      },
      {
        text: "I want to revamp Ireland and made it the world power it was always meant to be!",
        setState: {irelandrevamp: true},
        nextText: 15
      },
      {
        text: "I want to revamp the Russian Empire and ensure that more of their minorities are shown.",
        setState: {russianrevamp: true},
        nextText: 15
      }
    ]
  },
 {
    id: 14,
    text: "You decide to totally change the game from its current form. At first you're not sure it's worth it as it'll take an extensive amount of hard work and dedication which you don't exactly have a lot to spare these days. You are also guaranteed to feel tired, frustrated, you might even cry. Who are we kidding, you WILL cry because that's what it takes to do this.\n\nOn the other hand, you don't care though because you are committed. Other modders have done this before so why not you? On top of that, if you pull this off, you'll be seen as someone who's incredibly talented which can go a long way for your confidence and career. Take that Mrs. Thompson from 3rd grade who said you wouldn't amount to anything! Still though... it's a monumental task so let's not get ahead of ourselves.\n\nYou take a quick moment to breathe and proceed to contemplate this enormous endeavour. First thing's first, you'll need a theme for your mod. How about...",
    options: [
      {
        text: "Setting it a hundred years into the future",
        setState: {historicalrevamp: true},
        nextText: 15
      },
      {
        text: "Creating an alternate reality",
        setState: {alternaterealityrevamp: true},
        nextText: 15
      },
    ]
  },
 {
    id: 15,
    text: "Okey dokie, now that you have the theme, you'll need to find a way to organize your work externally. This will not only make your process  easier to track but it'll also keep your work saved. Who knows how much frustration you're saving with this. Anywho, you'll need to find a tool to help you organize. You think for a moment and say 'how about Excel?' After all, you've used it many times so you know it's reliable and with it, you can keep everything offline. Excel it is!\n\nAs you open the Excel application on your Mac however, you notice that you cannot make any changes. Turns out you do not have a license and you refuse to spend money for a year's cloud subscription over this alone. You then start to think, is it even necessary to track your work externally. After all, it'll take far more time to export, organize and then import changes to a mod than if you were to limit changes to just the game files alone. Also, if you spend too much time on the tracking of the mod, you'll risk risk boredom as you won't see progress as quickly. What do you decide?",
    options: [
      {
        text: "There's no need to export my work. What's the worst that can happen?",
        setState: {notracking: true},
        requiredState: (currentState) => currentState.easydifficulty,
        nextText: 19
      },
      {
        text: "There's no need to export my work. What's the worst that can happen?",
        setState: {notracking: true},
        requiredState: (currentState) => currentState.mediumdifficulty,
        nextText: 17
      },
      {
        text: "There's no need to export my work. What's the worst that can happen?",
        setState: {notracking: true},
        requiredState: (currentState) => currentState.harddifficulty,
        nextText: 17
      },
      {
        text: "I'll export my work but to my local notepad. It'll keep things safe and it'll make exporting and importing faster although it'll of course be much less organized.",
        setState: {notes: true},
        requiredState: (currentState) => currentState.easydifficulty,
        nextText: 20
      },
      {
        text: "I'll export my work but to my local notepad. It'll keep things safe and it'll make exporting and importing faster although it'll of course be much less organized.",
        setState: {notes: true},
        requiredState: (currentState) => currentState.mediumdifficulty,
        nextText: 18
      },
      {
        text: "I'll export my work but to my local notepad. It'll keep things safe and it'll make exporting and importing faster although it'll of course be much less organized.",
        setState: {notes: true},
        requiredState: (currentState) => currentState.harddifficulty,
        nextText: 18
      },
      {
        text: "I'll use Google Sheets. It's the most time consuming but I know my work is guaranteed to be safe and I can better organize my process better to ensure that any changes are done without issues.",
        setState: {googlesheets: true},
        nextText: 16
      },
    ]
  },
  {
    id: 17,
    text: "Wow... okay, bear in mind that no one's likely ever created a mod of this sophistication without tracking their work externally. One wrong move and it means nighty night to all your hard work. That being said, surely it won't happen to you. How could it, right? You're better than all those modders that came before you. Come on, be confident. You're not going to mess this up... you won't mess this up... you won't mess this up...\n\n*Cue to 5 minutes later* How did you mess this up? You were too afraid to mess things up and that messed things up. Maybe that's irony.",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 18,
    text: "Notes will suffice, you say to yourself. This mod will of course involve dozens of different files which will take multiple notepads to track but you're smart and realize that in Mac notes, you can create folders to hold multiple notepads inside. Impressive!\n\nYou start by locating the needed files for the country's revamp and copypasting them into their respective notepads and folders depending on the category that you decide in the moment. The more files you encounter the more complicated the process becomes but you keep going as if you see light at the end of the tunnel. You've found the state history file, the state/regions file, the country's file, the diplomacy file... Whoa, there really are a lot of files here and keep in mind you haven't made any changes yet. No matter, it's a stepping process and you'll just work on them one at a time. Maybe start with the country file? That sounds like a good file name.\n\nWow, this file has so much information. Maybe just start by adding a country description? Wait... it's not done here? How do other modders find where to go? No matter let's see what's actually in this file. Hmm, what about changing capitol states, it seems easy enough. Ok done. But wait... the change is not appearing in the game? Ohh... ownership of the state needs to change too? And that's in a different folder within a folder? How do I find it anyways and how come some files are split for individual countries, some are split by regions and some aren't split at all? Who designed this mess? This is too overwhelming. Let's just watch youtube.",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 19,
    text: "Your logic appears sound. After all, what is the point of exporting all this stuff to Google Sheets, when it's not necessary given the low stakes involved? Enough playing around, let's get to work!",
    options: [
      {
        text: "Let's do this!",
        nextText: 21
      }
    ]
  },
  {
    id: 20,
    text: "Some safekeeping is better than no safekeeping I suppose. Good on you for taking some precautions. In any case, let's get to work!",
    options: [
      {
        text: "Let's do this!",
        nextText: 21
      }
    ]
  },
  {
    id: 16,
    text: "You've made the right choice. Having your work saved automatically, while also being able to organize it and automate it better should greatly improve effiency. Let's get to work!",
    options: [
      {
        text: "Let's do this!",
        nextText: 21
      }
    ]
  },
  {
    id: 21,
    text: "Congratulations on finishing part 1!\n\nThe rest is to be continued.",
    options: [
      {
        text: "Restart for now.",
        nextText: -1
      }
    ]
  },
]

startGame()