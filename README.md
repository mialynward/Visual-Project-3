# Visual-Project-3
# Mini-Challenge 2: Citizen Science to the Rescue!
Your task, as supported by visual analytics that you apply, is to help St. Himark’s emergency management team combine data from the government-operated stationary monitors with data from citizen-operated mobile sensors to help them better understand conditions in the city and identify likely locations that will require further monitoring, cleanup, or even evacuation. Will data from citizen scientists clarify the situation or make it more uncertain? Use visual analytics to develop responses to the questions below. Novel visualizations of uncertainty are especially interesting for this mini-challenge. <br/> <br/>
Information about the challenge can be found in the link below. <br/>
https://vast-challenge.github.io/2019/MC2.html

## Data
By Mia Ward <br/>
We Modified the data to make it easier to work with. For one of our maps where we would should the locations of the sensors we combined the static and mobiles sensors into one csv file. The data was organized by going through all the mobile sensor's and the readings they had every 20 minute intervals, as well as including location base on longitude and latitude and the name of the User for that sensor. Then the static sensors were listed providing the same information as the mobile sensors, while replacing User with just "Static." For the heat map, we had two separate csv files that would only show on of the days. Both provide the sensor ID or User, the time of the reading (separated by 20 minute intervals) and the value of the radiation. <br/>

## Initial Planning Process and Team Contribution

The team were divided into different tasks. **Braden and Roberto** worked on providing the visualization for the locations of the static and mobile sensors. They would also worked on a way to display uncertainty on sensors. **Mia and Arturo** worked on showing a heat graph to display a general view of the readings over time.

## Task Questions

1. To help visualize measurements over time from static and mobile sensors of radiation we will be building two graphs of the area: <br/>

One such visualization shall be a map that show nodes where radiation is detected. This graphic will include Latitude and Longitude coordinates with black nodes being where radiation is detected from a static sensor. Colored nodes will represent where radiation is dtected by a mobile sensor. When hovered over, the nodes shall change to pink and display the exact coordinates and the sensor or user ID. The bigger the node is, the higher the radiation reading is. There will also be red, square nodes that will represent a hospital. If one of the hospital nodes appears, it is an indication that that hospital needs to evacuate due to radiation levels exceeding dangerous levels. There will be a slider provided on the top left that will allow you to change the time of the readings. As you step through the time, you should noticed the mobile sensors moving. <br/>

![MapRadiation1](https://user-images.githubusercontent.com/45511267/57503792-5f011980-72b7-11e9-87f4-680f0d1e68aa.png)
Here it shows when you hover one of the nodes it displays the info at the top of the map.
<br/>

For a second visualization, we created two heat graphs: one that will display the reading of static sensors and another for the mobile sensors. The graphs will have the sensors on the y-axis and the date on the x-axis. Each block on the graph has a gradient of red where the darker the color is, the more radiation that specific sensor at that time is reading. When you hover over one of the blocks, it will display its info at the bottom where it'll tell you: the time, the sensor, and the radiation level.
<br/>
![MapStatic1](https://user-images.githubusercontent.com/45511267/57504197-2cf0b700-72b9-11e9-99df-5ed627b82bcc.png)
Static heat graph

![MapMobile1](https://user-images.githubusercontent.com/45511267/57504215-3ed25a00-72b9-11e9-90c4-fb7b2d10ec1e.png)
Mobile heat graph
<br/>

2. Create a graph that will demostrate uncertainty in the measurement of radiation across the city:
<br/>

In the map that shows the locations of the sensors and their readings, we added a selection at the bottom where instead of looking at the readings of the radiations levels, it shows the uncertainty of the sensors. The smaller the sizes of the node is, the less certain the data is. This was calculated by checking the highest and lowest readings of each node. If the difference between them is big, then it can be concluded that the readings are too vague to be certain.

![MapUncertainty2](https://user-images.githubusercontent.com/45511267/57504523-742b7780-72ba-11e9-94fa-c434e888722a.png)

It can be speculated that sensors close to the nuclear plant so drastic readings since most of those tended to be smaller than the nodes that are farther away from the plant.
<br/>

3. Is the data reliable enough to locate areas of concerns:
<br/>

It does not seem to be reliable enough. Some of the mobile sensors, when close to a static sensor or another mobile sensor, showed different radiation levels in their readings. Other sensors had readings that were drastically different than the readings during the times right before and after, showing that there could be a lot of outliers or false readings scewing the analysis.
<br/>

