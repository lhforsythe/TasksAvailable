# TasksAvailable
#### NOTE: I have only tested this on Linux, as that is my operating system, but this should theoretically work cross-platform as I used the Chrome API to build this. Let me know if it does, and I'll remove this message...
Chrome exstension for RaterHub that can send a notification to you when tasks are available, and also auto aquire the task. Currently, it will check for tasks every 30 seconds. This can be configured via editing the source code, and if requested, I can add a UI in the exstension to do so. 

P.S. This exstension opperates directly on your computer and does not interact with any external server. Overall, all it does is injects some javascript into the RaterHub page that gets an identifier for the "Acquire" button, and simulates a click. The exstension uses the following permissions: tabs, notifications, and storage. 
* The tab permission is needed to simulate a page refresh every 30 seconds, hence checking for new tasks, and for the RaterHub link embeded.
* The notifications permission is necessary as the exstension sends a notification to your operating system each time there is a new task.
* Finally, the storage permission is needed to save the current switch position for each option to your computer, basically so the slider values do not get reset each time Chrome is restarted.

Source code is available here for audit. I do not provide any guarantees or warranty on this software, but if you submit a bug request I'll look into it if I have time :)

