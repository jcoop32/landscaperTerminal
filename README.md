# Terminal Game

### This lab is a DELIVERABLE. 

- Make sure to submit link to your homework repo.  

Create any kind of game you want.  Use the `prompt()` function to get user input.  If you can't think of an idea, use Castle Battle or Landscaper

You are going to use a combination of [Google](https://google.com), [Stack Overflow](https://stackoverflow.com/), and [chatGPT](https://chat.openai.com) to build your app.  In addition, you're going to practice working with git.

This app is more about getting used to the process of building an app, than building the app itself.  Build your app in small chunks, with each feature being a new chunk.  For example, "get the user's name" could be a feature.  As part of the process of building each feature, use some mixture of Google, Stack Overflow, or chatGPT to help you write the code.  Think critically about the code you get from your source(s) and whether it's exactly what you want.  Don't blindly copy/paste the code.  Rather, copy it, paste it, and make at least one change to it.  After each feature of the app is complete, document the process you used to build it.  Put the code you initially received from Google/Stack Overflow/chatGPT in a README file (explained below), followed the final code with your alterations.  Describe the pros and cons of the code you received, followed by your reasons for altering it the way you did.  Finally, once you've finished your feature and your documentation of it, use git to stage/commit/push the changes you made.  Check that your changes made it the remote GitHub repo.  Repeat this process of research, alteration, documentation, and committing/pushing for each feature that you build.

**GETTING STARTED**

1. Get homework link and accept the assignment(refresh the browser). Click on `code` and copy `ssh` key. 
2. Open your terminal `cd` into homework directory and run `git clone <ssh key>`
3. `cd` into cloned directory and run npm i in it. This will install the prompt-sync package which will allow you to run the prompt() function. Example:

  ```javascript
  const username = prompt('What is your name? ');
  console.log(`Your name is ${username}`);
  ```
4. Run `touch README.md` to create a README file.  This is where you're going to document your process using [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) which is like HTML, but more concise.  Just follow the formatting rules, and when you push the file to the remote github repo, it will be available there will look very nice.

**EXAMPLE:**  As an example, take a look at [Party Dots](https://github.com/IntuitiveHarmony/party-dots#-the-prompts-begin).  In particular, the section titled The Prompts Begin is useful for seeing how the developer documented the prompts and their results.  Yours should be similar, but with the code added as well for reference.
