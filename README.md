# Project Overview

## Project Name

Know Your Pill

## Project Description

This app will let you identify a medication that you have found and you want to make sure what it is. This can be beneficial to those who are taking more than 2 medications a day or people who work in the pharmacy and wants to know if it is a controlled substance or not.

## API and Data Sample

<https://rxnav.nlm.nih.gov/RxImageAPIs.html#>

Sample JSON:
```json
{
replyStatus: {
success: true,
date: "2020-08-16 18:58:34 GMT",
imageCount: 1,
totalImageCount: 1,
matchedTerms: {
imprint: "93,7477"
}
},
nlmRxImages: [
{
ndc11: "00093-7477-01",
part: 1,
rxcui: 200060,
splSetId: "b414303f-e6f3-4e22-a537-96be352b59a4",
splRootId: "5ea613d9-5b83-4781-8a26-fa598002e4d2",
splVersion: 16,
acqDate: "12-11-2012",
name: "mycophenolate mofetil 500 MG Oral Tablet",
labeler: "Teva Pharmaceuticals USA Inc",
attribution: "National Library of Medicine | Lister Hill National Center for Biomedical Communications",
id: 168877794,
imageUrl: "https://rxpillimage.nlm.nih.gov/RxImage/image/images/gallery/original/00093-7477-01_NLMIMAGE10_9B294DCA.jpg",
imageSize: 468895
}
]
}
```

## Wireframes

<https://wireframe.cc/fde5uD>

### MVP/PostMVP

#### MVP 

- Find an API that suits for this web application
- Construct an HTML to show the application and where the user will input the medication's imprint
- Apply JavaScript to give results based on user's information
- Add style to the application
- Apply responsive design to the application

#### PostMVP  

- Add more parameters for the user (color, shape)
- Add a second API to show brand vs generic names of the medication
- Add a pill organizer/calendar on the web application
- Add a section where they can put the information of the pharmacy they go to

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 17| Project Approval, Construct HTML | Complete
|August 18| Pseudocode HTML/JavaScript/Test Web App/Debug | Complete
|August 19| Debug/CSS/Flexbvox | Complete
|August 20| Responsive Design/Post MVP (if applicable) | Complete
|August 21| Finishing touches/Presentation | Incomplete

## Priority Matrix

<https://app.lucidchart.com/documents/view/5edf5bbc-5020-4e7e-9d0c-92936f4a9ece/0_0>

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Find and Test API | H | 3hrs | 3hrs | 3hrs |
| Construct HTML | H | 3hrs | 3hrs | 3hrs |
| Adding Form | H | 3hrs| 2hrs | 2hrs |
| Pseudocode JavaScript | H | 3hrs | 4hrs | 4hrs |
| Working with API | H | 3hrs | 4hrs | 4hrs |
| Working with the DOM | H | 3hrs| 3hrs | 3hrs |
| Test and debug Web App | N | 3hrs| 2hrs | 2hrs |
| Style Web App | N | 3hrs| 2hrs | 2hrs |
| Apply Flexbox | H | 3hrs | 4hrs | 4hrs |
| Apply Responsive Design | H | 3hrs| 3hrs | 3hrs |
| Rerun Web App with CSS and debug | H | 3hrs | 3hrs | 3hrs |
| Total | H | 33hrs| 33hrs | 33hrs |

## Code Snippet

```javascript
let url;
  if (imprint !== '' && imprint2 !== '') {
    url = `https://rximage.nlm.nih.gov/api/rximage/1/rxbase?parse=${imprint},${imprint2}`
  } else {
    url = `https://rximage.nlm.nih.gov/api/rximage/1/rxbase?parse=${imprint}`
  }
 ```

## Change Log

- Changed layout of web application. Current layout utilizes the space of the website compared to the initial one.
- Added Post-MVP. Adding more parameters will make the website more user friendly.
