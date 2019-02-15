Prerequisites: must have Node.js installed.

PLEASE READ
-----------

I know Foxbot isn't very versatile or in-depth at the moment, but that's
because I am the only person on the development team and I'm making him
available way earlier than I probably should. He is not complete at all,
but he is up-to-date and still very much in active development. If you
have any questions, please join the following server:
https://discord.gg/hHHVf7k

How to run:

	STEP 1
		Windows: Navigate to the bot folder on your computer. Towards the top of the windows explorer window, you will see a bar that says, for example, "Desktop > bot". Click the bar (but not the text) and it should show the full path highlighted. Press ctrl + c.
		Mac: Navigate to just outside the bot folder on your computer. Right click the folder (or control + click or two-finger click). Hold the "option" key and select "copy 'bot' as Pathname."

	STEP 2
		Windows: Press win + R and type cmd. Press enter. In the console window that appears, type "cd " and press ctrl + v. It should look something like:
			'C:\users\rek>cd C:\users\rek\desktop\bot'
			Press enter.
		Mac: Open the terminal. It should be in applications > utilities. Type "cd " and press command + v. It should look something like:
			'mynamewastaken-3:~ Rek$ cd /Users/Rek/Desktop/bot'
			Press enter.

	STEP 3
		Now type in the following commands:
			npm i discord.js
			npm i fs
			npm i winston
			npm i archiver
			npm i zip-a-folder
			npm i replace-in-file
			npm i rimraf
		Press enter after each one. Note that you will get warnings from the console after each one. Please ignore these. Don't close the console/terminal window, as you will use it again in a bit.

	STEP 4
		In the bot folder, open package.json. Change the field that says "compiledlogs" to the name of the channel you would like Foxbot to deposit its archives in. Change the field that says "?" to whichever prefix you want him to listen for. Change the field that says "Moderator" to the name of the role you want to give control to. NOTE THAT ONLY ONE ROLE CAN CONTROL FOXBOT, AND EVEN THE ADMIN DOES NOT HAVE CONTROL WITHOUT THE ROLE. This will be changed later in the development process.
		You must also put the bot token in auth.json.

	STEP 5 
		Go back to the console/terminal window. Enter the command "node bot.js" and press enter. Every time you run Foxbot, you MUST remember to input "cd [bot folder filepath]". For Windows I recommend using autohotkey to speed the process up, which you can download from https://www.autohotkey.com/ 
                Double-clicking bot.js WILL NOT WORK to run the bot.

    COMMANDS:
        bsod - purposely crashes Foxbot.
        archive - zips all log files and sends them to the designated channel. Note that these log files ONLY CONTAIN CONTENT SENT WHILE FOXBOT IS RUNNING. As he is not nearly completed yet, he only saves messages that are sent. He does not save edits or deletions. However, he DOES save images even after they are deleted. 
        No command is necessary to record messages. He does that automatically.
    OTHER INFO:
        I recommend you install Notepad++ for viewing the archived logs. It lets you double click on the attachment URLs to open them.
        
        More testing will be done in the future, but as of now I know that these proxy URLs work for .jpg, .png, .gif, .mp3, and most likely any type of file that Discord has a preview for, but not for less common file formats like .mdp, .mtl, .obj, or for some reason any kind of text file. If you wish to view these filetypes you will have to change the link from media.discordapp.net to cdn.discordapp.com.
