# TasksAvailable
#### NOTE: I have only tested this on Linux, as that is my operating system, but this should theoretically work cross-platform (though, Desktop only) as I used the Chrome API to build this. Let me know if it does, and I'll remove this message...
Chrome exstension for RaterHub that can send a notification to you when tasks are available, and also auto aquire the task. Currently, it will check for tasks every 30 seconds. This can be configured via editing the source code, and if requested, I can add a UI in the exstension to do so. 

### Steps to install:
1) Click the "Code" button at the top of this page, and then click "Download ZIP"
2) Extract the ZIP
3) Navigate to chrome://extensions in your Chrome browser
4) Click the little switch on the top right of the page that says "Developer mode"
5) Click "Load unpacked" button
6) Navigate to the folder that was created when the ZIP was extracted (should be called "TasksAvailable-main")
7) Select the folder (click whatever button cooresponds to choosing the folder in the file picker window)
8) A little message should appear saying that the exstention has been loaded, which means it was installed and can now be accessed like any other plugin.
#### Below is a video that details this:
https://github.com/user-attachments/assets/e491a1f5-5856-4e18-8fa2-7950e6eee2af
### Usage:
<img width="117" height="407" alt="image" src="https://github.com/user-attachments/assets/45f40bac-4070-43d7-b9ac-a8264ceb1877" />

* The first switch toggles notifications, which will play a "ding" noise and send a notification to your computer when a task is available to be acquired. Note that it will check for a task every 30 seconds, and does so by refreshing the page on this interval.
* The second switch toggles the auto-aquiring of tasks; it does this by simulating a click on the acquire task button (if multiple tasks are available, it chooses the first one) Note that the first switch needs to be toggled for this to work correctly. 

### P.S. This exstension opperates directly on your computer and does not interact with any external server. Overall, all it does is injects some javascript into the RaterHub page that gets an identifier for the "Acquire" button, and simulates a click. The exstension uses the following permissions: tabs, notifications, and storage. 
* The tab permission is needed to simulate a page refresh every 30 seconds, hence checking for new tasks, and for the RaterHub link embeded.
* The notifications permission is necessary as the exstension sends a notification to your operating system each time there is a new task.
* Finally, the storage permission is needed to save the current switch position for each option to your computer, basically so the slider values do not get reset each time Chrome is restarted.

Source code is available here for audit. I do not provide any guarantees or warranty on this software, but if you submit a bug request I'll look into it if I have time :)

