# Visual-Project-3
# Mini-Challenge 2: Citizen Science to the Rescue!
Your task, as supported by visual analytics that you apply, is to help St. Himark’s emergency management team combine data from the government-operated stationary monitors with data from citizen-operated mobile sensors to help them better understand conditions in the city and identify likely locations that will require further monitoring, cleanup, or even evacuation. Will data from citizen scientists clarify the situation or make it more uncertain? Use visual analytics to develop responses to the questions below. Novel visualizations of uncertainty are especially interesting for this mini-challenge. <br/> <br/>
Information about the challenge can be found in the link below. <br/>
https://vast-challenge.github.io/2019/MC2.html

# Data
By Mia Ward <br/>
We will be making a database in MongoDB and then reformatting the data in either Python or in Javascript. Since the data is presented in three csv files, we would like to combine all these files into a single database and then reformat as needed to make visualization easiest. We will be uploading pictures of how our data is presented once data processing has been completed. <br/>

# Initial Planning Process and Team Contribution
1. To help visualize measurements over time from static and mobile sensors of radiation we will be building two graphs of the area: <br/>

One such visualization shall be a labeled map of the area that show nodes where radiation is detected. This graphic will include Latitude and Longitude coordinates with black nodes being where radiation is detected from a sensor. When hovered over, the nodes shall show the exact coordinates and the user ID of the sensor. We have also included a helpful red node that shows local hospitals in the area and if that hosptial needs to evacuate given the amount of radiation has exceeded the average amount. This graphic will be done by **Roberto and Braden**. Below are snippets of the mockup they have created. <br/>
![Initial Mockup 1](https://user-images.githubusercontent.com/44125513/57083165-b69ef400-6cbd-11e9-9d66-9c4d7a57c656.png)
![Initial Mockup 2](https://user-images.githubusercontent.com/44125513/57083250-d8987680-6cbd-11e9-846e-7dd04eda0b39.png)
![Initial Mockup 3](https://user-images.githubusercontent.com/44125513/57083254-d9c9a380-6cbd-11e9-8795-8bb4542d1404.png)
<br/>

For a second visualization, we will be creating a graph with no labels that will show a heat map of where the radiation is most potent. This graphic shall include translucent circles of yellow and red indicating mild hazard and high hazard of radiation. When you hover over the affected area it will show the exact location and the ID of the sensor. This graphic will be done by **Mia and Arturo**. Below is a mockup of how we plan to tackle the graph. <br/>
![unlabeled](https://user-images.githubusercontent.com/44125513/57084097-4beeb800-6cbf-11e9-8e0f-8b4d53f00bf8.JPG)
<br/>

2. Create a graph that will demostrate uncertainty in the measurement of radiation across the city:
<br/>

For this we will be construction an algorithm that will determine the uncertainty of some sensors. This will be done by looking at the static and mobile sensors and seeing if there is a big enough difference in radiation levels at the same location and time. Given a set low and high range, we will be able to learn if a sensor is unrealiable at a given time and location. This will be done by **Roberto**. For our graph we will be making an overlapping map for the static and mobile sensors. We will use different color schemes to show difference between the static and mobile and will be able to toggle them on and off. We will also show with a blinking red dot if a sensor is registered as "uncertain" at a given location and time. **Roberto and Braden** shall be making the static graph and **Mia and Arturo** shall be making the mobile graph then we will add them together with a toggle.
<br/>

# Extra Graphs to Help with Visualization

We would also like to construct a line graph for each area to show the time intervals of radiation of each sensor and how the radiation detected changes over time.
