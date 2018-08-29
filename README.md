# VOD
 a simple Media App VOD (Video On-Demand) application


# Install Instructions
 1. npm install -g bower grunt-cli karma-cli
 2. npm start
 Server started at http://localhost:8080

# Testing
 npm test

 
# Features
1. Load from API and display a list of videos in a scrollable horizontal carousel
on the home page. Each tile must display a movie title and an associated
cover image (look it up in the response).
2. User should be able to select a video and play it back in full screen. When
playback is finished or user quits it, user must be taken back to home page.
3. Display second “Previously watched” carousel on the home page. It must be
updated and re-sorted according to the most recently watched video.
4. The user should be able to use a mouse and keyboard (arrows/Enter keys)
to select the video.
5. Layout size adjustment. The application must be able to adjust layout
proportionally based on the desktop browser width.
6. Responsive design. Change carousel to Portrait view grid if application is
run on mobile device
7. Content list refresh button. Each click reloads content from API
8. Unit tests

# hosting

AWS: http://www.aisolutions.nz/vod/#!/video/list

# Github
https://github.com/cdua003/vod.git
